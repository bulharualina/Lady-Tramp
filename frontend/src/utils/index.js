export const navOptions = [
  {
    id: "home",
    label: "Home",
    path: "/",
  },
  {
    id: "listingNews",
    label: "News",
    path: "/product/listing/news",
  },
  {
    id: "listing",
    label: "Adopt",
    path: "/product/listing/adopt",
  },
  {
    id: "listingDonate",
    label: "Donate",
    path: "/product/listing/donate",
  },
  {
    id: "listingContact",
    label: "Contact",
    path: "/product/listing/contact",
  },
];

export const adminNavOptions = [
  {
    id: "adminListing",
    label: "Manage All Dogs",
    path: "/admin-view/all-dogs",
  },
  {
    id: "adminNewProduct",
    label: "Add New Dog",
    path: "/admin-view/add-dog",
  },
];

export const registrationFormControls = [
  {
    id: 'name',
    type: 'text',
    placeholder: 'Enter your name',
    label: 'Name',
    componentType: 'input',
  },
  {
    id: 'email',
    type: 'email',
    placeholder: 'Enter your email',
    label: 'Email',
    componentType: 'input',
  },
  {
    id: 'password',
    type: 'password',
    placeholder: 'Enter your password',
    label: 'Password',
    componentType: 'input',
  },
  {
    id: 'role',
    type: '',
    placeholder: '',
    label: 'Role',
    componentType: 'select',
    options: [
      {
        id: 'admin',
        label: 'Admin',
      },
      {
        id: 'customer',
        label: 'Customer',
      },
    ],
  },
];

export const loginFormControls = [
  {
    id: 'email',
    type: 'email',
    placeholder: 'Enter your email',
    label: 'Email',
    componentType: 'input',
  },
  {
    id: 'password',
    type: 'password',
    placeholder: 'Enter your password',
    label: 'Password',
    componentType: 'input',
  },
];
