import axios from "axios";

const API="http://localhost:5000/api/journey";

export const startJourney=async(data)=>{

    const res=await axios.post(`${API}/start`, data,{
        headers:{ Authorization:`Bearer ${localStorage.getItem("token")}`}
    }
);
    return res.data;

};


export const endJourney=async(id)=>{

    const res=await axios.put(`${API}/end/${id}`, {},{
        headers:{ Authorization:`Bearer ${localStorage.getItem("token")}`}
    }
);
    return res.data;

};
