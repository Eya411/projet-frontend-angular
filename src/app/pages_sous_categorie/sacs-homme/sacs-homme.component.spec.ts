import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SacsHommeComponent } from './sacs-homme.component';

describe('SacsHommeComponent', () => {
  let component: SacsHommeComponent;
  let fixture: ComponentFixture<SacsHommeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SacsHommeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SacsHommeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
