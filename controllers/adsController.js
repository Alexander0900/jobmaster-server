const Ad = require("../models/Ad");

class adsController {
  async getAds(req, res) {
    try {
      const ads = await Ad.find();
      res.json(ads);
    } catch (err) {
      return res
        .status(404)
        .json({ message: `unable to get ads, error - ${err}` });
    }
  }

  async getAdsByEmail(req, res) {
    const { email } = req.body;

    try {
      const ads = await Ad.find({ email: email });
      res.json(ads);
    } catch (err) {
      return res
        .status(500)
        .json({ message: `Unable to get ads by email, error - ${err}` });
    }
  }

  async deleteAds(req, res) {
    try {
      const { _id } = req.body;

      const deleted = await Ad.deleteMany({
        _id: {
          $in: _id,
        },
      });

      if (deleted.acknowledged) {
        return res.json({
          message: `Deleted ${deleted.deletedCount} ads`,
        });
      }
    } catch (err) {
      return res.status(403).json({
        message: `unable to delete ads from db, error - ${err}`,
      });
    }
  }

  async createAd(req, res) {
    try {
      const { city, mobile, requirements, salary, username, adTitle, email } =
        req.body;
      const ad = new Ad({
        city,
        mobile,
        requirements,
        salary,
        username,
        adTitle,
        email,
        created: Date.now(),
      });

      await ad.save();
      return res.json({ message: "Ad created successfully" });
    } catch (err) {
      console.error(err);
      res.status(400).json({ message: "ad creation error" });
    }
  }
}

module.exports = new adsController();
