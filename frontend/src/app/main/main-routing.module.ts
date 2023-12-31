import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DefaultLayoutComponent,
    children: [{ path: '', component: HomePageComponent }],
    //canActivate: [AuthGuard, AccountGuard], <- Guards for authentication
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
