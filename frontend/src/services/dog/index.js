import Cookies from "js-cookie";

export const addNewDog = async (formData) => {
  try {
    const response = await fetch("/api/admin/add-dog", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
