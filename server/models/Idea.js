import mongoose from 'mongoose';

const IdeaSchema = new mongoose.Schema({
  text: {
    type: String,
  },
  tech: {
    type: String,
  },
  owner: {
    type: String,
  },
});

if (!mongoose.models.Idea) {
  mongoose.model('Idea', IdeaSchema);
}

export default mongoose.models.Idea;
