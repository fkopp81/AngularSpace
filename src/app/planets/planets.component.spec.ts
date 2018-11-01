import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { PlanetsComponent } from './planets.component'

describe('PlanetsComponent', () =>
{
  let component: PlanetsComponent
  let fixture: ComponentFixture<PlanetsComponent>
  let compiled: any

  beforeEach(async(() =>
  {
    TestBed.configureTestingModule({
      declarations: [PlanetsComponent]
    })
      .compileComponents()
  }))

  beforeEach(() =>
  {
    fixture = TestBed.createComponent(PlanetsComponent)
    component = fixture.componentInstance
    compiled = fixture.nativeElement
    fixture.detectChanges()
  })

  it('should create', () =>
  {
    expect(component).toBeTruthy()
  })

  it('should have "planets" in h2 tag', () =>
  {
    expect(compiled.querySelector('h2').textContent.toLocaleLowerCase())
      .toContain('planets')
  })

  it('should have links to planets', () =>
  {
    const navLinks = Array.from(compiled.querySelectorAll('a'))
    expect(navLinks.length).toBeGreaterThan(0)
    expect(
      navLinks.map((link: any) => link.getAttribute('routerLink'))
        .reduce((prev, cur) => prev && cur)
    ).toBeTruthy()
    expect(
      navLinks.filter((link: any) => link.getAttribute('routerLink')
        .match(/^\/planet\/.+/)).length
    ).toBeGreaterThan(0)
  })
})
