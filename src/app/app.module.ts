import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AccordionModule } from 'ngx-bootstrap/accordion';

import { AppComponent } from './app.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CenterComponent } from './center/center.component';


@NgModule({
  declarations: [
    AppComponent,
    RightSidebarComponent,
    NavbarComponent,
    CenterComponent
  ],
  imports: [
    BrowserModule,
    AccordionModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
