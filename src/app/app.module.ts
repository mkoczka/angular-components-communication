import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SideBarToggleComponent } from './side-bar-toggle/side-bar-toggle.component';
import { SideBarService } from './side-bar/side-bar.service';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    SideBarToggleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    SideBarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
