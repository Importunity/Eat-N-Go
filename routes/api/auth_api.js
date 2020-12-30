import bcrypt from 'bcryptjs';
import Router from 'express';
import jwt from 'jsonwebtoken';
import auth from '../../middleware/auth.js';
import user from '../../model/user.js';
const router = Router();

// user login
router.post('/login', async (request, response) => {
    const{email, password} = request.body;
    if(!email || !password){
        return response.status(400).json({msg: "Please fill in the fields"})
    }

    try{
        const loginUser = await user.findOne({email});
        if(!loginUser){
            throw Error ('User does not exist');
        }
        const isMatch = await bcrypt.compare(password, loginUser.password);
        if (!isMatch){
            throw Error('Invalid credentials');
        }

        const token = jwt.sign({ id: loginUser._id }, process.env.JWT_SECRET);
        if (!token){
            throw Error('Couldnt sign the token');
        } 

        response.status(200).json({
            token, 
            user: {
                id: loginUser._id,
                username: loginUser.username, 
                email: loginUser.email
            }
        })
    }catch(error){
        response.status(400).json({msg: error.message})
    }
})

// registration post
router.post('/register', async (request, response) => {
    const {username, email, password} = request.body;
    if(!username || !email || !password){
        return response.status(400).json({msg: 'please fill in the fields'})
    }
    try{
        const registerUser = await user.findOne({email});
        if(registerUser){
            throw Error('User already exists')
        }

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        const createUser = new user({username, email, password: hash});
        const savedUser = await createUser.save();
        const token = jwt.sign({id: savedUser._id}, process.env.JWT_SECRET);
        response.status(200).json({
            token,
            user:{
                id: savedUser.id,
                username: savedUser.username,
                email: savedUser.email
            }
        })
    }catch(error){
        response.status(400).json({error: error.message})
    }
})

// private retrieve user data
router.get('/user', auth, async (request, response) => {
    try{
        const retrievedUser = await user.findById(request.user.id).select('-password');
        if(!retrievedUser){
            throw Error("user does not exist")
        }
        response.json(retrievedUser);
    }catch(error){
        response.status(400).json({msg: error.message})
    }
})

export default router;