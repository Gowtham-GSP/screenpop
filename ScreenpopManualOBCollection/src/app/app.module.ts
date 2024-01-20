import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SreenpopManualObCollectionComponent } from './sreenpop-manual-ob-collection/sreenpop-manual-ob-collection.component';
import { CommonWebApiService } from './common-web-api.service';
import { AppDataService } from './app.dataService';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDatepickerModule, NgbDropdownModule, NgbModalModule, NgbModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SreenpopManualObCollectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
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
