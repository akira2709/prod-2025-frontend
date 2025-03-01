"use client";
import { Children } from "@/shared/models/chilren.js";
import { Menu } from "@/widgets/menu";
import { usePathname } from "next/navigation";
const UserLayout = ({ children }: Children) => {
  const pathName = usePathname();
  const cantBeShowed = ["/user/enter", "user/register"];
  const showed = !cantBeShowed.includes(pathName);
  return (
    <>
      {children}
      {showed && <Menu />}
    </>
  );
};
export default UserLayout;
