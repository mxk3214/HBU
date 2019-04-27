import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Profile } from '../profile';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.page.html',
  styleUrls: ['./friends-list.page.scss'],
})
export class FriendsListPage implements OnInit {
  profiles: Profile[] = [];


  constructor(private profileService: ProfileService, private alertController: AlertController) { }

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
    // console.log("HERE");
    // const alert = await this.alertController.create({
    //   header: "Remove friend?",
    //   buttons: [
    //     {
    //       text: 'Cancel',
    //       role: 'cancel',
    //       handler: () => {
    //         console.log("Confirm Cancel");
    //       }
    //     },
    //     {
    //       text: 'Remove',
    //       role: 'remove',
    //       handler: () => {
    //         console.log("IN remove");
    //         this.profiles.splice(this.profiles.indexOf(item), 1);
    //       }
    //     },
    //   ]
    // });
    // alert.present();

    // console.log("DONE");
    this.profiles.splice(this.profiles.indexOf(item), 1);
  }
}
