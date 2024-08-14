import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletBebeGarconComponent } from './complet-bebe-garcon.component';

describe('CompletBebeGarconComponent', () => {
  let component: CompletBebeGarconComponent;
  let fixture: ComponentFixture<CompletBebeGarconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletBebeGarconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompletBebeGarconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
