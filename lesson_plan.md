## 1.1 - Introduction to Vue.js 

### Overview (8 min)

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

### 1. Instructor Do: Welcome Class and Vue Demo (45 mins) 
#### Phase 1 - Wire up our files(8 mins)(critical)
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

#### Phase 2 - Template Expressions (8 min)(critical)
###  Objective
Demo Vue's ability to dynamically render data and customized html to a page with high speed and performance.  This can be done in Vue.js using expressions and data binding.

* Stress the importance of our Vue template being wrapped by the `div` Vue instance. <br>

* A simple `<h1>Hello<h1>` just to start

* Now we can implement our instance data objects into our html code by adding 
 `{{ first_name }}` into our `<h1>` tag.  
 Congrats you are now Vue developers!!!

* Now open the console and change the data object
`helloWorld.first_name = "John"`
Due to the reactive property, changes in the data state of the object triggers UI changes.  
Contrast what this was like in jQuery.

 * `{{expression}}` similar to handlebars in the html templating form that allows various javascript expressions.

* Now lets make our string dynamic by including a method.

* Let's create a method in our `methods` property called `full_name`

* Now create a new tag `<h2>` that will render this method.  Remember to use `()`.

* Notice how the lexical scope of `this` captures first_name due to hoisting without needing to reference `data`.  Hence do not use fat arrow functions here due to lexical scope of `this` becomes lost.

### 2. Students Do (5 min)

* Create another method `greet`, that takes in a parameter for `time`.  This will accept a string and output in a message in an `<h3>` for example.
`Good Evening`, where `Evening` string will depend on the argument.
* Quick Walk through


 #### Phase 3 - Using Directives for Data Binding(10 min)(critical)
 `Vue.js handles data binding using directives on the html attributes.`

 * Add this to the data object in `hello.js`  `url: "https://media.giphy.com/media/ZLxRWG0vhzpiE/giphy-downsized.gif"`

 * Now add an `<img v-bind:src="url">`
 * Notice how the object no longer uses `{{ }}` when expressed in the directive attribute

Notice using the directive for bind can be used for many attributes. 
* `v-bind:alt`
* `v-bind:href`
* `v-bind:class`
* there is even shorthand `:src` but we will use the explicit `v-bind:` syntax for clarity

### 3. Student Do (5 min)
* Create a link tag with the same url 
            
            <p>
                <a v-bind:href="url">link</a>
            </p>
* Add html to the page dynamically using the `v-html` directive.  Side note - In an existing element will replace content like using `innerHTML`.
`v-html="vmHtml"`  
* add in the data property in the Vue instance
`vmHtml: "<span style='color:red; border: solid 2px purple;'>Pretty aren't I?</span>"`

Now's let's move onto how to bind an element to a click event.

* We will add another directive to our image tag `v-on:click` which we will use to call a new method call with an alert message called `alert`.

`2-way data binding lets our user's manipulate the data.`
* Now let's create on input field that gives our user the ability to change our `first_name` and `last_name`.  
* `<input v-model="first_name">`
* `<input v-model="last_name">`
* Notice how every piece of `first_name` is updated including the alert!
* A consistent, stable, and fast UI data state that is easily maintained is the hallmark of a modern front-end framework.

### 4. Student Do (5 min)
* Now let's add some conditional rendering
* if last_name is empty, let's not display the full name function using the directive 


#### Phase 4 - Class Activity (10 min)
[click event](./click-event)
Using our starter code, build a Vue app that creates four buttons with the following functionality.
* add one year on a click
* add 10 years on a double click
* subtract one year on a click
* subtract 10 years on a double click

### BONUS Student do (5 min)(optional)
add a modifier that will prevent a button from working more than once.

### 5. Instructor Do (5 min)
* Walk through solution starting with the             `v-on:click`  identify the shorthand format   
    `@click`
* Let's install some modifiers here to illustrate convenience
    SUBMIT
    `v-on:click.once`   
    `v-on:click.prevent`  `event.preventDefault()`
    `v-on:keyup.enter` 

Make sure students understand the availability of other events as well like `keyup` and `mouseover`

* Call on students to answer the following questions one at time, filling in gaps in their explanations as necessary:

  * **Q:** How do I bind an attribute with a dynamic value?
    **A:** Use the directive `v-bind:` on the html attribute .
  * **Q:** Can I create multiple instances of a Vue object?
    **A:** Yes.  Each Vue instance will be independent. 
  * **Q:** How do we set a click event listener modifier on an element in Vue to prevent default behavior?
    **A:** We use the directive `v-on:click.prevent`.

### 6. Students Do: Giphy API Call (15 mins) 
Start a new Vue app!
Have an input search field that returns gifs related to that term.

### 7. Instructor Do (5 min)
* Walk Through solution starting with the fetch response.  Then looping through the array.

## How did the lesson go?  Time tracking sufficiency?
