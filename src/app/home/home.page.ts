import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { OnInit } from '@angular/core';

import { ImageService } from '../image.service';
import { Image } from '../image';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  visible: Boolean = true;

  images: Image[] = [];

  imageStore: Observable<Image[]>;

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.getAllImages();
  }

  getAllImages() {
    this.imageStore = this.imageService.getImages();
  }

  // Might remove...
  toggleHeart() {
    this.visible = !this.visible;
  }
}
