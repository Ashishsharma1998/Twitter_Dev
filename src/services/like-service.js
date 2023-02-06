import { tweetRepository, likeRepository } from "../repository/index.js";

class likeService {
  constructor() {
    this.likeRepository = new likeRepository();
    this.tweetRepository = new tweetRepository();
  }

  // /api/v1/likes/toggle?id=modelid&type=Tweet
  async toggleLike(modelId, modelType, userId) {
    if (modelType === "Tweet") {
      var likeable = await this.tweetRepository.find(modelId);
    } else if (modelType === "Comment") {
      //todo
    } else {
      throw new Error("unknown model type");
    }

    const exist = await this.likeRepository.findByUserAndLikeable({
      user: userId,
      onModel: modelType,
      likeable: modelId,
    });

    if (exist) {
      likeable.likes.pull(exist.id);
      await likeable.save();
      await exist.remove();
      var isAdded = false;
    } else {
      const newLike = await this.likeRepository.create({
        user: userId,
        onModel: modelType,
        likeable: modelId,
      });
      likeable.likes.push(newLike.id);
      await likeable.save();
      var isAdded = true;
    }
    return isAdded;
  }
}

export default likeService;
