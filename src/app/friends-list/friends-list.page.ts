import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Profile } from '../profile';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.page.html',
  styleUrls: ['./friends-list.page.scss'],
})
export class FriendsListPage implements OnInit {
  profiles: Profile[] = [];


  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.getProfiles();
  }

  getProfiles(){
    const obs: Observable<Profile[]> = this.profileService.getProfiles();
    obs.subscribe(
      (prof: Profile[]) => this.profiles = prof
    );
  }

  remove(item){
    var index = this.profiles.indexOf(item);
    this.profiles.splice(index);
  }

}
