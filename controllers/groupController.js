const groupSchema = require('../models/groupModel');

exports.createGroup = async (req, res) => {
    try{
        let newGroup = await groupSchema.create(req.body);

        res.status(201).json({
            status: true,
            data: newGroup
        });
    }catch(err){
        res.status(500).json({
            status: false,
            message: 'Internal Server Error'
        });
    }
}

exports.editGroupName = async (req, res) => {
    try{
        const id = req.params.id;

        const updateGroupName = await groupSchema.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true
        });

        res.status(200).json({
            success: true,
            data: updateGroupName
        })
    }catch(err){
        res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        })
    }
}