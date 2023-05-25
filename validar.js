function validar() {
    var todo_ok = true;
    nombre = document.getElementById("name").value;
    if (nombre == null || nombre.length < 2 || /^\s+$/.test(nombre)) {
      alert('[ERROR] Debe ingresar un nombre válido');
      todo_ok = false;
    //   return false;
    }
    apellido = document.getElementById("surname").value;
    if (apellido == null || apellido.length < 2 || /^\s+$/.test(apellido)) {
        alert('[ERROR] Debe ingresar un apellido válido');
        todo_ok = false;
        }
    email = document.getElementById("email").value;
    if (email.value.match(/[^\s@]+@[^\s@]+\.[^\s@]+/gi) ){
        alert('[ERROR] Debe ingresar un email válido');
        todo_ok = false;
        }
    var int1 = document.getElementById("interes_hogar").checked;
    var int2 = document.getElementById("interes_ciudad").checked;
    // var int3 = document.getElementById("interes_naturaleza").checked;
    // var int4 = document.getElementById("interes_reciclar").checked;
    if (!int1 && !int2){
        alert("Seleccione al menos un tema de interés para mantenerlo informado");
        todo_ok = false;
    }
    if (!todo_ok){
        alert("Algunos campos no son correctos, vuelva a revisarlos");
        return todo_ok;
    } else {
        return todo_ok;
    }
  
    // Si el script ha llegado a este punto, todas las condiciones
    // se han cumplido, por lo que se devuelve el valor true
    // return true;
  }