import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './templates/nav/nav.component';
import { ElmCrudComponent } from './views/elm-crud/elm-crud.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ElmCrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
