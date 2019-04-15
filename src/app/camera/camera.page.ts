import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {

  // constructor(){}
  constructor(private camera: Camera) { }

  ngOnInit() {
    // document.addEventListener("deviceready", this.onDeviceReady, false);
  }

  onDeviceReady(){
    // console.log("Navigator is ready");
  }


  // Use camera plugin to take photo
  takePhoto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA,
    }

    // this.camera.getPicture(options).then((imageData) => {
    //   // imageData is either a base64 encoded string or a file URI
    //   // If it's base64 (DATA_URL):
    //   let base64Image = 'data:image/jpeg;base64,' + imageData;
    //   console.log(base64Image);

    //  }, (err) => {
    //    console.log(err);
    //   // Handle error
    //  });

    this.camera.getPicture(options).then(this.takePictureSuccess, this.takePictureFail);
  }

  takePictureSuccess(imageData){
    let takenImage = 'data:image/jpeg;base64,' + imageData;
    console.log(takenImage);
  }
  takePictureFail(error){
    console.log("ERROR: " + error);
  }



  // Use camera plugin to get photo
  fromLibrary(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      console.log(base64Image);

     }, (err) => {
       console.log(err);
      // Handle error
     });
  }
}
