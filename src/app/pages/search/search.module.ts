import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { RouterModule } from '@angular/router';
import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { SearchEffects } from 'src/app/store/search/search.effects';
import * as fromSearch from 'src/app/store/search/search.reducer';
import { MovieCarouselComponent } from 'src/app/shared/components/movie-carousel/movie-carousel.component';

@NgModule({
  imports: [
    CommonModule,
    MovieCarouselComponent,
    RouterModule.forChild([
      { 
        path: '', 
        providers: [
          provideState(fromSearch.FeatureKey, fromSearch.searchReducer),
          provideEffects([SearchEffects])
        ],
        component: SearchComponent 
      }
    ])
  ],
  declarations: [SearchComponent]
})
export class SearchModule { }
