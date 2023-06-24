import axios from "axios";

export const fetchJobListings = async () => {
  try {
    const response = await axios.get(
      "https://internforge-backend.vercel.app/api/jobs"
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
