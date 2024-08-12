import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SacsFemmeComponent } from './sacs-femme.component';

describe('SacsFemmeComponent', () => {
  let component: SacsFemmeComponent;
  let fixture: ComponentFixture<SacsFemmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SacsFemmeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SacsFemmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
