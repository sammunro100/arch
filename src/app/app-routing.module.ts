
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes2: Routes = [
  {path: '', component: HomeComponent},
  {path: 'mapModule', loadChildren: '../app/mapping/mapping.module#MappingModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes2)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
