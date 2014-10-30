Good to use stuff
====================
<ul>
<li>Margin:  declares margin between html element and the elements around it.</li>
<li>Padding: distance between the border of an html element and the content within it.</li> 
<li>Boarder: thin line of separation between margin and padding.</li>
<li>Positioning: positioning properties are not inheritable how the elements are positioned (position:value)</li> 
<li>Fixed and Absolute: does not occupy any space on regular flow of the DOM ,but placed above the DOM, Fixed positioning wrt the window, Absolute is positioned relative to its first positioned (non static) ancestor element.</li>
<li>Static and Relative: follows the regular flow and occupies space in the DOM, static cannot have top and right properties, Relative can have this properties. Relative is wrt the parent </li>
<li>Float : Float property changes how text and or images within an element are displayed. Float: value; (value can be left, right, none)</li>
<li>Overflow: Control what elements contents will do if it overflows its boundaries. overflow:value; (value can be auto,hidden, visible,scroll)</li>
<li>Z-index: to control the layer order of positioned elements. z-index:value;(value can be auto, number [higher the no hogher the level])</li>
<li>Block: Creates a line break before and after the element</li>
<li>Inline: No line break is created</li>
<li>List Item: Creates a line break before and after the element and adds a list item marker.</li>
<li>None: Makes an element not display on the page.</li>


