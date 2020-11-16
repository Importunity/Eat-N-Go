import Router from 'express';
import user from '../../model/user.js';

const router = Router();

router.get('/', async (request, response) => {
    try{
        const users = await user.find();
        if(!users){
            throw Error('User Does Not Exist');
        }
        response.json(users);
    }catch(error){
        response.status(400).json({msg: error.message})
    }
})

export default router;