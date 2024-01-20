import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScreenpopManualOBCARComponent } from './screenpop-manual-obcar/screenpop-manual-obcar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDatepickerModule, NgbDropdownModule, NgbModalModule, NgbModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonWebApiService } from './common-web-api.service';
import { AppDataService } from './app.dataService';

@NgModule({
  declarations: [
    AppComponent,
    ScreenpopManualOBCARComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbDatepickerModule,
    NgbModule,
    NgbTooltipModule,
    NgbDropdownModule,
    NgbModalModule,
    ReactiveFormsModule,
  ],
  providers: [AppDataService, CommonWebApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
