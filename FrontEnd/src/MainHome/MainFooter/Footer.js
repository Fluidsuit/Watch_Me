import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="text-[#737373] px-[10%] py-24 text-sm">
      {/* Social Icons */}
      <div className="flex gap-5 mb-5">
        <a
          href="https://www.facebook.com/NetflixIN/"
          className="text-white text-xl hover:text-[#b3b3b3] transition"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/Netflix_IN/"
          className="text-white text-xl hover:text-[#b3b3b3] transition"
        >
          <FaInstagram />
        </a>
        <a
          href="https://x.com/netflixindia"
          className="text-white text-xl hover:text-[#b3b3b3] transition"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.youtube.com/channel/UCZSNzBgFub_WWil6TOTYwAg"
          className="text-white text-xl hover:text-[#b3b3b3] transition"
        >
          <FaYoutube />
        </a>
      </div>

      {/* Footer Links */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mb-5">
        <ul className="list-none p-0">
          <li className="mb-2">
            <a
              href="#"
              className="text-[#737373] hover:text-white hover:underline transition"
            >
              Audio Description
            </a>
          </li>
          <li className="mb-2">
            <a
              href="https://ir.netflix.net/ir-overview/profile/default.aspx"
              className="text-[#737373] hover:text-white hover:underline transition"
            >
              Investor Relations
            </a>
          </li>
          <li className="mb-2">
            <a
              href="https://help.netflix.com/legal/notices"
              className="text-[#737373] hover:text-white hover:underline transition"
            >
              Legal Notices
            </a>
          </li>
        </ul>

        <ul className="list-none p-0">
          <li className="mb-2">
            <a
              href="https://help.netflix.com/en/node/"
              className="text-[#737373] hover:text-white hover:underline transition"
            >
              Help Centre
            </a>
          </li>
          <li className="mb-2">
            <a
              href="https://jobs.netflix.com/"
              className="text-[#737373] hover:text-white hover:underline transition"
            >
              Jobs
            </a>
          </li>
          <li className="mb-2">
            <a
              href="#"
              className="text-[#737373] hover:text-white hover:underline transition"
            >
              Cookie Preferences
            </a>
          </li>
        </ul>

        <ul className="list-none p-0">
          <li className="mb-2">
            <a
              href="#"
              className="text-[#737373] hover:text-white hover:underline transition"
            >
              Gift Cards
            </a>
          </li>
          <li className="mb-2">
            <a
              href="https://help.netflix.com/legal/termsofuse"
              className="text-[#737373] hover:text-white hover:underline transition"
            >
              Terms of Use
            </a>
          </li>
          <li className="mb-2">
            <a
              href="#"
              className="text-[#737373] hover:text-white hover:underline transition"
            >
              Corporate Information
            </a>
          </li>
        </ul>

        <ul className="list-none p-0">
          <li className="mb-2">
            <a
              href="#"
              className="text-[#737373] hover:text-white hover:underline transition"
            >
              Media Centre
            </a>
          </li>
          <li className="mb-2">
            <a
              href="#"
              className="text-[#737373] hover:text-white hover:underline transition"
            >
              Privacy
            </a>
          </li>
          <li className="mb-2">
            <a
              href="#"
              className="text-[#737373] hover:text-white hover:underline transition"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>

      {/* Copyright */}
      <p className="mt-5 text-xs text-[#737373]">&copy; 2025 Netflix, Inc.</p>
    </footer>
  );
}

export default Footer;
