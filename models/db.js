const mongoose = require('mongoose');
try {
    (async ()=>{
        await mongoose.connect('mongodb+srv://admin:Adijat1234.!@cluster0.bg92d.mongodb.net/projekti2?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
        
    })();
}catch(err){
    console.log(err);
}


module.exports = mongoose;
