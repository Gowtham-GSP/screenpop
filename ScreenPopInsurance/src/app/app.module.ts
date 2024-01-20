import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { UserControllerComponent } from './user-controller/user-controller.component';
import { CommonWebApiService } from './common-web-api.service';
import { NgbDatepickerModule, NgbDropdownModule, NgbModalModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    UserControllerComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    NgbModule,
   
    NgbDatepickerModule, NgbModule, NgbTooltipModule,NgbDropdownModule, NgbModalModule,
    
  ],
  providers: [CommonWebApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
