let itemsArray = [];

function insertProducts(array) {
  let htmlContentToAppend = "";
  let htmlContentToAppend2 = "";
  let cant = "";
  let valores = "";

  for (item of array) {
    htmlContentToAppend +=
      `
      <div class="row w-100 border-bottom">
        <div class="row main align-items-center justify-content-between">
          <div class="col justify-content-center"><img class="img-fluid img-thumbnail" style="max-height: 110px;" src="` +
          item.src +
          `"></div>
            <div class="col justify-content-center" style="text-align: center;">` +
            item.name +
            `</div>                      
            <div class="col align-items-center"><div class="input-group mb-3">
              <button class="input-group-text" style="max-width: 40px;" onclick="this.nextElementSibling.stepDown()"><i class="bi bi-dash-lg"></i></button>
              <input type="number" style="text-align:center; max-width: 50px;" class="form-control" value="` +
              item.count +
              `" min="0" id="`+ item.name +`">
              <button class="input-group-text" style="max-width: 40px;" onclick="this.previousElementSibling.stepUp()"><i class="bi bi-plus-lg"></i></button>
              </div></div>
            <div class="col">
              <div class="row" style="text-align: center;">Precio por unidad:<br>
              <b>` + item.currency +`  `+ item.unitCost +
              `</b></div>
            </div>
        </div>
      </div>     
    `;

    htmlContentToAppend2 +=
      `
    <div class="row"><p class="text-muted" style="font-size: 15px;">` +
      item.name +
      `</p></div>
    `;

    cant +=
      `<p class="text-muted" style="font-size: 15px; width: min-content;">x` +
      item.count +
      `</p> `;

      valores += `<p class="text-muted" style="font-size: 15px; text-align: right;">`+ item.currency +` ` +
      item.count*item.unitCost +
      `</p> `
  }

  document.getElementById("itemsCarrito").innerHTML = htmlContentToAppend;
  document.getElementById("items").innerHTML = htmlContentToAppend2;
  document.getElementById("cant").innerHTML = cant;
  document.getElementById("subtotal").innerHTML = valores;
}

function tipoDeEnvio() {
  switch (parseInt(document.getElementById("inputGroupSelect01").value)) {
    case 1:
      document.getElementById("tipoEnvio").innerHTML =
        "Costo del 5% sobre el subtotal.";
      break;

    case 2:
      document.getElementById("tipoEnvio").innerHTML =
        "Costo del 7% sobre el subtotal.";
      break;

    case 3:
      document.getElementById("tipoEnvio").innerHTML =
        "Costo del 15% sobre el subtotal.";
      break;

    default:
      break;
  }
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
  getJSONData(CART_INFO_URL).then(function (resultObj) {
    if (resultObj.status === "ok") {
      itemsArray = resultObj.data;

      //Muestro los items cargados del JSON
      insertProducts(itemsArray.articles);
    }
  });  
});
