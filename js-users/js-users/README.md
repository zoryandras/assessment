# User List - Homework for Digital Natives Part II.

My very first Angular/Typescript/Material UI project ever with CRUD.

For this project I used

- Angular 14
- JSON-server
- Material UI


Unfortunately I could not get the given API to work. I tried several solutions and asked for professional help, but the 500 error kept coming up.

Since I wanted to use the database anyway, and I was curious about how the JSON-server library works, I solved it by making a server that fetches the requested data (I learned something new this way, so it's a win). If you have a solution on how it could be solved, I would really appreciate it, because I am absolutely curious. I do have theories, but honestly in practice I couldn't make it.

The project lists users, which can be edited and deleted. You can also add a new user using the button in the top right corner. The project also includes a filter function to filter users by first name and last name. 

Clicking on the lock button will display the requested style change on the users.

How to run the page:

- if you haven't install Angular before:

```
npm install -g @angular/cli
```

- install dependencies
```
npm i
```

- if you haven't install JSON-server before:
```
npm install -g json-server
```

- run JSON-server (it will start on port 3000):
```
json-server db.json
```

- run project:
```
ng serve
```

I know it's far from perfect, but I truly enjoyed working with new techs like Angular and Typescript for the first time. I'm pretty sure I will polish it in the coming days, because I really want to hide the 'created at' input field when I'm not adding the user, only edit it. :) :)