const User = require("../../../api/v1/user/model");

module.exports.getAllContacts = async (req, res, next) => {
    try {
        const users = await User.find({
            _id: { $ne: req.params.id }}).select([
                "email",
                "username",
                "avatarImage",
                "_id"
            ]);
        return res.json(users);
    } catch(e) {
        console.log({ err: e });
        next(e);
    }
}