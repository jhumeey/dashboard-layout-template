import dashboard from "public/dashboard.svg";
import discount from "public/discount.svg"
import info from "public/info.svg"
import orders from "public/orders.svg";
import profile from "public/profile.svg"
import sales from "public/trends.svg";

export const navigation = [
  { name: "Dashboard", href: "#", icon: dashboard, current: true },
  { name: "Sales", href: "#", icon: sales, current: false },
  { name: "Profile", href: "#", icon: profile, current: false },
  { name: "Orders", href: "#", icon: orders, current: false },
  { name: "Discount", href: "#", icon: discount, current: false },
  { name: "Info", href: "#", icon: info, current: false },
];

export const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
];


export const teams = [
  { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
  { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
  { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
]