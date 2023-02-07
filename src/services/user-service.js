import { userRepository } from "../repository/index.js";

class userService {
  constructor() {
    this.userRepository = new userRepository();
  }

  async create(data) {
    try {
      const response = await this.userRepository.create(data);
      return response;
    } catch (error) {
      throw error;
    }
  }
}

export default userService;
