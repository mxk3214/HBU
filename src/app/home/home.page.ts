import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { OnInit } from "@angular/core";

import { ProfileService } from '../profile.service';
import { Profile } from '../profile';

import { ImageService } from '../image.service';
import { Image } from '../image';

import {PostService} from '../post.service';
import { Post } from '../post';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  visible: boolean = true;

  profiles: Profile[] = [];
  images: Image[] = [];

  posts: Post[] = [];

  // private profileService: ProfileService, private imageService: ImageService
  // private postService: PostService
  //constructor(private profileService: ProfileService, private imageService: ImageService){}
  constructor(private postService: PostService){}

  ngOnInit() {
    // this.getProfile();
    // this.getAllImages();
    // this.posts = this.postService.getPosts();

    //this.getPosts();
    this.posts = this.postService.getPosts();
  }

  // async getProfile() {
  //   const obs: Observable<Profile[]> = await this.profileService.getProfiles();
  //   obs.subscribe(
  //     (prof: Profile[]) => this.profiles = prof
  //   );
  //   console.log(this.profiles);
  // }



  // async getAllImages() {
  //   const obs: Observable<Image[]>  = await this.imageService.getImages();
  //   obs.subscribe(
  //     (imgs: Image[]) => this.images = imgs
  //   );
  // }



  // Might remove...
  toggleHeart(): void {
    this.visible = !this.visible;
  }
}
