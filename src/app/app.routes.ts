import { Routes } from '@angular/router';
import { GamePlayComponent } from './game-play/game-play.component';
import { SplashComponent } from './splash/splash.component';

export const routes: Routes = [
    { path: 'game-play', component: GamePlayComponent },
    { path: '', component: SplashComponent }
];
