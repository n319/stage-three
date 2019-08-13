import { ViewType } from './project.model';

export interface IAgileHouseUser {
  id: string;
  passwordHash: string | null;
  username: string | null;
  twitchStreamId: string | null;
  token: string | null;
  firstName: string | null;
  lastName: string | null;
  projects: string[] | null;
}

export interface ProjectSummary {
  id: string;
  name: string;
  viewType: ViewType;
}

export class AgileHouseUserModel {
  id: string;
  passwordHash: string | null;
  username: string | null;
  twitchStreamId: string | null;
  token: string | null;
  firstName: string | null;
  lastName: string | null;
  projects: string[] | null;
}
