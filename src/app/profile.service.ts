import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Profile } from './profile';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  // Array of profiles
  profiles: Profile[] = [];
  httpUrl: string = 'https://reqres.in/api/users';
  
  // Constructor
  constructor(private http: HttpClient) { }


  // Get Profiles Method
  getProfiles(): Observable<any>{
    return this.http.get<any>(this.httpUrl).pipe(
        map(results => {
            console.log(results);
        })
        // map( result => result.data as Profile[] )
    );
  }
}
