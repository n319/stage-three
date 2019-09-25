import { AgileHouseUserModel, ProjectSummary } from './agileHouseUser.model';

export interface UISliderContentModel {
  thumbnail: string;
  title: string;
  subtext: string;
  link: string;
}

export interface IProject {
  id: string | null;
  name: string | null;
  authorId: string | null;
  viewType: ViewType;
  createdOn: string | null;
  completedOn: string | null;
  pieces: string[] | null;
}

export enum ViewType {
  Pinboard = 'Pinboard',
  Backlog = 'Backlog',
  Archive = 'Archive',
  Kanban = 'Kanban',
  Gallery = 'Gallery'
}

export enum UIViewPanel {
  Backlog,
  Kanban
}

export class ProjectModel implements IProject {
  id: string | null;
  name: string | null;
  authorId: string | null;
  viewType: ViewType;
  createdOn: string | null;
  completedOn: string | null;
  pieces: string[] | null;
}

export interface UserProjectsSummaryResponse {
  projects: ProjectSummary[];
}
