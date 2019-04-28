import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

import { Image } from './image';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  images: Image[] = []; 
  
  // URL to API
  httpUrl: string = "https://picsum.photos/v2/list?page=1&limit=6";

  constructor(private http : HttpClient) {}

  // GetImages from API
  getImages() {
    return this.http.get<any>(this.httpUrl).pipe(
      catchError((err) => {
        console.error(err);
        return of({data: []});
      }),

      //map( res => res as Image[])  //OLD Way

      // NEW way of observable array of images
      map( res => res as Observable<Image>[])
    )
  }  

  addImage(newImage: Image){
    this.images.push(newImage);
  }
}
