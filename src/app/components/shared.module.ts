import {CommonModule} from '@angular/common';
// import {CoreModule} from '../core/core.module';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

// import {MatInputModule, MatAutocompleteModule, MatFormFieldModule} from "@angular/material";
// import {MatTabsModule} from '@angular/material/tabs';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
// import {TranslateModule} from '@ngx-translate/core'

// import {FooterComponent} from './footer/footer.component';
import {HeadComponent} from './head/head.component';
import { DialogComponent } from './user/dialog/dialog.component';
import { PersonalInfoComponent } from './user/user-center/personal-info/personal-info.component';
import { ProjectsComponent } from './user/user-center/projects/projects.component';
import { QuotaComponent } from './user/user-center/quota/quota.component';
import { OfferingComponent } from './user/user-center/common/offering/offering.component';



@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        HeadComponent,
        DialogComponent,
        PersonalInfoComponent,
        ProjectsComponent,
        QuotaComponent,
        OfferingComponent,
    ],
    exports: [
        FormsModule,
        HeadComponent,
        PersonalInfoComponent,
        ProjectsComponent,
        QuotaComponent,
        OfferingComponent,
    ]
})
export class SharedModule {
}
