// src/app/core/footer/footer.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
      Footer works!
    </footer>
  `,
  styles: [`
    .footer {
      text-align: center;
      margin-top: 20px;
      padding: 10px;
      background-color: #f1f1f1;
    }
  `]
})
export class FooterComponent {}
