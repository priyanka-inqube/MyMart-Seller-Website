import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableProductListComponent } from './available-product-list.component';

describe('AvailableProductListComponent', () => {
  let component: AvailableProductListComponent;
  let fixture: ComponentFixture<AvailableProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailableProductListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
