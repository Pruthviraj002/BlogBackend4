const {getBlog,postBlog,putBlog,deleteBlog} = require("../Controller/blogCon")
const { login } = require("../Controller/UserCon")
const auth = require("../middleware/auth")

const route = require("express").Router()

route.get("/",getBlog)
route.post("/",auth,postBlog)
route.post("/login",login)
route.put("/:id",auth,putBlog)
route.delete("/:id",auth,deleteBlog)

module.exports = route

