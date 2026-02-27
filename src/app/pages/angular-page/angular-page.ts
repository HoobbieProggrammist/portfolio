import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-page',
  template: `
    <div class="page-wrapper">
      <section class="page-hero angular-hero">
        <div class="hero-icon"><i class="fab fa-angular"></i></div>
        <h1 class="section-title">Angular</h1>
        <p class="section-subtitle" style="margin: 0 auto;">
          The powerful, full-featured framework I use to build scalable, enterprise-grade
          single-page applications with a component-driven architecture.
        </p>
      </section>

      <div class="page-content">
        <!-- Overview -->
        <div class="content-section">
          <h2><i class="fas fa-bullseye"></i> Why Angular?</h2>
          <p>
            Angular provides everything out of the box — routing, forms, HTTP client, dependency
            injection, and a powerful CLI. It's opinionated in a way that enforces structure and
            consistency, making it ideal for large-scale applications that need to be maintained
            by teams over time.
          </p>
        </div>

        <!-- Key Features -->
        <div class="content-section">
          <h2><i class="fas fa-star"></i> Key Features I Use</h2>
          <div class="cards-grid">
            <div class="card">
              <div class="card-icon">🧩</div>
              <h3>Standalone Components</h3>
              <p>Building modular, self-contained components without NgModules for cleaner architecture and better tree-shaking.</p>
            </div>
            <div class="card">
              <div class="card-icon">📡</div>
              <h3>Signals</h3>
              <p>Using Angular's new reactivity model with signals for fine-grained change detection and improved performance.</p>
            </div>
            <div class="card">
              <div class="card-icon">🛣️</div>
              <h3>Router & Lazy Loading</h3>
              <p>Implementing complex navigation with route guards, resolvers, and lazy-loaded feature modules for fast initial loads.</p>
            </div>
            <div class="card">
              <div class="card-icon">📋</div>
              <h3>Reactive Forms</h3>
              <p>Building dynamic, validated forms with FormBuilder, custom validators, and reactive form patterns.</p>
            </div>
            <div class="card">
              <div class="card-icon">💉</div>
              <h3>Dependency Injection</h3>
              <p>Leveraging Angular's powerful DI system for service management, testing, and decoupled architectures.</p>
            </div>
            <div class="card">
              <div class="card-icon">🔗</div>
              <h3>HttpClient & Interceptors</h3>
              <p>Communicating with Spring Boot APIs using HttpClient with interceptors for auth tokens, error handling, and logging.</p>
            </div>
          </div>
        </div>

        <!-- Code Example -->
        <div class="content-section">
          <h2><i class="fas fa-code"></i> Code Example</h2>
          <p>Here's a typical standalone component using signals and dependency injection:</p>
          <div class="code-block">
            <code>&#64;Component({{ '{' }}
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  template: \`
    &lt;div *for="let user of users()"&gt;
      {{ '{{' }} user.name {{ '}}' }}
    &lt;/div&gt;
  \`
{{ '}' }})
export class UserListComponent {{ '{' }}
  private userService = inject(UserService);
  users = signal&lt;User[]&gt;([]);

  constructor() {{ '{' }}
    this.userService.getAll().subscribe(
      data =&gt; this.users.set(data)
    );
  {{ '}' }}
{{ '}' }}</code>
          </div>
        </div>

        <!-- How I Use It -->
        <div class="content-section">
          <h2><i class="fas fa-tools"></i> How I Use Angular</h2>
          <ul class="feature-list">
            <li><i class="fas fa-check-circle"></i> Building SPAs with clean component hierarchies</li>
            <li><i class="fas fa-check-circle"></i> Connecting to Spring Boot REST APIs</li>
            <li><i class="fas fa-check-circle"></i> Implementing JWT-based authentication flows</li>
            <li><i class="fas fa-check-circle"></i> Creating reusable UI component libraries</li>
            <li><i class="fas fa-check-circle"></i> Using Angular CLI for scaffolding & builds</li>
            <li><i class="fas fa-check-circle"></i> Writing unit tests with Jasmine & Karma</li>
          </ul>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .angular-hero::before {
      background: #dd0031;
    }
    .hero-icon {
      font-size: 4rem;
      color: #dd0031;
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
      color: #dd0031;
    }
    .content-section > p {
      color: var(--text-secondary);
      font-size: 1.05rem;
      line-height: 1.8;
      margin-bottom: 1.5rem;
    }
  `]
})
export class AngularPage {}
