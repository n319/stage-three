import { ISliderContentModel, UISliderContentModel } from "./project.model";

export interface IPost extends ISliderContentModel{
  id: string;
  type: string;
  name: string;
  authorId: string;
}

export class PostModel implements IPost {
  
  getContent() : UISliderContentModel {
    const model: UISliderContentModel = {
      thumbnail: '',
      title: this.name,
      subtext: '',
      link: ''
    };
    return model;
  };
  
  id: string;
  type: string;
  name: string;
  authorId: string;
}
