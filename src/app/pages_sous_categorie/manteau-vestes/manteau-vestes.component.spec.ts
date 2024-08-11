import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManteauVestesComponent } from './manteau-vestes.component';

describe('ManteauVestesComponent', () => {
  let component: ManteauVestesComponent;
  let fixture: ComponentFixture<ManteauVestesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManteauVestesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManteauVestesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
