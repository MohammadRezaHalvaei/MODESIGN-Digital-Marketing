"use client";

import Image from "next/image";

import logo from "@/public/images/logo/logo.svg";
import { Link } from "nextjs13-progress";
import { useSelectedLayoutSegment } from "next/navigation";
import { Dropdown, MenuProps } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const links = [
  { link: "/", title: "Home", target: null },
  { link: "/about", title: "About", target: "about" },
  { link: "/services", title: "Services", target: "services" },
  { link: "/case-study", title: "Case Study", target: "case-study" },
  { link: "/blog", title: "Blog", target: "blog" },
  { link: "/contact", title: "Contact", target: "contact" },
];

const items: MenuProps["items"] = links!.map((link, index) => ({
  key: (index + 1).toString(),
  label: (
    <Link href={link?.link} className="text-xl">
      {link?.title}
    </Link>
  ),
}));

export default function HeaderMenu() {
  const activeSegment = useSelectedLayoutSegment();
  return (
    <nav className="mt-16 flex items-center justify-between relative z-50 max-w-[1200px] mx-auto px-10 max-md:px-4 max-md:mt-6">
      <Link href="/" className="flex gap-4 items-center">
        <Image src={logo} alt="Logo Icon" height={38} width={38} />
        <h5 className="h5-title leading-[48px] font-extrabold">Promote</h5>
      </Link>
      <div className="flex gap-10 items-center max-lg:hidden max-xl:gap-8">
        {links.map((link) => (
          <nav key={link.title}>
            <Link
              href={link.link}
              className={`menu ${
                activeSegment === link.target ? "text-primary_b" : ""
              } relative`}
            >
              {link.title}
              {activeSegment === link.target && (
                <div className="flex absolute left-1/2 -translate-x-1/2">
                  <div className="border-b-[3px] border-primary_b w-[25px] rounded-l-full" />
                  <div className="border-b-[3px] border-primary_a w-[25px] rounded-r-full" />
                </div>
              )}
            </Link>
          </nav>
        ))}
        <Link href="/about" className="btn-black">
          Get Started
        </Link>
      </div>

      <Dropdown menu={{ items }} placement="bottomLeft" className="lg:hidden">
        <MenuOutlined
          style={{
            color: "#fff",
            fontSize: "26px",
            backgroundColor: "#5956E8",
            padding: "12px",
            borderRadius: "10px",
          }}
        />
      </Dropdown>
    </nav>
  );
}
