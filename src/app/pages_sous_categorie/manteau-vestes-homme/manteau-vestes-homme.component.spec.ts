import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManteauVestesHommeComponent } from './manteau-vestes-homme.component';

describe('ManteauVestesHommeComponent', () => {
  let component: ManteauVestesHommeComponent;
  let fixture: ComponentFixture<ManteauVestesHommeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManteauVestesHommeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManteauVestesHommeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
