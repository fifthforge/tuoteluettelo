import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LuetteloComponent } from './luettelo/luettelo.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgPipesModule} from 'ngx-pipes';
import { ValittuComponent } from './valittu/valittu.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LuetteloComponent,
    ValittuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'luettelo', component: LuetteloComponent},
      {path: 'luettelo/:id', component: ValittuComponent},
      {path: '', redirectTo: '/luettelo', pathMatch: 'full'},
      {path: '**', redirectTo: '/luettelo'}
    ]),
    FontAwesomeModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgPipesModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
