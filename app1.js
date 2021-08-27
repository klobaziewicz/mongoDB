const mongo = require('mongodb')
const mongoClient = mongo.MongoClient
const ObjectID = mongo.ObjectId

const url = 'mongodb://127.0.0.1:27017'
const dbname = 'mongo-test'

mongoClient.connect(url,{},(error,client) => {
    if(error)
        console.log('cannot connect')

    const db = client.db(dbname)
    //dodawanie 1
    db.collection('users').insertOne({
        name: 'Piotr',
        age: 34,
        ttt: 'y'
    }, (error, result) => {
        if(error)
            console.log('Adding user error', error)
        console.log(result)
    })

    //dodawanie >1
    //db.collection('users').insertMany([
    //    {
    //        hhh: 'a'
    //    },
    //    {
    //        aaa: 21,
    //        bbbd: 'a'
    //    }
    //], (error, result) => {
    //    if(error)
    //        console.log('Adding user error', error)
    //    console.log(result)
    //})

    //aktualizacja
    //może być .updateOne (wtedy tylko jednego spełniającego warunek)
    //db.collection('users').updateMany({
    //    age: 34
    //}, {
    //    $set: {
    //        age: 36
    //    }
    //})

    //usuwanie
    //db.collection('users').deleteMany({
    //    name: 'Piotr'
    //}, (error, result) => {
    //    console.log(result)
    //})

    //wyszukiwanie
    //zamiast to array może być .count (czyli liczenie otrzymanych wyników)
    db.collection('users').find({
        //age: {$gt: 25}
    }).toArray((error,result) => {
        console.log(result)
    })

    //const id = new ObjectID("6129369f0fac28d047831686")
    const id = new ObjectID()
    console.log(id.getTimestamp())

    console.log('connection is ok')
    //console.log(client)
})