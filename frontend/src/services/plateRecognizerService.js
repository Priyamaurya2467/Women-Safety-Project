import axios from "axios";

export const recognizePlate = async(imageFile) =>{
    const formData = new formData();

    formData.append("upload",imageFile);
    const res = await axios.post("https://api.platerecognizer.com/v1/plate-reader/",formData,{
        headers: {
            Authorization: "00324254b9b4298ddb1de5d2f4098fa5cd3e3d5e",
            "Content-Type":"multipart/form-data"
        },
    });

    return res.data
}