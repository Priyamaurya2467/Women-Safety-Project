import axios from "axios";

export const getDestinationCoordinates = async (place) => {
  console.log("Searching:", place);

  const res = await axios.get(
    "https://nominatim.openstreetmap.org/search",
    {
      params: {
        q: place,
        format: "json",
        limit: 1,
      },
    }
  );

  console.log("FULL RESPONSE:", res.data);
  console.log("Length:", res.data.length);

  if (res.data.length === 0) {
    throw new Error("Destination not found");
  }

  const coordinates = {
    latitude: Number(res.data[0].lat),
    longitude: Number(res.data[0].lon),
  };

  console.log("Coordinates:", coordinates);

  return coordinates;
};