// ELEMENTOS DEL DOM
const listado = document.getElementById("list");
const form = document.getElementById("form");
const add_btn_fixed = document.getElementById("addFixed");
const addItem_btn = document.getElementById("addItem");
const placehold = document.getElementById("placehold");


function addFixed() {
    add_btn_fixed.classList.add("d-none") //Escondiendo button fixed
    placehold.classList.add("d-none") //Escondiendo el h2
    form.classList.remove("d-none"); //Mostrando formulario
    listado.classList.add("d-none") //Escondiendo el listado

}

function addItem() {
    listado.classList.remove("d-none"); //Mostrando listado
    add_btn_fixed.classList.remove("d-none") //mostrando boton fixed add
    form.classList.add("d-none") //Escondiendo formulario
    // OBTENIENDO LOS DATOS DEL FORM
    const itemName = document.getElementById("floatingInput").value;
    const itemCategory = document.getElementById("options")
    // DOM del select > .options del objeto para acceder al array de options >selectedIndex para seleccionar el indice del elemento > .text || .value para obtener el valor
    let itemCategoryValue = itemCategory.options[itemCategory.selectedIndex].value;
    console.log(itemCategory, itemCategoryValue)
    const description = document.getElementById("description").value;
    let model = `<div class=container id=item>
                     <div class=row>
                        <div class=col-4>
                            <img src=./img/${itemCategoryValue}.svg>
                        </div>
                        <div class=col-4 id=nameCol>
                            Item name: ${itemName}
                        </div>
                        <div class=col-4 id=expand>
                            <button type=submit class=btn&#32btn-danger>></button>
                        </div>
                    </div>
                   </div>`;
    listado.innerHTML += model
}