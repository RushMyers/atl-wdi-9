# Diagnostic Unit 2.1

### Question 1: What is the Request/Response Cycle?  How does it work?
  The request/response cycle takes place between users and servers.  Requests are made
  by the browser to the server. They can be requests get, post, delete, or update. The server has
  to respond in some way to these requests.

### Question 2: What are the differences between a GET request and a POST request?
  A get request is just to pull up some information or show a page.  A post request is a
  request to put something onto a page.

### Question 3: What does `npm init` do?
  npm init creates a JSON file which will keep track of dependencies and do some other stuff.

### Question 4: What does CRUD stand for?  What are the HTTP verbs that are associated with each function?
  Create - Post
  Read - Get
  Update - Put
  Delete - Delete
### Question 5: If we have a form where we want to create new data, what type of `method` do we use in our form?
  Put/Post
### Question 6: If the following form was submitted, what would `action="myScript.js"` do?

```
<form method="POST" action="myScript.js?_method=PUT">
  <input type="text" value="name"/>
  <button type="submit">Submit</button>
</form>
```
    Put

### Question 7: Write an express route that handles a POST request to the url `/menus` and redirects to the `/homepage`
  router.post('/menus', function(req, res) {
    res.redirect('/homepage');
  });
### Question 8: In the following express route, write how you would grab the values of `:id` and `:song_id` in javascript.

```
app.get("/artist/:id/song/:song_id"), function(req, res){
  req.params.id;
  req.params.song_id;
}
```

### Question 9: What is MVC? How have we been using it so far?
  Model View Controller.  We have a model which is just data stored usually in an array of objects.
  We get that data or some part or parts of it with our controller and render it with a view engine(hbs);

## Bonus Question

### Question 10: Write an express route that handles a GET request to the url `/products` and sends back the JSON object {error: "Bad Request"}
var json = require('package.json');

router.get('/products', function(req, res) {
    res.send('json.error');
});











