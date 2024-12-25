const user = require("../Model/user")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")


exports.getUser = async (req,res)=>{
    try {
        const data = await user.find()
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}


exports.postUser = async (req, res) => {
    try {
        const userExits= await user.findOne({email:req.body.email})
        if(userExits) return res.status(500).json({errors:true,message:"user already login"})
        const salt = await bcrypt.genSalt(10)

            req.body.password = await bcrypt.hash(req.body.password,salt)
            
        const data = await user.create(req.body)
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}


exports.putUser = async (req, res) => {
    try {
        const data = await user.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}


exports.deleteUser = async (req, res) => {
    try {
        const data = await user.findByIdAndDelete(req.params.id)
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}

exports.login = async (req,res)=>{
    try {
        const userExits =await user.findOne({ email: req.body.email })
        if (!userExits) return res.status(500).json({ errors: true, message: "email or password is invalid" })

            const comparePassword = await bcrypt.compare(req.body.password,userExits.password)
            if(!comparePassword) return res.status(400).json({errors:true,message:"email or password is invalid"})

                const token = await jwt.sign({_id:userExits._id},process.env.SEC)
                return res.json({errors:false,data:{user:userExits,token:token}})

    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}