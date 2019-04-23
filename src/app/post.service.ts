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
    this.getProfile();
    this.getAllImages();

    console.log(this.posts.length);

    
    // Doesn't make it inside here as having issues with loading profile array
    for(var i = 0; i < this.profiles.length; i++){
      console.log("In post service for loop");
        this.post = new Post(this.profiles[i], this.images[i]);
        this.posts.push(this.post);
    }  
      
    return this.posts;
  }
  
  
  getProfile() {
    const obs: Observable<Profile[]> = this.profileService.getProfiles();
    obs.subscribe(
      (prof: Profile[]) => this.profiles = prof
    );
  }

  getAllImages() {
    const obs: Observable<Image[]> = this.imageService.getImages();
    obs.subscribe(
      (imgs: Image[]) => this.images = imgs
    );
  }
}
