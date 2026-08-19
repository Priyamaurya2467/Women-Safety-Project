import React, { useContext, useState } from "react";
import axios from "axios";
import { User, Phone, Mail, Heart, X, Plus ,Pencil,Trash2} from "lucide-react";
import { useTrustedContacts } from "../../../Context/TrustedContactContext";
const TrustedContacts = () => {
  const [openModal, setOpenModal] = useState(false);

 
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    relationship: "",
    phone: "",
    email: "",
  });

  const { contacts, fetchContacts } = useTrustedContacts();



 
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    let res;

    if (isEditing) {
      res = await axios.put(
        `https://safeher-backend-0hzz.onrender.com/api/contacts/${editingId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
    } else {
      res = await axios.post(
        "https://safeher-backend-0hzz.onrender.com/api/contacts",
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
    }

    if (res.data.success) {
      setOpenModal(false);

      setFormData({
        name: "",
        relationship: "",
        phone: "",
        email: "",
      });

      setEditingId(null);
      setIsEditing(false);

      fetchContacts();
    }
  } catch (err) {
    console.log(err);
  }
  };

  const handleDelete = async (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this contact?"
  );

  if (!confirmDelete) return;

  try {
    await axios.delete(
      `https://safeher-backend-0hzz.onrender.com/api/contacts/${id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    fetchContacts();
  } catch (err) {
    console.log(err);
  }
  };

  const handleEdit = (contact) => {
  setFormData({
    name: contact.name,
    relationship: contact.relationship,
    phone: contact.phone,
    email: contact.email,
  });

  setEditingId(contact._id);
  setIsEditing(true);
  setOpenModal(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      {/* Header */}

      <div className="flex items-center justify-between mb-8">

        <div>

          <h1 className="text-3xl font-bold text-gray-800">
             Trusted Contacts
          </h1>
          <p className="text-gray-500 mt-1">
             Total Contacts : {contacts.length}
          </p>

          <p className="text-gray-500 mt-2">
            Add trusted people who will receive SOS alerts.
          </p>

        </div>

        <button
          onClick={() => setOpenModal(true)}
          className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-white hover:bg-blue-700 shadow"
        >
          <Plus size={18} />
          Add Contact
        </button>

      </div>

      {/* Empty State */}

      {contacts.length === 0 ? (
        <div className="rounded-3xl border-2 border-dashed border-gray-300 bg-white p-20 text-center">

          <Heart
            className="mx-auto text-blue-500"
            size={60}
          />

          <h2 className="mt-5 text-2xl font-bold">
            Trusted Contacts
          </h2>

          <p className="mt-2 text-gray-500">
            Start by adding your first trusted contact.
          </p>

          <button
            onClick={() => setOpenModal(true)}
            className="mt-8 rounded-xl bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
          >
            + Add Trusted Contact
          </button>

        </div>
      ) : (

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          {contacts.map((contact) => (

            <div
              key={contact._id}
              className="bg-white rounded-3xl shadow-md p-6 hover:shadow-xl transition"
            >

              <div className="flex items-center gap-4">

                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">

                  <User
                    className="text-blue-600"
                    size={28}
                  />

                </div>

                <div>

                  <h2 className="text-xl font-bold">
                    {contact.name}
                  </h2>

                  <p className="text-gray-500">
                    {contact.relationship}
                  </p>

                </div>

              </div>

              <div className="mt-6 space-y-3">

                <div className="flex items-center gap-2">
                  <Phone size={18} className="text-blue-600" />
                  <span>{contact.phone}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Mail size={18} className="text-blue-600" />
                  <span>{contact.email || "Not Available"}</span>
                </div>

                </div>

                <div className="flex justify-end gap-3 mt-6">

                  <button
                    onClick={() => handleEdit(contact)}
                    className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 flex items-center justify-center transition"
                  >
                    <Pencil size={18} />
                  </button>

                  <button
                    onClick={() => handleDelete(contact._id)}
                    className="w-10 h-10 rounded-full bg-red-100 text-red-600 hover:bg-red-200 flex items-center justify-center transition"
                  >
                    <Trash2 size={18} />
                  </button>

                </div>

            </div>

          ))}

        </div>

      )}

      {/* Modal */}

      {openModal && (

        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">

          <div className="bg-white rounded-3xl p-8 w-full max-w-xl relative shadow-2xl">

            <button
              onClick={() => setOpenModal(false)}
              className="absolute right-5 top-5 p-2 rounded-full hover:bg-gray-100"
            >
              <X />
            </button>

            <div className="text-center mb-8">

              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">

                <Heart
                  className="text-blue-600"
                  size={30}
                />

              </div>

              <h2 className="text-3xl font-bold">
                {isEditing ? "Edit Trusted Contact" : "Create Trusted Contact"}
              </h2>

              <p className="text-gray-500 mt-2">
                Add someone who will receive SOS alerts.
              </p>

            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              <div>

                <label className="block mb-2 font-medium">
                  Full Name
                </label>

                <div className="border rounded-xl px-4 py-3 flex items-center">

                  <User
                    className="mr-3 text-gray-400"
                    size={18}
                  />

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full outline-none"
                    placeholder="Enter full name"
                    required
                  />

                </div>

              </div>

              <div>

                <label className="block mb-2 font-medium">
                  Relationship
                </label>

                <div className="border rounded-xl px-4 py-3 flex items-center">

                  <Heart
                    className="mr-3 text-gray-400"
                    size={18}
                  />

                  <select
                    name="relationship"
                    value={formData.relationship}
                    onChange={handleChange}
                    className="w-full outline-none bg-transparent"
                    required
                  >
                    <option value="">Select Relationship</option>
                    <option>Mother</option>
                    <option>Father</option>
                    <option>Sister</option>
                    <option>Brother</option>
                    <option>Friend</option>
                    <option>Guardian</option>
                    <option>Spouse</option>
                  </select>

                </div>

              </div>

              <div>

                <label className="block mb-2 font-medium">
                  Phone Number
                </label>

                <div className="border rounded-xl px-4 py-3 flex items-center">

                  <Phone
                    className="mr-3 text-gray-400"
                    size={18}
                  />

                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full outline-none"
                    placeholder="+91 9876543210"
                    required
                  />

                </div>

              </div>

              <div>

                <label className="block mb-2 font-medium">
                  Email
                </label>

                <div className="border rounded-xl px-4 py-3 flex items-center">

                  <Mail
                    className="mr-3 text-gray-400"
                    size={18}
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full outline-none"
                    placeholder="example@gmail.com"
                  />

                </div>

              </div>

              <div className="flex justify-end gap-3 pt-3">

                <button
                  type="button"
                  onClick={() => setOpenModal(false)}
                  className="border px-6 py-3 rounded-xl hover:bg-gray-100"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
                >
                  {isEditing? "Save Changes" : "Create Contact"}
                </button>

              </div>

            </form>

          </div>

        </div>

      )}

    </div>
  );
};

export default TrustedContacts;