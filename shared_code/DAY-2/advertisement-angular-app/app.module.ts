import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AdvertiseFormComponent} from './components/advertise-form/advertise-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdvertiseTableComponent } from './components/advertise-table/advertise-table.component';
import {SearchAdvertisePipe} from './pipes/advertise-search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AdvertiseFormComponent,
    AdvertiseTableComponent,
    SearchAdvertisePipe
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
