import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScreenpopManualOBCARComponent } from './screenpop-manual-obcar/screenpop-manual-obcar.component';

const routes: Routes = [
  {path:'', component:ScreenpopManualOBCARComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
