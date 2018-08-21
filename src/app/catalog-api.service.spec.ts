import { TestBed, inject } from '@angular/core/testing';

import { CatalogAPIService } from './catalog-api.service';

describe('CatalogAPIService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CatalogAPIService]
    });
  });

  it('should be created', inject([CatalogAPIService], (service: CatalogAPIService) => {
    expect(service).toBeTruthy();
  }));
});
