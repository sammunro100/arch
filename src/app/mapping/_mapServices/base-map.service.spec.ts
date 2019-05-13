import { TestBed } from '@angular/core/testing';

import { BaseMapService } from './base-map.service';

describe('BaseMapService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BaseMapService = TestBed.get(BaseMapService);
    expect(service).toBeTruthy();
  });
});
