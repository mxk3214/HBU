import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  visible: boolean = true;

  toggleHeart(): void {
    this.visible = !this.visible;
  }
}
