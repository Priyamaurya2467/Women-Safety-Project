import axios from 'axios'

export const monitorJourney = async(data)=>{
    const res = await axios.post("https://safeher-backend-0hzz.onrender.com/api/monitor/check",data,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem("token")}`},
    })

    return res.data;
}