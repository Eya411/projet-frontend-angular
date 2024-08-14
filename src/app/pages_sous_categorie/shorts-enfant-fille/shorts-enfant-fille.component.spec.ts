import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortsEnfantFilleComponent } from './shorts-enfant-fille.component';

describe('ShortsEnfantFilleComponent', () => {
  let component: ShortsEnfantFilleComponent;
  let fixture: ComponentFixture<ShortsEnfantFilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortsEnfantFilleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShortsEnfantFilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
