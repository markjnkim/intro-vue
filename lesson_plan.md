## 1.1 - Introduction to Vue.js 

### Overview (5 min)

Today will be our first day introducing a new front end framework Vue.js

##### Instructor Priorities

* Students should understand how an expression is used to render data to the DOM.

* Students should understand how directives are used to bind attributes to objects.

* Students should understand 2-way data binding.

* Students should understand how to create event listeners.  [click-event](./click-event/click.js)

* Students should understand how to conditionally render components. 

* Students should understand how to render a list of elements in an array. [giphy-challenge](./giphy-challenge/app.js)

### Class Objectives

* Understanding Vue's template syntax.

* To introduce data binding.

* To cover conditional rendering.

- - -

### 1. Instructor Do: Welcome Class and Vue Demo (10 mins) 
#### Phase 1 - Introduction & Set up

### [Slideshow](https://docs.google.com/presentation/d/1cGttCli5C_dHWPycW_UGh9i8OLi_Ny9X7WkDYKkmArY/edit?usp=sharing) (3 min)<br>
### Set up our app (critical)

* `Sample Code is provided` [here](./first-app/hello.js)

* Let's create a new Vue app from scratch.  First create a new directory called `first-app`.  

* Create 2 files, `hello.js` and `index.html`.

* In `hello.js` we create our first `Vue instance` and `options object`.  

* In the `options object` create the `el` and `data` properties.  State their significance and rigidity of the terms.

* Create two properties in the data object - `first_name` and `last_name`.

* Now let's use emmet `html:5` to quickly build a basic html page with a `<div id="first-app">` anchor which will wrap our Vue template script.

* Include relative file path script tag for the `hello.js` in your `index.html` file

* Stress the important of the external vue script CDN in the `<head>` of html file.  
`<script src="https://unpkg.com/vue"></script>`

* Also note there is also npm package
`npm i vue`

### 2. Instructor Do: Template Expressions (8 min)
#### Phase 2 - Reactive Data Render (critical)
###  Objective
Demo Vue's ability to dynamically render data and customize html to a view with high speed and performance.  This can be done in Vue.js using expressions and data binding.

* Stress the importance of our Vue template being wrapped by the `div` Vue instance. 

* A simple `<h1>Hello<h1>` just to start

* Now we can implement our instance data objects into our html code by adding 
 `{{ first_name }}` into our `<h1>` tag.  

* Open html in the browser and observe the wonder!<br>
 Congrats you are now all Vue developers!!!

* Go to the console window in the browser and change the data object
`helloWorld.first_name = "John"`<br>
Due to the reactive nature, changes in the data state of the object trigger UI changes.  
Contrast what this was like in jQuery.

 * `{{expression}}` similar to handlebars in the html templating form that allows various javascript expressions.

* Now lets make our string dynamic by including a method.

* Let's create a method in our `methods` property called `full_name()`.

* Create a new tag `<h2>` that will render this method.  Remember to use `()`.

* Side Note - Notice how the lexical scope of `this` captures `first_name` due to hoisting without needing to reference `data`.  Therefore do not use fat arrow functions here due to the change in the lexical scope of `this`.

### 3. Students Do (5 min)

* Create another method `greet()`, that takes in a parameter for `time`.  This will accept a string and output a message in an `<h3>` for example.
`Good Evening`, where `Evening` string will depend on the argument.
* Quick Walk through


 #### Phase 3 - Using Directives for Data Binding(10 min)(critical)
 `Vue.js handles data binding using directives used similarly like html attributes.`
### 4. Instructor Do (10 min)
 * Add another object to `data` in `hello.js` <br> `url: "https://media.giphy.com/media/ZLxRWG0vhzpiE/giphy-downsized.gif"`

 * Now add a `<img v-bind:src="url">` in the html file.
 * Notice how the object no longer uses `{{ }}` when expressed in the directive `v-bind`.

Notice using the directive for bind can be used for many attributes. 
* `v-bind:alt`
* `v-bind:href`
* `v-bind:class`
* `v-bind` also has a shorthand `:` for example `:src`, but we will use the explicit `v-bind:` syntax for clarity

* Create a link tag with the same url 

            <p>
                <a v-bind:href="url">link</a>
            </p>
* Use the `v-html` directive in a new element `vmHtml`.  Create a new data object `vmHtml`.<br>
Side note - In an existing element will replace content like using `innerHTML`.

* Use another directive in our image tag `v-on:click` which calls a new method called `alert` with an alert message .

### 3. Instructor Do (5 min)
`Form input bindings allow our app to receive user's data.`
* Now let's create on input field that gives our user the ability to change our `first_name` and `last_name`.  
* `<input v-model="first_name">`
* `<input v-model="last_name">`
* Notice how every piece of `first_name` is updated including the alert!  `v-model` has created a 2-way data bind.(data flows from the view as well as to the view from the app)
* A consistent, stable, and fast UI data state that is easily maintained is the hallmark of a modern front-end framework.

### 4. Student Do - Conditional Rendering(5 min)
* if `last_name` is empty, let's not display the full name function using the directive 
* Solution add `v-if="last_name"` to the `<h2>`


#### Phase 4 - Class Activity (10 min)
[click event](./click-event/click.js)
Using our starter html file, create a `click.js` file and create a new Vue instance. 
This app should have four buttons with the following functionality.
* add one year on a click
* add 10 years on a double click
* subtract one year on a click
* subtract 10 years on a double click
* display the current age

### BONUS Student do (5 min)(optional)
add a modifier that will prevent a button from working more than once.

### 5. Instructor Do (5 min)
* Walk through solution 
* `v-on:` has shorthand format `@` for example `@click`
* Let's install some modifiers here to illustrate convenience
    * `v-on:click.once` (disables after one click)
    * `v-on:click.prevent` (preventDefault())
    * `v-on:keyup.enter` (press enter key)

Make sure students understand the availability of other events as well like `mouseover`
* Comment on the readability of the code compared to jQuery.

* Call on students to answer the following questions one at time, filling in gaps in their explanations as necessary:

  * **Q:** How do I bind an attribute with a dynamic value?
    **A:** Use the directive `v-bind:` on the html attribute .
  * **Q:** Can I create multiple instances of a Vue object?
    **A:** Yes.  Each Vue instance will be independent. 
  * **Q:** How do we set a click event listener modifier on an element in Vue to prevent default behavior?
    **A:** We use the directive `v-on:click.prevent`.

### 6. Students Do: Giphy API Call (15 mins) 
[Giphy-challenge](./giphy-challenge/app.js)
Start a new Vue app!
Have an input search field that returns gifs related to that term.
**Hint** How to loop through an array in the template script?


### 7. Instructor Do (5 min)
* Walk Through solution starting with the fetch response.  Then looping through the array.

## How did the lesson go?  Time tracking sufficiency?
