import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { Note } from '../../models/model';
import { NoteService } from '../../services/note.service';

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
export class InitialComponent implements OnInit{

  notes: Note[] = []

  constructor(private _noteService: NoteService) { }
  
  ngOnInit(): void {
    this.listNotes()
  }
  
  listNotes()
  {
    this._noteService.getNotes().subscribe(
      {
        next: next => this.notes = next,
        error: error => console.log("error")
      }
    )
  }

  
}
