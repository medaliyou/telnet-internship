import { TestBed } from '@angular/core/testing';

import { ConnFormService } from './conn-form.service';

describe('ConnFormService', () => {
  let service: ConnFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
