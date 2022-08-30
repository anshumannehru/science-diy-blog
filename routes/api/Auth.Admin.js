/*API description : Login auth for the user*/
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const jwtsecret = "steamtroopsindia";
const bcrypt = require("bcryptjs");
const { validationResult, check } = require("express-validator");
const Admin = require("../../models/Admin");
const getAuth = require('../../middleware/authentication')

/*
@Description: API for login with predefined credentials for admin
@route:/api/auth
@Public
@Method: GET
*/
router.get("/", getAuth, async (req, res) => {
  //Once authorized we want to send back the user data;
  try {
    const user = await Admin.findById(req.user.id).select("-password"); //we want user data but we dont want to send the password
    res.json(user);
  } catch (err) {
    console.log(err);
  }
});

/*
@Description: API for login with predefined credentials for admin
@route:/api/auth
@Public
@Method: POST
*/

router.post(
  "/",
  [
    check("adminEmail", "Please enter your email credential").isEmail(),
    check("password", "Please enter your password").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    const { adminEmail, password } = req.body;
    try {
      let admin = await Admin.findOne({ adminEmail });
      if (!admin)
        return res
          .status(400)
          .json({ errors: [{ msg: "You Cannot login as an admin" }] });
      /*check the password from db and password in the body*/
      const isMatch = await bcrypt.compare(password, admin.password);
      if (!isMatch) {
        return res
          .status(404)
          .json({ errors: [{ msg: "Password incorrect" }] });
      }
      const payload = {
        user: {
          id: admin.id,
        },
      };
      jwt.sign(
        payload,
        jwtsecret,
        {
          expiresIn: 3600,
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (error) {
      console.log(error)
      res.status(500).send("server error");
    }
  }
);


module.exports = router;
