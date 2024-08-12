import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanierProduitsComponent } from './panierproduits.component';

describe('PanierProduitsComponent', () => {
  let component: PanierProduitsComponent;
  let fixture: ComponentFixture<PanierProduitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanierProduitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanierProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
