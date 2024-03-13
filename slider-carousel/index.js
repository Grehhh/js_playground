// ---------------------------------------- CARGAR OFICINAS 
$('#CP').keyup(function() {
    let cp = $(this).val()
    console.log(cp)
    if(cp.length > 4 && cp.length < 6) {
        $('#datos_oficina .text-warning').remove();
        let endpointABranchLocator = 'https://back-weu.azurewebsites.net/branch-locator/findpostCode/' + cp + '?filterType=BRANCH';
        $.ajax({
            type: 'GET',
            url: endpointABranchLocator,
            dataType: "json",
            success: function(response) {
                console.log(response);
                let oficinas = filtrarOficinas(response);
                pintarOficinas(oficinas);
                $('#carousel_container').addClass('bg-light');
            },
            error: function(error) {
                throw { error: { status: error.status, message: error.statusText} } 
            }
        });
    } else {
        $('#datos_oficina').append(`<div class="text-warning">Por favor, introduce un codigo postal</div>`)
    }
})

function filtrarOficinas(oficinas) {
    var oficinasFiltradas = [];
    
    for(let oficina of oficinas) {
        if(oficina.entityCode == 'Santander_ESP') {
            oficinasFiltradas.push(oficina)
        }
    }
    // console.log(oficinasFiltradas)
    return oficinasFiltradas;
}

const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 2,
    autoplay: {
      delay: 5000,
      disableOnInteraction: true
    },
    centeredSlides: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
});

function pintarOficinas(oficinas) {
    $('#datos_oficina > span .gris_claro-santander').remove();
    let textoCarousel = `<span class="mr-auto gris_claro-santander bold">Seleccionar oficina</span>`;
    let divOficina = '';

    $('#carouselExampleIndicators').prepend(textoCarousel);

    for (let i = 0; i < oficinas.length; i++) {
        divOficina = `<div class="swiper-slide">  
            <div class="shadow-sm bg-white rounded text-center">
                <div class="turquesa-santander text-left" id="tipo_oficina${i}">
                    <span class="pr-1"><i class="bi bi-lightbulb"></i></span>
                    <span class="align-self-center">${oficinas[i].objectType.multi.es} ${oficinas[i].subType.code}</span>
                </div>
                <div class="text-left">
                    <p class="bold mb-0">${oficinas[i].location.address}</p>
                    <p class="mb-0">L - J: ${oficinas[i].schedule.workingDay.WEDNESDAY}</p>
                    <p class="mb-0">V: ${oficinas[i].schedule.workingDay.FRIDAY}</p>
                </div>
            </div>
        </div>`
        $('.swiper-wrapper').append(divOficina);
    }

    $('.swiper').append('<div class="swiper-button-prev"></div>')
    $('.swiper').append('<div class="swiper-button-next"></div>')
}

