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


  constructor(private profileService: ProfileService, private imageService: ImageService) {
    this.getProfile();   // get profiles
    this.getAllImages(); // get images
  }


  // Gets profile array and images array
  // Will combine into one post object array to iterate over for the template
  getPosts(){
    // this.getProfile();   // get profiles
    // this.getAllImages(); // get images

    // Array length check: 
    console.log("POSTS ARR Length: " + this.posts.length); // 0
    console.log("Profile ARR Length: " + this.profiles.length); // 0

    
    // Want to make one object array out of the two arrays
    // Profile OBJ has both an profile object and a image object

    // Won't work!
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
