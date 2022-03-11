import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvinciaDetailsComponent } from './provincia-details.component';

describe('ProvinciaDetailsComponent', () => {
  let component: ProvinciaDetailsComponent;
  let fixture: ComponentFixture<ProvinciaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvinciaDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvinciaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
