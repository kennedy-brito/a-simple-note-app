import { CdkTextareaAutosize, TextFieldModule} from '@angular/cdk/text-field';
import { Component, NgZone, ViewChild } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { take } from 'rxjs';

@Component({
  selector: 'app-add-note',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    TextFieldModule,
    MatIconModule
  ],
  templateUrl: './add-note.component.html',
  styleUrl: './add-note.component.css'
})
export class AddNoteComponent {

  constructor(private _ngZone: NgZone) {}

  @ViewChild('autosize') autosize?: CdkTextareaAutosize;

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1)).subscribe(() => this.autosize?.resizeToFitContent(true));
  }
}
