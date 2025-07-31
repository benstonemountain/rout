import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-to',
  imports: [],
  templateUrl: './to.component.html',
  styleUrl: './to.component.css'
})
export class ToComponent {

  private router = inject(Router);


  navigateHome() {
this.router.navigate(["/"]);
  }

}
