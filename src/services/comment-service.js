import { commentRepository, tweetRepository } from "../repository/index.js";

class commentService {
  constructor() {
    this.commentRepository = new commentRepository();
    this.tweetRepository = new tweetRepository();
  }

  async createComment(modelId, modelType, userId, content) {
    if (modelType == "Tweet") {
      var commentable = await this.tweetRepository.get(modelId);
    } else if (modelType == "Comment") {
      var commentable = await this.commentRepository.get(modelId);
    } else {
      new Error("unknown model type");
    }

    const newComment = await this.commentRepository.create({
      content: content,
      onModel: modelType,
      userId: userId,
      commentable: modelId,
      comments: [],
    });

    commentable.comments.push(newComment);
    await commentable.save();
    return newComment;
  }
}

export default commentService;
