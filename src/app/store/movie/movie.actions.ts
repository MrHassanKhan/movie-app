import { createAction, props } from '@ngrx/store';
import { IVideoContent } from '../../shared/models/video-content.interface';

export const loadBannerDetail = createAction('[Browse Page] Load Banner Detail', props<{ id: any }>());
export const loadBannerDetailSuccess = createAction('[Banner API] Load Banner Detail Success', props<{ bannerDetail: any }>());
export const loadBannerDetailFailure = createAction('[Banner API] Load Banner Detail Failure', props<{ error: any }>());

export const loadBannerVideo = createAction('[Browse Page] Load Banner Video', props<{ id: any }>());
export const loadBannerVideoSuccess = createAction('[Banner API] Load Banner Video Success', props<{ bannerVideo: any }>());
export const loadBannerVideoFailure = createAction('[Banner API] Load Banner Video Failure', props<{ error: any }>());

export const loadMovies = createAction('[Browse Page] Load Movies');
export const loadMoviesSuccess = createAction('[Movie API] Load Movies Success', props<{ movies: IVideoContent[] }>());
export const loadMoviesFailure = createAction('[Movie API] Load Movies Failure', props<{ error: any }>());

export const loadTvShows = createAction('[Browse Page] Load TV Shows');
export const loadTvShowsSuccess = createAction('[TV Show API] Load TV Shows Success', props<{ tvShows: IVideoContent[] }>());
export const loadTvShowsFailure = createAction('[TV Show API] Load TV Shows Failure', props<{ error: any }>());

export const loadRatedMovies = createAction('[Browse Page] Load Rated Movies');
export const loadRatedMoviesSuccess = createAction('[Rated Movie API] Load Rated Movies Success', props<{ ratedMovies: IVideoContent[] }>());
export const loadRatedMoviesFailure = createAction('[Rated Movie API] Load Rated Movies Failure', props<{ error: any }>());

export const loadNowPlayingMovies = createAction('[Browse Page] Load Now Playing Movies');
export const loadNowPlayingMoviesSuccess = createAction('[Now Playing Movie API] Load Now Playing Movies Success', props<{ nowPlayingMovies: IVideoContent[] }>());
export const loadNowPlayingMoviesFailure = createAction('[Now Playing Movie API] Load Now Playing Movies Failure', props<{ error: any }>());

export const loadPopularMovies = createAction('[Browse Page] Load Popular Movies');
export const loadPopularMoviesSuccess = createAction('[Popular Movie API] Load Popular Movies Success', props<{ popularMovies: IVideoContent[] }>());
export const loadPopularMoviesFailure = createAction('[Popular Movie API] Load Popular Movies Failure', props<{ error: any }>());

export const loadTopRatedMovies = createAction('[Browse Page] Load Top Rated Movies');
export const loadTopRatedMoviesSuccess = createAction('[Top Rated Movie API] Load Top Rated Movies Success', props<{ topRatedMovies: IVideoContent[] }>());
export const loadTopRatedMoviesFailure = createAction('[Top Rated Movie API] Load Top Rated Movies Failure', props<{ error: any }>());

export const loadUpcomingMovies = createAction('[Browse Page] Load Upcoming Movies');
export const loadUpcomingMoviesSuccess = createAction('[Upcoming Movie API] Load Upcoming Movies Success', props<{ upcomingMovies: IVideoContent[] }>());
export const loadUpcomingMoviesFailure = createAction('[Upcoming Movie API] Load Upcoming Movies Failure', props<{ error: any }>());
