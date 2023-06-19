import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@email.com",
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: "Joe Doe",
    email: "john@email.com",
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  },
  {
    name: "Clare Manion",
    email: "clare@email.com",
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  },
];

export default users;
