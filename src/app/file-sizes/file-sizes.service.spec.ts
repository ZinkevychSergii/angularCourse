import { TestBed } from '@angular/core/testing';

import { FileSizesService } from './file-sizes.service';

describe('FileSizesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FileSizesService = TestBed.get(FileSizesService);
    expect(service).toBeTruthy();
  });
});
