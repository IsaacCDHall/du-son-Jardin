import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashPageComponent } from './splash-page/splash-page.component';
import { PaperCanvasComponent } from './paper-canvas/paper-canvas.component';
import { KeysComponent } from './keys/keys.component';

const routes: Routes = [
  { path: '', redirectTo: '/splash', pathMatch: 'full' },
  { path: 'splash', component: SplashPageComponent },
  { path: 'paper', component: PaperCanvasComponent },
  { path: 'keys', component: KeysComponent },
  { path: '**', component: KeysComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
