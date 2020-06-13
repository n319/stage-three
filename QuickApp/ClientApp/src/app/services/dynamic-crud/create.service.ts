import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { DynamicCrudService } from './dynamic-crud.service';
import { handleHttpError } from './utilities';
import { EndpointBase } from '../endpoint-base.service';
import { AuthService } from '../auth.service';

@Injectable()
export class DataCreate extends EndpointBase{
    private DS: DynamicCrudService

    constructor(
        protected http: HttpClient, authService: AuthService
    ) {
    super(http, authService)}

    setDataService(ds: DynamicCrudService) {
        this.DS = ds;
    }

    /**
     * Create a new object in the database using a front end defined object; will need to wait for the post resolution to get the DB generated UUID assigned to the front end key
     * @param model The interface / class to construct the query against and build response objects from
     * @param objToCreate The front end object to be created
     */
    create<T>(model: T | any, objToCreate?: T | any) {
        this.DS.loadingMap[model.constructor.tableName] = true;

        const newModelObj = new model(objToCreate);

        const url = `${this.DS.endpoint}${model.constructor.tableName}`;
        this.http.post(url, newModelObj, { headers: this.requestHeaders })
            .subscribe(
                (res: any) => {
                    newModelObj.key = res.key || res.ObjectId || res.id || '';
                    this.cacheAndNotifyCreated(model, newModelObj);
                    this.DS.loadingMap[model.constructor.tableName] = false;
                },
                err => {
                    handleHttpError(err);
                    this.DS.loadingMap[model.constructor.tableName] = false;
                }
            );
    }

    createObs<T>(model: T | any, objToCreate?: T | any): Observable<T | T[]> {
        const newModelObj = new model(objToCreate);

        const url = `${this.DS.endpoint}${model.constructor.tableName}`;
        return this.http.post(url, newModelObj, { headers: this.requestHeaders })
            .pipe(
                catchError(handleHttpError),
                tap((res: T[] | any) => {
                    newModelObj.key = res.key || res.ObjectId || res.id || '';
                    this.cacheAndNotifyCreated(model, newModelObj);
                })
            );
    }

    async createPromise<T>(model: T | any, objToCreate: T | any): Promise<T | any> {
        const newModelObj = new model(objToCreate);

        const url = `${this.DS.endpoint}${model.constructor.tableName}`;
        try {
            const res = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(objToCreate),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const resJson = await res.json();
            newModelObj.key = resJson.key || resJson.ObjectId || resJson.id || '';
            this.cacheAndNotifyCreated(model, newModelObj);
            return resJson;
        }
        catch (err) {
            handleHttpError(err);
        }
    }

    private cacheAndNotifyCreated<T>(model: T | any, newModelObj) {
        // Append the new object into the front end cache
        this.DS.cache[model.constructor.tableName].push(Object.assign({}, newModelObj));

        this.DS.subjectMap[model.constructor.tableName].many.next(this.DS.cache[model.constructor.tableName]);
        this.DS.subjectMap[model.constructor.tableName].one.next(newModelObj);
    }

    // TODO: 
    // CREATEBULK

}
