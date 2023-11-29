import axios from "axios"

export async function currentUser() {
    const result = await axios
      .get("/api/current")
      .then((response) => response.data);
    return result;
  }


  export async function logOut() {
    const result = await axios
      .post("/api/logout")
      .then((response) => response.data);
    return result;
  }

  
  