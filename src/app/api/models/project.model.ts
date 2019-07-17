import { AgileHouseUserModel, ProjectSummary } from "./agileHouseUser.model";

export interface ISliderContentModel{
  getContent(): UISliderContentModel;
}

export interface UISliderContentModel{
  thumbnail: string;
  title: string;
  subtext: string;
  link: string;
}

export interface IProject extends ISliderContentModel{
  Id: string | null;
  Name: string | null;
  AuthorId: string | null;
  ProjectView: ViewType;
  CreatedOn: string | null;
  CompletedOn: string | null;
  Pieces: string[] | null;
}

export enum ViewType {Pinboard = 'Pinboard', Backlog = 'Backlog',
                      Archive = 'Archive', Kanban = 'Kanban',
                      Gallery = 'Gallery'}

export enum UIViewPanel {Backlog, Kanban}

export class ProjectModel implements IProject{
  
  getContent() : UISliderContentModel {
    const model: UISliderContentModel = {
      thumbnail: '',
      title: this.Name,
      subtext: this.Pieces.length.toString(),
      link: ''
    };
    return model;
  };

  Id: string | null;
  Name: string | null;
  AuthorId: string | null;
  ProjectView: ViewType;
  CreatedOn: string | null;
  CompletedOn: string | null;
  Pieces: string[] | null;
}

export interface UserProjectsSummaryResponse{
  projects: ProjectSummary[];
}