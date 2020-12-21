const router = require('express').Router();
let User = require('../modules/Register.module')



router.route('/').get((req,res)=>{
    User.find()
        .then(user=>res.json(user))
        .catch(err => res.json(err))
})


router.route('/register').post((req, res) => {
    const email = req.body.email
    const password = req.body.password

    res.send({email, password})
})

module.exports = router;