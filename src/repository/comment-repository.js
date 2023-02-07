import Comment from "../models/comment.js";
import CrudRepository from "./crud-repository.js";

class commentRepository extends CrudRepository {
  constructor() {
    super(Comment);
  }
}

export default commentRepository;
