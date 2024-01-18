const Manager = require('../models/manager.model');

module.exports.findAllManagers = (req, res) => {
    Manager.find()
        .then((allDaManagers) => {
            res.json({ managers: allDaManagers })
        })
        .catch((err) => {
            res.json(err)
        });
}

module.exports.findOneSingleManager = (req, res) => {
    Manager.findOne({ _id: req.params.id })
        .then(oneSingleManager => {
            res.json({ manager: oneSingleManager })
        })
        .catch((err) => {
            res.json(err)
        });
}

module.exports.createNewManager = (req, res) => {
    Manager.create(req.body)
        .then(newlyCreatedManager => {
            res.json({ manager: newlyCreatedManager })
        })
        .catch((err) => {
            res.json(err)
        });
}

module.exports.updateExistingManager = (req, res) => {
    Manager.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedManager => {
            res.json({ manager: updatedManager })
        })
        .catch((err) => {
            res.json(err)
        });
}

module.exports.deleteAnExistingManager = (req, res) => {
    Manager.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json(err)
        });
}