$(document).ready(function() {
    $("#myselect").change(function() {
        console.log('hola')
        console.log($( this ).val());
        console.log($( "#myselect option:selected" ).text());
        console.log($( this ).text());
    })

})