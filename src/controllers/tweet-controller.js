import tweetService from "../services/tweet-service.js";

const TweetService = new tweetService();

const createTweet = async (req, res) => {
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

const getTweet = async (req, res) => {
  try {
    const response = await TweetService.getTweet(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "successfully fetched the tweet",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Something went wrong not able to fetch the tweets",
      err: error,
    });
  }
};

export { createTweet, getTweet };
