import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { InitialComponent } from './components/initial/initial.component';
import { AddNoteComponent } from './components/add-note/add-note.component';
import { EditNoteComponent } from './components/edit-note/edit-note.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    InitialComponent,
    AddNoteComponent,
    EditNoteComponent,
    RouterLink
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'a-simple-note-app';
}
