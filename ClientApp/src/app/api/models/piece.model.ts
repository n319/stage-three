import { ISliderContentModel, UISliderContentModel } from './project.model';

export class PieceModel {
  getContent(): UISliderContentModel {
    const model: UISliderContentModel = {
      thumbnail: '',
      title: this.name,
      subtext: '',
      link: ''
    };
    return model;
  }

  id: string | null;
  name: string | null;
  authorId: string | null;
  projectId: string | null;
  status: string | null;
  description: string | null;
  createdOn: string | null;
  completedOn: string | null;
  tags: string[] | null;
  checklist: string[] | null;
}
