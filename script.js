const btn = document.getElementById("btn")
const valutak = document.getElementsByName("valuta")


btn.addEventListener("click", () => {
    let valuta;
    const ertek = Number(document.getElementById("ertek").value)
    console.log(ertek)
    for (let i = 0; i < valutak.length; i++) {
        if (valutak[i].checked) {
            valuta = valutak[i].value
            
        }
    }
    
    const url = `https://hexarate.paikama.co/api/rates/HUF/${valuta}/latest`

    fetch(url)
    .then(response => response.json())
    .then(json => {
        if (json.data.mid < 1) {
            document.getElementById("eredmeny").value = (ertek * json.data.mid).toFixed(2)
            document.getElementById("eredmenyValuta").textContent = valuta
        }
    }
    )
})

