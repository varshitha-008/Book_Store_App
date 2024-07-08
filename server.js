
const express =require('express');

const bodyParser=require('body-parser');
const { swaggerUi } = require('./config/swagger');
const authRoutes=require('./routes/authRoutes')
const bookRoutes=require('./routes/bookRoutes');
const orderRoutes=require('./routes/orderRoutes');
const reviewRoutes=require('./routes/reviewRoutes');


const app=express();
// const path=require('p')

app.use(bodyParser.json());
app.use('/api/auth',authRoutes);
app.use('/api/orders',orderRo)

app.use('/api-docs',swaggerUi.serve);
const PORT =process.env.PORT || 3000;

app.listen(PORT,()=>{
    try {
        console.log(`server is running at ${PORT}`);
    } catch (error) {
          console.log("oops we got error in running port");
    }
})