const API = 'https://rickandmortyapi.com/api/character/';

const getData = (apiURL) => {
    return fetch(apiURL)
    .then(response => response.json())
    .then(json => { 
        printData(json),
            printPagination(json.info)
        })
    .catch(error => { console.log("Error" , error)})
}

const printData = (data) => {
    let html = '';
    data.results.forEach(personaje => {
        html += '<article class="col mt-5" >';
            html += '<article class="card" style="width: 13rem;">'
            html += `<img src="${personaje.image}" class ="card-img-top" alt="...">`
            html += '<article class = "card-body bg-info" style="height: 15rem">'
            html += `<h5 class="card-title">${personaje.name}</h5>`
            html +=  `<p class="card-text"> Last Know Location: ${personaje.location.name}</>`
            html +=  `<p class="card-text" >Origin: ${personaje.origin.name}</p>`
            html += '</article>'
            
            html += '</article>'
        html += '</article>'
    })
    document.getElementById("info").innerHTML = html;
}

const printPagination = (info) =>{

    let atrasDisable = info.prev == null ? 'disabled' : '';
    let sigDisable = info.next == null ? 'disabled' : '';


    let html = `<li class="page-item ${atrasDisable}"><a class="page-link" onclick="getData('${info.prev}')">Atras</a></li>`
    html += `<li class="page-item ${sigDisable}"><a href="#" class="page-link" onclick="getData('${info.next}')">Siguiente</a></li>`
    document.getElementById('pagination').innerHTML = html;
}

getData(API);