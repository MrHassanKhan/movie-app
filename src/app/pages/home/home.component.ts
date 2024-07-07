import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { MovieActions, fromMovies } from 'src/app/store/movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private store: Store = inject(Store);
  
  bannerDetail$ = this.store.select(fromMovies.selectBannerDetail);;
  bannerVideo$ = this.store.select(fromMovies.selectBannerVideo);
  movies$ = this.store.select(fromMovies.selectMovies);
  tvShows$ = this.store.select(fromMovies.selectTvShows);
  ratedMovies$ = this.store.select(fromMovies.selectRatedMovies);
  nowPlayingMovies$ = this.store.select(fromMovies.selectNowPlayingMovies);
  popularMovies$ = this.store.select(fromMovies.selectPopularMovies);
  topRatedMovies$ = this.store.select(fromMovies.selectTopRatedMovies);
  upcomingMovies$ = this.store.select(fromMovies.selectUpcomingMovies);

  ngOnInit(): void {
    this.store.dispatch(MovieActions.loadMovies());
    this.store.dispatch(MovieActions.loadTvShows());
    this.store.dispatch(MovieActions.loadRatedMovies());
    this.store.dispatch(MovieActions.loadNowPlayingMovies());
    this.store.dispatch(MovieActions.loadPopularMovies());
    this.store.dispatch(MovieActions.loadTopRatedMovies());
    this.store.dispatch(MovieActions.loadUpcomingMovies());
  }
}