<h4> SASS </h4>
<p> Sass is a <strong> preprocessor</strong> that lets to use features like varibles, nesting, mixins, inheritance and save it out as a normal CSS</p>
<p>Sass is an extension of CSS that adds power and elegance to basic language. It allows you to use</p>
<ul>
  <li>Variables <pre>$ font-stack :Helvitica</pre></li> 
  <li>Partials<pre>_reset.scss in base.scss use @import ‘reset’    one scss to other scss file</pre> </li> 
  <li>Mixins <pre>@mixin name($radius){border-radius:$radius }   .box {@include name(10px)</pre></li>
  <li>Nesting <pre>nav{ul{} li{} a{}} rather than nav ul{} nav li{} nav a{} </pre></li>
  <li>Extend <pre>One selctor to other selector   @extend</pre></li>
</ul>

<h4> Borubon Neat</h4>
<p> Light weight semantic <strong> grid framework</strong> buily on top of Bourbon and Sass. It relies entirely on Sass Mixins </p>
<pre> content coming up.....</pre>

<h4> Handlebars </h4>
<p> Handlebars provide the power necessary to let you build semantic templates effectively. Handlebar is a <strong>compiler </strong> built with javascript function. This derived javascript function then takes one parameter, an object-your data-and it returns a string with the HTML and the object properties'values inserted intot the HTML. There are three main pieces of code you use of Handlebars templating</p>
  <ol>
    <li>Handlebars expressions <pre>{{ content}} : content can be a variable or a helper function with or without parameters <br>{{article.title}}  :lookup the article property in the current context, then look for title in the result                     <br>{{{content}}}  :if you don’t want handlebar to escape a value use {{{
&lt;div&gt; Name :{{customerName}}&lt;/div&gt; :customerName variable is a property that will be by the Handlebars.Compile function 
</pre> </li>
    <li>Data (or Context) <pre>The data object is called the context; this object can be comprised of arrays (can use handlebars each helper), strings, numbers, other objects or a combination of all of these.</pre></li>
    <li>The Handlebars Compile Function <pre>Compile the template with the Handlebars .compile function
        Then use that compiled function to invoke the data object passed to it </pre></li>
 </ol>
<h5><i> Handlebar built in helpers </i></h5>
<table>
<tr> <td> {{#each}} </td><td>to iterate over an array</td><tr>
<tr> <td> {{#if}} </td><td>It checks for truthy values such as true, any non-empty or non null value, it can not take conditional logic like if i>10, only checks for truthy values</td><tr>
<tr> <td>{{else}} </td><td>It can be used with the if block or any other block, cannot exist on its own</td><tr>
<tr> <td> {{#unless}} </td><td>The content between the unless block only renders if the unless expression evaluates to a falsy value</td><tr>
<tr> <td>  {{#with}} </td><td>To target the specific property of the object, use with block to target the groupName property where we need access to its values</td><tr>
</table>

<h5><i> Handlebar custom helpers </i></h5>
<p>There are two typer of custom helpers: custom function helpers, custom block helpers</p>
<p>Custom function helper is simply a helper that does not use a block, Custom helpers are created in the JavaScript code, not inside the Handlebars template </p>
<ul> <li>register the function using Handlebars.registerHelper method</li>
<li>This method takes a string (the name of the helper) as first parameter and function with any number of parameters as the second parameter</li>
</ul>
<p>Custom block helper is a helper with a block, When we register a custom block helper, Handlebars automatically adds an options object as the last parameter in the callback function.  And the options object has an fn method, a hash object, and an inverse method.</p>
<ul>
<li>Custom block helper can be placed anywhere in the template, we can pass any number of parameters in the template</li>
<table>
<tr><td>Options.fn </td><td>takes in object as a parameter that it uses as a context</td></tr>
<tr><td>Options.inverse  </td><td>inverse method is used as the else section of any block statement</td></tr>
<tr><td>Options.hash </td><td>Handlebars expressions take not only strings and variables as arguments, but you can pass key-value pairs separated by spaces as well. Invocation of the Handlebars expression with the key-value pairs as parameters will be added automatically onto the hash object in the helper callback function </td></tr>
</table>
</ul>

<h4> Requirejs</h4>
<p>RequireJS takes a different approach to script loading than traditional &lt;script&gt; tags. While it can also run fast and optimize well, the primary goal is to encourage modular code. As part of that, it encourages using module IDs instead of URLs for script tags.</p>
<pre>&lt;script data-main="scripts/main" src="scripts/require.js"&gt; &lt;/script&gt;</pre>
<p>data-main: is the attribute that tells require.js to load script/main.js after require.js loads</p>
<p>Inside main.js you can use require() to load any other script that needs to run. This ensures a single point entry, since data-main script you specify is loaded asynchronously.</p>
<pre>require (["helper/util"], function(util) {
}
</pre>
<p>Require.js by default assumes that all dependencies are scripts, so it does not expect to see a trailing “.js” suffix on module IDs.</p>
<p>Defining module: module is different from traditional script file; a well scoped object that avoids polluting the global namespace is defined.</p>
<pre>define(function () {
 
  function method (x) {
    return x + x;
  }
 
  return {
    someValue: 'foobar',
    myMethod: method
  }
});
</pre>
<p>This code would make up the entirety of our JavaScript file for this module. Nothing should be declared outside of a single define call. If this code was saved in my/utils.js, this module would be defined as the module “my/utils”.</p>

<h4>Backbone</h4>
<p>Backbone.js gives structure to web applications by providing models with key-value binding and custom events, <ul><li>collections with a rich API of enumerable functions</li><li> views with declarative event handling </li> <li>connects it all to your existing API over a RESTful JSON interface </li></P>
<pre>Detailed content of backbone model,event and view coming up....</pre>

<h4>Marionette</h4>
<p>Backbone.Marionette is a composite application library for Backbone.js that aims to simplify the construction of large scale JavaScript applications. It is a collection of common design and implementation patterns found in applications.</p>
<pre>Detailed content coming up....</pre>

<h4>jquery underscore </h4>
<p>for data manipulation : Underscore provides 80-odd functions that support both the usual functional suspects: map, select, invoke — as well as more specialized helpers: function binding, JavaScript templating, deep equality testing, and so on. It delegates to built-in functions, if present, so modern browsers will use the native implementations of forEach, map, reduce, filter, every, some and indexOf.</p>
<pre>Detailed content coming up....</pre>

<h4>Grunt </h4>
<p>It’s a task runner, features: helps in Work in as small chunks of CSS and JavaScript, Compress your CSS and minify your JavaScript, Optimize your images</p>
<pre>Detailed content coming up....</pre>

