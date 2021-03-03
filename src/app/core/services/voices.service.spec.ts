import { TestBed } from '@angular/core/testing';

import { VoicesService } from './voices.service';

describe('VoicesService', () => {
  let service: VoicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
