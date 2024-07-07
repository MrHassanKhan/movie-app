import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MovieService } from '../../shared/services/movie.service';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as MovieActions from './movie.actions';
import { Store } from '@ngrx/store';

@Injectable()
export class MovieEffects {
  private actions$ = inject(Actions);
  private movieService = inject(MovieService);
  private store = inject(Store);
  
  loadBannerDetail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActions.loadBannerDetail),
      mergeMap((action) =>
        this.movieService.getBannerDetail(action.id).pipe(
          map(bannerDetail => {
            return MovieActions.loadBannerDetailSuccess({ bannerDetail: bannerDetail })
          }),
          catchError(error => of(MovieActions.loadBannerDetailFailure({ error })))
        )
      )
    )
  );

  loadBannerVideo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActions.loadBannerVideo),
      mergeMap((action) =>
        this.movieService.getBannerVideo(action.id).pipe(
          map(bannerVideo => {
            return MovieActions.loadBannerVideoSuccess({ bannerVideo: bannerVideo.results[0] })
          }),
          catchError(error => of(MovieActions.loadBannerVideoFailure({ error })))
        )
      )
    )
  );


  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActions.loadMovies),
      mergeMap(() =>
        this.movieService.getMovies().pipe(
          map(movies => MovieActions.loadMoviesSuccess({ movies: movies.results })),
          switchMap((moviesResult) => {
            this.store.dispatch(MovieActions.loadBannerDetail({id:moviesResult.movies[0].id}));
            this.store.dispatch(MovieActions.loadBannerVideo({id:moviesResult.movies[0].id}));
            return of(moviesResult);
          }),
          catchError(error => of(MovieActions.loadMoviesFailure({ error })))
        )
      ),
    )
  );

  loadTvShows$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActions.loadTvShows),
      mergeMap(() =>
        this.movieService.getTvShows().pipe(
          map(tvShows => MovieActions.loadTvShowsSuccess({ tvShows: tvShows.results })),
          catchError(error => of(MovieActions.loadTvShowsFailure({ error })))
        )
      )
    )
  );

  // Repeat for ratedMovies, nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies

  loadRatedMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActions.loadRatedMovies),
      mergeMap(() =>
        this.movieService.getRatedMovies().pipe(
          map(ratedMovies => MovieActions.loadRatedMoviesSuccess({ ratedMovies: ratedMovies.results })),
          catchError(error => of(MovieActions.loadRatedMoviesFailure({ error })))
        )
      )
    )
  );

  loadNowPlayingMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActions.loadNowPlayingMovies),
      mergeMap(() =>
        this.movieService.getNowPlayingMovies().pipe(
          map(nowPlayingMovies => MovieActions.loadNowPlayingMoviesSuccess({ nowPlayingMovies: nowPlayingMovies.results })),
          catchError(error => of(MovieActions.loadNowPlayingMoviesFailure({ error })))
        )
      )
    )
  );

  loadPopularMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActions.loadPopularMovies),
      mergeMap(() =>
        this.movieService.getPopularMovies().pipe(
          map(popularMovies => MovieActions.loadPopularMoviesSuccess({ popularMovies: popularMovies.results })),
          catchError(error => of(MovieActions.loadPopularMoviesFailure({ error })))
        )
      )
    )
  );

  loadTopRatedMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActions.loadTopRatedMovies),
      mergeMap(() =>
        this.movieService.getTopRated().pipe(
          map(topRatedMovies => MovieActions.loadTopRatedMoviesSuccess({ topRatedMovies: topRatedMovies.results })),
          catchError(error => of(MovieActions.loadTopRatedMoviesFailure({ error })))
        )
      )
    )
  );

  loadUpcomingMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActions.loadUpcomingMovies),
      mergeMap(() =>
        this.movieService.getUpcomingMovies().pipe(
          map(upcomingMovies => MovieActions.loadUpcomingMoviesSuccess({ upcomingMovies: upcomingMovies.results })),
          catchError(error => of(MovieActions.loadUpcomingMoviesFailure({ error })))
        )
      )
    )
  );



}
