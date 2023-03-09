import { getTweet } from "../../src/controllers/tweet-controller.js";
import tweetService from "../../src/services/tweet-service.js";
import { mockRequest, mockResponse } from "../mocker.js";

jest.mock("../../src/services/tweet-service.js");

test("should return tweets", async () => {
  const req = mockRequest();
  const res = mockResponse();
  const response = [
    {
      content: "tweet1",
    },
    {
      content: "tweet2",
    },
  ];
  tweetService.prototype.getTweet.mockReturnValue(response);
  await getTweet(req, res);
  expect(res.json).toHaveBeenCalledWith({
    data: response,
    success: true,
    message: "successfully fetched the tweet",
    err: {},
  });
});
