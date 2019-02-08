import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditComponent } from './employees/edit/edit.component';
import { NewComponent } from './employees/new/new.component';

@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    NewComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'employees/edit',component:EditComponent},
      {path:'employees/new',component:NewComponent}
     ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
