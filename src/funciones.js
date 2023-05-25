const nombre = document.querySelector('#nombre')
const numero = document.querySelector('#numero')
const btnAgregar = document.querySelector('#btn_agregar')
const btnBorrar = document.getElementsByClassName('borrar')


btnAgregar.addEventListener('click', function() {
  window.location.href = `agregar/${nombre.value}/${numero.value}`;
  console.log('funciona');
  
});

for (let i = 0; i < btnBorrar.length; i++) {
  btnBorrar[i].addEventListener('click', function() {
    let id = this.getAttribute('id');
    window.location.href = `borrar/${id}`;
  });
}

// window.addEventListener('load', function() {
//   location.reload(); // Recargar la página automáticamente después de que se cargue
// });
