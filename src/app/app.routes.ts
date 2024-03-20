import { Routes } from '@angular/router';
import { InitialComponent } from './components/initial/initial.component';
import { AddNoteComponent } from './components/add-note/add-note.component';
import { EditNoteComponent } from './components/edit-note/edit-note.component';


export const routes: Routes = [
    { path: 'notes', component: InitialComponent},
    { path: 'add', component: AddNoteComponent },
    { path: 'edit/:id', component: EditNoteComponent},
    { path: '', redirectTo: '/notes', pathMatch: 'full' }
];

