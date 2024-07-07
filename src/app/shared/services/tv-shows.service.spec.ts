/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TvShowsService } from './tv-shows.service';

describe('Service: TvShows', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TvShowsService]
    });
  });

  it('should ...', inject([TvShowsService], (service: TvShowsService) => {
    expect(service).toBeTruthy();
  }));
});
