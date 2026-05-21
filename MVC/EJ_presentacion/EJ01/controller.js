const appController = (function(model, view) {
    function iniciar() {
        view.vincularEventos(onConvertirAJSON, onConvertirAObjeto);
    }

    function validarDatos(datos) {
        if (!datos.nombre.trim()) {
            view.mostrarError('El campo nombre es obligatorio');
            return false;
        }
        if (!datos.apellidos.trim()) {
            view.mostrarError('El campo apellidos es obligatorio');
            return false;
        }
        if (!datos.edad.trim()) {
            view.mostrarError('El campo edad es obligatorio');
            return false;
        }
        if (!datos.ciudad.trim()) {
            view.mostrarError('El campo ciudad es obligatorio');
            return false;
        }
        if (Number.isNaN(Number(datos.edad)) || Number(datos.edad) < 0) {
            view.mostrarError('La edad debe ser un número válido');
            return false;
        }
        return true;
    }

    function onConvertirAJSON() {
        const datos = view.obtenerDatosFormulario();
        if (!validarDatos(datos)) {
            return;
        }

        const persona = model.crearPersona(datos);
        const json = model.guardarJson(persona);
        view.mostrarResultado(json);
    }

    function onConvertirAObjeto() {
        const json = model.obtenerJson();
        if (!json) {
            view.mostrarError('Primero convierte a JSON');
            return;
        }

        const persona = model.deserializar(json);
        model.borrarJson();
        view.mostrarResultado(
            `Nombre: ${persona.nombre}, Apellidos: ${persona.apellidos}, Edad: ${persona.edad}, Ciudad: ${persona.ciudad}`
        );
        view.mostrarFilaTabla(persona);
        model.aniadirEdad(persona.edad);
        view.mostrarEstadisticas(model.obtenerEstadisticas());
    }

    return {
        iniciar
    };
})(appModel, appView);

document.addEventListener('DOMContentLoaded', appController.iniciar);
