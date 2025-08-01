import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CanComponentDeactivate } from '../../guard/route.guard';

@Component({
  selector: 'app-from',
  imports: [FormsModule],
  templateUrl: './from.component.html',
  styleUrl: './from.component.css',
})
export class FromComponent implements CanComponentDeactivate {
  private router = inject(Router);
  textByUser = '';
  //követem, hogy a user rányomott-e a Mentés gombra
  saved = false;
  canDeactivate(): boolean {
    return this.textByUser.length > 0 && this.saved;
  }

  onSaveText() {
    if (this.textByUser.trim().length > 0) {
      this.saved = true;
    }
  }

  onInputChange() {
    this.saved = false;
  }

  onNavigate() {
    this.router.navigate(['/to']);
  }
}
