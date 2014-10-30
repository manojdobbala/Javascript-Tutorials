Good to use stuff
====================
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
