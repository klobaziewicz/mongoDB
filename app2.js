require('./db/mongoose')
const User = require('./db/models/user')

const user = new User({name: "Peter", age: 20})
user.save().then(() => {
    console.log(user)
}).catch(error => {
    console.log(error)
})

const createuser = async (data) => {
    try {
        const user = new User(data)
        await user.save()
        
        console.log(user)
    } catch (error) {
        console.log(error)
    }
}

const findUsers = async () => {
    try {
        const users = await User.find({})
        console.log(users)
    } catch (error) {
        console.log(error)
    }
}

createuser({
    name: 'Neil',
    age: 21
})

findUsers()