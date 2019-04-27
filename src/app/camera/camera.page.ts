import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ImageService } from '../image.service';
import { Image } from '../image'; 

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage{
  // image:any = new Image();
  image: Image;

  // constructor(){}
  constructor(private camera: Camera, private imageService: ImageService) { }


  // Use camera plugin to take photo
  takePhoto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA,
    }

    this.camera.getPicture(options).then(this.takePictureSuccess, this.takePictureFail);
  }


  takePictureSuccess(imageData){
    var newImage = document.createElement('img');
    newImage.src = 'data:image/jpeg;base64,' + imageData;
    document.getElementById("test2").append(newImage);
    // image.src = 'data:image/jpeg;base64,' + imageData;

    this.image = new Image(
      7,
     'user',
      960,
      450,
      'data:image/jpeg;base64,' + imageData,
      'data:image/jpeg;base64,' + imageData
    );

    this.imageService.addImage(this.image);
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
