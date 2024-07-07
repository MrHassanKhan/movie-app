import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { IVideoContent } from '../../shared/models/video-content.interface';
import * as MovieActions from './movie.actions';

export interface State {
  bannerDetail: any;
  bannerVideo: any;
  movies: IVideoContent[];
  tvShows: IVideoContent[];
  ratedMovies: IVideoContent[];
  nowPlayingMovies: IVideoContent[];
  popularMovies: IVideoContent[];
  topRatedMovies: IVideoContent[];
  upcomingMovies: IVideoContent[];
  error: any;
}

export const initialState: State = {
  bannerDetail: {},
  bannerVideo: {},
  movies: [],
  tvShows: [],
  ratedMovies: [],
  nowPlayingMovies: [],
  popularMovies: [],
  topRatedMovies: [],
  upcomingMovies: [],
  error: null,
};

export const movieReducer = createReducer(
  initialState,
  on(MovieActions.loadBannerDetailSuccess, (state, { bannerDetail }) => ({ ...state, bannerDetail })),
  on(MovieActions.loadBannerDetailFailure, (state, { error }) => ({ ...state, error })),
  
  on(MovieActions.loadBannerVideoSuccess, (state, { bannerVideo }) => ({ ...state, bannerVideo })),
  on(MovieActions.loadBannerVideoFailure, (state, { error }) => ({ ...state, error })),

  on(MovieActions.loadMoviesSuccess, (state, { movies }) => ({ ...state, movies })),
  on(MovieActions.loadMoviesFailure, (state, { error }) => ({ ...state, error })),
  
  on(MovieActions.loadTvShowsSuccess, (state, { tvShows }) => ({ ...state, tvShows })),
  on(MovieActions.loadTvShowsFailure, (state, { error }) => ({ ...state, error })),
  
  on(MovieActions.loadRatedMoviesSuccess, (state, { ratedMovies }) => ({ ...state, ratedMovies })),
  on(MovieActions.loadRatedMoviesFailure, (state, { error }) => ({ ...state, error })),
  
  on(MovieActions.loadNowPlayingMoviesSuccess, (state, { nowPlayingMovies }) => ({ ...state, nowPlayingMovies })),
  on(MovieActions.loadNowPlayingMoviesFailure, (state, { error }) => ({ ...state, error })),
  
  on(MovieActions.loadPopularMoviesSuccess, (state, { popularMovies }) => ({ ...state, popularMovies })),
  on(MovieActions.loadPopularMoviesFailure, (state, { error }) => ({ ...state, error })),
  
  on(MovieActions.loadTopRatedMoviesSuccess, (state, { topRatedMovies }) => ({ ...state, topRatedMovies })),
  on(MovieActions.loadTopRatedMoviesFailure, (state, { error }) => ({ ...state, error })),
  
  on(MovieActions.loadUpcomingMoviesSuccess, (state, { upcomingMovies }) => ({ ...state, upcomingMovies })),
  on(MovieActions.loadUpcomingMoviesFailure, (state, { error }) => ({ ...state, error })),
);

export const FeatureKey = 'MOVIE_STATE';
export const selectMovieState = createFeatureSelector<State>(FeatureKey);

export const selectBannerDetail = createSelector(selectMovieState, (state) => state.bannerDetail);
export const selectBannerVideo = createSelector(selectMovieState, (state) => state.bannerVideo);
export const selectMovies = createSelector(selectMovieState, (state) => state.movies);
export const selectTvShows = createSelector(selectMovieState, (state) => state.tvShows);
export const selectRatedMovies = createSelector(selectMovieState, (state) => state.ratedMovies);
export const selectNowPlayingMovies = createSelector(selectMovieState, (state) => state.nowPlayingMovies);
export const selectPopularMovies = createSelector(selectMovieState, (state) => state.popularMovies);
export const selectTopRatedMovies = createSelector(selectMovieState, (state) => state.topRatedMovies);
export const selectUpcomingMovies = createSelector(selectMovieState, (state) => state.upcomingMovies);
export const selectError = createSelector(selectMovieState, (state) => state.error);
