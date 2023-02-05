import tweetService from "../services/tweet-service.js";

const TweetService = new tweetService();

export const createTweet = async (req, res) => {
  try {
    const response = await TweetService.create(req.body);
    return res.status(201).json({
      data: response,
      success: true,
      message: "Tweet successfully created:)",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "tweet is not created successfully",
      err: error,
    });
  }
};
