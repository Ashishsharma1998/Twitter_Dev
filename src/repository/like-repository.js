import Like from "../models/like.js";
import CrudRepository from "./crud-repository.js";

class likeRepository extends CrudRepository {
  constructor() {
    super(Like);
  }

  async findByUserAndLikeable(data) {
    try {
      const response = await Like.findOne(data);
      return response;
    } catch (error) {
      console.log("something went wrong in like repo layer");
      throw error;
    }
  }
}

export default likeRepository;
