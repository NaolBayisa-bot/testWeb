import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { OneVas } from './pages/products/one-vas/one-vas';
import { SmsEthiopia } from './pages/products/sms-ethiopia/sms-ethiopia';
import { Aletcloud } from './pages/products/aletcloud/aletcloud';
import { AboutUs } from './pages/about-us/about-us';
import { Portfolio } from './pages/portfolio/portfolio';

export const routes: Routes = [
  { path: '', component: HomePage },       // Default route
// the rest of the routes goes here
{path:'one-vas', component:OneVas},
{path:'sms-ethiopia',component:SmsEthiopia},
{path:'aletcloud',component:Aletcloud},

{path:'about-us',component:AboutUs},
{path:'portfolio',component:Portfolio},

  { path: '**', redirectTo: '', pathMatch: 'full' }  // Wildcard route redirects to home
];
