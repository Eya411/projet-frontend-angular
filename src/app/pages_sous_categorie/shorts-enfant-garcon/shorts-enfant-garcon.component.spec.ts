import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortsEnfantGarconComponent } from './shorts-enfant-garcon.component';

describe('ShortsEnfantGarconComponent', () => {
  let component: ShortsEnfantGarconComponent;
  let fixture: ComponentFixture<ShortsEnfantGarconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortsEnfantGarconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShortsEnfantGarconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
