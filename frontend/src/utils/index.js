export const navOptions = [
  {
    id: "home",
    label: "Home",
    path: "/",
  },
  {
    id: "listingNews",
    label: "News",
    path: "/dog/listing/news",
  },
  {
    id: "listing",
    label: "Adopt",
    path: "/dog/listing/adopt",
  },
  {
    id: "listingDonate",
    label: "Donate",
    path: "/dog/listing/donate",
  },
  {
    id: "listingContact",
    label: "Contact",
    path: "/dog/listing/contact",
  },
];

export const adminNavOptions = [
  {
    id: "adminListing",
    label: "Manage All Dogs",
    path: "/admin-view/all-dogs",
  },
  {
    id: "adminNewDog",
    label: "Add New Dog",
    path: "/admin-view/add-dog",
  },
];

export const registrationFormControls = [
  {
    id: "name",
    type: "text",
    placeholder: "Enter your name",
    label: "Name",
    componentType: "input",
  },
  {
    id: "email",
    type: "email",
    placeholder: "Enter your email",
    label: "Email",
    componentType: "input",
  },
  {
    id: "password",
    type: "password",
    placeholder: "Enter your password",
    label: "Password",
    componentType: "input",
  },
  {
    id: "role",
    type: "",
    placeholder: "",
    label: "Role",
    componentType: "select",
    options: [
      {
        id: "admin",
        label: "Admin",
      },
      {
        id: "customer",
        label: "Customer",
      },
    ],
  },
];

export const loginFormControls = [
  {
    id: "email",
    type: "email",
    placeholder: "Enter your email",
    label: "Email",
    componentType: "input",
  },
  {
    id: "password",
    type: "password",
    placeholder: "Enter your password",
    label: "Password",
    componentType: "input",
  },
];

export const adminAddDogformControls = [
  {
    id: "name",
    type: "text",
    placeholder: "Enter name",
    label: "Name",
    componentType: "input",
  },
  {
    id: "description",
    type: "text",
    placeholder: "Enter description",
    label: "Description",
    componentType: "input",
  },
  {
    id: "gender",
    type: "",
    placeholder: "",
    label: "Gender",
    componentType: "select",
    options: [
      {
        id: "listingMale",
        label: "Male",
      },
      {
        id: "listingFemale",
        label: "Female",
      },
    ],
  },
  {
    id: "sizes",
    type: "",
    placeholder: "",
    label: "Size",
    componentType: "select",
    options: [
      {
        id: "listingS",
        label: "S",
      },
      {
        id: "listingM",
        label: "M",
      },
      {
        id: "listingL",
        label: "L",
      },
      {
        id: "listingXL",
        label: "XL",
      },
    ],
  },
];

export const firebaseConfig = {
  apiKey: "AIzaSyDr2X8g7z2exsLCVXQfOmB2T3IQB2WKAYI",
  authDomain: "ladytramp-888cb.firebaseapp.com",
  projectId: "ladytramp-888cb",
  storageBucket: "ladytramp-888cb.appspot.com",
  messagingSenderId: "572019914987",
  appId: "1:572019914987:web:123c63e3085c3ac067a6ae",
  measurementId: "G-JEGWW7GVEB",
};

export const firebaseStorageURL = "gs://ladytramp-888cb.appspot.com";

export const addNewAddressFormControls = [
  {
    id: "fullName",
    type: "input",
    placeholder: "Enter your full name",
    label: "Full Name",
    componentType: "input",
  },
  {
    id: "address",
    type: "input",
    placeholder: "Enter your full address",
    label: "Address",
    componentType: "input",
  },
  {
    id: "city",
    type: "input",
    placeholder: "Enter your city",
    label: "City",
    componentType: "input",
  },
  {
    id: "country",
    type: "input",
    placeholder: "Enter your country",
    label: "Country",
    componentType: "input",
  },
  {
    id: "postalCode",
    type: "input",
    placeholder: "Enter your postal code",
    label: "Postal Code",
    componentType: "input",
  },
];
