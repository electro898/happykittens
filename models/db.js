const mongoose = require('mongoose');
try {
    (async ()=>{
        await mongoose.connect('mongodb://positive:Adi1234.!@5.161.92.234:27017/positive', { useNewUrlParser: true, useUnifiedTopology: true });
        
    })();
}catch(err){
    console.log(err);
}


module.exports = mongoose;
