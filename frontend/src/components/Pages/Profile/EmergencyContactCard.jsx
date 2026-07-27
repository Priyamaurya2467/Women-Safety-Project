import React, { useEffect, useState } from "react";
import { Phone, Users } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function EmergencyContactCard() {
  const navigate = useNavigate()
  const [contacts,setContacts] = useState([]);
  useEffect(()=>{
    getTrustedContacts();
  },[]);
  const getTrustedContacts = async() => {
    const res = await axios.get("/api/trusted-contact");

    if(res.data.success){
      setContacts(res.data.data)
    }
  }
  return (
   <>

   <div className="text-2xl font-bold mb-6">
    <h1 className="text-2xl font-bold mb-6">
      Trusted Contacts
    </h1>

    {contacts.length === 0 ? (
      <div className="border rounded-xl p-8 text-center">
        <h2 className="text-lg font-semibold">
            No Trusted Contacts
        </h2>
        <p className="text-gray-500 mt-2">
            Add trusted contacts so they can recieve emergency alerts.
        </p>

        <button 
          onClick={()=>navigate('/trusted-contact')}
          className="mt-5 px-5 py-2 bg-blue-600 text-white rounded-lg"
        >
          + Add Trusted Contact
        </button>
      </div>
    ):(
      <>
        <button 
          onClick={()=>navigate('/trusted-contact')}
          className="mt-5 px-5 py-2 bg-blue-600 text-white rounded-lg"
        >
          + Add Trusted Contact
        </button>
        <div className="space-y-4">
            {contacts.map((contact) => (
              <div
                key={contact._id}
                className="border rounded-xl p-4 shadow-sm"
              >
                <h2 className="font-semibold">{contact.name}</h2>
                <p className="font-semibold">{contact.relationship}</p>
                <p>{contact.relationship}</p>
                <p>{contact.Phone}</p>
              </div>
            ))}
        </div>
      </>
    )}

    

   </div>
   

   
   </>
  );
}

export default EmergencyContactCard;