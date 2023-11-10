import Image from "next/image";

import logo from "@/public/images/logo/logo.svg";
import sub from "@/public/images/footer/subscribe.png";
import call from "@/public/images/footer/call.svg";
import location from "@/public/images/footer/location.svg";
import pages from "@/public/images/footer/pages.svg";
import follow from "@/public/images/footer/follow.svg";
import { Link } from "nextjs13-progress";
import VerticalAnimation from "@/utils/Animations/VerticalAnimation";

export default function Footer() {
  return (
    <footer className="bg-secondary_a py-[190px] px-8 max-md:py-[60px] max-lg:px-4">
      <div className="mx-auto max-w-[1200px] grid grid-cols-[0.375fr_0.625fr] gap-x-[100px] items-center max-xl:gap-[35px] max-lg:grid-cols-1 max-lg:gap-[60px]">
        <VerticalAnimation
          delay={0.2}
          className="bg-[#3C3C45] px-[52px] py-12 mx-auto max-sm:px-8 max-sm:py-10"
        >
          <div className="flex gap-5 items-center">
            <Image src={logo} alt="Logo" />
            <h3 className="font-nunito font-extrabold text-[38px] leading-[59.2px] text-white">
              Promote
            </h3>
          </div>
          <Image src={sub} alt="Subscribe" className="mb-3" />
          <h6 className="h6-title text-white mb-1 -mt-8">Subscribe now</h6>
          <p className="parag text-[#D0D0D0] mb-[18px]">
            Industry&apos;s standard from dummy and make a type book.
          </p>
          <input
            type="email"
            placeholder="Enter Your Email..."
            className="mb-[18px] py-4 pl-6 w-full placeholder:menu menu placeholder:text-white focus:outline-0
            bg-[#5B5B61] rounded-[10px] hover:placeholder:text-white text-white hover:text-white"
          />
          <button className="btn-gold-large w-full">Subscribe</button>
        </VerticalAnimation>
        <div>
          <div className="flex justify-between gap-16 items-center pb-[30px] mb-[30px] border-b border-[#727274] max-md:flex-col">
            <VerticalAnimation delay={0.3} className="flex flex-col gap-4">
              <div className="flex gap-1 items-center">
                <Image src={call} alt="Call" />
                <h6 className="h6-title text-white">Get in touch with</h6>
              </div>
              <Link
                href={"tel:+989357910493"}
                className="font-notoSans font-bold text-[25px] leading-[39.13px] py-3 px-8 bg-[#3C3C45] text-primary_a dur-200 hover:text-primary_b"
              >
                +98 935 79 10 493
              </Link>
              <Link
                href={"mailto:mamad76ha@gmail.com"}
                className="parag text-white dur-200 hover:text-primary_a"
              >
                mamad76ha@gmail.com
              </Link>
            </VerticalAnimation>
            <VerticalAnimation delay={0.4} className="flex flex-col gap-8">
              <div className="flex gap-1 items-center">
                <Image src={location} alt="Call" />
                <h6 className="h6-title text-white">Location</h6>
              </div>
              <p className="parag text-white">Iran - Tehran - District 17</p>
              <Link
                target="_blank"
                className="underline text-primary_a parag dur-200 hover:text-primary_b"
                href="https://www.google.com/maps/place/Imamzadeh+Hasan/@35.6839313,51.3484515,13.9z/data=!4m6!3m5!1s0x3f8e006e762a5355:0xa077bb8c5b4b5865!8m2!3d35.6642637!4d51.3597145!16s%2Fg%2F1tgtczks?entry=ttu"
              >
                location
              </Link>
            </VerticalAnimation>
          </div>
          <div className="grid grid-cols-2 justify-items-center text-center pb-[30px] mb-[30px] border-b border-[#727274]">
            <VerticalAnimation delay={0.6}>
              <div className="flex gap-1 items-center mb-8">
                <Image src={pages} alt="Pages" />
                <h6 className="h6-title text-white">Pages</h6>
              </div>
              <div className="flex flex-col gap-1">
                <Link
                  href="/"
                  className="parag text-white leading-[38.07px] dur-200 hover:text-primary_a"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="parag text-white leading-[38.07px] dur-200 hover:text-primary_a"
                >
                  About
                </Link>
                <Link
                  href="/blog"
                  className="parag text-white leading-[38.07px] dur-200 hover:text-primary_a"
                >
                  Blog
                </Link>
                <Link
                  href="/contact"
                  className="parag text-white leading-[38.07px] dur-200 hover:text-primary_a"
                >
                  Contact
                </Link>
                <Link
                  href="/services"
                  className="parag text-white leading-[38.07px] dur-200 hover:text-primary_a"
                >
                  Services
                </Link>
                <Link
                  href="/case-study"
                  className="parag text-white leading-[38.07px] dur-200 hover:text-primary_a"
                >
                  Case Study
                </Link>
              </div>
            </VerticalAnimation>
            <VerticalAnimation delay={0.8}>
              <div className="flex gap-1 items-center mb-8">
                <Image src={follow} alt="Follow" />
                <h6 className="h6-title text-white">Follows</h6>
              </div>
              <div className="flex flex-col gap-0.5">
                <Link
                  href="https://www.facebook.com"
                  className="parag text-white leading-[38.07px] dur-200 hover:text-primary_a"
                >
                  Facebook
                </Link>
                <Link
                  href="https://www.twitter.com"
                  className="parag text-white leading-[38.07px] dur-200 hover:text-primary_a"
                >
                  Twitter
                </Link>
                <Link
                  href="https://www.instagram.com/"
                  className="parag text-white leading-[38.07px] dur-200 hover:text-primary_a"
                >
                  Instagram
                </Link>
                <Link
                  href="https://www.linkedin.com/"
                  className="parag text-white leading-[38.07px] dur-200 hover:text-primary_a"
                >
                  Linkedin
                </Link>
              </div>
            </VerticalAnimation>
          </div>
          <VerticalAnimation
            delay={0.8}
            className="parag text-white leading-[38.07px] text-center"
          >
            Copyright ©{" "}
            <Link
              target="_blank"
              href="https://modesign-portfolio.vercel.app/"
              className="hover:text-primary_b dur-200 text-primary_a"
            >
              MODESIGN
            </Link>{" "}
            | Designed by{" "}
            <Link
              target="_blank"
              href="https://modesign-portfolio.vercel.app/"
              className="hover:text-primary_b dur-200 text-primary_a"
            >
              MODESIGN
            </Link>{" "}
            - Powered by{" "}
            <Link
              target="_blank"
              href="https://figma.com/"
              className="hover:text-primary_b dur-200 text-primary_a"
            >
              Figma
            </Link>
          </VerticalAnimation>
        </div>
      </div>
    </footer>
  );
}
