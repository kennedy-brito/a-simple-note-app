import { CdkTextareaAutosize, TextFieldModule } from '@angular/cdk/text-field';
import { Component, EventEmitter, Input, NgZone, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { Note } from '../models/model';
import { take } from 'rxjs';

@Component({
  selector: 'app-default-note',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    TextFieldModule,
    MatIconModule,
    RouterLink,    
    FormsModule
  ],
  templateUrl: './default-note.component.html',
  styleUrl: './default-note.component.css'
})
export class DefaultNoteComponent {

  @Input() note = new Note()

  @Output() noteEvent = new EventEmitter<Note>()

  constructor(private _ngZone: NgZone){}

  sendNoteToConsumeEvent() {
    this.noteEvent.emit(this.note)
  }

  @ViewChild('autosize') autosize?: CdkTextareaAutosize;

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1)).subscribe(() => this.autosize?.resizeToFitContent(true));
  }
}
