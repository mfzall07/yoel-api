import Quotes from "../models/QuotesModel.js";

export const getQuotes = async (req, res) => {
    try {
        const response = await Quotes.findAll({
            attributes:['uuid', 'nameQuotes']
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

export const createQuotes = async (req, res) => {
    const {nameQuotes} = req.body;
    try {
        await Quotes.create({
            nameQuotes: nameQuotes,
        });
        res.status(201).json({ msg: 'Quotes has been create' });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}

export const updateQuotes = async (req, res) => {
    const quotesID = await Quotes.findOne({
        where: {
            uuid: req.params.id
        },
    });
    const {nameQuotes} = req.body;
    try {
        await Quotes.update({
            nameQuotes: nameQuotes,
        },{
            where: {
                id: quotesID.id
            }
        });
        res.status(200).json({ msg: 'Update Quotes Success' });
    } catch (error) {
        res.status(400).json({ msg: error.messasge });
    }
}