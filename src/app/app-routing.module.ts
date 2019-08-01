import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Components */
import {HomeComponent} from './components/home/home.component';
import {ItemsComponent} from './components/items/items.component';
import {CreateComponent} from './components/create/create.component';
import {DetailsComponent} from './components/details/details.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'posts', component: ItemsComponent},
  {path: 'create', component: CreateComponent},
  {path: 'details/:id', component: DetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
