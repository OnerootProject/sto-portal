import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import {UserComponent} from './pages/user/user.component';
// import { HeadComponent } from './components/head/head.component';

//Common
import {SharedModule} from './components/shared.module';

import { IssueComponent } from './pages/publisher/issue/issue.component';
import { QuotaComponent } from './pages/publisher/quota/quota.component';
import { CustomComponent } from './pages/publisher/custom/custom.component';

import { UserCenterComponent } from './pages/investor/user-center/user-center.component';
import { SecurityOfferingComponent } from './pages/investor/security-offering/security-offering.component';
import { UserApplicationComponent } from './pages/investor/user-application/user-application.component';


// import { PersonalInfoComponent } from './components/investor/user-center/personal-info/personal-info.component';
// import { MetamaskComponent } from './components/metamask/metamask.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { MakeTokenComponent } from './pages/publisher/make-token/make-token.component';

import { AddQuotaComponent } from './components/publisher/add-quota/add-quota.component';
import { SubmitQuotaComponent } from './components/publisher/submit-quota/submit-quota.component';



import {MetamaskComponent} from './components/metamask/metamask.component'
import {DialogComponent} from "./components/dialog/dialog.component";
import {SettingComponent} from './components/setting/setting.component';

// translate server
export function createTranslateHttpLoader(http:HttpClient){
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    UserComponent,
    IssueComponent,
    QuotaComponent,
    CustomComponent,
    
    UserCenterComponent,
    SecurityOfferingComponent,
    UserApplicationComponent,

    DialogComponent,
    MakeTokenComponent

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
  entryComponents: [
    DialogComponent
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
