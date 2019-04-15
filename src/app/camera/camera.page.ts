import { Component, OnInit } from '@angular/core';
// import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {

  // constructor(private camera: Camera) { }
  constructor(){}

  ngOnInit() {
    document.addEventListener("deviceready", this.onDeviceReady, false);
  }

  onDeviceReady(){
    console.log("Navigator is ready");
  }

  // options: CameraOptions = {
  //   quality: 100,
  //   destinationType: this.camera.DestinationType.FILE_URI,
  //   encodingType: this.camera.EncodingType.JPEG,
  //   mediaType: this.camera.MediayType.PICTURE
  // }

  // Use camera plugin to take photo
  takePhoto(){
    navigator.camera.getPicture(this.photoSuccess, this.photoFail, {
      quality: 100,
      destinationType: Camera.DestinationType.DATA_URL,
      targetWidth: 300,
      targetHeight: 300
    });
  }

  photoSuccess(imageData){
    // Make a new post
    // make a new image object
  }
  photoFail(message){
    alert("Uh Oh! Something went wrong: " + message);
  }



  // Use camera plugin to get photo
  fromLibrary(){
    navigator.camera.getPicture(this.librarySuccess, this.libraryFail, {
      quality: 100,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY
    });
  }

  librarySuccess(){
    // make an image post
  }
  libraryFail(message){
    alert("Uh oh, something went wrong: " + message);
  }

}
