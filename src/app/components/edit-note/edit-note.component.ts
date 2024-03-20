import { CdkTextareaAutosize, TextFieldModule} from '@angular/cdk/text-field';
import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { take } from 'rxjs';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Note } from '../../models/model';
import { NoteService } from '../../services/note.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-note',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    TextFieldModule,
    MatIconModule,
    RouterLink,
    FormsModule
  ],
  templateUrl: './edit-note.component.html',
  styleUrl: './edit-note.component.css'
})
export class EditNoteComponent implements OnInit{

  note:Note = new Note()
  private id: any;

  constructor(private _ngZone: NgZone, private _noteService: NoteService, private _activedRoute:ActivatedRoute, private _router:Router)
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

  saveEdits()
  {
    this._noteService.putNote(this.id, this.note).subscribe()

    this._router.navigate(["/notes"])
  }

  @ViewChild('autosize') autosize?: CdkTextareaAutosize;

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1)).subscribe(() => this.autosize?.resizeToFitContent(true));
  }


}
