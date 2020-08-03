import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { HeadComponent } from './components/head/head.component';
// import {InvestorComponent} from './pages/investor/investor.component';
// import {PublisherComponent} from './pages/publisher/publisher.component';

//Common
import {SharedModule} from './components/shared.module';
import { UserCenterComponent } from './pages/user/user-center/user-center.component';
import { SecurityOfferingComponent } from './pages/user/security-offering/security-offering.component';
import { UserApplicationComponent } from './pages/user/user-application/user-application.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

// translate server
export function createTranslateHttpLoader(http:HttpClient){
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    UserCenterComponent,
    SecurityOfferingComponent,
    UserApplicationComponent
  ],
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide:TranslateLoader,
        useFactory:createTranslateHttpLoader,
        deps:[HttpClient]
      }
    }),
    BrowserModule,
    AppRoutingModule,

    SharedModule,

    BrowserAnimationsModule,

    FormsModule,

    HttpClientModule,

    NgZorroAntdModule,
    
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
