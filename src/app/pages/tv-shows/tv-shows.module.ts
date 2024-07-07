import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvShowsComponent } from './tv-shows.component';
import { MovieCarouselComponent } from 'src/app/shared/components/movie-carousel/movie-carousel.component';
import { RouterModule } from '@angular/router';
import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { TvShowsEffects } from '../../store/tv-shows/tv-shows.effects';
import * as fromTvShows from '../../store/tv-shows/tv-shows.reducer';

@NgModule({
  imports: [
    CommonModule,
    MovieCarouselComponent,
    RouterModule.forChild([
      { 
        path: '', 
        providers: [
          provideState(fromTvShows.FeatureKey, fromTvShows.tvShowReducer),
          provideEffects([TvShowsEffects])
        ],
        component: TvShowsComponent 
      }
    ]),
  ],
  declarations: [TvShowsComponent]
})
export class TvShowsModule { }
