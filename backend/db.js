const mongoose = require('mongoose')

const mongURL = 'mongodb+srv://jeebanjyotimallik01:QX0G0b5BWvHAMtBN@cluster0.cpri4.mongodb.net/foodApplicationMERN'
const mongoDB = async ()=>{

    try {
      
        await mongoose.connect(mongURL);
    
        console.log("Connected to MongoDB");
    
        // Fetch data from food_items collection
        const fetched_data = await mongoose.connection.db.collection("foodItems").find({}).toArray();
        global.food_items = fetched_data;
    
        // Fetch data from foodCategory collection
        const foodCategory = await mongoose.connection.db.collection("foodCategory").find({}).toArray();
        global.food_category = foodCategory;

    
      } catch (err) {
        console.error("Error:", err);
      }
        
}

module.exports = mongoDB;
