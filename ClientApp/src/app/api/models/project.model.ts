import { AgileHouseUserModel, ProjectSummary } from './agileHouseUser.model';

export interface ISliderContentModel {
  getContent(): UISliderContentModel;
}

export interface UISliderContentModel {
  thumbnail: string;
  title: string;
  subtext: string;
  link: string;
}

export interface IProject extends ISliderContentModel {
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
  getContent(): UISliderContentModel {
    const model: UISliderContentModel = {
      thumbnail: '',
      title: this.name,
      subtext: this.pieces.length.toString(),
      link: ''
    };
    return model;
  }

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
