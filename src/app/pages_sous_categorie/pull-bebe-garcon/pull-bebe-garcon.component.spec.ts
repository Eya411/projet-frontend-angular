import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PullBebeGarconComponent } from './pull-bebe-garcon.component';

describe('PullBebeGarconComponent', () => {
  let component: PullBebeGarconComponent;
  let fixture: ComponentFixture<PullBebeGarconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PullBebeGarconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PullBebeGarconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
