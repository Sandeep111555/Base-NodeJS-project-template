const {StatusCodes} = require('http-status-codes'); 
const info = (req,res)=>{
    return res.status(StatusCodes.BAD_REQUEST).json({
        "success":"true",
        "error":"",
        "data":{},
        "msg":"This is working fine"
    })
}
module.exports = info;