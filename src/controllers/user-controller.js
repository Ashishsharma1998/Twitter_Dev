import userService from "../services/user-service.js";

const UserService = new userService();

const signUp = async (req, res) => {
  try {
    const response = await UserService.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    return res.status(201).json({
      data: response,
      success: true,
      message: "successfully signed Up",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "something went wrong in signUp",
      err: error,
    });
  }
};

export { signUp };
