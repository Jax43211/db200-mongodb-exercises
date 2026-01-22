/*
db.movies.insertOne({"title" : "Star Wars","writer" : "George Lucas","year" : "1977","actors" : ["Mark Hamill","Harrison Ford","Carrie Fisher","Peter Cushing","James Earl Jones"]})
db.movies.insertOne({"title":"Raiders of the Lost Ark", "writer":"George Lucas", "year":1981, "actors" : ["Harrison Ford"]})
db.movies.insertOne({"title" : "Fight Club","writer" : "Chuck Palahniuk","year" : 1999,"actors" : ["Brad Pitt","Edward Norton"]})
db.movies.insertOne({"title" : "Pulp Fiction","writer" : "Quentin Tarantino","year" : 1994,"actors" : ["John Travolta","Uma Thurman"]})
db.movies.insertOne({"title" : "Inglorious Basterds","writer" : "Quentin Tarantino","year" : 2009,"actors" : ["Brad Pitt","Diane Kruger","Eli Roth"]})
db.movies.insertOne({ "title" : "The Hobbit: An Unexpected Journey","writer" : "J.R.R. Tolkien","year" : 2012,"franchise" : "The Hobbit"})
db.movies.insertOne({"title" : "The Hobbit: The Desolation of Smaug","writer" : "J.R.R. Tolkien","year" : 2013,"franchise" : "The Hobbit"})
db.movies.insertOne({"title" : "The Hobbit: The Battle of the Five Armies","writer" : "J.R.R. Tolkien","year" : 2012,"franchise" : "The Hobbit","synopsis" : "Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness."})
db.movies.insertOne({"title" : "Pee Wee Herman's Big Adventure","writer": "Phil Hartman","year": 1985})
db.movies.insertOne({"title" : "Avatar"})

1. Get all documents
db.movies.find({})

2. Get all documents with writer set to "Quentin Tarantino"
db.movies.find({ writer: "Quentin Tarantino" })

3. Get all documents where actors include "Brad Pitt"
db.movies.find({ actors: "Brad Pitt" })

4. Get all documents with franchise set to "The Hobbit"
db.movies.find({ franchise: "The Hobbit" })

5. Get all movies released in the '90s
db.movies.find({ year: { $gte: 1990, $lt: 2000 } })

6. Get all movies released before 2000 or after 2010
db.movies.find({ $or: [{ year: { $lt: 2000 } }, { year: { $gt: 2010 } }] })


1. Add synopsis to "The Hobbit: An Unexpected Journey"
db.movies.updateOne({ "title": "The Hobbit: An Unexpected Journey" }, { $set: { "synopsis": "A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug." } })

2. Add synopsis to "The Hobbit: The Desolation of Smaug"
db.movies.updateOne({ title: "The Hobbit: The Desolation of Smaug" }, { $set: { synopsis: "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring." } })

3. Add actor "Samuel L. Jackson" to "Pulp Fiction"
db.movies.updateOne({ title: "Pulp Fiction" }, { $addToSet: { actors: "Samuel L. Jackson" } })

db.movies.createIndex({ synopsis: "text" })

1. Find all movies with synopsis containing "Bilbo"
db.movies.find({ $text: { $search: "Bilbo" } })

2. Find all movies with synopsis containing "Gandalf"
db.movies.find({ $text: { $search: "Gandalf" } })

3. Find all movies with synopsis containing "Bilbo" and not "Gandalf"
db.movies.find({ $text: { $search: "Bilbo -Gandalf" } })

4. Find all movies with synopsis containing "dwarves" or "hobbit"
db.movies.find({ $text: { $search: "dwarves hobbit" } })

5. Find all movies with synopsis containing "gold" and "dragon"
db.movies.find({ $text: { $search: "\"gold\" \"dragon\"" } })


Delete "Pee Wee Herman's Big Adventure"
db.movies.deleteOne({ title: "Pee Wee Herman's Big Adventure" })

Delete "Avatar"
db.movies.deleteOne({ title: "Avatar" })

db.users.insertOne({ username: "SallySmith", first_name: "Sally", last_name: "Smith" })

db.users.insertOne({ username: "JimmyHagen", full_name: { first: "Jimmy", last: "Hagen" } })

db.posts.insertOne({ username: "SallySmith", title: "Passes out at party", body: "Wakes up early and cleans house" })

db.posts.insertOne({ username: "SallySmith", title: "Buys a House", body: "Living in a new neighborhood now" })

db.posts.insertOne({ username: "SallySmith", title: "Reports a bug in your code", body: "Sends you a Pull Request" })

db.posts.insertOne({ username: "JimmyHagen", title: "Borrows something", body: "Returns it when he is done" })

db.posts.insertOne({ username: "JimmyHagen", title: "Borrows everything", body: "The end" })

db.posts.insertOne({ username: "JimmyHagen", title: "Forks your repo on github", body: "Sets to private" })

db.comments.insertOne({ username: "SallySmith", comment: "Hope you got a good deal!", post: db.posts.findOne({ title: "Borrows something" })._id })

db.comments.insertOne({ username: "SallySmith", comment: "What's mine is yours!", post: db.posts.findOne({ title: "Borrows everything" })._id })

db.comments.insertOne({ username: "SallySmith", comment: "Don't violate the licensing agreement!", post: db.posts.findOne({ title: "Forks your repo on github" })._id })

db.comments.insertOne({ username: "JimmyHagen", comment: "It still isn't clean", post: db.posts.findOne({ title: "Passes out at party" })._id })

db.comments.insertOne({ username: "JimmyHagen", comment: "Denied your PR cause I found a hack", post: db.posts.findOne({ title: "Reports a bug in your code" })._id })

1. Find all users
db.users.find({})

2. Find all posts
db.posts.find({})

3. Find all posts authored by "SallySmith"
db.posts.find({ username: "SallySmith" })

4. Find all posts authored by "JimmyHagen"
db.posts.find({ username: "JimmyHagen" })

5. Find all comments
db.comments.find({})

6. Find all comments authored by "SallySmith"
db.comments.find({ username: "SallySmith" })

7. Find all comments authored by "JimmyHagen"
db.comments.find({ username: "JimmyHagen" })

8. Find all comments belonging to the post "Reports a bug in your code"
db.comments.find({ post: db.posts.findOne({ title: "Reports a bug in your code" })._id })
*/