  const axios = require('axios')

  const getTracking = async(token)=>{
    const res = await axios.get(
        `http://localhost:5000/api/tracking/${token}`
    )
    return res.data;
  }