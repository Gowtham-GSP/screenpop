import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SreenpopManualObCollectionComponent } from './sreenpop-manual-ob-collection/sreenpop-manual-ob-collection.component';

const routes: Routes = [
  {path:'',component:SreenpopManualObCollectionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
