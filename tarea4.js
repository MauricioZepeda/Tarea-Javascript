const buscarPorIngredientes =  
    (ingrediente1 = 'lechuga', ingrediente2 = 'palta') =>
        sandwichOrders.filter(sandwich => sandwich.ingredients.includes(ingrediente1) 
                                       && sandwich.ingredients.includes(ingrediente2)) 
    
const obtenerOrdenPorId = (id = '') => {
    const encontrado = sandwichOrders.find(sandwich => sandwich.id === id)
    if(encontrado){
        const { ordered, protein, bread } = encontrado
        return `La orden fue realizada el ${ordered}, la orden llevó ${protein} y ${bread}` 
    }else{
        return `No se encontró la orden con id ${id}` 
    }
}

const tieneElIngrediente = (id = '', ingrediente = 'pepinillos') => { 
    const encontrado = sandwichOrders.find(sandwich => sandwich.id === id) 
    return encontrado 
        ? encontrado.ingredients.includes(ingrediente) 
        : false
}

const numeroOrdenesPorDia = (dia = '') => { 
    const encontradas = sandwichOrders.filter(sandwich => sandwich.ordered === dia).length
    return `Se encontraron ${encontradas} ordenes para la fecha ${dia}.`
}