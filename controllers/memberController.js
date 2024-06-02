const Members = require('../models/membersModel');

exports.createMember = async(req, res) => {
    try{
        const newMember = await Members.create(req.body);

        res.status(200).json({
            success: true,
            data: newMember
        });

    }catch(err){
        res.status(500).json({
            success: false,
            message: 'Internal Server Error!'
        })
    }
}

exports.updateMember = async(req, res) => {
    try{
        const id = req.params.id;

        const updatedMember = await Members.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true
        });

        res.status(201).json({
            status: true,
            data: updatedMember
        })
    }catch(err){
        res.status(500).json({
            status: false,
            message: 'Invalid Parameters!'
        })
    }
}

exports.getAllMembers = async(req, res) => {
    try{
        let id = req.params.id;

        let allMember = await Members.find();

        let filteredMembers = allMember.filter((el) => el.groupId === id);

        res.status(200).json({
            status: true,
            data: filteredMembers
        })
    }catch(err){
        res.status(500).json({
            status: false,
            message: 'Invalid Parameters!'
        })
    }
}