import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  template: `
    <nav [class.scrolled]="isScrolled()">
      <div class="nav-container">
        <a routerLink="/" class="logo">
          <span class="logo-bracket">&lt;</span>
          <span class="logo-text">Portfolio</span>
          <span class="logo-bracket">/&gt;</span>
        </a>

        <button class="hamburger" (click)="toggleMenu()" [class.active]="menuOpen()">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul class="nav-links" [class.open]="menuOpen()">
          <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" (click)="closeMenu()">Home</a></li>
          <li><a routerLink="/angular" routerLinkActive="active" (click)="closeMenu()">Angular</a></li>
          <li><a routerLink="/typescript" routerLinkActive="active" (click)="closeMenu()">TypeScript</a></li>
          <li><a routerLink="/rxjs" routerLinkActive="active" (click)="closeMenu()">RxJS</a></li>
          <li><a routerLink="/springboot" routerLinkActive="active" (click)="closeMenu()">Spring Boot</a></li>
          <li><a routerLink="/html-css" routerLinkActive="active" (click)="closeMenu()">HTML & CSS</a></li>
        </ul>
      </div>
    </nav>
  `,
  styles: [`
    nav {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      padding: 1rem 2rem;
      transition: all 0.3s ease;
      background: transparent;
    }

    nav.scrolled {
      background: rgba(10, 10, 15, 0.92);
      backdrop-filter: blur(20px);
      border-bottom: 1px solid var(--border-color);
      padding: 0.75rem 2rem;
    }

    .nav-container {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .logo {
      font-size: 1.25rem;
      font-weight: 700;
      letter-spacing: -0.5px;
      transition: all 0.3s ease;
    }

    .logo:hover {
      transform: scale(1.05);
    }

    .logo-bracket {
      color: var(--accent-primary);
      font-family: 'Fira Code', monospace;
    }

    .logo-text {
      color: var(--text-primary);
      margin: 0 2px;
    }

    .nav-links {
      display: flex;
      list-style: none;
      gap: 0.25rem;
    }

    .nav-links a {
      padding: 0.5rem 1rem;
      border-radius: 8px;
      font-size: 0.9rem;
      font-weight: 500;
      color: var(--text-secondary);
      transition: all 0.3s ease;
      position: relative;
    }

    .nav-links a:hover {
      color: var(--text-primary);
      background: rgba(108, 99, 255, 0.1);
    }

    .nav-links a.active {
      color: var(--accent-primary);
      background: rgba(108, 99, 255, 0.15);
    }

    .hamburger {
      display: none;
      flex-direction: column;
      gap: 5px;
      background: none;
      border: none;
      cursor: pointer;
      padding: 5px;
      z-index: 1001;
    }

    .hamburger span {
      width: 24px;
      height: 2px;
      background: var(--text-primary);
      transition: all 0.3s ease;
      border-radius: 2px;
    }

    .hamburger.active span:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }
    .hamburger.active span:nth-child(2) {
      opacity: 0;
    }
    .hamburger.active span:nth-child(3) {
      transform: rotate(-45deg) translate(5px, -5px);
    }

    @media (max-width: 768px) {
      .hamburger {
        display: flex;
      }

      .nav-links {
        position: fixed;
        top: 0;
        right: -100%;
        width: 280px;
        height: 100vh;
        background: var(--bg-secondary);
        flex-direction: column;
        padding: 5rem 2rem 2rem;
        gap: 0.5rem;
        transition: right 0.3s ease;
        border-left: 1px solid var(--border-color);
      }

      .nav-links.open {
        right: 0;
      }

      .nav-links a {
        font-size: 1.05rem;
        padding: 0.75rem 1rem;
      }
    }
  `]
})
export class Navbar {
  isScrolled = signal(false);
  menuOpen = signal(false);

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 20);
  }

  toggleMenu() {
    this.menuOpen.update(v => !v);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }
}
