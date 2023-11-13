import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { ProductDetailsComponent } from './product-details.component';
import { CartService } from '../cart.service';
import { products } from '../products';

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;
  let mockActivatedRoute: any;
  let mockCartService: any;

  beforeEach(() => {
    mockActivatedRoute = {
      snapshot: {
        paramMap: {
          get: () => '1' // Simulating a product ID in the route
        }
      }
    };

    mockCartService = {
      addToCart: jasmine.createSpy('addToCart')
    };

    TestBed.configureTestingModule({
      declarations: [ProductDetailsComponent],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: CartService, useValue: mockCartService }
      ]
    });

    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit should set the product', () => {
    component.ngOnInit();
    expect(component.product).toEqual(products[0]); // Assuming the product with ID 1 is the first one in the 'products' array
  });

  it('addToCart should call CartService addToCart and display alert', () => {
    const product = products[0]; // Assuming we're using the product from ngOnInit
    // spyOn(mockCartService, 'addToCart').and.callThrough(); // Creating a spy for addToCart
  
    const alert = spyOn(window, 'alert').and.stub(); // Stub the alert function
  
    component.addToCart(product);
  
    expect(mockCartService.addToCart).toHaveBeenCalledWith(product);
  
    expect(alert).toHaveBeenCalled();
    expect(alert).toHaveBeenCalledWith('Your product has been added to the cart!');
  });
});
