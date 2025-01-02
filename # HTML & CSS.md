# HTML & CSS

HTML: bones
CSS: skin

### HTML
Hypertext Markup Language

*in hello.html*

'''
<!DOCTYPE HTML>
<html>
    <head>
        <title>Title!</title>
    </head>
    <body>
        <h1>Heading!</h1>
        <p>Paragraph!</p>
    </body>
</html>
'''

<html> is opening tag
</html> is closing tag

##### Nesting
boxes cannot intersect with one another

<head>: the background information of your website
include the element which display the text that shows up in the tab bar on browser

<body>

##### Basic HTML Tags
+ <html> Root of HTML Document
+ <head> Info about Document
+ <body> Document Body
+ <h1>, <h2>, <h3> Header Tags
+ <p> Paragraph tag
+ <div> Generic block section tag

**Inserting Links**
<a href="http://sb6657.cn">MachineWJQ</a>

**Inserting Images**
<img src="link of picture"></img>
of
<img src="link of picture" /> *self closing tag*

more organized:
<img src="folder of pictures/link of picture" /> 

'''
<!DOCTYPE HTML>
<html>
    <head>
        <title>Title!</title>
    </head>
    <body>
        <div>
            <h1>Heading!</h1>
            <p>Paragraph!</p>
        </div>
</html>
'''

**MDN Web Docs**

<div> should be used only when no other semantic element (such as <article> or <nav>) is appropriate

**Dont just use<div>!**

### CSS
Its the rules that tell your browser how stuff looks
Not just structure

**CSS ruleset**
'''
div{
    color: red;
    font-family: Arial;
    font-size: 24pt;
}
'''
In this case, this rule would be used onto all the divs on website.


'''
<div class="info">Info</div>

.info{
    color: red;
    font-family: Arial;
    font-size: 24pt;
}
'''

'''
<div id="unique">Info</div>

#unique{       
    color: red;
    font-family: Arial;
    font-size: 24pt;
}
'''

Diff of ID and Class:
+ An element can have only one ID && multiple classes
+ "#"for id && "."for class

**Better to use Class in CSS only**