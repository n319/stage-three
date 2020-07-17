import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { DynamicCrudService } from './dynamic-crud.service';
import { handleHttpError } from './utilities';
import { ApiEndpoint } from './api-endpoint.service';

@Injectable()
export class DataRead{
    private DS: DynamicCrudService;

    constructor(
        private apiClient: ApiEndpoint
    ) { }

    setDataService(ds: DynamicCrudService) {
        this.DS = ds;
    }

    /**
     * Using a model interface's table definition, do a HTTP get
     * @param model The interface / class to construct the query against and build response objects from
     * @param query A limiting query to apply to the get. Expects an object of type URLSearchParams to append to the read, or a simple string
     */
    //read<T>(model: T | any, query?: string) {
    //    this.DS.loadingMap[model.constructor.tableName] = true;

    //    const url = `${this.DS.endpoint}${model.constructor.tableName}`;
    //    this.http.get<any[]>(url, httpOpts)
    //        .subscribe(
    //            res => {
    //                this.cacheAndNotifyRead(model, res);
    //                this.DS.loadingMap[model.constructor.tableName] = false;
    //            },
    //            err => {
    //                handleHttpError(err);
    //                this.DS.loadingMap[model.constructor.tableName] = false;
    //            }
    //        );
    //}

  readObs<T>(model: T | any, query?: string): Observable<T[]> {
        this.DS.loadingMap[model.constructor.tableName] = true;
        var url = `${this.DS.endpoint}/api/${model.constructor.tableName}`;

        //if (query != null) {
        //  url += query;
        //}
      
        
        
        return this.apiClient.getAPIEndpoint<T[]>(url, query).pipe(
            catchError(handleHttpError),
            tap((res: T[]) => {
                this.cacheAndNotifyRead(model, res);
            })
        );
    }

    //not used
    //async readPromise<T>(model: T | any, query?: string): Promise<T | any> {
    //    this.DS.loadingMap[model.constructor.tableName] = true;

    //    const url = `${this.DS.endpoint}${model.constructor.tableName}`;
    //    // TODO: Attach Headers to Fetch
    //    try {
    //        const res = await fetch(url);
    //        const resJson = await res.json();
    //        this.cacheAndNotifyRead(model, resJson);
    //        return resJson;
    //    }
    //    catch (err) {
    //        handleHttpError(err);
    //    }
    //}

    

    private cacheAndNotifyRead<T>(model: T | any, res: T[]) {
        this.DS.cache[model.tableName] = [];
        res.forEach((el: T) => {
          this.DS.cache[model.constructor.tableName].push(new model.constructor(el));
        });
        // Update Frontend
      this.DS.subjectMap[model.constructor.tableName].many.next(this.DS.cache[model.constructor.tableName]);
    }

}
