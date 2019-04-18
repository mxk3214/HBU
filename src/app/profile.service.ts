import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Profile } from './profile';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  // Array of profiles
  profiles: Profile[] = [];

  // URL to API
  httpUrl: string = 'https://reqres.in/api/users';
  

  constructor(private http: HttpClient) {}


  getProfiles(): Observable<Profile[]> {
    return this.http.get<any>(this.httpUrl).pipe(
      catchError((err) => {
        console.error(err);
        return of({data: []});
      }),
      map( res => res.data as Profile[] )
    );
  }

    // this.profiles.push( mapped profiles )
        // map(res => res.data as new Profile = {
      //   id: res.data.id,
      //   first_name: res.data.firstName,
      //   last_name: res.data.lastName,
      //   avatar: res.data.avatar
      // });

}
