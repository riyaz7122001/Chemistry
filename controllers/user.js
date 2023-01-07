db.inventory.insertOne({productno:106,description:"Samsung Galaxy J2",company:"Samsung",price:15000});

db.createCollection("inventory");

db.inventory.insertOne(
{productno:106,
description:"",
company:"Amazon",
price:1000
});

db.inventory.insertMany(
[
{productno:102,
description:"A  cipla product",
company:"Apollo",
price:100},

{productno:103,
description:"Energy Supplement",
company:"Creatine",
price:1000},

{productno:104,
description:"Enerzal",
company:"Apollo",
price:100},

{productno:105,
description:"Caffeine",
company:"Nescafe",
price:180}
]
);

db.inventory.find({}).pretty();

db.inventory.find({"productno":101}).pretty();

db.inventory.updateOne({description:"Caffeine"},{$set:{description:"RTX4050"}});
db.inventory.updateOne({company:"Nescafe"},{$set:{company:"Geforce"}});


db.inventory.find({price:{$lt:15000}}).pretty();
db.inventory.find({price:{$gt:100}}).pretty();


// descending form
db.inventory.find({}).sort({price:-1}).pretty();

//ascending form
db.inventory.find({}).sort({price:1}).pretty();

db.students.find({ gender: 'F',gender: });

db.students.insertMany([
    { id: 1, name: 'Ryan', gender: 'M' },
    { id: 2, name: 'Joanna', gender: 'F' },
    { id: 2, name: 'Tate', gender: 'M' }
  ]);
  
  db.students.find({},{ gender: 'M'}).pretty();
  
  db.students.find({}).pretty();

  db.inventory.deleteOne({description:"Samsung Galaxy J2"});