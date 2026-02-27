import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  template: `
    <div class="page-wrapper">
      <!-- Hero Section -->
      <section class="hero">
        <div class="hero-bg-effects">
          <div class="orb orb-1"></div>
          <div class="orb orb-2"></div>
          <div class="orb orb-3"></div>
        </div>

        <div class="hero-content">
          <div class="hero-badge">
            <i class="fas fa-rocket"></i>
            <span>Full-Stack Developer</span>
          </div>

          <h1>
            Hi, I'm <span class="gradient-text">Your Name</span>
          </h1>

          <p class="hero-subtitle">
            I build modern, scalable web applications using <strong>Angular</strong> on the frontend
            and <strong>Spring Boot</strong> on the backend. Passionate about clean architecture,
            reactive programming, and crafting exceptional user experiences.
          </p>

          <div class="hero-actions">
            <a routerLink="/angular" class="btn btn-primary">
              <i class="fas fa-code"></i>
              Explore My Stack
            </a>
            <a href="#about" class="btn btn-outline">
              <i class="fas fa-user"></i>
              About Me
            </a>
          </div>

          <div class="hero-stats">
            <div class="stat">
              <span class="stat-number">3+</span>
              <span class="stat-label">Years Experience</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat">
              <span class="stat-number">10+</span>
              <span class="stat-label">Projects Built</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat">
              <span class="stat-number">6</span>
              <span class="stat-label">Core Technologies</span>
            </div>
          </div>
        </div>
      </section>

      <!-- About Section -->
      <section id="about" class="about-section">
        <div class="about-container">
          <div class="about-header">
            <span class="section-tag"><i class="fas fa-terminal"></i> about_me</span>
            <h2 class="section-title">Who I Am</h2>
            <p class="section-subtitle">
              A developer who thrives at the intersection of elegant code and great design.
            </p>
          </div>

          <div class="about-grid">
            <div class="about-text">
              <p>
                I'm a full-stack developer specializing in building robust web applications.
                My journey in software development has equipped me with expertise across the
                entire stack — from crafting pixel-perfect UIs with Angular to designing
                resilient microservices with Spring Boot.
              </p>
              <p>
                I believe in writing clean, maintainable code that solves real problems.
                Whether it's implementing reactive data flows with RxJS, building type-safe
                applications with TypeScript, or designing RESTful APIs, I approach every
                challenge with attention to detail and a commitment to best practices.
              </p>
              <p>
                When I'm not coding, I'm exploring new technologies, contributing to open-source
                projects, and continuously learning to stay at the cutting edge of web development.
              </p>
            </div>

            <div class="about-info">
              <div class="info-card">
                <div class="info-icon"><i class="fas fa-map-marker-alt"></i></div>
                <div>
                  <h4>Location</h4>
                  <p>Your City, Country</p>
                </div>
              </div>
              <div class="info-card">
                <div class="info-icon"><i class="fas fa-envelope"></i></div>
                <div>
                  <h4>Email</h4>
                  <p>your.email&#64;example.com</p>
                </div>
              </div>
              <div class="info-card">
                <div class="info-icon"><i class="fas fa-graduation-cap"></i></div>
                <div>
                  <h4>Education</h4>
                  <p>Computer Science Degree</p>
                </div>
              </div>
              <div class="info-card">
                <div class="info-icon"><i class="fas fa-briefcase"></i></div>
                <div>
                  <h4>Status</h4>
                  <p>Open to Opportunities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Tech Stack -->
      <section class="tech-section">
        <div class="tech-container">
          <div class="tech-header">
            <span class="section-tag"><i class="fas fa-layer-group"></i> tech_stack</span>
            <h2 class="section-title">My Technology Arsenal</h2>
            <p class="section-subtitle">
              Click on any technology to dive deeper into how I use it.
            </p>
          </div>

          <div class="tech-grid">
            <a routerLink="/angular" class="tech-card angular-card">
              <div class="tech-card-icon"><i class="fab fa-angular"></i></div>
              <h3>Angular</h3>
              <p>Component-based architecture, signals, standalone components, and reactive forms.</p>
              <span class="tech-card-link">Learn more <i class="fas fa-arrow-right"></i></span>
            </a>

            <a routerLink="/typescript" class="tech-card ts-card">
              <div class="tech-card-icon"><i class="fas fa-code"></i></div>
              <h3>TypeScript</h3>
              <p>Type safety, interfaces, generics, and advanced type utilities for robust code.</p>
              <span class="tech-card-link">Learn more <i class="fas fa-arrow-right"></i></span>
            </a>

            <a routerLink="/rxjs" class="tech-card rxjs-card">
              <div class="tech-card-icon"><i class="fas fa-stream"></i></div>
              <h3>RxJS</h3>
              <p>Observables, operators, reactive patterns for async data management.</p>
              <span class="tech-card-link">Learn more <i class="fas fa-arrow-right"></i></span>
            </a>

            <a routerLink="/springboot" class="tech-card spring-card">
              <div class="tech-card-icon"><i class="fas fa-leaf"></i></div>
              <h3>Spring Boot</h3>
              <p>RESTful APIs, JPA, security, and microservice architecture on the JVM.</p>
              <span class="tech-card-link">Learn more <i class="fas fa-arrow-right"></i></span>
            </a>

            <a routerLink="/html-css" class="tech-card htmlcss-card">
              <div class="tech-card-icon"><i class="fab fa-html5"></i></div>
              <h3>HTML & CSS</h3>
              <p>Semantic markup, CSS Grid, Flexbox, animations, and responsive design.</p>
              <span class="tech-card-link">Learn more <i class="fas fa-arrow-right"></i></span>
            </a>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="footer">
        <div class="footer-content">
          <p>Built with <i class="fas fa-heart" style="color: var(--accent-secondary)"></i> using Angular</p>
          <div class="footer-links">
            <a href="#"><i class="fab fa-github"></i></a>
            <a href="#"><i class="fab fa-linkedin"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
          </div>
        </div>
      </footer>
    </div>
  `,
  styles: [`
    /* ===== Hero ===== */
    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: hidden;
      padding: 2rem;
    }

    .hero-bg-effects {
      position: absolute;
      inset: 0;
      pointer-events: none;
    }

    .orb {
      position: absolute;
      border-radius: 50%;
      filter: blur(100px);
      opacity: 0.12;
    }
    .orb-1 {
      width: 500px; height: 500px;
      background: var(--accent-primary);
      top: -10%; left: -5%;
      animation: float 8s ease-in-out infinite;
    }
    .orb-2 {
      width: 400px; height: 400px;
      background: var(--accent-secondary);
      bottom: -10%; right: -5%;
      animation: float 10s ease-in-out infinite reverse;
    }
    .orb-3 {
      width: 300px; height: 300px;
      background: var(--accent-tertiary);
      top: 40%; left: 60%;
      animation: float 12s ease-in-out infinite;
    }

    @keyframes float {
      0%, 100% { transform: translate(0, 0); }
      33% { transform: translate(30px, -30px); }
      66% { transform: translate(-20px, 20px); }
    }

    .hero-content {
      text-align: center;
      position: relative;
      z-index: 1;
      max-width: 800px;
    }

    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: rgba(108, 99, 255, 0.15);
      border: 1px solid rgba(108, 99, 255, 0.3);
      border-radius: 100px;
      padding: 0.5rem 1.25rem;
      font-size: 0.85rem;
      font-weight: 500;
      color: var(--accent-primary);
      margin-bottom: 2rem;
    }

    .hero-content h1 {
      font-size: 4rem;
      font-weight: 900;
      line-height: 1.1;
      letter-spacing: -2px;
      margin-bottom: 1.5rem;
    }

    .hero-subtitle {
      font-size: 1.2rem;
      color: var(--text-secondary);
      line-height: 1.8;
      margin-bottom: 2.5rem;
    }

    .hero-subtitle strong {
      color: var(--text-primary);
    }

    .hero-actions {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
      margin-bottom: 4rem;
    }

    .btn {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.85rem 1.75rem;
      border-radius: 10px;
      font-size: 0.95rem;
      font-weight: 600;
      transition: all 0.3s ease;
      cursor: pointer;
      border: none;
    }

    .btn-primary {
      background: var(--gradient-primary);
      color: white;
    }
    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 30px rgba(108, 99, 255, 0.4);
    }

    .btn-outline {
      background: transparent;
      color: var(--text-primary);
      border: 1px solid var(--border-color);
    }
    .btn-outline:hover {
      border-color: var(--accent-primary);
      background: rgba(108, 99, 255, 0.1);
      transform: translateY(-2px);
    }

    .hero-stats {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;
    }

    .stat { text-align: center; }

    .stat-number {
      display: block;
      font-size: 2rem;
      font-weight: 800;
      background: var(--gradient-primary);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .stat-label {
      font-size: 0.8rem;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: 500;
    }

    .stat-divider {
      width: 1px;
      height: 40px;
      background: var(--border-color);
    }

    /* ===== About ===== */
    .about-section, .tech-section {
      padding: 6rem 2rem;
    }

    .about-container, .tech-container {
      max-width: 1100px;
      margin: 0 auto;
    }

    .about-header, .tech-header {
      text-align: center;
      margin-bottom: 3rem;
    }

    .section-tag {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      font-family: 'Fira Code', monospace;
      font-size: 0.85rem;
      color: var(--accent-tertiary);
      margin-bottom: 1rem;
    }

    .about-grid {
      display: grid;
      grid-template-columns: 1.4fr 1fr;
      gap: 3rem;
      align-items: start;
    }

    .about-text p {
      color: var(--text-secondary);
      margin-bottom: 1.25rem;
      font-size: 1.05rem;
    }

    .about-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .info-card {
      display: flex;
      align-items: center;
      gap: 1rem;
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: var(--radius);
      padding: 1.25rem;
      transition: all 0.3s ease;
    }

    .info-card:hover {
      border-color: var(--accent-primary);
      transform: translateX(5px);
    }

    .info-icon {
      width: 44px;
      height: 44px;
      border-radius: 10px;
      background: rgba(108, 99, 255, 0.15);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--accent-primary);
      flex-shrink: 0;
    }

    .info-card h4 {
      font-size: 0.8rem;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.5px;
      font-weight: 600;
    }

    .info-card p {
      color: var(--text-primary);
      font-weight: 500;
      font-size: 0.95rem;
    }

    /* ===== Tech Grid ===== */
    .tech-section {
      background: var(--bg-secondary);
    }

    .tech-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.5rem;
    }

    .tech-card {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: var(--radius-lg);
      padding: 2rem;
      transition: all 0.3s ease;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }

    .tech-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .angular-card::before { background: #dd0031; }
    .ts-card::before { background: #3178c6; }
    .rxjs-card::before { background: #d81b60; }
    .spring-card::before { background: #6db33f; }
    .htmlcss-card::before { background: linear-gradient(90deg, #e44d26, #264de4); }

    .tech-card:hover {
      transform: translateY(-6px);
      border-color: var(--accent-primary);
      box-shadow: var(--shadow-glow);
    }

    .tech-card:hover::before {
      opacity: 1;
    }

    .tech-card-icon {
      width: 56px;
      height: 56px;
      border-radius: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      margin-bottom: 1.25rem;
    }

    .angular-card .tech-card-icon { background: rgba(221, 0, 49, 0.15); color: #dd0031; }
    .ts-card .tech-card-icon { background: rgba(49, 120, 198, 0.15); color: #3178c6; }
    .rxjs-card .tech-card-icon { background: rgba(216, 27, 96, 0.15); color: #d81b60; }
    .spring-card .tech-card-icon { background: rgba(109, 179, 63, 0.15); color: #6db33f; }
    .htmlcss-card .tech-card-icon { background: rgba(228, 77, 38, 0.15); color: #e44d26; }

    .tech-card h3 {
      font-size: 1.3rem;
      font-weight: 700;
      margin-bottom: 0.75rem;
    }

    .tech-card p {
      color: var(--text-secondary);
      font-size: 0.9rem;
      margin-bottom: 1.25rem;
    }

    .tech-card-link {
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--accent-primary);
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      transition: gap 0.3s ease;
    }

    .tech-card:hover .tech-card-link {
      gap: 0.75rem;
    }

    /* ===== Footer ===== */
    .footer {
      border-top: 1px solid var(--border-color);
      padding: 2rem;
    }

    .footer-content {
      max-width: 1100px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .footer-content p {
      color: var(--text-muted);
      font-size: 0.9rem;
    }

    .footer-links {
      display: flex;
      gap: 1rem;
    }

    .footer-links a {
      width: 40px;
      height: 40px;
      border-radius: 10px;
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--text-secondary);
      transition: all 0.3s ease;
    }

    .footer-links a:hover {
      border-color: var(--accent-primary);
      color: var(--accent-primary);
      transform: translateY(-2px);
    }

    /* ===== Responsive ===== */
    @media (max-width: 768px) {
      .hero-content h1 {
        font-size: 2.5rem;
        letter-spacing: -1px;
      }

      .hero-subtitle {
        font-size: 1rem;
      }

      .hero-stats {
        gap: 1.25rem;
      }

      .stat-number {
        font-size: 1.5rem;
      }

      .about-grid {
        grid-template-columns: 1fr;
      }

      .footer-content {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
      }
    }
  `]
})
export class Home {}
