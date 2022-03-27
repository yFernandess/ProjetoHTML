function testandoArvoreDOM() {
    var element = document.documentElement.lastChild;
    alert("Eu sou o nó: " + element.nodeName);

    var outroElemento = document.getElementsByTagName('h1')[0];
    alert("Eu sou o nó: " + outroElemento.innerText);

    var filho = outroElemento.firstChild;
    alert("Eu sou o nó: " + filho.nodeValue);
}

function obtemElementos() {
    var element_id = document.getElementById("nome");
    alert("ID obtido: " + element_id.nodeName);

    var element_name = document.getElementsByName("div_name")[0];
    alert("Element by name: " + element_name.nodeName);

    var element_by_class = document.getElementsByClassName("div_class")[0];
    alert("Element by class name: " + element_by_class.nodeName);

    var element_by_tag_name = document.getElementsByTagName("a")[0];
    alert("Element by tag name: " + element_by_tag_name.nodeName.length);
}

function buscaCep() {
    var input_id = document.getElementById("input_id");
    var div = document.getElementById("div_main_id");
    via_cep = "https://viacep.com.br/ws/"+input_id.value+"/json";
    // alert(via_cep);
    var req = new XMLHttpRequest();
    req.open("GET", via_cep);
    req.onload = function (e) {
        if (req.readyState === 4) {
            if (req.status === 200) {
                var data = JSON.parse(req.responseText);
                div.innerHTML = "<p>CEP: "+ data.cep + "</p>";
                div.innerHTML += "<p>Logradouro: "+ data.logradouro + "</p>";
                div.innerHTML += "<p>Complemento: "+ data.complemento + "</p>";
                div.innerHTML += "<p>Bairro: "+ data.bairro + "</p>";
                div.innerHTML += "<p>Cidade: "+ data.localidade + "</p>";
                div.innerHTML += "<p>Estado (UF): "+ data.uf + "</p>";

            } else {
                console.error(req.statusText);
            }
        }
    };
    req.onerror = function (e) {
        console.error(req.statusText);
    };
    req.send();
}

function searchHero() {
    var hero = document.getElementById("heroes");
    var div = document.getElementById("div_main_id");
    var hero_name = hero.options[hero.selectedIndex].value;
    // alert(hero_name);
    url_superHero = "https://superheroapi.com/api/1893523594168542/search/"+hero_name;
    // alert(url_superHero);
    // alert(via_cep);

    var reqOptions = {
        method: 'GET',
        redirect: 'follow',
        mode: 'no-cors'
    };

    fetch(url_superHero, reqOptions)
    .then(response => console.log(response.text()))
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

    // fetch(url_superHero, reqOptions)
    // .then((response) => response.json())
    // .then(function(data) {
    //     let hero = data.results;
    //     console.log(hero);
    // })
    // .catch(function(error) {
    //     console.log(error);
    // });
    

    // var req = new XMLHttpRequest();
    // req.withCredentials = true;
    // req.reques = "cors";
    // req.open("GET", url_superHero);
    // req.onload = function (e) {
    //     if (req.readyState === 4) {
    //         if (req.status === 200) {
    //             var data = JSON.parse(req.responseText);
    //             console.log(data);
    //             // div.innerHTML = "<p>CEP: "+ data.cep + "</p>";
    //             // div.innerHTML += "<p>Logradouro: "+ data.logradouro + "</p>";
    //             // div.innerHTML += "<p>Complemento: "+ data.complemento + "</p>";
    //             // div.innerHTML += "<p>Bairro: "+ data.bairro + "</p>";
    //             // div.innerHTML += "<p>Cidade: "+ data.localidade + "</p>";
    //             // div.innerHTML += "<p>Estado (UF): "+ data.uf + "</p>";

    //         } else {
    //             console.error(req.statusText);
    //         }
    //     }
    // };
    // req.onerror = function (e) {
    //     console.error(req.statusText);
    // };
    // req.send();
}