let NameUser = (prompt("Ingrese su Nombre y Appelido"));
alert("Bienvenido a su cotizador favorito" + ' ' + NameUser);


//constructor
function Seguro(marca , anio, tipo) 
{
    this.marca = marca;
    this.anio = anio;
    this.tipo = tipo; 
}
//cotizarSeguro
Cotizar = function () {

    let cantidad;
    const base = 3000;

    switch (this.marca) {
        case '1':
            cantidad = base * 1.15;
            break;
        case '2':
            cantidad = base * 1.05;
            break;
        case '3':
            cantidad = base * 1.35;
            break;
        case '4':
            cantidad = base * 1.48;
            break;
        case '5':
            cantidad = base * 1.62;
            break;
    }

    