var list = document.getElementById('chapter');

function changeText2() {
    var alma = document.getElementById('alma').value;
    document.getElementById('boldStuff2').innerHTML = alma;
    var entry = document.createElement('li');
    entry.appendChild(document.createTextNode(alma));
    list.appendChild(entry);
}