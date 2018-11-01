import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ResourcesComponent } from './resources.component'
import { Resources } from '../models/resources'

describe('ResourcesComponent', () => {
  let component: ResourcesComponent
  let fixture: ComponentFixture<ResourcesComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResourcesComponent]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcesComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should contain a table that contains cells with all resources keys',
    () => {
      const resources: Resources = {
        food: 0,
        iron: 0
      }
      const tableNode: any = fixture.nativeElement.querySelector('table')
      expect(tableNode).toBeDefined()
      const tdTexts = Array.from(tableNode.querySelectorAll('td'))
        .map((td: any) => td.textContent)
      expect(Object.keys(resources)
        .map(resource => tdTexts.includes(resource))
        .reduce((prev, cur) => prev && cur))
        .toBeTruthy()
    })
})
