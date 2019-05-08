import { ViewType } from "./project.model";

export interface IAgileHouseUser{
  id: string;
  passwordHash: string | null;
  username: string | null;
  twitchStreamId: string | null;
  token: string | null;
  firstName: string | null;
  lastName: string | null;
  projects: ProjectSummary[] | null;
}

export interface ProjectSummary{
  id: string;
  view: ViewType;
}

export class AgileHouseUserModel{
  id: string;
  passwordHash: string | null;
  username: string | null;
  twitchStreamId: string | null;
  token: string | null;
  firstName: string | null;
  lastName: string | null;
  projects: string[] | null;
}
