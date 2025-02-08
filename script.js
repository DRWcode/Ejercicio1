// Función para calcular el área del rectángulo
function calcularArea() {
    let base = document.getElementById("base").value;
    let altura = document.getElementById("altura").value;

    // Validaciones
    if (base === "" || altura === "") {
        Swal.fire("Error", "Todos los campos son obligatorios", "error");
        return;
    }

    if (base <= 0 || altura <= 0) {
        Swal.fire("Error", "Los valores deben ser mayores que 0", "error");
        return;
    }

    // Cálculo del área
    let area = base * altura;

    // Mostrar resultado con SweetAlert2
    Swal.fire({
        title: "Resultado",
        text: `El área del rectángulo es: ${area} unidades cuadradas`,
        icon: "success"
    });
}

// Función para limpiar los campos del formulario
function limpiarCampos() {
    document.getElementById("areaForm").reset();
}
