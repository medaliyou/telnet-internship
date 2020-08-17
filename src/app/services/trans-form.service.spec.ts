import { TestBed } from '@angular/core/testing';

import { TransFormService } from './trans-form.service';

describe('TransFormService', () => {
  let service: TransFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
