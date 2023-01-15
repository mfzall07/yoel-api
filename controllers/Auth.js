import Users from "../models/UserModel.js";
import argon2 from "argon2";

export const Login = async (req, res) => {
    const user = await Users.findOne({
        where: {
            username: req.body.username
        },
    });
    if(!user) return res.status(404).json({ msg: 'User Not Found' });
    const match = await argon2.verify(user.password, req.body.password);
    if(!match) return res.status(400).json({ msg: "Wrong Password" });
    req.session.userId = user.uuid;
    const uuid = user.uuid;
    const name = user.name;
    const email = user.email;
    const username = user.username;
    const password = user.password;
    res.status(200).json({uuid, name, email, username, password})
}

export const Me = async (req, res) => {
    if(!req.session.userId) {
        return res.status(401).json({ msg: 'Please login to your account' })
    }
    const user = await Users.findOne({
        where: {
            uuid: req.session.userId
        },
        attributes: ['uuid', 'name', 'email', 'username', 'password']
    });
    if(!user) return res.status(404).json({ msg: 'User not found' })
    res.status(200).json(user)
    
}

export const Logout = (req, res) => {
    req.session.destroy((err) => {
        if(err) return res.status(400).json({ msg: 'Cannot Logout' });
        res.status(200).json({ msg: 'Logout Success' })
    })
}