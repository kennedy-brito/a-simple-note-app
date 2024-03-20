import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private url: string = "http://localhost:3000/notes";

  constructor(private _http: HttpClient) { }

  getNotes(): Observable<Note[]>
  {
    return this._http.get<Note[]>(this.url)
  }

  getNote(id: any): Observable<Note[]>
  {
    const getUrl = `${this.url}/?id=${id}`
    return this._http.get<Note[]>(getUrl)
  }

  postNote(note: Note): Observable<Note[]>
  {
    return this._http.post<Note[]>(this.url, note)
  }

  putNote(id: any, note: Note): Observable<Note>
  {
    const putUrl = `${this.url}/${id}`
    return this._http.put<Note>(putUrl, note)
  }

  deleteNote(id: any): Observable<Note[]>{
    const deleteUrl = `${this.url}/${id}`
    return this._http.delete<Note[]>(deleteUrl)
  }

}
