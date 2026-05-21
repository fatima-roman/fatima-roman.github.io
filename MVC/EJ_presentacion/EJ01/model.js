const appModel = (function() {
    let jsonGuardado = "";
    const listaEdades = [];

    function crearPersona(data) {
        return {
            nombre: data.nombre.trim(),
            apellidos: data.apellidos.trim(),
            edad: Number(data.edad),
            ciudad: data.ciudad.trim()
        };
    }

    function serializar(persona) {
        return JSON.stringify(persona);
    }

    function deserializar(jsonStr) {
        return JSON.parse(jsonStr);
    }

    function guardarJson(persona) {
        jsonGuardado = serializar(persona);
        return jsonGuardado;
    }

    function obtenerJson() {
        return jsonGuardado;
    }

    function borrarJson() {
        jsonGuardado = "";
    }

    function aniadirEdad(edad) {
        listaEdades.push(Number(edad));
    }

    function obtenerEstadisticas() {
        if (listaEdades.length === 0) {
            return null;
        }
        const suma = listaEdades.reduce((acc, edad) => acc + edad, 0);
        const media = suma / listaEdades.length;
        const maximo = Math.max(...listaEdades);
        const minimo = Math.min(...listaEdades);

        return {
            suma,
            media: media.toFixed(2),
            maximo,
            minimo
        };
    }

    return {
        crearPersona,
        serializar,
        deserializar,
        guardarJson,
        obtenerJson,
        borrarJson,
        aniadirEdad,
        obtenerEstadisticas
    };
})();
