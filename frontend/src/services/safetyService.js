import axios from "axios";

export const getSafetyAreas = async()=>{

const res = await axios.get(

"https://safeher-backend-0hzz.onrender.com/api/safety"

);

return res.data;

};