import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { OnInit } from "@angular/core";

import { ProfileService } from '../profile.service';
import { Profile } from '../profile';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  visible: boolean = true;
  profiles: Profile[] = []; // store array of profiles

  constructor(private profileService: ProfileService){}

  ngOnInit(): void {
    this.profiles = this.profileService.getProfiles();
  }

  toggleHeart(): void {
    this.visible = !this.visible;
  }
}
