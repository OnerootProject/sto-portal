import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { UserComponent } from './pages/user/user.component';
import { HeadComponent } from './components/head/head.component';
// import {InvestorComponent} from './pages/investor/investor.component';
// import {PublisherComponent} from './pages/publisher/publisher.component';

//Common
import {SharedModule} from './components/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    // UserComponent,
    // InvestorComponent,
    // PublisherComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    SharedModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
