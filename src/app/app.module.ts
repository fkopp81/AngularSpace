import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlanetComponent } from './planet/planet.component';
import { ResourcesComponent } from './resources/resources.component';
import { PlanetStatusComponent } from './planet-status/planet-status.component';
import { PlanetConstructionComponent } from './planet-construction/planet-construction.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PlanetComponent,
    ResourcesComponent,
    PlanetStatusComponent,
    PlanetConstructionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
