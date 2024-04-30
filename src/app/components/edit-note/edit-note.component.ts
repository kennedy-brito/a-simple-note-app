import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Note } from '../../models/model';
import { NoteService } from '../../services/note.service';
import { DefaultNoteComponent } from '../../default-note/default-note.component';

@Component({
  selector: 'app-edit-note',
  standalone: true,
  imports: [
    RouterLink,
    DefaultNoteComponent
  ],
  templateUrl: './edit-note.component.html',
  styleUrl: './edit-note.component.css'
})
export class EditNoteComponent implements OnInit{

  note:Note = new Note()
  private id: any;

  constructor(private _noteService: NoteService, private _activedRoute:ActivatedRoute, private _router:Router)
  {
    this._activedRoute.params.subscribe(
      {next: params => this.id = params['id']}
    )
  }
  ngOnInit(): void {
    this._noteService.getNote(this.id).subscribe(
      {
        next: (note) => this.note = note[0],
        error: error => console.log(error)
      }
    )
  }

  saveEdits(note: Note )
  {
    this._noteService.putNote(this.id, note).subscribe()

    this._router.navigate(["/notes"])
  }


}
