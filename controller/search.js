const userSchema = require("../models/user");

class PostSearch {
  static async search(req, res) {
    try {
      const limit = req.body.limit;
      const sort = req.body.sort;

      delete req.body.limit;
      delete req.body.sort;

      const data = await userSchema
        .find({ ...req.body })
        .limit(limit)
        .sort(sort)
        .lean();

      res.send(data);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }
}

module.exports = PostSearch;
