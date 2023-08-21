import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constant";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-gray-100 bg-primary-blue-200">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src="/logotransparent.png"
            alt="logo"
            width={100}
            height={100}
            className="cursor-pointer"
          />
          <p className="text-base text-gray-700">
            Interview100 2023 <br /> All rights reserved &copy;
          </p>
        </div>
        <div className="footer__links">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  href={item.url}
                  key={item.title}
                  className="text-gray-600"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between flex-wrap items-center mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <p>@2023 Interview100. All Rights Reserved</p>
        <div className="footer__copyright-link">
          <Link href="/" className="text-gray-500">
            Privacy Policy
          </Link>
          <Link href="/" className="text-gray-500">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
