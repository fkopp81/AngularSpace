import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { PlanetComponent } from './planet.component';
import { routes } from './../app-routing.module';
import { Component } from '@angular/core';

import { Location } from "@angular/common";
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";
import { PlanetStatusComponent } from '../planet-status/planet-status.component';
import { PlanetConstructionComponent } from '../planet-construction/planet-construction.component';

@Component({
  selector: "app-resources",
  template: `<p>MockResourcesComponent</p>`
})
class MockResourcesComponent { }

describe('PlanetComponent', () =>
{
  let component: PlanetComponent;
  let fixture: ComponentFixture<PlanetComponent>;

  let location: Location;
  let router: Router;

  beforeEach(async(() =>
  {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [PlanetComponent, MockResourcesComponent, PlanetStatusComponent, PlanetConstructionComponent
      ]
    })
      .compileComponents();
    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(PlanetComponent);
    fixture.ngZone.run(() => router.initialNavigation());

    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () =>
  {
    expect(component).toBeTruthy();
  });

  it('should have "planet" in h1 tag', () =>
  {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent.toLocaleLowerCase()).toContain('planet');
  });

  it('should have name of planet in h1 tag', () =>
  {
    const testName = "Mercury";
    component.name = testName;
    fixture.detectChanges();
    // const compiled = fixture.debugElement.nativeElement;
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(testName);
  });

  it("should have a app-resources tag", () =>
  {
    fixture.detectChanges();
    expect(Array.from(fixture.nativeElement.querySelectorAll("p"))
      .find((element: Node) => element.textContent == "MockResourcesComponent"))
      .toBeDefined();
  });

  it('should route to status on "/"', fakeAsync(() =>
  {
    fixture.ngZone.run(() =>
    {
      router.navigate(['']);
      tick();
      expect(location.path()).toBe('/');
      fixture.detectChanges();
      expect(fixture.nativeElement.querySelector('app-planet-status')).toBeDefined();
    })
  }));

  it('should route to construction on "/construction"', fakeAsync(() =>
  {
    fixture.ngZone.run(() =>
    {
      router.navigate(['construction']);
      tick();
      expect(location.path()).toBe('/construction');
      fixture.detectChanges();
      expect(fixture.nativeElement.querySelector('app-planet-construction')).toBeDefined();
    })
  }));
});


// describe("Router: Planet", () => {
//   let location: Location;
//   let router: Router;
//   let fixture;



//     router = TestBed.get(Router);
//     location = TestBed.get(Location);

//     fixture = TestBed.createComponent(PlanetComponent);
//     router.initialNavigation();

//     // TODO: https://codecraft.tv/courses/angular/unit-testing/routing/
//     it('should be tested', () => {
//       router.navigate(['']);
//       tick();
//       expect(location.path()).toBe('/');
//       fixture.detectChanges();
//     });
//   })
// })

