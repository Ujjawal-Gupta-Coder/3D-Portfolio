import { socials } from "@/constants"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="py-12 px-4 flex justify-center items-end dark:text-ctnSecondaryDark text-ctnSecondaryLight dark:bg-bgSecondaryDark bg-bgSecondaryLight">
        <div className="w-full text-center">
          <div className="flex justify-center gap-8 mb-8">
            {socials.map((social) => (
            <Link
              href={social.link}
              target="_blank"
              key={social.id}
            className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 p-3 flex-shrink-0 rounded-2xl shadow-sm shadow-primary  transition-all transform hover:scale-110"
            >
                {social.icon}
            </Link>
            ))}
          </div>
          <p className="text-[10px] sm:text-sm">
            ©️ 2025 Design & Code. Built With Love ❤️ by Ujjawal Gupta.
          </p>
        </div>
      </footer>
  )
}

export default Footer
