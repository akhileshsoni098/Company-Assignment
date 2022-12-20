
const BookModel = require('../models/myBookModel')
const AuthorModel = require('../models/authorModle')

const createBook = async (req,res)=>{
    let bookDetails = req.body
    let createBooks = BookModel.create(bookDetails)
    res.send({createBooks})
}








const createAuthor = async (req,res)=>{
    let AuthorDetails = req.body
    let createAuther = AuthorModel.create(AuthorDetails)
    res.send({createAuther})
}




const  bookListById = async (req, res)=>{
    let saveAuthorId = await AuthorModel.find({author_name: "Chetan Bhagat" }).select({author_id: 1,_id: 0}) 
    let saveBookId = await BookModel.find({author_id:{$eq:saveAuthorId[0]["author_id"]}}).select({name:1, _id:0})
    res.send({msg:saveBookId}) 
    
    }
    

    const updatePrice = async (req, res)=>{
        let authorDoc = await BookModel.findOneAndUpdate({name:"Two states"},{price:100}).select({author_id: 1, price: 1, _id: 0})
        // res.send({authorDoc}) 
        let authorName = await AuthorModel.find({author_id:{$eq:authorDoc.author_id}}).select({author_name: 1,_id:0} )
    res.send({authorName, authorDoc})
    }

    // bookModel.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1}).
    // .run a map(or forEach) loop and get all the authorName corresponding to the authorId’s 
    // ( by querying authorModel)

const bookFindByPrice = async(req,res)=>{
    let costBook = await BookModel.find({price:{$gte:50,$lte:100}}).select({author_id:1, _id:0})
    res.send(costBook)

}

module.exports.bookListById = bookListById
module.exports.createAuther = createAuthor
module.exports.createBook = createBook
module.exports.updatePrice = updatePrice
module.exports.bookFindByPrice = bookFindByPrice