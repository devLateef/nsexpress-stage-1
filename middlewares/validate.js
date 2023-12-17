const validation = async(req, res, next)=>{
    const {firstname, lastname, track, stage, email} = req.body;
    if(!firstname || !lastname || !track || !stage || !email){
        res.status(400).json({
            message: 'Bad Request',
            statusCode: 400
        });
        return
    }
    next();
}

module.exports = validation;