## 1.1 - Introduction to Vue.js 

### Overview (10 min)

Today will be our first day introducing a new front end framework Vue.js

<!-- Slide Show -->

<!-- `Summary: Complete activities 28-32 in Unit 19 & 1-6 in Unit 20` -->

##### Instructor Priorities

* Students should understand how an expression is used to render data to the DOM.

* Students should understand how to conditionally render components.

* Students should understand 2-way data binding.

* Students should understand how directives are used to bind attributes to objects.

* Students should understand how to render a list of elements in an array.

* Students should understand how to create event listeners.


### Class Objectives

* Understanding Vue's templating system.

* To cover conditional rendering.

* To introduce data binding.


- - -

### 1. Instructor Do: Welcome Class and Vue Demo (35 mins) 
#### Phase 1 - Wire up our files(10 mins)(critical)
* Let's create a new Vue app from scratch.  First create a new directory called `first-app`.  
* Then create a new js file, `hello.js`, html file `index.html` 

* Include relative file path connections for the `hello.js`  

* Let's start in our `hello.js` file and create our first `Vue instance` `const helloWorld` and `options object` with our anchor to a static html element css selector`"#first-app"` and `data` object.  

* Create the data object only `first_name` and `last_name`

* `Sample Code is provided` [here]("./first_app/hello.js")

* Now let's use emmet `html:5` to quickly build a basic html page with a `<div id="first-app">` anchor which will wrap our Vue template script.

* Stress the important of the external vue script CDN in the `<head>` of html file.  
`<script src="https://unpkg.com/vue"></script>`

Also note there is also npm package
`npm i vue`

#### Phase 2 - Template Expressions(10min)(critical)
###  Objective
Demo Vue's ability to dynamically render data and customized html to a page with high speed and performance.  This can be done in Vue.js using expressions and data binding.

* Stress the importance of our Vue template being wrapped by the `div` Vue instance. <br>

* A simple `<h1>Hello<h1>` just to start

* Now we can implement our instance data objects into our html code by adding 
 `{{ first_name }}` `{{ last_name }}` into our `<h1>` tag.  
 Congrats you are now Vue developers!!!

* Now open the console and change the data object
`helloWorld.first_name = "John"`
Due to the reactive property, changes in the data state of the object triggers UI changes.  
Contrast what this was like in jQuery.

 * `{{expression}}` similar to handlebars in the html templating form that allows various javascript expressions.

* Now lets make our string dynamic by including a method.

* Let's create a method in our `methods` property called `full_name`

* Now create a new tag `<h2>` the content of the  with this method.  Remember to use `()`.

* Notice how the lexical scope of `this` captures first_name due to hoisting without needing to reference `data`.  Hence do not use fat arrow functions here due to lexical scope of `this` becomes lost.

### 2. Students Do (5 min)

* Create another method `greet`, that takes in a parameter for `time`.  This will accept a string and output in a message in an `<h3>` for example.
`Good Evening`, where Evening string will depend on the argument.
* Quick Walk through


 #### Phase 3 - Using Directives for Data Binding(10min)(critical)
 `Vue.js handles data binding using directives on the html attributes.`

 * Add this to the data object in `hello.js`  `url: "https://media.giphy.com/media/ZLxRWG0vhzpiE/giphy-downsized.gif"`

 * Now add an `<img v-bind:src="url">`
 * Notice how the object no longer uses `{{}}` when expressed in the directive attribute

Notice using the directive for bind can be used for many attributes. 
* `v-bind:alt`
* `v-bind:href`
* `v-bind:class`
* there is even shorthand `:src` but we will use the explicit `v-bind:` syntax for clarity

### 3. Student Do
* Create a link tag with the same url 
            
            <p>
                <a v-bind:href="url">link</a>
            </p>

Now's let's move onto how to bind an element to a click event.

* We will add another directive to our image tag `v-on:click` which we will use to call a new method call with an alert message.
* Now let's create on input field that gives our user the ability to change our `first_name` and `last_name`. 
* `<input v-model="first_name">`
* `<input v-model="last_name">`
* Notice how every pc of first_name is updated even in the alert!
* Consistent stable and fast UI data state easily maintained.

#### Phase 4 - Class Activity(20min)
Using our starter code, build a Vue app that creates four buttons with the following functionality.
* add one year on a click
* add 10 years on a double click
* subtract one year on a click
* subtract 10 years on a double click

### 4. Instructor Do
* Walk through solution

* Call on students to answer the following questions one at time, filling in gaps in their explanations as necessary:

  * **Q:** How do I bind an attribute with a dynamic value?
    **A:** Use the directive `v-bind:` on the html attribute .
  * **Q:** Can I create multiple instances of a Vue object?
    **A:** Yes.  Each Vue instance will be independent. 
  * **Q:** How do we set a click event listener on an element in Vue?
    **A:** We use the directive `v-on:click`.

### 2. Students Do: Giphy API Call (20 mins) (Critical)

*

## How did the lesson go?  Time tracking sufficient?
