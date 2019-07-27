import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService, I18nService } from '@app/core';
import { ProjectService } from '@app/api/project.service';
import { ProjectModel, UserProjectsSummaryResponse, ViewType } from '@app/api/models/project.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { UserService } from '@app/api/user.service';
import { share, shareReplay, map, takeUntil } from 'rxjs/operators';
import { ProjectSummary } from '@app/api/models/agileHouseUser.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuHidden = true;
  projectSummary: Observable<ProjectSummary[]>;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private i18nService: I18nService,
    private projectSvc: ProjectService,
    private userSvc: UserService
  ) {}


  ngOnInit() {

    this.projectSummary = this.userSvc.GetUserProjectsSummary().pipe(share(), map(summary => summary.projects));

  }

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }

  setLanguage(language: string) {
    this.i18nService.language = language;
  }

  selectProject(projectSummaryId: string) {

    //TODO: pull out routing details
    this.projectSummary.subscribe(summary => {
      const selected = summary.filter(prj => prj.id === projectSummaryId)[0];
      let routerDestination = '';

      if(selected.viewType === ViewType.Archive ||
        selected.viewType === ViewType.Backlog ||
        selected.viewType === ViewType.Pinboard ) {
          routerDestination = '/backlog';
      }
      else if(selected.viewType === ViewType.Kanban){
        routerDestination = '/projects';
      }else if(selected.viewType === ViewType.Gallery){
        routerDestination = '/matgallery';
      }

      //sessionStorage.setItem('currentProject', JSON.stringify(selected));

      this.router.navigate([routerDestination], {
        queryParams: { currentProjectId: selected.id }
      });

    });
  }

  logout() {
    this.authenticationService.logout().subscribe(() => this.router.navigate(['/login'], { replaceUrl: true }));
  }

  get currentLanguage(): string {
    return this.i18nService.language;
  }

  get languages(): string[] {
    return this.i18nService.supportedLanguages;
  }

  get username(): string | null {
    const credentials = this.authenticationService.credentials;
    return credentials ? credentials.username : null;
  }
}
