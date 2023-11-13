import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CartService } from './cart.service';
import { Product } from './products';

describe('CartService', () => {
  let service: CartService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CartService]
    });

    service = TestBed.inject(CartService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add product to cart', () => {
    const product: Product = {
      id: 1,
      name: 'Test Product',
      price: 99.99,
      description: 'Test Description',
      available: true
    };

    service.addToCart(product);
    expect(service.getItems()).toContain(product);
  });

  it('should clear cart', () => {
    service.clearCart();
    expect(service.getItems().length).toBe(0);
  });

  it('should fetch shipping prices', () => {
    const mockResponse = [
      { type: 'standard', price: 5.99 },
      { type: 'express', price: 9.99 }
    ];

    service.getShippingPrices().subscribe(data => {
      expect(data).toEqual(mockResponse);
    });

    const req = httpTestingController.expectOne('/assets/shipping.json');
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
});
