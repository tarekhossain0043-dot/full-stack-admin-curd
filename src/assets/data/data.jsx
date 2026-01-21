import { BrickWallShield, LayoutDashboard } from "lucide-react";
import { nanoid } from "nanoid";
import img1 from "../sidebar-img/dashboard-icon.png";
import img2 from "../sidebar-img/instructor.png";
import img3 from "../sidebar-img/student.png";
import img4 from "../sidebar-img/classIcon.png";
import img5 from "../sidebar-img/attendance.png";
import img6 from "../sidebar-img/dashboard-icon.png";
import img7 from "../sidebar-img/dashboard-icon.png";
import img8 from "../sidebar-img/dashboard-icon.png";
import img9 from "../sidebar-img/dashboard-icon.png";
import img10 from "../sidebar-img/dashboard-icon.png";

export const sidebarData = [
  {
    id: nanoid(3),
    icon: img1,
    to: "/",
    label: "Dashboard",
  },
  {
    id: nanoid(3),
    icon: img2,
    to: "/teachers",
    label: "Teachers",
  },
  {
    id: nanoid(3),
    icon: img3,
    to: "/students",
    label: "Students",
  },
  {
    id: nanoid(3),
    icon: img4,
    label: "Classes",
    to: "/classes",
  },
  {
    id: nanoid(3),
    icon: img5,
    to: "/attendances",
    label: "Attendances",
  },
  {
    id: nanoid(3),
    icon: img6,
    to: "/Departments",
    label: "Departments",
  },
  {
    id: nanoid(3),
    icon: img7,
    to: "/grading",
    label: "Grading",
  },
  {
    id: nanoid(3),
    icon: img8,
    to: "/users_Management",
    label: "Users Management",
  },
  {
    id: nanoid(3),
    icon: img9,
    to: "/admins_Management",
    label: "Admins Management",
  },
  {
    id: nanoid(3),
    icon: img10,
    to: "/setting_profile",
    label: "Setting and profile",
  },
  {
    id: nanoid(3),
    icon: img10,
    to: "/notices",
    label: "Notices",
  },
];

export const userHistory = [{}];
