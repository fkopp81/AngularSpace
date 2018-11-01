import { Router } from '@angular/router'
import { Location } from '@angular/common'
import { StatusComponent } from './status/status.component'
import { PlanetsComponent } from './planets/planets.component'
import { PlanetComponent } from './planet/planet.component'
import { RouterTestingModule } from '@angular/router/testing'
import { routes } from './app-routing.module'
import { PlanetConstructionComponent } from './planet-construction/planet-construction.component'
import { PlanetStatusComponent } from './planet-status/planet-status.component'
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component'
import { ResourcesComponent } from './resources/resources.component'
import { ComponentFixture, async, TestBed, fakeAsync, tick } from '@angular/core/testing'
import { AppComponent } from './app.component'

describe('AppComponent', () =>
{
  let fixture: ComponentFixture<AppComponent>
  let component: AppComponent
  let location: Location
  let router: Router
  let compiled: any

  beforeEach(async(() =>
  {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [
        AppComponent,
        StatusComponent, PlanetsComponent, PlanetComponent,
        PlanetStatusComponent, PlanetConstructionComponent,
        PageNotFoundComponent, ResourcesComponent
      ],
    }).compileComponents()
    fixture = TestBed.createComponent(AppComponent)
    router = TestBed.get(Router)
    location = TestBed.get(Location)

    fixture.ngZone.run(() => router.initialNavigation())

    component = fixture.componentInstance
    compiled = fixture.nativeElement
    fixture.detectChanges()
  }))

  it('should route to PageNotFoundComponent on bad link', fakeAsync(() =>
  {
    fixture.ngZone.run(() =>
    {
      router.navigate([`/foo`])
      tick()
      expect(location.path()).toBe('/foo')
      fixture.detectChanges()
      expect(compiled.querySelector('app-page-not-found')).toBeDefined()
    })
  }))

  it('should route to status on "/planet/(name)"', fakeAsync(() =>
  {
    fixture.ngZone.run(() =>
    {
      const testPlanet = 'Mercury'
      router.navigate([`/planet/${testPlanet}`])
      tick()
      expect(location.path()).toBe(`/planet/${testPlanet}`)
      fixture.detectChanges()
      expect(fixture.nativeElement.querySelector('app-planet-status'))
        .toBeDefined()
    })
  }))

  it('should route to construction on "/planet/(name)/construction"',
    fakeAsync(() =>
    {
      const testPlanet = 'Mercury'
      fixture.ngZone.run(() =>
      {
        router.navigate([`/planet/${testPlanet}/construction`])
        tick()
        expect(location.path()).toBe(`/planet/${testPlanet}/construction`)
        fixture.detectChanges()
        expect(fixture.nativeElement.querySelector('app-planet-construction'))
          .toBeDefined()
      })
    }))
})
