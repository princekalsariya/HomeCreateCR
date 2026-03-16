const Home = require("../model/home");

const homeget = async (req, res) => {
    try {
        const home = await Home.find();
        res.json({
            TRUE: "Success",
            DATA: home
        })
    } catch (error) {
        console.log(error);
    }
}

const homepost = async (req, res) => {
    try {
        const homedata = new Home(req.body);
        const saveomedata = await homedata.save();
        res.status(200).json({
            SUCCESS: true,
            status: 200,
            DATA: saveomedata
        })
    } catch (error) {
        res.status(500).json({
            false: "true",
            ERROR: error.message
        })
    }
}


module.exports = { homeget, homepost };