import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManteauVestesfemmeComponent } from './manteau-vestes-femme.component';

describe('ManteauVestesfemmeComponent', () => {
  let component: ManteauVestesfemmeComponent;
  let fixture: ComponentFixture<ManteauVestesfemmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManteauVestesfemmeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManteauVestesfemmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
