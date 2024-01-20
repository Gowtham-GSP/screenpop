import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScreenpopComponent } from './screenpop/screenpop.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NgbDatepickerModule,
  NgbDropdownModule,
  NgbModalModule,
  NgbModule,
  NgbTooltipModule,
} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { CommonWebApiService } from './common-web-api.service';
import { AppDataService } from './app.dataService';

@NgModule({
  declarations: [AppComponent, ScreenpopComponent],
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
  bootstrap: [AppComponent],
})
export class AppModule {}
