import { contactData } from "./contactData";

const { emails } = contactData;

export const navLinks = [
  { name: "Home", path: "/" },
  { name: "Gallery", path: "/gallery" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: emails[0].url },
];
