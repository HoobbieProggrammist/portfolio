import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { AngularPage } from './pages/angular-page/angular-page';
import { TypescriptPage } from './pages/typescript-page/typescript-page';
import { RxjsPage } from './pages/rxjs-page/rxjs-page';
import { SpringbootPage } from './pages/springboot-page/springboot-page';
import { HtmlCssPage } from './pages/html-css-page/html-css-page';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'angular', component: AngularPage },
  { path: 'typescript', component: TypescriptPage },
  { path: 'rxjs', component: RxjsPage },
  { path: 'springboot', component: SpringbootPage },
  { path: 'html-css', component: HtmlCssPage },
  { path: '**', redirectTo: '' }
];
