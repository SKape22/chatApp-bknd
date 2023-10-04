const User = require("../../../api/v1/user/model");

module.exports.getAllContacts = async (req, res, next) => {
    try {
        console.log("contacts api called")
        const users = await User.find({
            _id: { $ne: req.params.id }}).select([
                "email",
                "username",
                "avatarImage",
                "_id"
            ]);
        console.log(users);
        return res.json(users);
    } catch(e) {
        console.log({ err: e });
        next(e);
    }
}