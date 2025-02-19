import expressAsyncHandler from "express-async-handler";
import User from '../models/userModel.js'
import generateToken from "../config/generateToken.js";


export const registerUser = expressAsyncHandler(async (req,res) => {
    const { name, email, password, pic } = req.body;

    if (!name || !email || !password) {
        throw new Error("Please enter all the fields");
    }

    const userExist = await User.findOne({ email });

    if (userExist) {
        res.status(400);
        throw new Error("User already exist");
    }

    const user = await User.create({
        name,
        email,
        password,
        pic
    });
    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token:generateToken(user._id)
        });
    }
    else {
        res.status(400);
        throw new Error("Failed to create the user");
    }

    
})

export const loginUser = expressAsyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user=await User.findOne({email})

    if (user &&(await user.matchPassword(password)) ) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token: generateToken(user._id),
        })
        
    }
    if (!user) {
        res.status(401);
        throw new Error("Invalid email or Password")
    }
    
})


export const allUsers = expressAsyncHandler(async (req, res) => {
    const keyword = req.query.search ? {
        $or: [
            { name: { $regex: req.query.search, $options: "i" } },
            { email: { $regex: req.query.search, $options: "i" } },
        ]
    }
        : {};
    const users = await User.find(keyword).find({ _id: { $ne: req.user._id } });
    res.send(users)
});

// export default registerUser;