import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';

import { TvShowActions, fromTvShows } from 'src/app/store/tv-shows';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.scss']
})
export class TvShowsComponent implements OnInit {

  private store: Store = inject(Store);

  trendingTvShows$ = this.store.select(fromTvShows.selectTrendingTvShows);
  popularTvShows$ = this.store.select(fromTvShows.selectPopularTvShows);
  topRatedTvShows$ = this.store.select(fromTvShows.selectTopRatedTvShows);
  onTheAirTvShows$ = this.store.select(fromTvShows.selectOnTheAirTvShows);
  airingTodayTvShows$ = this.store.select(fromTvShows.selectAiringTodayTvShows);
  error$ = this.store.select(fromTvShows.selectError);
  ngOnInit() {

    this.store.dispatch(TvShowActions.loadTrendingTvShows());
    this.store.dispatch(TvShowActions.loadPopularTvShows());
    this.store.dispatch(TvShowActions.loadTopRatedTvShows());
    this.store.dispatch(TvShowActions.loadOnTheAirTvShows());
    this.store.dispatch(TvShowActions.loadAiringTodayTvShows());

  }

}
