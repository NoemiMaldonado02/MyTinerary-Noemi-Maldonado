import axios from 'axios';

export const getCities = async () => {
    try {
        const response = await axios.get('http://localhost:4000/api/cities');
        return response.data.data;
    } catch (error) {
        console.error("Error al obtener ciudades:", error);
        return []; 
    }
};

export const getCity = async (id) => {
    try {
        const response = await axios.get("http://localhost:4000/api/cities/" + id);
        return response.data.data;
    } catch (error) {
        console.error(`Error al obtener detalles de la ciudad con ID ${id}:`, error);
        return {};
    }
};
