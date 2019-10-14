# Sur-Way

SurWay is a polling website dedicated to Cab Drivers.

Drivers can report their earnings, all of the data is stored anonymously and then can be later used to generate useful insights.

> This is one of my first React Projects, and so this took way longer than expected to complete. The general idea was to add several features like browser finger printing and SSO to ensure that a single user could be allowed to cast a vote only once. But, I decided to postpone these features for a future release. 

## How did I build it?


## Trying to learn React and Express on the road
Before building this I had never worked with React before, this meant I had to unlearn everything working with Python had taught me over the years and take a deep dive into Javascript, I was also travelling around a bit as I worked on this, which meant long hours leaching off my Phone's WiFi Hotspot.

1. I started off by watching one of those _Learn React in one video_ vidoes on YouTube. 
https://www.youtube.com/watch?v=sBws8MSXN7A



Then I added Material UI

Created a basic template structure for the project so things won't be repeated

Now let's fix up the header. 

Now, that is done 

Decided to revert from Material UI to plain React till I figure it out completely

Then moved on to creating the node js backend 

Created db connection

created routes and models

Mind Map of how db connection happens in NodeJS

I was initially struggling to wrap my head around how Mongoose's DB-thingy worked. Turns out all it is is.

1. Create a db model. A definition of what you want the dbobject/ table to look like.
2. Create a routes files to hand all of the get/update/list and other rest operations and link it with operations from the controller
3. Create a controller file do the actual grunt work of CRUD-ing.
4. 

If you don't have CORS configured properly on your server, when you try to make an API request from a React component which is not the main component you might recieve a error where you won't see your POST being passed.