import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeansEnfantGarconComponent } from './jeans-enfant-garcon.component';

describe('JeansEnfantGarconComponent', () => {
  let component: JeansEnfantGarconComponent;
  let fixture: ComponentFixture<JeansEnfantGarconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JeansEnfantGarconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JeansEnfantGarconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
