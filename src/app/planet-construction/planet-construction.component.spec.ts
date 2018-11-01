import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetConstructionComponent } from './planet-construction.component';

describe('PlanetConstructionComponent', () => {
  let component: PlanetConstructionComponent;
  let fixture: ComponentFixture<PlanetConstructionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlanetConstructionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetConstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have "construction" in h2 tag', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h2').textContent.toLocaleLowerCase()).toContain('construction');
    "hi"
  });
});
