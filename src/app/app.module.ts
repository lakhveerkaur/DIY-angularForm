import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormlistComponent } from './formlist/formlist.component';
import {RouterModule} from '@angular/router';
import { ShowDetailsComponent } from './show-details/show-details.component';


@NgModule({
  declarations: [
    AppComponent,
    FormlistComponent,
    ShowDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'formsubmit',component:ShowDetailsComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
