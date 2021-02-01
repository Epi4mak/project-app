import { TestBed } from '@angular/core/testing';

import { StarBasketService } from './star-basket.service';

describe('StarBasketService', () => {
  let service: StarBasketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StarBasketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
