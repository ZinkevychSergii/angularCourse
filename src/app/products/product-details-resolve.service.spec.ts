import { TestBed } from '@angular/core/testing';

import { ProductDetailsResolveService } from './product-details-resolve.service';

describe('ProductDetailsResolveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductDetailsResolveService = TestBed.get(ProductDetailsResolveService);
    expect(service).toBeTruthy();
  });
});
