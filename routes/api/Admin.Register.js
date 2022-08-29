/*Register the admin credentials*/
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const jwtsecret = "steamtroopsindia";
const bcrypt = require("bcryptjs");
const Admin = require("../../models/Admin");
const { check, validationResult } = require("express-validator");

/*
@Description: API for register with predefined credentials for admin
@route:/api/register
@Public
@Method: POST
*/

router.post(
  "/",
  [
    check("name", "Name is Required").not().isEmpty(),
    check("adminEmail", "Email is Required").isEmail(),
    check("password", "Password should be of minimum length 6").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, adminEmail, password } = req.body;
    try {
      let admin = await Admin.findOne({ adminEmail });
      if (admin)
        res.status(400).json({ errors: [{ msg: "Admin already registered" }] });
      admin = new Admin({
        name,
        adminEmail,
        password,
      });

      const salt = await bcrypt.genSalt(10);
      admin.password = await bcrypt.hash(password, salt);

      await admin.save();
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
      console.log(error);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
