import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomeComponent } from './core/home/home.component';
import { ListSuggestionComponent } from './core/list-suggestion/list-suggestion.component';
import { SuggestionFormComponent } from './features/suggestions/suggestion-form/suggestion-form.component';
import { NotFoundComponent } from './core/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListSuggestionComponent,
    SuggestionFormComponent,
    NotFoundComponent   // Attention au nom exact !
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule       // pour ngModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
