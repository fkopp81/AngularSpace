import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { PlanetStatusComponent } from './planet-status.component'

describe('PlanetStatusComponent', () => {
  let component: PlanetStatusComponent
  let fixture: ComponentFixture<PlanetStatusComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlanetStatusComponent]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetStatusComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should have "status" in h2 tag', () => {
    const compiled = fixture.nativeElement
    expect(compiled.querySelector('h2').textContent.toLocaleLowerCase())
      .toContain('status')
  })
})
