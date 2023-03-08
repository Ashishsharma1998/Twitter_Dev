import tweetRepository from "../../src/repository/tweet-repository.js";
import Tweet from "../../src/models/tweet.js";

// jest.mock("../../src/models/tweet.js");

describe("create tweet tests", () => {
  test("should create a tweet and return it", async () => {
    const data = {
      content: "hello kya haal hai!",
    };

    const spy = jest.spyOn(Tweet, "create").mockImplementation(() => {
      return { ...data, createdAt: "2022-12-12", updatedAt: "2022-12-12" };
    });

    const tweetrepo = new tweetRepository();
    const tweet = await tweetrepo.create(data);

    expect(spy).toHaveBeenCalled();
    expect(tweet.content).toBe(data.content);
    expect(tweet.createdAt).toBeDefined();
  });

  test("should not creat a tweet and throw error", async () => {
    const data = {
      content: "testing tweet",
    };

    const spy = jest.spyOn(Tweet, "create").mockImplementation(() => {
      throw new Error("something went wrong");
    });

    const tweetrepo = new tweetRepository();
    const tweet = await tweetrepo.create(data).catch((err) => {
      expect(err).toBeInstanceOf(Error);
      expect(err.message).toBe("something went wrong");
    });
  });
});

describe("Get all tweet tests", () => {
  test("testing limit for get all", async () => {
    const data = {
      content: "testing tweet",
    };
    const tweetsArray = [
      { ...data, createdAt: "2022-02-12", updatedAt: "2022-02-12" },
      { ...data, createdAt: "2022-02-12", updatedAt: "2022-02-12" },
      { ...data, createdAt: "2022-02-12", updatedAt: "2022-02-12" },
    ];
    const findResponse = { tweetsArray };
    findResponse.skip = jest.fn((offset) => findResponse);
    findResponse.limit = jest.fn((limit) =>
      findResponse.tweetsArray.slice(0, limit)
    );
    const spy = jest.spyOn(Tweet, "find").mockImplementation(() => {
      return findResponse;
    });
    const tweetRepo = new tweetRepository();
    const tweets = await tweetRepo.getAll(0, 2);
    expect(spy).toHaveBeenCalled();
    expect(tweets).toHaveLength(2);
  });
});
