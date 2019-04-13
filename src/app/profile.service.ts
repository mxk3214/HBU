import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
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
  constructor(private http: HttpClient) { 
    this.profiles = this.http.get(this.httpUrl);
  }

  // Get Profiles Method
  getProfiles(): Observable<Profile[]>{
    return this.http.get<any>(this.httpUrl).pipe(
        catchError((err) => {
          console.error(err);
          return of({data: []});
        }), 
        map( res => res.data as Profile[])
    );
  }
}
