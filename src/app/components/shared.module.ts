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
import { DialogComponent } from './investor/dialog/dialog.component';
import { PersonalInfoComponent } from './investor/user-center/personal-info/personal-info.component';
import { ProjectsComponent } from './investor/user-center/projects/projects.component';
import { QuotaComponent } from './investor/user-center/quota/quota.component';
import { OfferingComponent } from './investor/user-center/common/offering/offering.component';
// import { AddQuotaComponent } from './publisher/add-quota/add-quota.component';
// import { SubmitQuotaComponent } from './publisher/submit-quota/submit-quota.component';



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
        // AddQuotaComponent,
        // SubmitQuotaComponent,
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
