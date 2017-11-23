import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the HomeProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class HomeProvider {

  constructor(public http: Http) {
    console.log('Hello HomeProvider Provider');
    }

    getDataForClinicsById(param: string) {
      return new Promise(resolve => {
          // We're using Angular HTTP provider to request the data,
          // then on the response, it'll map the JSON data to a parsed JS object.
          // Next, we process the data and resolve the promise with the new data.
          this.http.get('https://gsva6pcov8.execute-api.us-east-1.amazonaws.com/dev/api/v0/getclinics/' + param)
              .map(res => res.json())
              .subscribe(data => {
                  // we've got back the raw data, now generate the core schedule data
                  // and save the data for later reference
                  
                  resolve(data);
              });
      });

  }

      getDataForAllClinics() {
      return new Promise(resolve => {
          // We're using Angular HTTP provider to request the data,
          // then on the response, it'll map the JSON data to a parsed JS object.
          // Next, we process the data and resolve the promise with the new data.
          this.http.get('https://gsva6pcov8.execute-api.us-east-1.amazonaws.com/dev/api/v0/getclinics')
              .map(res => res.json())
              .subscribe(data => {
                  // we've got back the raw data, now generate the core schedule data
                  // and save the data for later reference
                  
                  resolve(data);
              });
      });

  }

}
