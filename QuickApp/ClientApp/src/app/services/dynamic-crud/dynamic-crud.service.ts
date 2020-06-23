import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { environment } from '../../../environments/environment';
import { TableMap } from './table-map';
import { DataCreate } from './create.service';
import { DataDelete } from './delete.service';
import { DataRead } from './read.service';
import { DataUpdate } from './update.service';
import { ConfigurationService } from '../configuration.service';

@Injectable({
    providedIn: 'root'
})
export class DynamicCrudService {
    //TODO dbl check this
    endpoint: string = this.configurations.baseUrl;

    // Define header options to be applied to all requests
 

    // Determine whether or not to be optimstic with our Http calls in terms of updating the front end. True means update the front end right away despite what the server does.
    isOptimistic = true;

    // A simple object that is used a cache for any data that has been loaded into the system
    cache: any = {};
    // A map of TableName => Subject for external components to subscribe to, in order to be notified of updates to that table's data
    subjectMap: SubjectMap = {};
    // A map of TableName => Boolean to components to use for displaying a loading icon when that table's data is being loaded or modified
    loadingMap: LoadingMap = {};

    constructor(
        private DC: DataCreate,
        private DR: DataRead,
        private DU: DataUpdate,
        private DD: DataDelete,
        private configurations: ConfigurationService
    ) {
        this.DC.setDataService(this);
        this.DR.setDataService(this);
        this.DU.setDataService(this);
        this.DD.setDataService(this);

        this.setupLocalProps();
    }

    private setupLocalProps() {
        Object.keys(TableMap).forEach(tableName => {
            this.loadingMap[TableMap[tableName]] = false;
            this.cache[TableMap[tableName]] = [];
            this.subjectMap[TableMap[tableName]] = {
                many: new Subject<any[]>(),
                one: new Subject<any>()
            };
        });
    }

    /**
     * PUBLIC API
     */

    // CREATE
    //The create class ’s job is to generate a new record in the database for a particular model type.
    //While not required, it takes in an “objToCreate” if desired in order to prefill the database with values from the front end.
    //The main goal here is to have the database generate a new UUID / PrimaryKey value for our front end to use
    //in order to “bind” the front end object to the data base record.
    //The cacheAndNotifyCreated method differs from the others in that it simply pushes a new object into the DataService cache
    //using Object.assign. It then notifies the front end subjects with the new state of the cache as well as with what object was just created.
    create<T>(model: T | any, objToCreate?: T | any) {
        this.DC.create(model, objToCreate);
    }

  createObs<T>(model: T | any, objToCreate?: T | any): Observable<T | T[]> {
        return this.DC.createObs(model, objToCreate);
    }

    createPromise<T>(model: T | any, objToCreate: T | any): Promise<T | any> {
        return this.DC.createPromise(model, objToCreate);
    }

    // READ
    //Reading is an interesting case as we have the additional property of specifying a query against the data.
    //If we don’t provide a query, then we are just looking to return all available data.
    //Because of the need to specify a query, there is an additional method provided to “createSearchParams.”
    //This allows several ways for defining search parameters either using a
    //simple string: query = 'id=123&name=joe' OR an object definition: query = { id: '123', name: 'joe' };
    // OR using Angular’s HTTPParams class:
    //let queryParams = new HTTPParams();
    //queryParams = queryParams.set('id', '123);
    //queryParams = queryParams.set('name', 'joe');
    //Combined with the model’s tableName, this will appropriately create a REST query against the end point.
    //The cacheAndNotifyRead method here will clear out the entire cache, as we have just read new data.
    //It will then only notify the front end via the.many subject if required.
    //read<T>(model: T | any, query?: string) {
    //    this.DR.read(model, query);
    //}

    readObs<T>(model: T | any, query?: string): Observable<T[]> {
        return this.DR.readObs(model, query);
    }

    // UPDATE
    //Update is fairly straight forward as we have seen the pattern in the previous two sub classes now.
    //However, the cacheAndNotifyUpdated is a little bit different.First, we find the local object to update by searching in our Cache.
    //If we have that, we use Object.assign to update the cache with the passed in new object.
    //We then notify the front end with the new cache as well as which object was updated.
    update<T>(model: T | any, objToUpdate: T | any) {
        this.DU.update(model, objToUpdate);
    }

    updateObs<T>(model: T | any, objToUpdate: T | any): Observable<T[]> {
        return this.DU.updateObs(model, objToUpdate);
    }

    updatePromise<T>(model: T | any, objToUpdate: T | any): Promise<T | any> {
        return this.DU.updatePromise(model, objToUpdate);
    }

    // DELETE
    //Delete should be straightforward now if you’ve been following along.The cacheAndNotifyDelete method is straightforward
    //as we use the built in .filter method to remove the object from the local cache and then notify the front end via the subjects appropriately.
    delete<T>(model: T | any, objToDelete: T | any, stopNotify?: boolean) {
        this.DD.delete(model, objToDelete, stopNotify);
    }

    deleteObs<T>(model: T | any, objToDelete: T | any): Observable<T[]> {
        return this.DD.deleteObs(model, objToDelete);
    }

    deletePromise<T>(model: T | any, objToDelete: T | any): Promise<T | any> {
        return this.DD.deletePromise(model, objToDelete);
    }
}

/**
 * A mapping of every environment defined DB table to a subject so that CRUD applications can send notifications to all subject subscribers
 * Components can subscribe to the "many" subject to receive an array of new objects, or to the "one" subject to get a single object
 * TODO: Investigate and Spread this into an individual CRUD subject for each table
 */
interface SubjectMap {
    [tableName: string]: {
        many: Subject<any[]>;
        one: Subject<any>;
    };
}

/**
 * A mapping of every DB table to a load boolean so that external components can wait for a table's data to be loaded
 */
interface LoadingMap {
    [tableName: string]: boolean;
}

/**
 * A simple cache which is an object whose properties is a table name with an array of that table's data loaded into the front end
 */
interface Cache {
    [tableName: string]: any[];
}

/**
 * An interface for what we expect to be used for dynamic Table CRUD
 */
interface TableCRUD {
    cache: Cache;
    subjectMap: SubjectMap;
    loadingMap: LoadingMap;
}
