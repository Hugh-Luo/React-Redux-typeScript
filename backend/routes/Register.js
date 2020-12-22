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

    const checkUser = () => {
        return new Promise((resovle, reject)=>{
            User.find()
                .then(users=>{
                    users.map(user=> {
                        if (user.email === email) {
                            // res.json('THe user already exist')
                            reject('already exist')

                        }
                    })
                    resovle('new User')

                })
                .catch(err => res.json(err))
        })

    }


    const addUser = ()=> {
        return new Promise((resolve, reject)=>{
            // res.send({email, password})
            const newUser = new User({
                email,
                password
            })

            newUser.save()
                .then(response=>
                    resolve('Add successfully' + '\n' + response))
                .catch(err=>
                    reject(err)
                )
        })
    }


    const register = () => {
        checkUser()
            .then(message => console.log(message))
            .then(()=>addUser())
            .then(mesage=>{
                    console.log(mesage)
                    res.json(mesage)
                }
            )
            .catch(err=> {
                console.log(err)
                res.json(err)
            })
    }

    register()

})

router.route('/users/delete').delete((req,res)=>{
    User.deleteMany({})
        .then(response=>{res.json({'All records have been deleted': response})})
        .catch(err=>res.json(err))
})

module.exports = router;