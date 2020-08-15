import { Injectable } from '@angular/core';
import {Observable,Subject} from 'rxjs';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class SkinServiceService {
  private subject = new Subject<any>();
  private subjectLang = new Subject<any>();
  private theme: string = 'light';
  private lang: string = 'en';
  constructor(private translate: TranslateService) {

  }
  

  //  * @@@ 发布
  set(type: string) {
    this.theme = type;
    this.subject.next(type);
  }
  setLang(type: string){
    this.lang = type;
    this.subjectLang.next(type);
  }
  
  // *  @@@ 订阅
  getObservable(): Observable<any> {
    return this.subject.asObservable();
  }
  getLangObservable(): Observable<any> {
    return this.subjectLang.asObservable();
  }

  getLang() {
    return this.lang
  }
  getTheme() {
    return this.theme
  }

}
