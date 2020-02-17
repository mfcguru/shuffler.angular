import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShuffleComponent } from './features/shuffle/shuffle.component';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AboutComponent } from './features/about/about.component';
import { SignalRService } from './features/shuffle/signal-r.service';

@NgModule({
  declarations: [
    AppComponent,
    ShuffleComponent,
    NotFoundComponent,
    NavbarComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SignalRService],
  bootstrap: [AppComponent]
})
export class AppModule { }
