import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MainComponent} from './pages/main/main.component';
import {UserComponent} from './pages/user/user.component';
import { UserCenterComponent } from './pages/investor/user-center/user-center.component';
import { SecurityOfferingComponent } from './pages/investor/security-offering/security-offering.component';
import { UserApplicationComponent } from './pages/investor/user-application/user-application.component';


import {IssueComponent} from './pages/publisher/issue/issue.component';
import {QuotaComponent} from './pages/publisher/quota/quota.component';
import {CustomComponent} from './pages/publisher/custom/custom.component';

import { MakeTokenComponent } from './pages/publisher/make-token/make-token.component';



const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'home',
    component: MainComponent
  },
  {
    path:'user',
    component: UserComponent,
    children: [
      {path: '', redirectTo: 'issue', pathMatch: 'full'},
      {path: 'issue', component: IssueComponent},
      {path: 'quota', component: QuotaComponent},
      {path: 'custom', component: CustomComponent},
      { path: 'center',component: UserCenterComponent },
      { path: 'security-offering',component: SecurityOfferingComponent },
      { path: 'application',component: UserApplicationComponent },
      { path: 'maketoken',component: MakeTokenComponent },



    ]
  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
