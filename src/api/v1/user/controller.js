const User = require('./model')
const bcrypt = require('bcrypt')

module.exports.register = async (req, res, next) => {
    try {
        console.log(req.body);
        const { username, email, pass } = req.body;

        // const usernameCheck = await User.findOne({ username: username });
        const usernameCheck = await User.findOne({username: username})

        if (usernameCheck) {
            return res.json({ msg: "Username already used", status: false });
        }

        const emailCheck = await User.findOne({ email: email });

        if (emailCheck) {
            return res.json({ msg: "Email already used", status: false });
        }

        const hashPass = await bcrypt.hash(pass, 10);

        const user = await User.create({
            username: username,
            email: email,
            password: hashPass
        });

        delete user.password;
        return res.json({ status: true, user });
    } catch (e) {
        console.log({ err: e });
        next(e);
    }
};


module.exports.login = async (req, res, next) => {
    try {
        console.log(req.body);
        const { username, pass } = req.body;

        const user = await User.findOne({username});

        if (!user) 
            return res.json({msg: "Incorrect username or password", status: false})
        

        const validPassword = await bcrypt.compare(pass, user.password);

        if (!validPassword) 
            return res.json({ msg: "Incorrect username or password", status: false})
        
        delete user.password;

        return res.json({ status: true, user });
    } catch (e) {
        console.log({ err: e });
        next(e);
    }
};