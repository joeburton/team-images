# React Presentation - Adding unit tests using Jest and Enzyme.


```
$ npm install -g create-react-app
```

```
$ npx create-react-app team-images
```

```
1. Add team component
1. Add some tests for the component
```

```
# Add enzyme and enzyme-adapter-react-16
$ npm i --save-dev enzyme enzyme-adapter-react-16
```

```
# Add configuration for Enzyme and it's adaptor
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
```

###### Create a new GitHub repository team-images/

```
$ git init
$ git add README.md
$ git commit -m "first commit"
$ git remote add origin https://github.com/[id]/team-images.git
$ git push -u origin master
```

```
#install gh-pages package
$ npm install --save gh-pages
```

```
#Update package.json
{
  "name": "team-images",
  "version": "0.1.0",
  "private": true,
  "homepage": "https://joeburton.github.io/team-images/",
  "dependencies": {
    "gh-pages": "^1.1.0",
    "react": "^16.4.0",
    "react-dom": "^16.4.0",
    "react-scripts": "1.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  },
  "devDependencies": {
    "enzyme": "^3.3.0",
    "enzyme-adapter-react-16": "^1.1.1"
  }
}

```

###### Commit all your files

```
#deploy application
$ npm run deploy
```

###### Check out the end result
[React App Shell - Team Images](https://joeburton.github.io/team-images/)

