import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { IVideoContent } from "src/app/shared/models/video-content.interface";
import * as TvShowActions from './tv-shows.actions';

export interface TvShowState {
    trendingTvShows: IVideoContent[];
    popularTvShows: IVideoContent[];
    topRatedTvShows: IVideoContent[];
    onTheAirTvShows: IVideoContent[];
    airingTodayTvShows: IVideoContent[];
    error: any;
}

const initialState: TvShowState = {
    trendingTvShows: [],
    popularTvShows: [],
    topRatedTvShows: [],
    onTheAirTvShows: [],
    airingTodayTvShows: [],
    error: null
}

export const tvShowReducer = createReducer(
    initialState,
    on(TvShowActions.loadTrendingTvShowsSuccess, (state, { trendingTvShows }) => ({ ...state, trendingTvShows })),
    on(TvShowActions.loadTrendingTvShowsFailure, (state, { error }) => ({ ...state, error })),

    on(TvShowActions.loadPopularTvShowsSuccess, (state, { popularTvShows }) => ({ ...state, popularTvShows })),
    on(TvShowActions.loadPopularTvShowsFailure, (state, { error }) => ({ ...state, error })),

    on(TvShowActions.loadTopRatedTvShowsSuccess, (state, { topRatedTvShows }) => ({ ...state, topRatedTvShows })),
    on(TvShowActions.loadTopRatedTvShowsFailure, (state, { error }) => ({ ...state, error })),

    on(TvShowActions.loadOnTheAirTvShowsSuccess, (state, { onTheAirTvShows }) => ({ ...state, onTheAirTvShows })),
    on(TvShowActions.loadOnTheAirTvShowsFailure, (state, { error }) => ({ ...state, error })),

    on(TvShowActions.loadAiringTodayTvShowsSuccess, (state, { airingTodayTvShows }) => ({ ...state, airingTodayTvShows })),
    on(TvShowActions.loadAiringTodayTvShowsFailure, (state, { error }) => ({ ...state, error })),
)

export const FeatureKey = 'TV_SHOW_STATE';
export const selectTvShowState = createFeatureSelector<TvShowState>(FeatureKey);

export const selectTrendingTvShows = createSelector(selectTvShowState, (state) => state.trendingTvShows);
export const selectPopularTvShows = createSelector(selectTvShowState, (state) => state.popularTvShows);
export const selectTopRatedTvShows = createSelector(selectTvShowState, (state) => state.topRatedTvShows);
export const selectOnTheAirTvShows = createSelector(selectTvShowState, (state) => state.onTheAirTvShows);
export const selectAiringTodayTvShows = createSelector(selectTvShowState, (state) => state.airingTodayTvShows);
export const selectError = createSelector(selectTvShowState, (state) => state.error);