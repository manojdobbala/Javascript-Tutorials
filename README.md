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
  </ul 
 </ol>

