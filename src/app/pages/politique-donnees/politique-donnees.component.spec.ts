import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolitiqueDonneesComponent } from './politique-donnees.component';

describe('PolitiqueDonneesComponent', () => {
  let component: PolitiqueDonneesComponent;
  let fixture: ComponentFixture<PolitiqueDonneesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolitiqueDonneesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolitiqueDonneesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
