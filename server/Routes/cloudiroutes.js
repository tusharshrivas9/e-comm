const express = require("express")

const cloudiRoutes = express.Router()

const {cloud,finds} = require("../controllers/cloudController")
const { Admin } = require("../middleware/userMiddleware")



cloudiRoutes.post("/uploads",cloud,Admin)

cloudiRoutes.get("/uploads",finds,Admin)

cloudiRoutes.delete("/uploads/:id",finds,Admin)




module.exports = cloudiRoutes