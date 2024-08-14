import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeansEnfantFilleComponent } from './jeans-enfant-fille.component';

describe('JeansEnfantFilleComponent', () => {
  let component: JeansEnfantFilleComponent;
  let fixture: ComponentFixture<JeansEnfantFilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JeansEnfantFilleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JeansEnfantFilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
