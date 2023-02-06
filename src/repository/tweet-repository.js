import Tweet from "../models/tweet.js";
import CrudRepository from "./crud-repository.js";

class tweetRepository extends CrudRepository {
  constructor() {
    super(Tweet);
  }

  async getWithComment(id) {
    try {
      const tweet = await Tweet.findById(id)
        .populate({ path: "comments" })
        .lean();
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }

  async getAll(offset, limit) {
    try {
      const response = await Tweet.find().skip(offset).limit(limit);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async find(id) {
    try {
      const response = await Tweet.findById(id).populate({ path: "likes" });
      return response;
    } catch (error) {
      console.log("something went wrong in tweet repo");
      throw error;
    }
  }
}

export default tweetRepository;
