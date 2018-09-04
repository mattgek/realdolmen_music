import { TestBed, inject } from '@angular/core/testing';

import { DevToolsService } from './dev-tools.service';

describe('DevToolsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DevToolsService]
    });
  });

  it('should be created', inject([DevToolsService], (service: DevToolsService) => {
    expect(service).toBeTruthy();
  }));
});
