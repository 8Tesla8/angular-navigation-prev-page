import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { AComponent } from './components/a/a.component';
import { BComponent } from './components/b/b.component';
import { CComponent } from './components/c/c.component';
import { NavigationService } from './service/navigation.service';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    AComponent,
    BComponent,
    CComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [NavigationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
