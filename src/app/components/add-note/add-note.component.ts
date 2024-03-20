import { CdkTextareaAutosize, TextFieldModule} from '@angular/cdk/text-field';
import { Component, NgZone, ViewChild } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { take } from 'rxjs';
import { Router, RouterLink } from '@angular/router';
import { NoteService } from '../../services/note.service';
import { Note } from '../../models/model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-note',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    TextFieldModule,
    MatIconModule,
    RouterLink,
    FormsModule
  ],
  templateUrl: './add-note.component.html',
  styleUrl: './add-note.component.css'
})
export class AddNoteComponent {

  note:Note = new Note()

  constructor(private _ngZone: NgZone, private _noteService:NoteService, private _router:Router) {}

  @ViewChild('autosize') autosize?: CdkTextareaAutosize;

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1)).subscribe(() => this.autosize?.resizeToFitContent(true));
  }

  saveNote() {
    const id: number = Math.floor(Math.random() * 10000)
    this.note.id = id.toString();

    this._noteService.postNote(this.note).subscribe(
      {
        next: resolve => console.log(resolve),
        error: error => console.log(error)
      }
    )
    this._router.navigate(["/"])
  }
}
