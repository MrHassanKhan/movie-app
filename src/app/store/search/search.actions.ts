import { createAction, props } from '@ngrx/store';
import { IVideoContent } from '../../shared/models/video-content.interface';

export const searchMovies = createAction('[Search Page] Search Movies', props<{ query: string }>());
export const searchMoviesSuccess = createAction('[Movie API] Search Movies Success', props<{ searchMovies: IVideoContent[] }>());
export const searchMoviesFailure = createAction('[Movie API] Search Movies Failure', props<{ error: any }>());

export const searchTvShows = createAction('[Search Page] Search TV Shows', props<{ query: string }>());
export const searchTvShowsSuccess = createAction('[TV Show API] Search TV Shows Success', props<{ searchTvShows: IVideoContent[] }>());
export const searchTvShowsFailure = createAction('[TV Show API] Search TV Shows Failure', props<{ error: any }>());
