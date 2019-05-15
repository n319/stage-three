import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { IPiece } from './models/piece.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PieceService {
  constructor(private http: HttpClient) {}

  public getPiece(id: string): Observable<IPiece> {
    const url = environment.pieceApi.get + id;
    return this.http.cache().get<IPiece>(url);
  }

  public createPiece(project: IPiece): Observable<IPiece> {
    const url = environment.pieceApi.create;
    return this.http.put<IPiece>(url, project);
  }

  public updatePiece(project: IPiece): Observable<IPiece> {
    const url = environment.pieceApi.update;
    return this.http.post<IPiece>(url, project);
  }
}
