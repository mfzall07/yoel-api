import Visi from "../models/VisiModel.js";

export const getVisi = async (req, res) => {
    try {
        const response = await Visi.findAll({
            attributes:['uuid', 'nameVisi']
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

export const createVisi = async (req, res) => {
    const {nameVisi} = req.body;
    try {
        await Visi.create({
            nameVisi: nameVisi,
        });
        res.status(201).json({ msg: 'Visi has been create' });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}

export const updateVisi = async (req, res) => {
    const visiID = await Visi.findOne({
        where: {
            uuid: req.params.id
        },
    });
    const {nameVisi} = req.body;
    try {
        await Visi.update({
            nameVisi: nameVisi,
        },{
            where: {
                id: visiID.id
            }
        });
        res.status(200).json({ msg: 'Update Visi Success' });
    } catch (error) {
        res.status(400).json({ msg: error.messasge });
    }
}