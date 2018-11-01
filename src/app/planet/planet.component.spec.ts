import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing'
import { PlanetComponent } from './planet.component'
import { routes } from './../app-routing.module'
import { Component } from '@angular/core'
import { RouterTestingModule } from '@angular/router/testing'

@Component({
  selector: 'app-resources',
  template: `<p>MockResourcesComponent</p>`
})
class MockResourcesComponent { }

describe('PlanetComponent', () =>
{
  let component: PlanetComponent
  let fixture: ComponentFixture<PlanetComponent>
  let compiled: any

  beforeEach(async(() =>
  {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [PlanetComponent, MockResourcesComponent,
        MockRouterOutletComponent]
    })
      .compileComponents()

    fixture = TestBed.createComponent(PlanetComponent)

    component = fixture.componentInstance
    compiled = fixture.nativeElement
    fixture.detectChanges()
  }))

  it('should create', () =>
  {
    expect(component).toBeTruthy()
  })

  it('should have "planet" in h1 tag', () =>
  {
    expect(compiled.querySelector('h1').textContent.toLocaleLowerCase())
      .toContain('planet')
  })

  it('should have name of planet in h1 tag', () =>
  {
    const testName = 'Mercury'
    component.name = testName
    fixture.detectChanges()
    expect(compiled.querySelector('h1').textContent).toContain(testName)
  })

  it('should have nav tag with routerLinks to home and construction', () =>
  {
    fixture.detectChanges()
    const navNode = compiled.querySelector('nav')
    expect(navNode).toBeDefined()
    const links = ['', '/construction']
      .map(link => `/planet/${component.name}${link}`)
    const navLinks = Array.from(navNode.querySelectorAll('a'))
    navLinks.forEach((link: any) => expect(links)
      .toContain(link.getAttribute('href')))
  })

  it('should have a app-resources tag', () =>
  {
    fixture.detectChanges()
    expect(Array.from(compiled.querySelectorAll('p'))
      .find((element: Node) => element.textContent === 'MockResourcesComponent')
    ).toBeDefined()
  })


})

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'router-outlet',
  template: `<p>MockRouterOutlet</p>`
})
class MockRouterOutletComponent { }
