let celsius = document.getElementById('celsius');
let fehrenheit = document.getElementById('fehrenheit');

celsius.oninput = () =>{
    let output  = (parseFloat(celsius.value)*9/5+32);
    fehrenheit.value = parseFloat(output.toFixed(2));

}

fehrenheit.oninput = () =>{
    let output  = ((parseFloat(fehrenheit.value) - 32) * 5) / 9;
    celsius.value = parseFloat(output.toFixed(2));
    
}