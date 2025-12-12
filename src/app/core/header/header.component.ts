// src/app/core/header/header.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <nav class="navbar">
      <a routerLink="/">Home</a>
      <a routerLink="/suggestions">Suggestions</a>
    </nav>
  `,
  styles: [`
    .navbar {
      padding: 10px;
      background-color: #007bff;
      color: white;
    }
    .navbar a {
      color: white;
      margin-right: 15px;
      text-decoration: none;
      font-weight: bold;
    }
  `]
})
export class HeaderComponent {}
