import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { PieceModel } from './models/piece.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PieceService {
  constructor(private http: HttpClient) {}

  public getPiecesListById(projId: string): Observable<PieceModel[]> {
    const url = environment.apiUrl + environment.pieceApi.getList + '?id=' + projId;
    return this.http.get<PieceModel[]>(url);
  }

  public getPiece(id: string): Observable<PieceModel> {
    const url = environment.apiUrl + environment.pieceApi.get + '?id=' + id;
    return this.http.cache().get<PieceModel>(url);
  }

  public createPiece(project: PieceModel): Observable<PieceModel> {
    const url = environment.apiUrl + environment.pieceApi.create;
    return this.http.put<PieceModel>(url, project);
  }

  public updatePiece(project: PieceModel): Observable<PieceModel> {
    const url = environment.apiUrl + environment.pieceApi.update;
    return this.http.post<PieceModel>(url, project);
  }
}
