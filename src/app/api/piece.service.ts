import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '@env/environment';
import { PieceModel } from './models/piece.model';
import { HttpCacheService } from '@app/core';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PieceService {
  private pieceCache: Array<PieceModel>;

  constructor(private http: HttpClient, private httpCache: HttpCacheService) {
    this.pieceCache = new Array<PieceModel>();
  }

  public getPiecesListById(projId: string): Observable<PieceModel[]> {
    const url = environment.apiUrl + environment.pieceApi.getList + '?id=' + projId;
    return this.http.get<PieceModel[]>(url).pipe(tap((pieces: PieceModel[]) => this.addAllToCache(pieces)));
  }

  public getPiece(id: string): Observable<PieceModel> {
    const pc = this.pieceCache.filter(p => p.id === id);

    if (pc.length === 1) {
      return of(pc[0]);
    } else if (pc.length > 1) {
      //TODO log / fix - there is more than 1 item in the cache with an id
      return of(pc[0]);
    }

    const url = environment.apiUrl + environment.pieceApi.get + '?id=' + id;
    return this.http.get<PieceModel>(url).pipe(tap((piece: PieceModel) => this.addToCache(piece)));
  }

  public createPiece(project: PieceModel): Observable<PieceModel> {
    const url = environment.apiUrl + environment.pieceApi.create;
    return this.http.put<PieceModel>(url, project);
  }

  public updatePiece(project: PieceModel, writeThrough: boolean): void {
    this.replaceInCache(project);

    if (writeThrough) {
      const cacheUrl = environment.apiUrl + environment.pieceApi.get + '?id=' + project.id;
      this.httpCache.clearCache(cacheUrl);

      const url = environment.apiUrl + environment.pieceApi.update;
      this.http.post<PieceModel>(url, project).subscribe();
    }
  }

  private replaceInCache(datum: PieceModel): void {
    const pc = this.pieceCache.filter(p => p.id === datum.id);
    if (pc.length === 1) {
      const index = this.pieceCache.indexOf(pc[0]);
      this.pieceCache.splice(index, 1, datum);
    } else if (pc.length > 1) {
      var debug = true;
      //TODO log / fix this
    }
  }

  private addToCache(datum: PieceModel): void {
    const pc = this.pieceCache.filter(p => p.id === datum.id);
    if (pc.length > 0) {
      return;
    }
    this.pieceCache.push(datum);
  }

  private addAllToCache(data: PieceModel[]): void {
    data.forEach(pc => this.addToCache(pc));
  }
}
