import { Component } from '@angular/core';
import { Observable } from 'rxjs';
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

  ngOnInit() {
    // this.profiles = this.profileService.getProfiles();
    this.getProfile();
  }

  getProfile() {
    const obs: Observable<Profile[]> = this.profileService.getProfiles();
    obs.subscribe(
      (prof: Profile[]) => this.profiles = prof
    );
    // obs.subscribe((response) => {
    //   console.log(response);
    // });
  }

  toggleHeart(): void {
    this.visible = !this.visible;
  }
}
