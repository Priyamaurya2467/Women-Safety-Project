import React, { useRef, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/api/evidence";

function EvidenceUpload({ currentSos }) {
  const fileInputRef = useRef(null);

  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);

    setFiles((prev) => [...prev, ...selectedFiles]);

    setError("");
    setMessage("");
  };

  const removeFile = (index) => {
    setFiles((prev) =>
      prev.filter((_, i) => i !== index)
    );
  };

  const handleUpload = async () => {
    if (files.length === 0) {
      setError("Please select at least one file.");
      return;
    }

    try {
      setUploading(true);
      setError("");
      setMessage("");

      const formData = new FormData();

      files.forEach((file) => {
        formData.append("files", file);
      });

      if (currentSos?._id) {
        formData.append("sosId", currentSos._id);
      }

      const token = localStorage.getItem("token");

      const response = await axios.post(
        `${API_URL}/upload`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
           
          },
        }
      );

      console.log("Upload response:", response.data);

      setMessage("Evidence uploaded successfully.");
      setFiles([]);

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }

    } catch (err) {
      console.error("Evidence upload failed:", err);

      setError(
        err.response?.data?.message ||
          "Failed to upload evidence."
      );
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-4">

      {/* Upload Area */}
      <div
        onClick={() => fileInputRef.current?.click()}
        className="cursor-pointer rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 p-8 text-center transition hover:border-blue-400 hover:bg-blue-50"
      >
        <div className="text-4xl">
          📁
        </div>

        <p className="mt-3 font-semibold text-gray-700">
          Upload Evidence
        </p>

        <p className="mt-1 text-sm text-gray-500">
          Images, audio and other files
        </p>

        <p className="mt-2 text-xs text-gray-400">
          Click to select files
        </p>

        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="image/*,audio/*,.pdf,.doc,.docx,.txt"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>

      {/* Selected Files */}
      {files.length > 0 && (
        <div className="space-y-2">

          <p className="text-sm font-semibold text-gray-700">
            Selected Files
          </p>

          {files.map((file, index) => (
            <div
              key={`${file.name}-${index}`}
              className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-3"
            >
              <div className="min-w-0">

                <p className="truncate text-sm font-medium text-gray-800">
                  {file.name}
                </p>

                <p className="text-xs text-gray-400">
                  {(file.size / 1024 / 1024).toFixed(2)} MB
                </p>

              </div>

              <button
                type="button"
                onClick={() => removeFile(index)}
                className="ml-3 rounded-lg px-3 py-1 text-xs font-medium text-red-600 hover:bg-red-50"
              >
                Remove
              </button>

            </div>
          ))}

          {/* Upload Button */}
          <button
            onClick={handleUpload}
            disabled={uploading}
            className="w-full rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {uploading
              ? "Uploading..."
              : `Upload ${files.length} File${
                  files.length > 1 ? "s" : ""
                }`}
          </button>

        </div>
      )}

      {/* Success */}
      {message && (
        <div className="rounded-lg bg-green-50 p-3 text-sm text-green-700">
          {message}
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="rounded-lg bg-red-50 p-3 text-sm text-red-700">
          {error}
        </div>
      )}

    </div>
  );
}

export default EvidenceUpload;