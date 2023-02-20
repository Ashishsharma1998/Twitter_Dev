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

  async findUserByEmail(email) {
    try {
      const user = await this.userRepository.findBy({ email });
      return user;
    } catch (error) {
      console.log("something went wrong!");
      throw error;
    }
  }

  async signIn({ email, password }) {
    try {
      const user = await this.findUserByEmail(email);

      if (!user) {
        throw { message: "no found user!" };
      }

      if (!user.comparePassword(password)) {
        throw { message: "incorrect password!" };
      }

      const data = user.genJWT();
      return data;
    } catch (error) {
      console.log("something went wrong in the service layer here!");
      throw error;
    }
  }
}

export default userService;
