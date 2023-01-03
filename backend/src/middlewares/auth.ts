import jwt from "jsonwebtoken"


module.exports = (request, response, next) => {
    try {
        const token = request.headers.authorization.split(' ')[1]
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
        request.user.id = decodedToken.id;
        next();
    } catch (error) {
        response.status(401).send({error: "Authentication Error: " + error})
    }
}