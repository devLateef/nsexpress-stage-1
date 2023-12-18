const emailValidation = (id)=>{
    if(typeof id === 'string' && id.trim() != ''){
        let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return id.match(mailformat) != null
    }else{
        return false
    }
};

const getOne = (user, res)=>{
    if(user){
        res.status(200).json(user)
    }else{
        res.status(404).json({message: 'User not found'})
    };
};

module.exports = {
    emailValidation,
    getOne
};