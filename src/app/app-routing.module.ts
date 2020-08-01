import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MainComponent} from './pages/main/main.component';
import {UserComponent} from './pages/user/user.component';
// import {InvestorComponent} from './pages/investor/investor.component';
// import {PublisherComponent} from './pages/publisher/publisher.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path:'user',
    component: UserComponent,
    children: [
      {path: '', redirectTo: 'investor', pathMatch: 'full'},
      // {path: 'investor', component: InvestorComponent},
      // {path: 'punlisher', component: PublisherComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
