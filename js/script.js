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