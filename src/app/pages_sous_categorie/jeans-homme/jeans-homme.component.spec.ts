import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeansHommeComponent } from './jeans-homme.component';

describe('JeansHommeComponent', () => {
  let component: JeansHommeComponent;
  let fixture: ComponentFixture<JeansHommeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JeansHommeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JeansHommeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
