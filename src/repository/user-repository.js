import User from "../models/user.js";
import CrudRepository from "./crud-repository.js";

class userRepository extends CrudRepository {
  constructor() {
    super(User);
  }
}

export default userRepository;
