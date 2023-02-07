import commentService from "../services/comment-service.js";

const CommentService = new commentService();

const createComment = async (req, res) => {
  try {
    const response = await CommentService.createComment(
      req.query.modelId,
      req.query.modelType,
      req.body.userId,
      req.body.content
    );
    return res.status(200).json({
      data: response,
      success: true,
      message: "successfully created a comment:)",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Something went wrong not able to comment:)",
      err: error,
    });
  }
};

export default createComment;
