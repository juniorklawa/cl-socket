const express = require("express");
const router = express.Router();

router.get("/api/levels/A", (req, res) => {
  res
    .json({
      exercise:
        "https://docs.google.com/document/d/1OSVCC3dKgWCJ26kl6lqp0SlCxmOzHGC9Bm3_OqjsapQ/edit?usp=sharing",
    })
    .status(200);
});

router.get("/api/levels/B", (req, res) => {
  res
    .json({
      exercise:
        "https://docs.google.com/document/d/10M2o9MJ3_5xITa1Y2WEvpKK_pQMKgUYoAb9vMamUzps/edit?usp=sharing",
    })
    .status(200);
});

router.get("/api/levels/C", (req, res) => {
  res
    .json({
      exercise:
        "https://docs.google.com/document/d/1de2fJmMuOw1oQ7md5-tQrkDYjFjXbyzlUe5cZlU_bKk/edit?usp=sharing",
    })
    .status(200);
});

router.get("/api/teacher", (req, res) => {
  res
    .json({
      answers:
        "https://docs.google.com/document/d/1BRAW58zoRFtOiH9gIMHv1HCKAnt7AQobxzAeXs3rpkE/edit?usp=sharing",
    })
    .status(200);
});

module.exports = router;
