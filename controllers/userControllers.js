const asyncHandler = require('express-async-handler');
const User = require('../model/user');

const addUser = asyncHandler(async(req, res)=>{
    const { firstname, lastname, email, track, lang, stage } = req.body;
    const isExist = await User.findOne({email: email});
    if(!isExist){
        try {  
            await User.create({
                firstname,
                lastname,
                email,
                track,
                lang,
                stage
            })
            res.status(200).json('User successfully created')
        } catch (error) {
            console.log('Error creating user: ' + error.message);
        };
    }else{
        return res.status(500).json('User Already Exist');
    }
});

const updateUser = asyncHandler(async(req, res)=>{
    const id = req.params.id;
    const data = req.body
    const updatedUser = await User.findByIdAndUpdate(id,{
        ...data
    });
    res.status(200).json({message: 'User updated successfully', data: updatedUser})
});

const findAllUsers = asyncHandler(async(req, res)=>{
    const users = await User.find({});
    if(users.length != 0){
        res.status(200).json(users);
    }else{
        res.status(404).json('User not found');
    }
})

const findOneUser = asyncHandler(async(req, res)=>{
    const id = req.params.id
    console.log(req.params);
    try {
        const user = await User.findOne({_id: id});
        if(user){
            res.status(200).json(user)
        }else{
            res.status(404).json({message: 'User not found'})
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Internal Server Error'})
    }
})

const deleteUser = asyncHandler(async(req, res)=>{
    const id = req.params.id;
    await User.findByIdAndDelete(id);
    res.status(200).json('User deleted successfully')
})

module.exports = {
    addUser,
    updateUser,
    findAllUsers,
    findOneUser,
    deleteUser
}