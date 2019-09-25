import { UISliderContentModel } from './project.model';

export class PieceModel {
  id: string | null;
  name: string | null;
  authorId: string | null;
  projectId: string | null;
  kanbanStatus: string | null;
  status: string | null;
  description: string | null;
  createdOn: string | null;
  completedOn: string | null;
  tags: string[] | null;
  checklist: string[] | null;
}
