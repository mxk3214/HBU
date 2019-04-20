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

  profiles: Profile[] = [];
  images: Image[] = [];

  
  constructor(private profileService: ProfileService, private imageService: ImageService){}

  ngOnInit() {
    this.getProfile();
    this.getAllImages();
  }



  getProfile() {
    const obs: Observable<Profile[]> = this.profileService.getProfiles();
    obs.subscribe(
      (prof: Profile[]) => this.profiles = prof
    );
  }



  getAllImages() {
    //this.images = this.imageService.getImages();
    // const obs: Observable<Image[]>  = this.imageService.getImages();
    // obs.subscribe(
    //   (imgs: Image[]) => this.images = imgs
    // );
    // console.log(this.images);

    //this.images = this.imageService.getImages();
    //console.log(this.images);
  }



  // Might remove...
  toggleHeart(): void {
    this.visible = !this.visible;
  }
}
