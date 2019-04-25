import { Injectable } from '@angular/core';
import { Image } from './image';
import { ImageService } from './image.service';
import { Profile } from './profile';
import { ProfileService } from './profile.service';
import { Observable } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  profiles: Profile[] = [];
  images: Image[] = [];
  
  posts: Post[] = [];
  post: Post;


  constructor(private profileService: ProfileService, private imageService: ImageService) { }

  getPosts(){
    this.getProfile(); // get profiles
    this.getAllImages(); // get images


    // Array length check: 
    console.log(this.posts.length); // 0

    
    // Doesn't get here bc of timing!
    for(var i = 0; i < this.profiles.length; i++){
        this.post = new Post(this.profiles[i], this.images[i]);
        this.posts.push(this.post);
    }  
      
    return this.posts; // becomes undefined
  }

  
  // Gets profile using the profile service
  getProfile() {
    const obs: Observable<Profile[]> = this.profileService.getProfiles();
    obs.subscribe(
      (prof: Profile[]) => this.profiles = prof
    );
  }

  // Gets images using the image service
  getAllImages() {
    const obs: Observable<Image[]> = this.imageService.getImages();
    obs.subscribe(
      (imgs: Image[]) => this.images = imgs
    );
  }
}
