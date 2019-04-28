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
  httpUrl = 'https://picsum.photos/v2/list?page=1&limit=6';

  constructor(private http: HttpClient) { }

  // GetImages from API
  getImages(): Observable<Image[]> {
    return this.http.get<Image[]>(this.httpUrl).pipe(
      catchError((err) => {
        console.error(err);
        return of([]);
      }),
      map( res => res as Image[])
    );
  }

  addImage(newImage: Image) {
    this.images.push(newImage);
  }
}
