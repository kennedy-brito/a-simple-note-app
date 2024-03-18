import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-initial',
  standalone: true,
  imports: [
    MatIconModule,
    RouterLink
  ],
  templateUrl: './initial.component.html',
  styleUrl: './initial.component.css'
})
export class InitialComponent {

}
