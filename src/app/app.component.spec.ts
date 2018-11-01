import { TestBed, async, ComponentFixture, fakeAsync, tick } from '@angular/core/testing'
import { AppComponent } from './app.component'
import { Component } from '@angular/core'

describe('AppComponent', () =>
{
  let fixture: ComponentFixture<AppComponent>
  let component: AppComponent
  let compiled: any

  beforeEach(async(() =>
  {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, MockRouterOutletComponent
      ],
    }).compileComponents()
    fixture = TestBed.createComponent(AppComponent)

    component = fixture.componentInstance
    compiled = fixture.nativeElement
    fixture.detectChanges()
  }))

  it('should create the app', () =>
  {
    const app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  })

  it(`should have as title 'AngularSpace'`, () =>
  {
    const app = fixture.debugElement.componentInstance
    expect(app.title).toEqual('AngularSpace')
  })

  it('should render title in a h1 tag', () =>
  {
    fixture.detectChanges()
    expect(compiled.querySelector('h1').textContent)
      .toContain('Welcome to AngularSpace!')
  })

  it('should contain an router-outlet tag', () =>
  {
    expect(compiled.querySelector('router-outlet')).toBeDefined()
  })
})

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'router-outlet',
  template: `<p>MockRouterOutlet</p>`
})
class MockRouterOutletComponent { }
