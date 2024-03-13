$(document).ready(function() {

    $('#btn_adjuntar_archivo').click(function(e) {
        e.preventDefault();
        $('input[type="file"]').click();
    })
    
    $('input[type="file"]').change(function() {
        let archivo = this.files[0];
        let nombre_archivo = archivo.name;
        let tamaño_archivo = archivo.size;
        console.log(typeof tamaño_archivo, tamaño_archivo)
        console.log(nombre_archivo)
        console.log(tamaño_archivo <= 9000000)
            //Check File is not Empty
            if (nombre_archivo.length > 0 && tamaño_archivo <= 9000000) {
                // Select the very first file from list
                let fileToLoad = archivo;
                // FileReader function for read the file.
                let fileReader = new FileReader();
                let base64;
                // Onload of file read the file content
                fileReader.onload = function(fileLoadedEvent) {
                    // limpiar metadatos 
                    base64 = fileLoadedEvent.target.result;
                    // Print data in console
                    // console.log(typeof base64, base64);
                };
                // Convert data to base64
                fileReader.readAsDataURL(fileToLoad);
                $('#btn_adjuntar_archivo').append(`<div>${nombre_archivo}</div>`)
            } else {
                $('#btn_adjuntar_archivo').append(`<div class="text-warning">Lo sentimos, el tamaño del archivo es demasiado grande o no tiene el formato correcto</div>`)
            }
    
    })
})