import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BannerComponent } from 'src/app/core/components/banner/banner.component';
import { MovieCarouselComponent } from 'src/app/shared/components/movie-carousel/movie-carousel.component';
import { RouterModule } from '@angular/router';
import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import * as fromMovies from '../../store/movie/movie.reducer';
import { MovieEffects } from '../../store/movie/movie.effects';

@NgModule({
  imports: [
    CommonModule,
    BannerComponent, 
    MovieCarouselComponent,
    RouterModule.forChild([
      { 
        path: '', 
        providers: [
          provideState(fromMovies.FeatureKey, fromMovies.movieReducer),
          provideEffects([MovieEffects])
        ],
        component: HomeComponent 
      }
    ]),
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
