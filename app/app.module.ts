import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { CreditsComponent } from './views/credits/credits.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { SplashComponent } from './views/splash/splash.component';
import { StatusComponent } from './views/status/status.component';
import { PourSelectComponent } from './views/pour-select/pour-select.component';
import { PourProgressComponent } from './views/pour-progress/pour-progress.component';
import { toastComponent } from './views/toast/toast.component';

const appRoutes: Routes = [
  { path: '', component: SplashComponent },
  { path: 'credits', component: CreditsComponent},
  { path: 'select', component: PourSelectComponent},
  { path: 'status', component: StatusComponent},
  { path: 'progress', component: PourProgressComponent},
  { path: 'toast', component: toastComponent},
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports:      [ BrowserModule,
                  HttpModule,
                  JsonpModule,
                  RouterModule.forRoot(appRoutes, { useHash: true })],
  declarations: [ AppComponent,
                  CreditsComponent,
                  PageNotFoundComponent,
                  PourProgressComponent,
                  PourSelectComponent,
                  SplashComponent,
                  StatusComponent,
                  toastComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
