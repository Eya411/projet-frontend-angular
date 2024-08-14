import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PullBebeFilleComponent } from './pull-bebe-fille.component';

describe('PullBebeFilleComponent', () => {
  let component: PullBebeFilleComponent;
  let fixture: ComponentFixture<PullBebeFilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PullBebeFilleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PullBebeFilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
