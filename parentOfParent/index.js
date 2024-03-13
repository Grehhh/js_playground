var arrParents = [];
var parentEls = $( "b" ).parents()
    .map(function() {
        return this.className;
    }).get()
var parentSelected = '.' + parentEls[0];
    
console.log(parentSelected);

var childrenEls = $(parentSelected).children().children()
    .map(function() {
        return this.className;
    }).get()
console.log(childrenEls)

$( "b" ).append( "<strong>" + parentEls + "</strong>" );