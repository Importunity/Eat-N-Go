import jwt from 'jsonwebtoken';

export default (request, response, next) => {
    const token = request.header('x-auth-token');

    if(!token){
        return response.status*(401).json({msg: "No token, authorization denied"});
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        request.user = decoded;
        next();
    }catch(error){
        response.status(400).json({msg: "token is invalid"});
    }
}