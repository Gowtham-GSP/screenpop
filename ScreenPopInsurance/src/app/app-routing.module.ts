import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserControllerComponent } from './user-controller/user-controller.component';

const routes: Routes = [
  { path: '', component: UserControllerComponent },
  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
