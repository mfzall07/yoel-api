import Mission from "../models/MissionModel.js";

export const getMission = async (req, res) => {
    try {
        const response = await Mission.findAll({
            attributes:['uuid', 'nameMission']
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

export const createMission = async (req, res) => {
    const {nameMission} = req.body;
    try {
        await Mission.create({
            nameMission: nameMission,
        });
        res.status(201).json({ msg: 'Mission has been create' });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}

export const updateMission = async (req, res) => {
    const missionID = await Mission.findOne({
        where: {
            uuid: req.params.id
        },
    });
    const {nameMission} = req.body;
    try {
        await Mission.update({
            nameMission: nameMission,
        },{
            where: {
                id: missionID.id
            }
        });
        res.status(200).json({ msg: 'Update Mission Success' });
    } catch (error) {
        res.status(400).json({ msg: error.messasge });
    }
}