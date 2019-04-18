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

  httpUrl: string = "https://api.giphy.com/v1/gifs/search?api_key=vpT2skP1Oe92cFBdwvtpULt59DHzqasJ&q=animals&limit=3&offset=0&rating=G&lang=en";


  constructor(private http : HttpClient) {}


  getImages() {
    this.http.get<any>(this.httpUrl).subscribe((response) => {
        this.images.push(response.data);
        //console.log(response.data[0].images.original_still)
    });
    return this.images;
    
    // data array of images array of each object
    // results.data.images;
 }  
}
