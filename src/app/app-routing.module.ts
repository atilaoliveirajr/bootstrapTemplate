import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavComponent } from '././templates/nav/nav.component'
import { ElmCrudComponent } from '././views/elm-crud/elm-crud.component'

const routes: Routes = [
{
    path: "elm-crud",
    component: ElmCrudComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
