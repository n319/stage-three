import { AgileHouseUserModel } from "./agileHouseUser.model";

export interface IProject {
  Id: string | null;
  Name: string | null;
  AuthorId: string | null;
  ProjectView: ViewType;
  CreatedOn: string | null;
  CompletedOn: string | null;
  Pieces: string[] | null;
}

export enum ViewType {Pinboard, Kanban, Archive}

export class ProjectModel implements IProject{
  Id: string | null;
  Name: string | null;
  AuthorId: string | null;
  ProjectView: ViewType;
  CreatedOn: string | null;
  CompletedOn: string | null;
  Pieces: string[] | null;
}

export interface PanelViewContent{
  User: AgileHouseUserModel | null;
  View: ViewType | null;
  Results: ProjectModel[];
}