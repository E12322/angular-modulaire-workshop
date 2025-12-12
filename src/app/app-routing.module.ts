// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { ListSuggestionComponent } from './core/list-suggestion/list-suggestion.component';
import { NotFoundComponent } from './core/notfound/notfound.component';

const routes: Routes = [
  { path:'', component:HomeComponent },
  { path:'suggestions', component:ListSuggestionComponent },
  { path:'**', component:NotFoundComponent }
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule {}
