import { createAction, props } from '@ngrx/store';
import { IVideoContent } from '../../shared/models/video-content.interface';

// create actions for trending tv shows, popular tv shows, top rated tv shows, airing today tv shows, on the air tv shows

export const loadTrendingTvShows = createAction('[Browse Page] Load Trending TV Shows');
export const loadTrendingTvShowsSuccess = createAction('[Trending TV Show API] Load Trending TV Shows Success', props<{ trendingTvShows: IVideoContent[] }>());
export const loadTrendingTvShowsFailure = createAction('[Trending TV Show API] Load Trending TV Shows Failure', props<{ error: any }>());

export const loadPopularTvShows = createAction('[Browse Page] Load Popular TV Shows');
export const loadPopularTvShowsSuccess = createAction('[Popular TV Show API] Load Popular TV Shows Success', props<{ popularTvShows: IVideoContent[] }>());
export const loadPopularTvShowsFailure = createAction('[Popular TV Show API] Load Popular TV Shows Failure', props<{ error: any }>());

export const loadTopRatedTvShows = createAction('[Browse Page] Load Top Rated TV Shows');
export const loadTopRatedTvShowsSuccess = createAction('[Top Rated TV Show API] Load Top Rated TV Shows Success', props<{ topRatedTvShows: IVideoContent[] }>());
export const loadTopRatedTvShowsFailure = createAction('[Top Rated TV Show API] Load Top Rated TV Shows Failure', props<{ error: any }>());

export const loadAiringTodayTvShows = createAction('[Browse Page] Load Airing Today TV Shows');
export const loadAiringTodayTvShowsSuccess = createAction('[Airing Today TV Show API] Load Airing Today TV Shows Success', props<{ airingTodayTvShows: IVideoContent[] }>());
export const loadAiringTodayTvShowsFailure = createAction('[Airing Today TV Show API] Load Airing Today TV Shows Failure', props<{ error: any }>());

export const loadOnTheAirTvShows = createAction('[Browse Page] Load On The Air TV Shows');
export const loadOnTheAirTvShowsSuccess = createAction('[On The Air TV Show API] Load On The Air TV Shows Success', props<{ onTheAirTvShows: IVideoContent[] }>());
export const loadOnTheAirTvShowsFailure = createAction('[On The Air TV Show API] Load On The Air TV Shows Failure', props<{ error: any }>());

export const loadTvShowDetail = createAction('[Browse Page] Load TV Show Detail', props<{ id: any }>());
export const loadTvShowDetailSuccess = createAction('[TV Show API] Load TV Show Detail Success', props<{ tvShowDetail: any }>());
export const loadTvShowDetailFailure = createAction('[TV Show API] Load TV Show Detail Failure', props<{ error: any }>());

export const loadSimilarTvShows = createAction('[Browse Page] Load Similar TV Shows', props<{ id: any }>());
export const loadSimilarTvShowsSuccess = createAction('[Similar TV Show API] Load Similar TV Shows Success', props<{ similarTvShows: IVideoContent[] }>());
export const loadSimilarTvShowsFailure = createAction('[Similar TV Show API] Load Similar TV Shows Failure', props<{ error: any }>());

export const loadTvShowVideos = createAction('[Browse Page] Load TV Show Videos', props<{ id: any }>());
export const loadTvShowVideosSuccess = createAction('[TV Show API] Load TV Show Videos Success', props<{ tvShowVideos: IVideoContent[] }>());
export const loadTvShowVideosFailure = createAction('[TV Show API] Load TV Show Videos Failure', props<{ error: any }>());

export const loadRecommendedTvShows = createAction('[Browse Page] Load Recommended TV Shows', props<{ id: any }>());
export const loadRecommendedTvShowsSuccess = createAction('[Recommended TV Show API] Load Recommended TV Shows Success', props<{ recommendedTvShows: IVideoContent[] }>());
export const loadRecommendedTvShowsFailure = createAction('[Recommended TV Show API] Load Recommended TV Shows Failure', props<{ error: any }>());