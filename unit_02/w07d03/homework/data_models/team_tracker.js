//Team-Tracker

var User = {
    id: Number,
    name: String,
    userName: String,
    teams: []
};
var Teams = {
    name: String,
    city: String,
    id: Numbers,
    stats: []
    players: []
};
var Players = {
    number: Number,
    id: Numbers,
    name: String
    stats: []
};

// Relationships

var User = {
    id: Number,
    name: String,
    userName: String,
    teams: [{
            name: String,
            city: String,
            id: Numbers,
            stats: []
            players: [{
                  number: Number,
                  id: Numbers,
                  name: String
                  stats: []
                      }]
            }]
};
