import userService from "../../src/services/user-service.js";
import userRepository from "../../src/repository/user-repository.js";

jest.mock("../../src/repository/user-repository.js");

test("shoud successfully create a user", async () => {
  const data = {
    email: "abc@gmail.com",
    password: "123456",
  };

  //   userRepository.prototype.create.mockImplementation(() => {
  //     return { ...data, createdAt: "2022-12-12", updatedAt: "2022-12-12" };
  //   });

  userRepository.prototype.create.mockReturnValue({
    ...data,
    createdAt: "2022-12-12",
    updatedAt: "2022-12-12",
  });
  const service = new userService();
  const user = await service.signUp(data);
  expect(user.email).toBe(data.email);
});
