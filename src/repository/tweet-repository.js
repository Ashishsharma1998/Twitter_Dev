import Tweet from "../models/tweet.js";
import CrudRepository from "./crud-repository.js";

class tweetRepository extends CrudRepository {
  constructor() {
    super(Tweet);
  }

  async create(data) {
    try {
      const tweet = await Tweet.create(data);
      return tweet;
    } catch (error) {
      console.log("from repository", error);
      throw error;
    }
  }

  async getWithComment(id) {
    try {
      const tweet = await Tweet.findById(id)
        .populate({ path: "comments", populate: { path: "comments" } })
        .lean();
      return tweet;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getAll(offset, limit) {
    try {
      const response = await Tweet.find().skip(offset).limit(limit);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
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
