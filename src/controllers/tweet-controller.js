import tweetService from "../services/tweet-service.js";
import upload from "../config/file-upload-s3-config.js";

const TweetService = new tweetService();

const singleUploader = upload.single("image");

const createTweet = async (req, res) => {
  try {
    singleUploader(req, res, async function (err, data) {
      if (err) {
        return res.status(500).json({
          error: err,
        });
      }
      console.log("req body ", req.file.location);
      const payload = { ...req.body };
      payload.image = req.file.location;

      const response = await TweetService.create(payload);
      return res.status(201).json({
        data: response,
        success: true,
        message: "Tweet successfully created:)",
        err: {},
      });
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
