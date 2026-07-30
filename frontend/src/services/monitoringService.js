import axios from 'axios'

export const monitorJourney = async(data)=>{
    const res = await axios.post("http://localhost:5000/api/monitor/check",data,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem("token")}`},
    })

    return res.data;
}