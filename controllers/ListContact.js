import ListContact from "../models/ListContactModel.js";

export const getListContact = async (req, res) => {
    try {
        const response = await ListContact.findAll({
            attributes:['uuid', 'firstName', 'lastName', 'emailAddress', 'phoneNumber', 'company', 'country', 'note']
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

export const getListContactById = async (req, res) => {
    try {
        const response = await ListContact.findOne({
            where: {
                uuid: req.params.id
            },
            attributes:['uuid', 'firstName', 'lastName', 'emailAddress', 'phoneNumber', 'company', 'country', 'note']
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

export const createListContact = async (req, res) => {
    const {firstName, lastName, emailAddress, phoneNumber, company, country, note} = req.body;
    try {
        await ListContact.create({
            firstName: firstName,
            lastName: lastName,
            emailAddress: emailAddress,
            phoneNumber: phoneNumber,
            company: company,
            country: country,
            note: note
        });
        res.status(201).json({ msg: 'Contact has been send' });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}

export const updateListContact = async (req, res) => {
    const contact = await ListContact.findOne({
        where: {
            uuid: req.params.id
        },
    });
    const {firstName, lastName, emailAddress, phoneNumber, company, country, note} = req.body;
    try {
        await ListContact.update({
            firstName: firstName,
            lastName: lastName,
            emailAddress: emailAddress,
            phoneNumber: phoneNumber,
            company: company,
            country: country,
            note: note
        },{
            where: {
                id: contact.id
            }
        });
        res.status(200).json({ msg: 'Update Contact Success' });
    } catch (error) {
        res.status(400).json({ msg: error.messasge });
    }
}

export const deleteListContact = async (req, res) => {
    const contact = await ListContact.findOne({
        where: {
            uuid: req.params.id
        },
    });
    if(!contact) return res.status(404).json({ msg: 'Contact Not Found' });
    try {
        await ListContact.destroy({
            where: {
                id: contact.id
            }
        });
        res.status(200).json({ msg: 'Delete Contact Success' });
    } catch (error) {
        res.status(400).json({ msg: error.messasge });
    }
}