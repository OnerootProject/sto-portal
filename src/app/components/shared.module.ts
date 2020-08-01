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








@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        HeadComponent,
    ],
    exports: [
        FormsModule,
        HeadComponent,
    ]
})
export class SharedModule {
}
