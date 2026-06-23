import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { OneVas } from './pages/products/one-vas/one-vas';
import { SmsEthiopia } from './pages/products/sms-ethiopia/sms-ethiopia';
import { TeleBus } from './pages/products/tele-bus/tele-bus';
import { AboutUs } from './pages/about-us/about-us';
import { Portfolio } from './pages/portfolio/portfolio';

export const routes: Routes = [
  { path: '', component: HomePage },       // Default route
// the rest of the routes goes here
{path:'one-vas', component:OneVas},
{path:'sms-ethiopia',component:SmsEthiopia},
{path:'tele-bus',component:TeleBus},

{path:'about-us',component:AboutUs},
{path:'portfolio',component:Portfolio},

  { path: '**', redirectTo: '', pathMatch: 'full' }  // Wildcard route redirects to home
];
