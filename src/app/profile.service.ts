import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient} from '@angular/common/http';
import { Profile } from './profile';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  // Array of profiles
  profiles: Profile[] = [];

  // URL to API
  httpUrl: string = 'https://reqres.in/api/users';
  

  // Constructor
  constructor(private http: HttpClient) { 
    // this.profiles = this.getProfiles();
  }

  // First call to get all data
  initialCall(): Observable<Profile[]> {
    return this.http.get<any>(this.httpUrl).pipe(
      map( result => result.data as Profile[] )
    );
  }

  // Function to return loaded profiles array
  getProfiles(): Profile[] {
    return this.profiles;
  }
  
}
