const userRouter = require('./userRouter')
const categoryRouter = require('./categoryRouter')
const uploadRouter = require('./uploadRouter')
const productRouter = require('./productRouter')

module.exports = (app) =>{

    app.use('/api/v1/user', userRouter)
    app.use('/api/v2/category', categoryRouter)
    app.use('/api/v3/upload', uploadRouter)
    app.use('/api/v4/products', productRouter)

}