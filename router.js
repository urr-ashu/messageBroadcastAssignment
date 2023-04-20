const GetPopulate = require("./controller/getPopulate");
const PostSearch = require("./controller/search");

const router = require("express").Router();

router.get("/populate", async (req, res) => {
  GetPopulate.populate(req, res);
  //   try {
  //     const url = "https://jsonplaceholder.typicode.com/comments";
  //     const csvUrl = "http://console.mbwebportal.com/deepak/csvdata.csv";

  //     const data = await Promise.all([axios.get(url), axios.get(csvUrl)]);

  //     //saving in db....
  //     await userSchema.insertMany(data[0]?.data);

  //     const csvFilePath = path.join(__dirname, "local.csv");

  //     fs.writeFileSync(csvFilePath, data[1].data);

  //     const localReadData = fs.readFileSync(csvFilePath, { encoding: "utf8" });

  //     const writeUrl = path.join(__dirname, "database.csv");
  //     fs.writeFileSync(writeUrl, localReadData);

  //     res.sendStatus(200);
  //   } catch (error) {
  //     console.log(error);
  //     res.sendStatus(500);
  //   }
});

router.post("/search", async (req, res) => {
  PostSearch.search(req, res);
});

module.exports = router;
