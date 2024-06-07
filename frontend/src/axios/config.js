import axios from "axios";

const partyFetch = axios.create({
  baseURL: "https://fun-time-y72m.onrender.com/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default partyFetch;
