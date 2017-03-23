var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Use native promises
mongoose.Promise = global.Promise;

var ItemSchema = new Schema({
  name: String
});

var ProjectIdeaSchema = new Schema ({
  description: String,
  in_progress: Boolean,
  created_at: Date,
  updated_at: Date
});

var UserSchema = new Schema({
  first_name: String,
  last_name: String,
  email: { type: String, required: true, unique: true },
  created_at: Date,
  updated_at: Date,
  items: [ItemSchema],
  projectIdea: [ProjectIdeaSchema]
});

UserSchema.pre('save', function(next){
  now = new Date();
  this.updated_at = now;
  if ( !this.created_at ) {
    this.created_at = now;
  }
  next();
});

var ProjectIdeaModel = mongoose.model("Project Idea", ProjectIdeaSchema);
var UserModel = mongoose.model("User", UserSchema);
var ItemModel = mongoose.model("Item", ItemSchema);

module.exports = {
  User: UserModel,
  Item: ItemModel,
  projectIdea: ProjectIdeaModel
};
