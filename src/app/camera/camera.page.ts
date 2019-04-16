import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage{

  // constructor(){}
  constructor(private camera: Camera) { }


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
    var newImage = document.createElement('img');
    newImage.src = 'data:image/jpeg;base64,' + imageData;
    document.getElementById("test2").append(newImage);
    // image.src = 'data:image/jpeg;base64,' + imageData;
  }
  takePictureFail(error){
    alert("Uh Oh, something went wrong! Make sure that you allow access to the device's camera!");
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
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      var image = document.createElement('img');
      image.src = base64Image;

      document.getElementById("test").append(image);
      console.log(base64Image);

     }, (err) => {
       console.log(err);
      // Handle error
     });
  }
}
