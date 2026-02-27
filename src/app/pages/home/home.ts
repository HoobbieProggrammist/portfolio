import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  template: `
    <div class="blank-page">
      <p>it works</p>
    </div>
  `,
  styles: [`
    .blank-page {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      margin: 0;
      padding: 0;
    }
    
    .blank-page p {
      font-size: 2rem;
      margin: 0;
    }
  `]
})
export class Home {}
