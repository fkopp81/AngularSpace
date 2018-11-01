import { Component, OnInit } from '@angular/core'
import { Resources } from '../models/resources'

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {
  resources: Resources

  constructor() {
    this.resources = {
      food: 0,
      iron: 0
    }
  }

  ngOnInit() {
  }

  resourceKeys = () => Object.keys(this.resources)

}
