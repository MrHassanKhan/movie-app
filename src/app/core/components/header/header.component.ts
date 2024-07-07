import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  navList = [
    { name: "Home",  url: "/"},
    { name: "TV Shows",  url: "/tv-shows"},
    { name: "News & Popular",  url: "/news-popular"},
    { name: "My List",  url: "/my-list"},
  ]

  route = inject(ActivatedRoute);
  fb = inject(FormBuilder);
  router = inject(Router);
  private isMenuOpenSubject = new BehaviorSubject<boolean>(false);
  isMenuOpen$ = this.isMenuOpenSubject.asObservable();

  searchForm = this.fb.group({
    search: ['', Validators.required]
  });

  constructor() {
    this.route.queryParams.pipe(takeUntilDestroyed()).subscribe((params) => {
      if(params['query']) {
        this.searchForm.get('search')?.setValue(params['query']);
      }
   })
   }

  onSubmit(){
    this.router.navigate(['/search'], { queryParams: { query: this.searchForm.value.search } });
  }

  toggleMenu() {
    this.isMenuOpenSubject.next(!this.isMenuOpenSubject.value);
  }
}
