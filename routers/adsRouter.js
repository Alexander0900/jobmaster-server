const Router = require("express");
const router = new Router();
const controller = require("../controllers/adsController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/ads", controller.getAds);
router.post("/my-ads", controller.getAdsByEmail);
router.delete("/ads/delete", authMiddleware, controller.deleteAds);
router.post("/ads/create", authMiddleware, controller.createAd);

module.exports = router;
