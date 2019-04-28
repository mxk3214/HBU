import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { OnInit } from "@angular/core";

import { ImageService } from '../image.service';
import { Image } from '../image';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  visible: boolean = true;

  images: Image[] = [];
  
  imageStore: Observable<Image>[] = [];
  

  constructor(private imageService: ImageService){}

  ngOnInit() {
    this.getAllImages();
  } 

  async getAllImages() {
    // Initial way that worked with only an observable of images
    // const obs: Observable<Image[]>  = await this.imageService.getImages();
    // obs.subscribe(
    //   (imgs: Image[]) => this.images = imgs
    // );

    // Attempted new way
    // NOW an Observable array of images
    const obs: Observable<Image>[]  = await this.imageService.getImages(); 
    // Won't work bc need to subscribe the the array of observables to get the images
    obs.subscribe( 
        (imgs: Observable<Image>[]) => this.imageStore = imgs
    );
  }

  
  // Might remove...
  toggleHeart(){
    this.visible = !this.visible;
  }
}
