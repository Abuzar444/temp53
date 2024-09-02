"use client";
import { adminLinks } from "@/utils/links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

function Sidebar() {
  const pathname = usePathname();

  return <aside>Admin</aside>;
}
export default Sidebar;
