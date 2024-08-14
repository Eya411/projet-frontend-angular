import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PullEnfantGarconComponent } from './pull-enfant-garcon.component';

describe('PullEnfantGarconComponent', () => {
  let component: PullEnfantGarconComponent;
  let fixture: ComponentFixture<PullEnfantGarconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PullEnfantGarconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PullEnfantGarconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
