import { hashtagRepository, tweetRepository } from "../repository/index.js";

class tweetService {
  constructor() {
    this.tweetRepository = new tweetRepository();
    this.hashtagRepository = new hashtagRepository();
  }

  async create(data) {
    try {
      const content = data.content;
      const tags = content
        .match(/#[a-zA-Z0-9_]+/g) //this regex extracts hashtags
        .map((tag) => tag.substr(1).toLowerCase());

      const tweet = await this.tweetRepository.create(data);
      const alreadyPresentTags = await this.hashtagRepository.findByName(tags);
      const titleOfPresentTags = alreadyPresentTags.map((tag) => tag.title);
      let newTags = tags.filter((tag) => !titleOfPresentTags.includes(tag));
      newTags = newTags.map((tag) => {
        return { title: tag, tweets: [tweet.id] };
      });

      this.hashtagRepository.bulkCreate(newTags);

      alreadyPresentTags.forEach((tag) => {
        tag.tweets.push(tweet.id);
        tag.save();
      });

      return tweet;
    } catch (error) {
      console.log(error);
    }
  }
}

export default tweetService;
