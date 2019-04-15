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
  // profiles: any[] = [];

  // URL to API
  httpUrl: string = 'https://reqres.in/api/users';
  

  // Constructor
  constructor(private http: HttpClient) { 
    // this.profiles = this.initialCall();
    // this.initialCall();

    // NEED TO LOAD 
  }

  // First call to get all data
  // initialCall(): void {
  //   this.http.get<any>(this.httpUrl).subscribe((response) => {
  //     console.log(response.data);
  //   });
  // }
  

  getProfiles(): Observable<Profile[]> {
    return this.http.get<any>(this.httpUrl).pipe(
      catchError((err) => {
        console.error(err);
        return of({data: []});
      }),
      map( res => res.data as Profile[])
    );
  }



  // Function to return loaded profiles array
  // getProfiles(): Profile[] {
  //   console.log(this.profiles);
  //   return this.profiles;
  // }
  
}
