angular.module('HappyApp', [])
  .controller('RatingsController', RatingsController);

  function RatingsController(){
    this.ratings = [
      ];
     function addRating(){
        this.ratings.push({value: this.value});
        this.rating =
      }
  }
