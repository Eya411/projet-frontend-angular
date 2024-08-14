import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PullEnfantFilleComponent } from './pull-enfant-fille.component';

describe('PullEnfantFilleComponent', () => {
  let component: PullEnfantFilleComponent;
  let fixture: ComponentFixture<PullEnfantFilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PullEnfantFilleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PullEnfantFilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
