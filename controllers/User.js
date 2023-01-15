import Users from "../models/UserModel.js";
import argon2 from "argon2";

export const getUser = async (req, res) => {
    try {
        const response = await Users.findAll({
            attributes:['uuid', 'name', 'email', 'username']
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

export const getUserById = async (req, res) => {
    try {
        const response = await Users.findOne({
            where: {
                uuid: req.params.id
            },
            attributes:['uuid', 'name', 'email', 'username']
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

export const createUser = async (req, res) => {
    const {name, email, username, password, confPassword} = req.body;
    if(password !== confPassword) return res.status(400).json({msg: `password and confpassword can't different`})
    const hashPassword = await argon2.hash(password)
    try {
        await Users.create({
            name: name,
            email: email,
            username: username,
            password: hashPassword,
        });
        res.status(201).json({ msg: 'Create User Success' });
    } catch (error) {
        res.status(400).json({ msg: error.messasge });
    }
}

export const updateUser = async (req, res) => {
    const user = await Users.findOne({
        where: {
            uuid: req.params.id
        },
    });
    if(!user) return res.status(404).json({ msg: 'User Not Found' });
    const {name, email, username, password, confPassword} = req.body;
    let hashPassword;
    if (password === '' || password === null) {
        hashPassword = user.password
    } else {
        hashPassword = await argon2.hash(password);
    }
    if(password !== confPassword) return res.status(400).json({msg: `password and confpassword can't different`})
    try {
        await Users.update({
            name: name,
            email: email,
            username: username,
            password: hashPassword,
        },{
            where: {
                id: user.id
            }
        });
        res.status(200).json({ msg: 'Update User Success' });
    } catch (error) {
        res.status(400).json({ msg: error.messasge });
    }

}

export const deleteUser = async (req, res) => {
    const user = await Users.findOne({
        where: {
            uuid: req.params.id
        },
    });
    if(!user) return res.status(404).json({ msg: 'User Not Found' });
    try {
        await Users.destroy({
            where: {
                id: user.id
            }
        });
        res.status(200).json({ msg: 'Delete User Success' });
    } catch (error) {
        res.status(400).json({ msg: error.messasge });
    }
}