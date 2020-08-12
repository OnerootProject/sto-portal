import {CommonModule} from '@angular/common';
// import {CoreModule} from '../core/core.module';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

// import {MatInputModule, MatAutocompleteModule, MatFormFieldModule} from "@angular/material";
// import {MatTabsModule} from '@angular/material/tabs';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
// import {TranslateModule} from '@ngx-translate/core'

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient} from '@angular/common/http';

// import {FooterComponent} from './footer/footer.component';
import {HeadComponent} from './head/head.component';
import { DialogComponent } from './investor/dialog/dialog.component';
import { PersonalInfoComponent } from './investor/user-center/personal-info/personal-info.component';
import { ProjectsComponent } from './investor/user-center/projects/projects.component';
import { QuotaComponent } from './investor/user-center/quota/quota.component';
import { OfferingComponent } from './investor/user-center/common/offering/offering.component';
import { AddQuotaComponent } from './publisher/add-quota/add-quota.component';
import { SubmitQuotaComponent } from './publisher/submit-quota/submit-quota.component';

import { SensitivePipe } from '../pipes/sensitive.pipe';
import { MetamaskComponent } from './metamask/metamask.component';
import { SettingComponent } from './setting/setting.component';

// translate server
export function createTranslateHttpLoader(http:HttpClient){
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
  }


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule.forChild({
            loader:{
            provide:TranslateLoader,
            useFactory:createTranslateHttpLoader,
            deps:[HttpClient]
            }
        })
    ],
    declarations: [
        HeadComponent,
        DialogComponent,
        PersonalInfoComponent,
        ProjectsComponent,
        QuotaComponent,
        OfferingComponent,

        SensitivePipe,

        MetamaskComponent,
        
        AddQuotaComponent,
        SubmitQuotaComponent,

        SettingComponent
    ],
    exports: [
        FormsModule,
        HeadComponent,
        PersonalInfoComponent,
        ProjectsComponent,
        QuotaComponent,
        OfferingComponent,
        SettingComponent,
        SensitivePipe
    ],
    entryComponents: [
        MetamaskComponent,
        DialogComponent,
        SettingComponent,
        AddQuotaComponent,
        SubmitQuotaComponent
    ],
})
export class SharedModule {
}
