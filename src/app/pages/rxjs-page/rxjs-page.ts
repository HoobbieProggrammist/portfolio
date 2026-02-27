import { Component } from '@angular/core';

@Component({
  selector: 'app-rxjs-page',
  template: `
    <div class="page-wrapper">
      <section class="page-hero rxjs-hero">
        <div class="hero-icon"><i class="fas fa-stream"></i></div>
        <h1 class="section-title">RxJS</h1>
        <p class="section-subtitle" style="margin: 0 auto;">
          The reactive programming library that powers Angular's async operations,
          enabling elegant handling of events, HTTP requests, and real-time data streams.
        </p>
      </section>

      <div class="page-content">
        <div class="content-section">
          <h2><i class="fas fa-wave-square"></i> Why RxJS?</h2>
          <p>
            RxJS transforms asynchronous programming from callback chaos into clean, composable
            data pipelines. With observables and operators, I can handle complex async scenarios
            like debounced search, real-time WebSocket data, and coordinated HTTP requests
            with elegance and precision.
          </p>
        </div>

        <div class="content-section">
          <h2><i class="fas fa-star"></i> Key Concepts I Use</h2>
          <div class="cards-grid">
            <div class="card">
              <div class="card-icon">🔄</div>
              <h3>Observables</h3>
              <p>The foundation of reactive programming — lazy push-based collections that represent values over time.</p>
            </div>
            <div class="card">
              <div class="card-icon">🔀</div>
              <h3>Transformation Operators</h3>
              <p>Using map, switchMap, mergeMap, and concatMap to transform and flatten observable streams.</p>
            </div>
            <div class="card">
              <div class="card-icon">🎛️</div>
              <h3>Filtering Operators</h3>
              <p>Applying filter, distinctUntilChanged, debounceTime, and throttleTime to control data flow.</p>
            </div>
            <div class="card">
              <div class="card-icon">🔗</div>
              <h3>Combination Operators</h3>
              <p>Merging multiple streams with combineLatest, forkJoin, merge, and withLatestFrom.</p>
            </div>
            <div class="card">
              <div class="card-icon">⚠️</div>
              <h3>Error Handling</h3>
              <p>Graceful error recovery with catchError, retry, retryWhen, and custom error strategies.</p>
            </div>
            <div class="card">
              <div class="card-icon">📡</div>
              <h3>Subjects</h3>
              <p>Using BehaviorSubject, ReplaySubject, and AsyncSubject for multicasting and state management.</p>
            </div>
          </div>
        </div>

        <div class="content-section">
          <h2><i class="fas fa-code"></i> Code Example</h2>
          <p>Here's a reactive search implementation with debouncing:</p>
          <div class="code-block">
            <code>// Reactive search with debounce
searchControl = new FormControl('');

results$ = this.searchControl.valueChanges.pipe(
  debounceTime(300),
  distinctUntilChanged(),
  filter(term =&gt; term.length &gt;= 2),
  switchMap(term =&gt;
    this.searchService.search(term).pipe(
      catchError(() =&gt; of([]))
    )
  )
);

// Combining multiple API calls
userData$ = forkJoin({{ '{' }}
  profile: this.userService.getProfile(),
  posts: this.postService.getUserPosts(),
  stats: this.statsService.getUserStats()
{{ '}' }});</code>
          </div>
        </div>

        <div class="content-section">
          <h2><i class="fas fa-tools"></i> How I Use RxJS</h2>
          <ul class="feature-list">
            <li><i class="fas fa-check-circle"></i> Debounced search inputs with switchMap</li>
            <li><i class="fas fa-check-circle"></i> Coordinating parallel API requests with forkJoin</li>
            <li><i class="fas fa-check-circle"></i> Real-time data updates with WebSocket streams</li>
            <li><i class="fas fa-check-circle"></i> State management using BehaviorSubject stores</li>
            <li><i class="fas fa-check-circle"></i> Auto-retry failed HTTP requests with backoff</li>
            <li><i class="fas fa-check-circle"></i> Unsubscribe patterns with takeUntilDestroyed</li>
          </ul>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .rxjs-hero::before {
      background: #d81b60;
    }
    .hero-icon {
      font-size: 4rem;
      color: #d81b60;
      margin-bottom: 1.5rem;
    }
    .content-section {
      margin-bottom: 3rem;
    }
    .content-section h2 {
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }
    .content-section h2 i {
      color: #d81b60;
    }
    .content-section > p {
      color: var(--text-secondary);
      font-size: 1.05rem;
      line-height: 1.8;
      margin-bottom: 1.5rem;
    }
  `]
})
export class RxjsPage {}
