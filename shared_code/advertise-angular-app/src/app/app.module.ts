import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AdvertiseFormComponent} from './components/advertise-form/advertise-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdvertiseTableComponent } from './components/advertise-table/advertise-table.component';
import {SearchAdvertisePipe} from './pipes/advertise-search.pipe';
import {AdvertiseMDFFormComponent} from './components/advertise-form-mdf/advertise-mdf-form.component';
import {HttpClientModule} from '@angular/common/http';
import { AdvertiseService } from './services/adv-service/advertise.service';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EditAdvertiseComponent } from './components/advertise-edit/advertise-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    AdvertiseFormComponent,
    AdvertiseTableComponent,
    SearchAdvertisePipe,
    AdvertiseMDFFormComponent,
    HomeComponent,
    EditAdvertiseComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule,
    RouterModule.forRoot([
      {path:'', component: HomeComponent },
      {path: 'edit/:advId', component: EditAdvertiseComponent}
    ])
  ],
  providers: [AdvertiseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
