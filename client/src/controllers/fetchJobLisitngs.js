import axios from "axios";

export const fetchJobListings = async () => {
  try {
    const response = await axios.get("http://localhost:3001/api/jobs");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
