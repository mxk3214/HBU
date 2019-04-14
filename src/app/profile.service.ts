import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient} from '@angular/common/http';
import { Profile } from './profile';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  // Array of profiles
  // profiles: Profile[] = [];
  profiles: any[] = [];


  // URL to API
  httpUrl: string = 'https://reqres.in/api/users';
  

  // Constructor
  constructor(private http: HttpClient) { 
    // this.profiles = this.initialCall();
    this.initialCall();
  }

  // First call to get all data
  initialCall(): Observable<Profile[]> {
    // return this.http.get<any>(this.httpUrl).pipe(
    //   map( result => result.data as Profile[] )
    // );
    this.http.get(this.httpUrl).subscribe((response) => {
      console.log(response);
    });


    return this.http.get<any>(this.httpUrl);
  }

  // Function to return loaded profiles array
  getProfiles(): Profile[] {
    return this.profiles;
  }
  
}
