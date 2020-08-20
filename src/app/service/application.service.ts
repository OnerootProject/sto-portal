import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor() { }

  uploadPhoto(event:any){
    let eleFile = event.target.files[0];
    let reader = new FileReader(),
      img:any = new Image();

    setTimeout( _ => {
      console.log(reader.result,111111)
      return reader.result;
    },1000)

    let file = null;
    file = event.target.files[0];
    if(file.type.indexOf("image") == 0) {
      reader.readAsDataURL(file);
    }
    reader.onload = function(e) {
      img.src = reader.result;
    };
  }


  uploadOSS(event:any){
    let eleFile = event.target.files[0];
    let reader = new FileReader(),
      img:any = new Image();

    let file = null;
    file = event.target.files[0];
    if(file.type.indexOf("image") == 0) {
      reader.readAsDataURL(file);
    }

    reader.onload = function(e) {
      img.src = reader.result;
    };

    let canvas = document.createElement('canvas');
    let context = canvas.getContext('2d');

    img.onload = function() {
        let originWidth = img.width;
        let originHeight = img.height;
        let maxWidth = 400,
            maxHeight = 400;
        let targetWidth = originWidth,
            targetHeight = originHeight;
        if(originWidth > maxWidth || originHeight > maxHeight) {
            if(originWidth / originHeight > maxWidth / maxHeight) {
                targetWidth = maxWidth;
                targetHeight = Math.round(maxWidth * (originHeight / originWidth));
            } else {
                targetHeight = maxHeight;
                targetWidth = Math.round(maxHeight * (originWidth / originHeight));
            }
        }

        canvas.width = targetWidth;
        canvas.height = targetHeight;
        context.clearRect(0, 0, targetWidth, targetHeight);
        context.drawImage(img, 0, 0, targetWidth, targetHeight);
        canvas.toBlob(function(blob) {
            let form = new FormData();
            form.append('file', blob);
            form.append("fileName", "123jpg")
            console.log(blob,"4444444")
        });
    }
  }
}
