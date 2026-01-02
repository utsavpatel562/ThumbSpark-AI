import { footerData } from "../data/footer";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "lucide-react";
import { motion } from "motion/react";
import type { IFooterLink } from "../types";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      className="
      flex flex-col md:flex-row
      justify-center md:justify-between
      gap-12 md:gap-20
      py-8
      px-6 md:px-16 lg:px-24 xl:px-32
      text-[13px] text-gray-500 bg-zinc-900
    "
    >
      {/* LEFT SECTION */}
      <motion.div
        className="
          flex flex-col md:flex-row
          items-center md:items-start
          gap-10 md:gap-35
          text-center md:text-left
        "
        initial={{ x: -150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
      >
        <Link to="/">
          <img
            src="/assets/logo.png"
            alt="footer logo"
            width={160}
            className="mx-auto md:mx-0"
          />
        </Link>

        <div className="flex flex-col sm:flex-row gap-10">
          {footerData.map((section, index) => (
            <div key={index}>
              <p className="text-slate-100 font-semibold text-lg">
                {section.title}
              </p>
              <ul className="mt-2 space-y-2 text-lg md:text-sm">
                {section.links.map((link: IFooterLink, index: number) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="hover:text-orange-600 transition"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>

      {/* RIGHT SECTION */}
      <motion.div
        className="
          flex flex-col
          items-center md:items-end
          text-center md:text-right
          gap-2
        "
        initial={{ x: 150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
      >
        <p className="max-w-60">
          Making every customer feel valued no matter the size of your audience.
        </p>

        <div className="flex items-center gap-4 mt-3">
          <a
            href="https://github.com/utsavpatel562"
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon className="size-5 hover:text-orange-500" />
          </a>
          <a
            href="https://www.linkedin.com/in/utsav-patel-coder"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinIcon className="size-5 hover:text-orange-500" />
          </a>
          <a
            href="https://instagram.com/utsavpatel_01"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon className="size-5 hover:text-orange-500" />
          </a>
        </div>

        <p className="mt-4">
          &copy; {new Date().getFullYear()}{" "}
          <a
            href="https://prebuiltui.com?utm_source=pixels"
            className="hover:text-orange-500"
          >
            Thumbspark-ai
          </a>
        </p>
      </motion.div>
    </footer>
  );
}
