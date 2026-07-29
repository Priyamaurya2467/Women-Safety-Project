import axios from "axios";

export const getSafetyAreas = async()=>{

const res = await axios.get(

"http://localhost:5000/api/safety"

);

return res.data;

};