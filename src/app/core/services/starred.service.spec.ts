import { TestBed } from '@angular/core/testing';

import { StarredService } from './starred.service';

describe('StarredService', () => {
  let service: StarredService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StarredService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
