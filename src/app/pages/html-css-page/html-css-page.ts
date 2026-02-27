import { Component } from '@angular/core';

@Component({
  selector: 'app-html-css-page',
  template: `
    <div class="page-wrapper">
      <section class="page-hero htmlcss-hero">
        <div class="hero-icon">
          <i class="fab fa-html5"></i>
          <i class="fab fa-css3-alt"></i>
        </div>
        <h1 class="section-title">HTML & CSS</h1>
        <p class="section-subtitle" style="margin: 0 auto;">
          The fundamental building blocks of the web — semantic markup and modern styling
          techniques that bring my Angular components to life with beautiful, responsive designs.
        </p>
      </section>

      <div class="page-content">
        <div class="content-section">
          <h2><i class="fas fa-palette"></i> The Foundation of Everything</h2>
          <p>
            While frameworks and tools come and go, HTML and CSS remain the bedrock of web
            development. I focus on writing semantic, accessible HTML and modern CSS that
            leverages Grid, Flexbox, custom properties, and animations to create interfaces
            that are both beautiful and performant.
          </p>
        </div>

        <div class="content-section">
          <h2><i class="fas fa-star"></i> Key Skills & Techniques</h2>
          <div class="cards-grid">
            <div class="card">
              <div class="card-icon">📐</div>
              <h3>CSS Grid & Flexbox</h3>
              <p>Creating complex, responsive layouts with CSS Grid for 2D layouts and Flexbox for component-level alignment.</p>
            </div>
            <div class="card">
              <div class="card-icon">📱</div>
              <h3>Responsive Design</h3>
              <p>Mobile-first approach with media queries, fluid typography, and container queries for adaptive UIs.</p>
            </div>
            <div class="card">
              <div class="card-icon">🎨</div>
              <h3>CSS Custom Properties</h3>
              <p>Theme systems with CSS variables for consistent design tokens, dark mode, and runtime customization.</p>
            </div>
            <div class="card">
              <div class="card-icon">✨</div>
              <h3>Animations & Transitions</h3>
              <p>Smooth, performant animations using CSS transitions, keyframes, and transform properties.</p>
            </div>
            <div class="card">
              <div class="card-icon">♿</div>
              <h3>Accessibility (a11y)</h3>
              <p>Semantic HTML elements, ARIA attributes, keyboard navigation, and screen reader compatibility.</p>
            </div>
            <div class="card">
              <div class="card-icon">🏗️</div>
              <h3>BEM & Architecture</h3>
              <p>Organized CSS with BEM naming, component scoping in Angular, and utility-first patterns.</p>
            </div>
          </div>
        </div>

        <div class="content-section">
          <h2><i class="fas fa-code"></i> Code Example</h2>
          <p>Here's a modern responsive card layout with CSS Grid and custom properties:</p>
          <div class="code-block">
            <code>&lt;!-- Semantic HTML structure --&gt;
&lt;section class="project-grid" role="list"&gt;
  &lt;article class="project-card" role="listitem"&gt;
    &lt;header&gt;
      &lt;h3&gt;Project Title&lt;/h3&gt;
    &lt;/header&gt;
    &lt;p&gt;Description...&lt;/p&gt;
    &lt;footer&gt;
      &lt;span class="tag"&gt;Angular&lt;/span&gt;
      &lt;span class="tag"&gt;Spring Boot&lt;/span&gt;
    &lt;/footer&gt;
  &lt;/article&gt;
&lt;/section&gt;

/* Modern CSS */
.project-grid {{ '{' }}
  display: grid;
  grid-template-columns:
    repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-lg);
{{ '}' }}

.project-card {{ '{' }}
  border-radius: var(--radius);
  transition: transform 0.3s ease;

  &amp;:hover {{ '{' }}
    transform: translateY(-4px);
  {{ '}' }}
{{ '}' }}</code>
          </div>
        </div>

        <div class="content-section">
          <h2><i class="fas fa-tools"></i> How I Use HTML & CSS</h2>
          <ul class="feature-list">
            <li><i class="fas fa-check-circle"></i> Semantic HTML for SEO and accessibility</li>
            <li><i class="fas fa-check-circle"></i> CSS Grid & Flexbox for all layouts</li>
            <li><i class="fas fa-check-circle"></i> Custom properties for theming systems</li>
            <li><i class="fas fa-check-circle"></i> Angular component-scoped styles</li>
            <li><i class="fas fa-check-circle"></i> Smooth animations and micro-interactions</li>
            <li><i class="fas fa-check-circle"></i> Mobile-first responsive design patterns</li>
          </ul>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .htmlcss-hero::before {
      background: linear-gradient(135deg, #e44d26, #264de4);
    }
    .hero-icon {
      font-size: 4rem;
      margin-bottom: 1.5rem;
      display: flex;
      justify-content: center;
      gap: 1rem;
    }
    .hero-icon .fa-html5 {
      color: #e44d26;
    }
    .hero-icon .fa-css3-alt {
      color: #264de4;
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
      color: #e44d26;
    }
    .content-section > p {
      color: var(--text-secondary);
      font-size: 1.05rem;
      line-height: 1.8;
      margin-bottom: 1.5rem;
    }
  `]
})
export class HtmlCssPage {}
