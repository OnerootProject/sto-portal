import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MainComponent} from './pages/main/main.component';
import { UserCenterComponent } from './pages/user/user-center/user-center.component';
import { SecurityOfferingComponent } from './pages/user/security-offering/security-offering.component';
import { UserApplicationComponent } from './pages/user/user-application/user-application.component';

// import {InvestorComponent} from './pages/investor/investor.component';
// import {PublisherComponent} from './pages/publisher/publisher.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  { path: 'user-center',component: UserCenterComponent },
  { path: 'security-offering',component: SecurityOfferingComponent },
  { path: 'user-application',component: UserApplicationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
