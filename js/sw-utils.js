//Guardar en el cache dinamico
function actualizaCacheDinamico(dynamicCache, request, response) {

    if (response.ok) {
        //si entra aqui significa que la respuesta tiene data que se va a almacenar en el cache

        return caches.open(dynamicCache).then(cache => {
            cache.put(request, response.clone());

            return response.clone();
        })
    }

}