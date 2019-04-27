import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { OnInit } from "@angular/core";

import { ProfileService } from '../profile.service';
import { Profile } from '../profile';

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
  

  constructor(private imageService: ImageService){}

  ngOnInit() {
    this.getAllImages();
  } 

  async getAllImages() {
    const obs: Observable<Image[]>  = await this.imageService.getImages();
    obs.subscribe(
      (imgs: Image[]) => this.images = imgs
    );
  }


  // async getProfile() {
  //   const obs: Observable<Profile[]> = await this.profileService.getProfiles();
  //   obs.subscribe(
  //     (prof: Profile[]) => this.profiles = prof
  //   );
  // }

  
  // Might remove...
  toggleHeart(){
    this.visible = !this.visible;
  }
}
