import { Component} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NoteService } from '../../services/note.service';
import { Note } from '../../models/model';
import { FormsModule } from '@angular/forms';
import { DefaultNoteComponent } from '../../default-note/default-note.component';

@Component({
  selector: 'app-add-note',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
    DefaultNoteComponent
  ],
  templateUrl: './add-note.component.html',
  styleUrl: './add-note.component.css'
})
export class AddNoteComponent {

  constructor(private _noteService:NoteService, private _router:Router) {}

  saveNote(note: Note) {
    const id: number = Math.floor(Math.random() * 10000)
    note.id = id.toString();

    this._noteService.postNote(note).subscribe(
      {
        next: resolve => console.log(resolve),
        error: error => console.log(error)
      }
    )
    this._router.navigate(["/"])
  }
}
