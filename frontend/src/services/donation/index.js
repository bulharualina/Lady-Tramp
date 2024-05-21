import Cookies from "js-cookie";

export const createNewDonation = async (donationData) => {
  try {
    const res = await fetch("/api/donation/create-new-donation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
      body: JSON.stringify(donationData),
    });

    const data = await res.json();

    return data;
  } catch (e) {
    console.error("Error creating donation:", e);
  }
};
