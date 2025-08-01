import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  private router = inject(Router);

  onNavigateFrom() {
    this.router.navigate(['/from']);
  }

  onNavigateTo() {
    this.router.navigate(['/to']);
  }

  onNavigateHome() {
    this.router.navigate(['/Home']);
  }

}
