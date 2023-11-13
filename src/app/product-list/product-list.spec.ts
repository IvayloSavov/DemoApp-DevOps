import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductListComponent } from './product-list.component';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductListComponent]
    });

    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call share and display alert', () => {
    spyOn(window, 'alert');
    component.share();
    expect(window.alert).toHaveBeenCalledWith('The product has been shared!');
  });

  it('should call onNotify and display alert', () => {
    spyOn(window, 'alert');
    component.onNotify();
    expect(window.alert).toHaveBeenCalledWith('You will be notified when the product is available.');
  });
});
