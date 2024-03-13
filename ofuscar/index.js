let doc_ofusc = ofuscDoc($('#documento').text());
let calle_ofusc = ofuscCalle($('#calle').text());
let email_ofusc = ofuscEmail($('#email').text());

$('#documento').text(doc_ofusc);
$('#calle').text(calle_ofusc);
$('#email').text(email_ofusc);

function ofuscDoc(val) {
    const regex = /\d/g;
    return val.slice(0,4).replace(regex, '*') + val.slice(4,val.length);
}

function ofuscEmail(val) {
    let res = '';
    let chars = 3;                  // Cantidad de caracters visibles
    res = val.replace(/[a-z0-9\-_.]+@/ig, (c) => c.substr(0, chars) + c.split('').slice(chars, -1).map(v => '*').join('') + '@');
    let arr = res.split('@');
    let sliced = arr[0].slice(0, 6);
    let end = arr[1];
    res = [sliced,end].join('@');
    return res;
}

function ofuscCalle(val) {
    const regex = /\w/g;
    return val.slice(0,2) + val.slice(2,val.length).replace(regex, '*');
}