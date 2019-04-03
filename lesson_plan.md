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
### Set up our app from scratch (critical)

* `Sample Code is provided` [here](./first-app/hello.js)

* Let's create a new Vue app by first creating a new directory called `first-app`.  

* In that directory create 2 files, `hello.js` and `index.html`.

* In `hello.js` we create our first `Vue instance` and `options object`.  

* In the `options object` create the `el` and `data` properties.  State their significance and rigidity of the terms.

* Create two properties in the data object - `first_name` and `last_name`.

* Now let's use emmet `html:5` to quickly build a basic html page with a `<div id="first-app">` anchor which will wrap our Vue template script.

* Include relative file path script tag for the `hello.js` in your `index.html` file

* KEY FOCUS POINT - Vue.js script CDN in the html file.  
`<script src="https://unpkg.com/vue"></script>`

### 2. Instructor Do: Template Expressions (8 min)
#### Phase 2 - Reactive Data Render (critical)
###  Objective
Demo Vue's ability to dynamically render data and customize html to a view with high speed and performance.  This can be done in Vue.js using expressions and data binding.

* KEY POINT - template must be wrapped by the `div` referred to in the Vue instance. 

* A simple `<h1>Hello {{ first_name }} <h1>` to start.

* Open html in the browser and observe the wonder!<br>
 Congrats you are now all Vue developers!!!

* Go to the console tab in Chrome's browser's developer tools window and change the data property to
`helloWorld.first_name = "John"`<br>
Due to the reactive nature, changes in the data state of the object trigger UI changes.  
Contrast what this was like in jQuery.

 * `{{expression}}` similar to handlebars in the html templating form that allows various javascript expressions.

* Let's create a method in our `methods` property called `full_name()`.

* Create a new tag `<h2>` that will render this method.  Remember to use `()`.

* Side Note - Notice how the lexical scope of `this` captures `first_name` due to hoisting without needing to reference `data`.  Therefore do not use fat arrow functions here due to the change in the lexical scope of `this`.

### 3. Students Do (7 min)

* Create another method `greet()`, that takes in a parameter for `time`.  This will accept a string and output a message in an `<h3>` for example.
`Good Evening`, where `Evening` string will depend on the argument.

 #### Phase 3 - Using Directives for Data Binding(10 min)(critical)
 `Vue.js handles data binding using directives to display data in the Vue's template.`

### 4. Instructor Do (10 min)
 * Add another object to `data` in `hello.js` <br> `url: "https://media.giphy.com/media/ZLxRWG0vhzpiE/giphy-downsized.gif"`

 * Now add a `<img v-bind:src="url">` in the html file.
 * Notice how the object no longer uses `{{ }}` when expressing the `url` property in the directive `v-bind`.

Notice using the directive for bind can be used for many attributes. 
* `v-bind:alt`
* `v-bind:href`
* `v-bind:class`
* `v-bind` also has a shorthand `:` for example `:src`, but we will use the explicit `v-bind:` syntax for clarity

* Create a link tag with the same url 

            <p>
                <a v-bind:href="url">link</a>
            </p>
* Use the `v-html` directive in a new `<p>` tag.  Create a new data object `vmHtml: "<span style='color:red; border: solid 2px purple;'>Pretty aren't I?</span>"`.<br>
Side note - In an existing element will replace content like using `innerHTML`.

* Now let's create an event handler by using another directive in our image tag `v-on:click` which will call new method `alert` which we will now create that contains a greeting with the `first_name`.

### 3. Instructor Do (5 min)
`Form input bindings allow our app to receive user's data.`
* Now let's create on input field that gives our user the ability to change our `first_name` and `last_name`.  
* `<input v-model="first_name">`
* `<input v-model="last_name">`
* Notice how every piece of `first_name` is now updated including the alert!  `v-model` has created a 2-way data bind.(data flows from the view as well as to the view from the app)
* A consistent, stable, and fast UI data state that is easily maintained is the hallmark of a modern front-end framework.

### 4. Student Do - Conditional Rendering(5 min)

* if `first_name` is empty, let's not display the first `<h1> Hello {{first_name}} </h1>`
* if `last_name` is empty, let's not display the full name function using the directive 
* Solution add `v-if="first_name"` to the `<h1>` &
`v-if="last_name"` to the `<h2>`


#### Phase 4 - Class Activity (10 min)
[starter code](./click-event/Unsolved/index.html)<br>
[js solution](./click-event/Solved/click.js) <br>
[html solution](./click-event/Solved/index.html) <br>
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

Make sure students understand the availability of other events as well like `mouseover`.
* Comment on the readability of the code compared to jQuery.

* Call on students to answer the following questions one at time, filling in gaps in their explanations as necessary:

  * **Q:** How do I bind an attribute with a dynamic value?
    **A:** Use the directive `v-bind:` on the html attribute .
  * **Q:** Can I create multiple instances of a Vue object?
    **A:** Yes.  Each Vue instance will be independent. 
  * **Q:** How do we set a click event listener modifier on an element in Vue to prevent default behavior?
    **A:** We use the directive `v-on:click.prevent`.

### 6. Students Do: Giphy API Call (20 mins) 
[Giphy-challenge](./giphy-challenge/app.js)
Start a new Vue app!
Have an input search field that returns gifs related to your search term.<br>
**Hint** How to loop through an array in the template script? <br> Use a directive!<br>

### 7. Instructor Do (5 min)
* Demo the working website.
* Walk Through solution starting with the fetch response.  
* KEY POINT - `v-for="key in array"`<br>

## How did the lesson go?  Time tracking sufficiency?
