import CaninMini from "./img/royalCaninMini.png";
import CaninMedium from "./img/RoyalCaninMedium.png";
import CaninAdult from "./img/RoyalCaninMiniIndor.png";



const products = [
    {
        id: '1',
        name: 'Royal Canin Perro Mini Adulto 7.5Kg',
        price: 18700,
        category: 'alimentos',
        img: CaninMini,
        stock: 25,
        descripcion: 'Royal Canin Mini Adult es un alimento para perros adultos de tamaño pequeño (de 1 a 10 Kg) desde los 10 meses hasta los 8 años. La L-Carnitina estimula el metabolismo de las reservas grasas. Satisface las necesidades energéticas gracias al contenido adaptado en calorías ( Royal Canin es líder en el mercado mundial de alimento balanceado para gatos y perros. Fundada en 1967 en Francia por un médico veterinario, Royal Canin asumió el compromiso de la Nutrición Salud, con el objetivo de aportar las respuestas nutricionales más innovadoras y adaptadas a las necesidades específicas de gatos y perros.'
    },

    { 
        id: '2',
        name: 'Royal Canin Medium Adulto - 15 Kg',
        price: 32150,
        category: 'alimentos',
        img: CaninMedium,
        stock: 30,
        description: 'Royal Canin Medium Adult es un alimento para perros adultos de razas medianas (11 a 25 Kg) desde los 12 meses hasta los 7 años. Con palatabilidad reforzada mediante aromas naturales seleccionados, tamaño, forma y textura de la croqueta adaptados. Asegura una óptima digestibilidad gracias a las proteínas de alta calidad y al aporte equilibrado de fibras alimentarias. Royal Canin es líder en el mercado mundial de alimento balanceado para gatos y perros. Fundada en 1967 en Francia por un médico veterinario, Royal Canin asumió el compromiso de la Nutrición Salud, con el objetivo de aportar las respuestas nutricionales más innovadoras y adaptadas a las necesidades específicas de gatos y perros.'
    },

    { 
        id: '3',
        name:'Royal Canin Mini Indoor Adulto - 1 Kg',
        price: 3950,
        category: 'alimentos',
        img: CaninAdult,
        stock: 45,
        description: 'Royal Canin Mini Indoor es un alimento para perros adultos de interior y vida urbana de tamaño pequeño (de 1 a 10 kg) a partir de los 10 meses. Elaborado con ingredientes que ayudan a disminuir el olor y tamaño de las heces, suplementado con vitamina E y C como antioxidantes, L-carnitina para estimular el metabolismo y quelantes de calcio que reducen la formación de sarro. Royal Canin es líder en el mercado mundial de alimento balanceado para gatos y perros. Fundada en 1967 en Francia por un médico veterinario, Royal Canin asumió el compromiso de la Nutrición Salud, con el objetivo de aportar las respuestas nutricionales más innovadoras y adaptadas a las necesidades específicas de gatos y perros.'
    },
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) =>{
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))

        }, 500)
    })
}

export const getProductsByCategory = (category)=>{

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter( prod => prod.category === category ))
        }, 500);
    })
}