const appView = (function() {
    const elements = {
        nombre: document.getElementById('nombre'),
        apellidos: document.getElementById('apellidos'),
        edad: document.getElementById('edad'),
        ciudad: document.getElementById('ciudad'),
        resultado: document.getElementById('resultado'),
        tbody: document.getElementById('tbody-datos'),
        extra: document.getElementById('extra'),
        btnToJson: document.getElementById('btn-to-json'),
        btnToObject: document.getElementById('btn-to-object')
    };

    function obtenerDatosFormulario() {
        return {
            nombre: elements.nombre.value,
            apellidos: elements.apellidos.value,
            edad: elements.edad.value,
            ciudad: elements.ciudad.value
        };
    }

    function mostrarResultado(texto) {
        elements.resultado.textContent = texto;
    }

    function mostrarFilaTabla(persona) {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${persona.nombre}</td>
            <td>${persona.apellidos}</td>
            <td>${persona.edad}</td>
            <td>${persona.ciudad}</td>
        `;
        elements.tbody.appendChild(fila);
    }

    function mostrarEstadisticas(datos) {
        if (!datos) {
            elements.extra.innerHTML = 'Sin datos';
            return;
        }

        elements.extra.innerHTML =
            `Suma = ${datos.suma}<br>` +
            `Media = ${datos.media}<br>` +
            `Máximo = ${datos.maximo}<br>` +
            `Mínimo = ${datos.minimo}`;
    }

    function mostrarError(mensaje) {
        alert(mensaje);
    }

    function vincularEventos(onConvertToJson, onConvertToObject) {
        elements.btnToJson.addEventListener('click', onConvertToJson);
        elements.btnToObject.addEventListener('click', onConvertToObject);
    }

    return {
        obtenerDatosFormulario,
        mostrarResultado,
        mostrarFilaTabla,
        mostrarEstadisticas,
        mostrarError,
        vincularEventos
    };
})();
