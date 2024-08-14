import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletBebeFilleComponent } from './complet-bebe-fille.component';

describe('CompletBebeFilleComponent', () => {
  let component: CompletBebeFilleComponent;
  let fixture: ComponentFixture<CompletBebeFilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletBebeFilleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompletBebeFilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
