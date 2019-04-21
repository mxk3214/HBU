import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

import { Image } from './image';
import { createOfflineCompileUrlResolver } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  images: Image[] = [];

 // httpUrl: string = "https://api.giphy.com/v1/gifs/search?api_key=vpT2skP1Oe92cFBdwvtpULt59DHzqasJ&q=nature&limit=3&offset=0&rating=G&lang=en";

  httpUrl: string = "https://picsum.photos/v2/list?page=1&limit=3";

  constructor(private http : HttpClient) {}


  getImages() {
    // this.http.get<any>(this.httpUrl).subscribe((response) => {
    //     this.images.push(response.data);
    //     console.log(response.data[0].images.original_still.url);
    // });
    // return this.images;
    
    // data array of images array of each object
    // results.data.images;

    return this.http.get<any>(this.httpUrl).pipe(
      catchError((err) => {
        console.error(err);
        return of({data: []});
      }),
      map( res => res as Image[] ) // not going to work as not full of images
    );
  }  
}
