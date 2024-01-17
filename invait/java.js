const but = document.getElementById('but')
const tekst = document.getElementById('tekst')

but.onclick = function open() {
    document.getElementById('envelopee').className = 'fa-regular fa-envelope-open'
    tekst.setAttribute("style", "display: flex; animation: fadein 1s;")
    document.getElementById('envelopee').setAttribute("style", "animation: down 1.5s;")
    setTimeout(() => {
        document.getElementById('envelopee').style.display = "none"
      }, 600);
}