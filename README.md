# React.js + Fetch.js

## Some experiments with new Fetch function & React Framework

Based on several documentations:

- [CodePen: Fetch API & React](https://codepen.io/devhamsters/pen/zoeqJm)
- [Scotch.io: How to Use the JavaScript Fetch API to Get Data](https://scotch.io/tutorials/how-to-use-the-javascript-fetch-api-to-get-data)

### Fetch API

Fetch is a new handy API to grab some content from external links, especially on JSON content. It's very easy to write, with modular promises & catches:

```javascript
    fetch('https://randomuser.me/api/?results=10').then(respone => { return response.json()})
    .then(data => {
        this.setState({
            data: data.results
        })
    })
```

### About the script

Nothing really special here. Just go check *src/users/Users.js* for the main component. I'm sure I can optimize with another sub-component for each user, inside this one, can't I?
The main loader is *src/index.js*: 

```javascript
import Userlist from './users/Users'

ReactDOM.render(<Userlist qty="127" />, document.getElementById('root'))
``` 

As you can see, **qty prop** is great to dynamically change users' quantity to load in this app. Also, check out how you can pass through the *render()* method customized variables (in ES6 backtick convienient templating format). There's also an attempt to display a **loader** at first, then the content once the *AJAX* call is done and data are ready to go!

And I use [spectre.css](https://picturepan2.github.io/spectre/) framework for a little bit of sugar...

Happy **Front-End** design!