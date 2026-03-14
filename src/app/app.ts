import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Home } from './home/home';

@Component({
  selector: 'app-root',
  imports: [Home, RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'assignment-3-homes-app';
}
