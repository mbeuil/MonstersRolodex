# Monster Rolodex

## react project

Create a web app that show the different users found from an external API:

> https://jsonplaceholder.typicode.com/users

While using images from:

> https://robohash.org/

Add a filtering option.

## gh-pages

install gh-pages package

add

```
+   "homepage": "https://mbeuil.github.io/MonstersRolodex",
```

and

```
 "scripts": {
     ...
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -d build"
 },
```

to:

> package.json

run the command:

> npm run deploy
