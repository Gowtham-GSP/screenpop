import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScreenpopComponent } from './screenpop/screenpop.component';

const routes: Routes = [{ path: '', component: ScreenpopComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
