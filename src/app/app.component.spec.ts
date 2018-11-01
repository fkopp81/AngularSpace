import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MockPlanetComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
  }));

  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'AngularSpace'`, () => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('AngularSpace');
  });

  it('should render title in a h1 tag', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to AngularSpace!');
  });
  it('should contain an app-planet tag', () => {
    fixture.detectChanges();
    expect(Array.from(fixture.nativeElement.querySelectorAll("p"))
      .find((element: Node) => element.textContent == "MockPlanetComponent"))
      .toBeDefined();
  });
});

@Component({
  selector: "app-planet",
  template: `<p>MockPlanetComponent</p>`
})
class MockPlanetComponent { }
