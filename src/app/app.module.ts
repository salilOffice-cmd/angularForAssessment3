import { StandAloneDemoComponent } from './Components/stand-alone-demo/stand-alone-demo.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { CardComponent } from './Components/home/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    CardComponent,
    // StandAloneDemoComponent // gives error 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StandAloneDemoComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
