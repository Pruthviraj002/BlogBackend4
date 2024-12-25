const {getUser,postUser,putUser,deleteUser, login} = require("../Controller/UserCon")

const route = require("express").Router()

route.get("/",getUser)
route.post("/",postUser)
route.post("/login",login)
route.put("/:id",putUser)
route.delete("/:id",deleteUser)

module.exports = route