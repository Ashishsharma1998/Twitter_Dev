import User from "../models/user.js";
import CrudRepository from "./crud-repository.js";

class userRepository extends CrudRepository {
  constructor() {
    super(User);
  }

  async findBy(data) {
    try {
      const response = await User.findOne(data);
      return response;
    } catch (error) {
      console.log("something went wrong in the repo layer!");
      throw error;
    }
  }
}

export default userRepository;
