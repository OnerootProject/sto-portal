import { Injectable } from '@angular/core';

@Injectable()
export class ThemeServer {
  
    theme: string;
    lang: string;

    constructor(

    ){
        this.init();
    }

    init(){
        this.setTheme('light');
    }

    //切换皮肤
    setTheme(type: string){
        this.theme = type;
    }




}
