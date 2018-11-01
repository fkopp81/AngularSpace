import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, RouterModule } from '@angular/router'

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit
{
  name = 'Pluto'

  constructor(private route: ActivatedRoute)
  {
    this.route.params.subscribe(params => this.name = params.planetid)
  }

  ngOnInit()
  {
  }

  navLink(target: string): string
  {
    return `/planet/${this.name}/${target}`
  }
}
