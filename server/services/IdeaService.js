import Idea from '../models/Idea'

class IdeaService {
  constructor() {}

  async find() {
    return await Idea.find();
  }

  async create(data) {
    return await Idea.create(data);
  }
}

export default IdeaService;
