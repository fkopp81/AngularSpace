import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PlanetConstructionComponent } from './planet-construction/planet-construction.component'
import { PlanetStatusComponent } from './planet-status/planet-status.component'
import { StatusComponent } from './status/status.component'
import { PlanetComponent } from './planet/planet.component'
import { PlanetsComponent } from './planets/planets.component'
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component'

export const routes: Routes = [

  { path: '', redirectTo: 'status', pathMatch: 'full' },
  { path: 'status', component: StatusComponent },
  { path: 'planets', component: PlanetsComponent },
  {
    path: 'planet/:planetid', component: PlanetComponent, children: [
      {
        path: '', component: PlanetStatusComponent
      },
      {
        path: 'construction',
        component: PlanetConstructionComponent
      }
    ]
  },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
