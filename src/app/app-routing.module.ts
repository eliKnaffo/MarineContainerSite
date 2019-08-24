import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './MainLayout/main-layout/main-layout.component';
import { ContainersPageComponent } from './Containers/containers-page/containers-page.component';

const routes: Routes = [{path:'',component:MainLayoutComponent},
{path:'cont',component:ContainersPageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})

export class AppRoutingModule { }