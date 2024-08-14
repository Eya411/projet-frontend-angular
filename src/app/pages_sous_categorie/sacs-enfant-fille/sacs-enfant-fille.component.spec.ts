import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SacsEnfantFilleComponent } from './sacs-enfant-fille.component';

describe('SacsEnfantFilleComponent', () => {
  let component: SacsEnfantFilleComponent;
  let fixture: ComponentFixture<SacsEnfantFilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SacsEnfantFilleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SacsEnfantFilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
