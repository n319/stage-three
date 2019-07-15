import { Injectable } from '@angular/core';
import { UserService } from '@app/api/user.service';
import { UserProjectsSummaryResponse } from '@app/api/models/project.model';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ProjectService } from '@app/api/project.service';

@Injectable({
  providedIn: 'root'
})
export class HomeResolverService implements Resolve<UserProjectsSummaryResponse> {
  constructor(private userService: UserService, private router: Router, private projectSvc: ProjectService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserProjectsSummaryResponse> {
    return this.userService.GetUserProjectsSummary();
  }
}
