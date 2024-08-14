import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeeShirtHommeComponent } from './tee-shirt-homme.component';

describe('TeeShirtHommeComponent', () => {
  let component: TeeShirtHommeComponent;
  let fixture: ComponentFixture<TeeShirtHommeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeeShirtHommeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeeShirtHommeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
