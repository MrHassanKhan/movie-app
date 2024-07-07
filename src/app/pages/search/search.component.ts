import { Component, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MovieService } from 'src/app/shared/services/movie.service';
import { SearchActions, fromSearch } from 'src/app/store/search';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  route = inject(ActivatedRoute);
  store = inject(Store);

  movies$ = this.store.select(fromSearch.selectMovies);
  tvShows$ = this.store.select(fromSearch.selectTvShows);

  query: string = '';
  constructor() {
    this.route.queryParams.pipe(takeUntilDestroyed()).subscribe((params) => {
       this.query = params['query'];
      if (this.query) {
        this.search(this.query);
      }
    })
  }
  ngOnInit() {
  }
  search(query: string) {
    this.store.dispatch(SearchActions.searchMovies({ query }));
    this.store.dispatch(SearchActions.searchTvShows({ query }));
  }
}
