db.vampires.find({name: "Francis Frost"})

db.vampires.find({location: "Paris, France"})
{ "_id" : ObjectId("58d2811a7461f50578385932"), "name" : "Persephone Bourignon", "dob" : ISODate("1801-06-17T18:53:00Z"), "hair_color" : "red", "eye_color" : "green", "location" : "Paris, France", "gender" : "f", "victims" : 450, "loves" : [ "wine", "fancy cloaks", "appearing innocent" ], "__v" : 0 }

db.vampires.find({victims: { $gt: 500}})

db.vampires.find({victims: { $lte: 150 }})

db.vampires.find({victims: {$ne: 210234}})
