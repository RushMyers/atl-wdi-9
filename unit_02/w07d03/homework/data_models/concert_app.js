//Rock Concert App

var User {
    id: Number,
    name: String,
    location: String,
    favoriteBands: [],
    recommendedShows: []
}
var Band {
    id: Number,
    name: String,
    genre: String,
    bio: String
    shows: []
}

var Shows {
    id: Number,
    date: Date,
    location: String,
    tickInfo: String,
    performers: String
    venue: String
}

//Defining Relationships

var User {
    id: Number,
    name: String,
    location: String,
    favoriteBands: [{
                id: Number,
                name: String,
                genre: String,
                bio: String
                shows: [{
                        id: Number,
                        date: Date,
                        location: String,
                        tickInfo: String,
                        performers: String
                        venue: String
                        }]
                }],
    recommendedShows: []
};




