const mongoose= require('mongoose');

mongoose
.connect(process.env.MONGODB_ATLAS_URI)
.then((db)=>console.log('Successfully! DB connected.'))
.catch((err)=>console.log('ERROR! DB is NOT connected.'))