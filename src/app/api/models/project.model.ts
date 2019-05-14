import { AgileHouseUserModel, ProjectSummary } from "./agileHouseUser.model";

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
export enum ViewPanel {Backlog, Kanban}

export class ProjectModel implements IProject{
  Id: string | null;
  Name: string | null;
  AuthorId: string | null;
  ProjectView: ViewType;
  CreatedOn: string | null;
  CompletedOn: string | null;
  Pieces: string[] | null;
}

export interface UserProjectsSummaryResponse{
  User: AgileHouseUserModel | null;
  View: ViewType | null;
  Results: ProjectSummary[];
}