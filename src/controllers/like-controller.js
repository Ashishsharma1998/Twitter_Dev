import likeService from "../services/like-service.js";

const LikeService = new likeService();

const toggleLike = async (req, res) => {
  try {
    const response = await LikeService.toggleLike(
      req.query.modelId,
      req.query.modelType,
      req.body.userId
    );
    return res.status(200).json({
      data: response,
      success: true,
      message: "successfully toggle the like:)",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Something went wrong not able to toggle:)",
      err: error,
    });
  }
};

export { toggleLike };
