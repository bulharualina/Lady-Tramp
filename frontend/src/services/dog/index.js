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

export const getAllAdminDogs = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/admin/all-dogs", {
      method: "GET",
      cache: "no-store",
    });

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateADog = async (formData) => {
  try {
    const res = await fetch("/api/admin/update-dog", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${Cookies.get("token")}`,
      },

      body: JSON.stringify(formData),
    });

    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};

export const deleteADog = async (id) => {
  try {
    const res = await fetch(`/api/admin/delete-dog?id=${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });

    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};

export const dogByGender = async (id) => {
  try {
    const res = await fetch(
      `http://localhost:3000/api/admin/dog-by-gender?id=${id}`,
      {
        method: "GET",
        cache: "no-store",
      }
    );

    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};
