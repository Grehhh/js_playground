$(document).ready(function() {

    /* ---------------- boton psicodelico -------------------*/
    $('.btn_codigo input').on('keyup', resizeInput).each(resizeInput);
    $('.btn_codigo').on('click', autoCopiar);
    
    function autoCopiar() {
        if(!$('#cod_cliente').hasClass('difuminado')) {
            /* Get the text field */
            var copyText = document.getElementById("cod_cliente");
            /* Select the text field */
            copyText.select();
            copyText.setSelectionRange(0, 99999); /* For mobile devices */
             /* Copy the text inside the text field */
            navigator.clipboard.writeText(copyText.value);
            /* Alert the copied text */
            alert("Copied the text: " + copyText.value); 
        }
    }

    /* adapta el tamaño del input al contenido*/
    function resizeInput() {
        var valueLength = $(this).prop('value').length;
            // Para que no arroje error si el input se vacía
        if (valueLength > 0) {
            $(this).prop('size', valueLength);
        }
    }
})