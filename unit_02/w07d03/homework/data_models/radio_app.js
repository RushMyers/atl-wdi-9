//Radio App
//Stations, playlists, songs

var Station {
    id: Number,
    name: String,
    numberOfListeners: Number,
    playlists: [],
    genre: [],
};

var Playlists {
    id: Number,
    name: String,
    songs: []
};

var Songs {
    id: Number,
    title: String,
    Artist: String,
    Duration: Number,
};

//Building Relationships

var Station {
    id: Number,
    name: String,
    numberOfListeners: Number,
    playlists: [{
                id: Number,
                name: String,
                songs: [{
                        id: Number,
                        title: String,
                        Artist: String,
                        Duration: Number,
                      }]
                  }],
};

