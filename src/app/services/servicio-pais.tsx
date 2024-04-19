class ServicioGenerico {

    public static async peticionGET(url: string): Promise<any> {

        const datosEnviar = {
            method: "GET",
            headers: { "Content-Type": "application/json; chatset-UTF8" }
        }

        const respuesta = fetch(url, datosEnviar)
            .then((respuesta) => respuesta.json())
            .then((datos) => { return datos })
            .catch((err) => { return err });
        return respuesta;


    }

}

export default ServicioGenerico;