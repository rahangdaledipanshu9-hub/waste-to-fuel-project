// Image preview upload

const imageInput = document.getElementById("imageUpload");
const preview = document.getElementById("preview");

if(imageInput){
imageInput.addEventListener("change", function(){

const file = this.files[0];

if(file){

const reader = new FileReader();

reader.onload = function(){
preview.src = reader.result;
};

reader.readAsDataURL(file);

}

});
}



// Add new waste data to table

const form = document.getElementById("wasteForm");

if(form){

form.addEventListener("submit", function(e){

e.preventDefault();

const country = document.getElementById("country").value;
const plastic = document.getElementById("plastic").value;
const biomass = document.getElementById("biomass").value;
const textile = document.getElementById("textile").value;
const batches = document.getElementById("batches").value;

const table = document.getElementById("wasteTable");

const row = table.insertRow();

row.innerHTML = `
<td>${country}</td>
<td>${plastic}</td>
<td>${biomass}</td>
<td>${textile}</td>
<td>${batches}</td>
`;

form.reset();

});

}
