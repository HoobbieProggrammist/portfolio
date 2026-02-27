import { Component } from '@angular/core';

@Component({
  selector: 'app-springboot-page',
  template: `
    <div class="page-wrapper">
      <section class="page-hero spring-hero">
        <div class="hero-icon"><i class="fas fa-leaf"></i></div>
        <h1 class="section-title">Spring Boot</h1>
        <p class="section-subtitle" style="margin: 0 auto;">
          The robust Java-based backend framework I use to build production-ready
          REST APIs, microservices, and enterprise applications that power my Angular frontends.
        </p>
      </section>

      <div class="page-content">
        <div class="content-section">
          <h2><i class="fas fa-server"></i> Why Spring Boot?</h2>
          <p>
            Spring Boot dramatically simplifies Java application development with auto-configuration,
            embedded servers, and production-ready features. Combined with Angular on the frontend,
            it creates a powerful full-stack architecture that scales from small projects to
            enterprise-level systems.
          </p>
        </div>

        <div class="content-section">
          <h2><i class="fas fa-star"></i> Key Features I Use</h2>
          <div class="cards-grid">
            <div class="card">
              <div class="card-icon">🌐</div>
              <h3>REST APIs</h3>
              <p>Building clean, well-documented RESTful endpoints with Spring Web MVC, request mapping, and proper HTTP status codes.</p>
            </div>
            <div class="card">
              <div class="card-icon">🗄️</div>
              <h3>Spring Data JPA</h3>
              <p>Database operations with JPA repositories, custom queries, pagination, and entity relationship mapping.</p>
            </div>
            <div class="card">
              <div class="card-icon">🔐</div>
              <h3>Spring Security</h3>
              <p>Implementing JWT authentication, role-based authorization, CORS configuration, and OAuth2 integration.</p>
            </div>
            <div class="card">
              <div class="card-icon">✅</div>
              <h3>Validation & Error Handling</h3>
              <p>Request validation with Bean Validation, global exception handling, and consistent error response formats.</p>
            </div>
            <div class="card">
              <div class="card-icon">🧪</div>
              <h3>Testing</h3>
              <p>Writing integration tests with MockMvc, unit tests with Mockito, and repository tests with H2 database.</p>
            </div>
            <div class="card">
              <div class="card-icon">📊</div>
              <h3>Actuator & Monitoring</h3>
              <p>Production monitoring with Spring Actuator health checks, metrics endpoints, and application insights.</p>
            </div>
          </div>
        </div>

        <div class="content-section">
          <h2><i class="fas fa-code"></i> Code Example</h2>
          <p>Here's a typical REST controller connected to an Angular frontend:</p>
          <div class="code-block">
            <code>&#64;RestController
&#64;RequestMapping("/api/users")
&#64;CrossOrigin(origins = "http://localhost:4200")
public class UserController {{ '{' }}

    private final UserService userService;

    public UserController(UserService userService) {{ '{' }}
        this.userService = userService;
    {{ '}' }}

    &#64;GetMapping
    public ResponseEntity&lt;List&lt;UserDTO&gt;&gt; getAllUsers() {{ '{' }}
        return ResponseEntity.ok(userService.findAll());
    {{ '}' }}

    &#64;PostMapping
    public ResponseEntity&lt;UserDTO&gt; createUser(
        &#64;Valid &#64;RequestBody CreateUserRequest request
    ) {{ '{' }}
        UserDTO created = userService.create(request);
        return ResponseEntity.status(HttpStatus.CREATED)
                             .body(created);
    {{ '}' }}
{{ '}' }}</code>
          </div>
        </div>

        <!-- Architecture -->
        <div class="content-section">
          <h2><i class="fas fa-sitemap"></i> Architecture Pattern</h2>
          <div class="architecture-flow">
            <div class="arch-item">
              <div class="arch-label">Angular Frontend</div>
              <div class="arch-desc">Components &amp; Services</div>
            </div>
            <div class="arch-arrow"><i class="fas fa-arrow-right"></i></div>
            <div class="arch-item">
              <div class="arch-label">REST API</div>
              <div class="arch-desc">Controllers</div>
            </div>
            <div class="arch-arrow"><i class="fas fa-arrow-right"></i></div>
            <div class="arch-item">
              <div class="arch-label">Business Logic</div>
              <div class="arch-desc">Services</div>
            </div>
            <div class="arch-arrow"><i class="fas fa-arrow-right"></i></div>
            <div class="arch-item">
              <div class="arch-label">Data Layer</div>
              <div class="arch-desc">JPA Repositories</div>
            </div>
          </div>
        </div>

        <div class="content-section">
          <h2><i class="fas fa-tools"></i> How I Use Spring Boot</h2>
          <ul class="feature-list">
            <li><i class="fas fa-check-circle"></i> Building RESTful backends for Angular SPAs</li>
            <li><i class="fas fa-check-circle"></i> JWT authentication with Spring Security</li>
            <li><i class="fas fa-check-circle"></i> Database design with JPA entity relationships</li>
            <li><i class="fas fa-check-circle"></i> DTO pattern for clean API contracts</li>
            <li><i class="fas fa-check-circle"></i> Global exception handling with ControllerAdvice</li>
            <li><i class="fas fa-check-circle"></i> API documentation with Swagger/OpenAPI</li>
          </ul>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .spring-hero::before {
      background: #6db33f;
    }
    .hero-icon {
      font-size: 4rem;
      color: #6db33f;
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
      color: #6db33f;
    }
    .content-section > p {
      color: var(--text-secondary);
      font-size: 1.05rem;
      line-height: 1.8;
      margin-bottom: 1.5rem;
    }

    .architecture-flow {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      flex-wrap: wrap;
      margin-top: 1.5rem;
      padding: 2rem;
    }

    .arch-item {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: var(--radius);
      padding: 1.25rem 1.5rem;
      text-align: center;
      min-width: 140px;
      transition: all 0.3s ease;
    }

    .arch-item:hover {
      border-color: #6db33f;
      transform: translateY(-3px);
    }

    .arch-label {
      font-weight: 700;
      font-size: 0.95rem;
      margin-bottom: 0.25rem;
    }

    .arch-desc {
      color: var(--text-muted);
      font-size: 0.8rem;
    }

    .arch-arrow {
      color: var(--accent-tertiary);
      font-size: 1.25rem;
    }

    @media (max-width: 768px) {
      .architecture-flow {
        flex-direction: column;
      }
      .arch-arrow {
        transform: rotate(90deg);
      }
    }
  `]
})
export class SpringbootPage {}
