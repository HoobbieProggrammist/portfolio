import { Component } from '@angular/core';

@Component({
  selector: 'app-typescript-page',
  template: `
    <div class="page-wrapper">
      <section class="page-hero ts-hero">
        <div class="hero-icon"><i class="fas fa-code"></i></div>
        <h1 class="section-title">TypeScript</h1>
        <p class="section-subtitle" style="margin: 0 auto;">
          The strongly-typed superset of JavaScript that powers my Angular applications,
          providing compile-time safety and superior developer experience.
        </p>
      </section>

      <div class="page-content">
        <div class="content-section">
          <h2><i class="fas fa-shield-alt"></i> Why TypeScript?</h2>
          <p>
            TypeScript catches bugs at compile time rather than runtime, provides incredible
            IDE support with auto-completion and refactoring, and makes large codebases
            manageable. It's the language of Angular and the backbone of everything I build.
          </p>
        </div>

        <div class="content-section">
          <h2><i class="fas fa-star"></i> Key Features I Leverage</h2>
          <div class="cards-grid">
            <div class="card">
              <div class="card-icon">🔒</div>
              <h3>Static Typing</h3>
              <p>Defining explicit types for variables, function parameters, and return values to catch errors early in development.</p>
            </div>
            <div class="card">
              <div class="card-icon">📐</div>
              <h3>Interfaces & Types</h3>
              <p>Creating contracts for data shapes, API responses, and component props that ensure consistency across the codebase.</p>
            </div>
            <div class="card">
              <div class="card-icon">🔧</div>
              <h3>Generics</h3>
              <p>Building reusable, type-safe functions, services, and components that work with multiple data types.</p>
            </div>
            <div class="card">
              <div class="card-icon">🎯</div>
              <h3>Enums & Utility Types</h3>
              <p>Using enums for constants and utility types like Partial, Pick, and Omit for flexible type transformations.</p>
            </div>
            <div class="card">
              <div class="card-icon">🏗️</div>
              <h3>Decorators</h3>
              <p>Leveraging decorators extensively in Angular for components, services, pipes, and custom metadata.</p>
            </div>
            <div class="card">
              <div class="card-icon">📦</div>
              <h3>Module System</h3>
              <p>Organizing code with ES modules, barrel exports, and path aliases for clean import statements.</p>
            </div>
          </div>
        </div>

        <div class="content-section">
          <h2><i class="fas fa-code"></i> Code Example</h2>
          <p>Here's how I define type-safe models and services:</p>
          <div class="code-block">
            <code>// Strongly typed model
interface User {{ '{' }}
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'moderator';
{{ '}' }}

// Generic API response wrapper
interface ApiResponse&lt;T&gt; {{ '{' }}
  data: T;
  message: string;
  status: number;
{{ '}' }}

// Type-safe service method
getUsers(): Observable&lt;ApiResponse&lt;User[]&gt;&gt; {{ '{' }}
  return this.http.get&lt;ApiResponse&lt;User[]&gt;&gt;('/api/users');
{{ '}' }}</code>
          </div>
        </div>

        <div class="content-section">
          <h2><i class="fas fa-tools"></i> How I Use TypeScript</h2>
          <ul class="feature-list">
            <li><i class="fas fa-check-circle"></i> Defining strict interfaces for all API contracts</li>
            <li><i class="fas fa-check-circle"></i> Using generics for reusable service patterns</li>
            <li><i class="fas fa-check-circle"></i> Leveraging strict mode for maximum type safety</li>
            <li><i class="fas fa-check-circle"></i> Creating discriminated unions for state management</li>
            <li><i class="fas fa-check-circle"></i> Type narrowing with type guards and assertions</li>
            <li><i class="fas fa-check-circle"></i> Mapped and conditional types for advanced patterns</li>
          </ul>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .ts-hero::before {
      background: #3178c6;
    }
    .hero-icon {
      font-size: 4rem;
      color: #3178c6;
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
      color: #3178c6;
    }
    .content-section > p {
      color: var(--text-secondary);
      font-size: 1.05rem;
      line-height: 1.8;
      margin-bottom: 1.5rem;
    }
  `]
})
export class TypescriptPage {}
