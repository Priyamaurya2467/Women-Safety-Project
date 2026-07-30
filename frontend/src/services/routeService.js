import axios from 'axios'

export const getRoute = async(start,destination)=>{
    const url =  `https://router.project-osrm.org/route/v1/driving/${start.lng},${start.lat};${destination.lng},${destination.lat}?overview=full&geometries=geojson`;
    console.log(url)
    const response = await axios.get(url);

    return response.data.routes[0]
}