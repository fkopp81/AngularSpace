import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetConstructionComponent } from './planet-construction/planet-construction.component';
import { PlanetStatusComponent } from './planet-status/planet-status.component';

export const routes: Routes = [
  { path: "construction", component: PlanetConstructionComponent },
  { path: "", component: PlanetStatusComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
