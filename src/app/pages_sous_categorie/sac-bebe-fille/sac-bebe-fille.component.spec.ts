import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SacBebeFilleComponent } from './sac-bebe-fille.component';

describe('SacBebeFilleComponent', () => {
  let component: SacBebeFilleComponent;
  let fixture: ComponentFixture<SacBebeFilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SacBebeFilleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SacBebeFilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
