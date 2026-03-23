// import React from "react";
// import { FaXTwitter } from "react-icons/fa6";
// import { InstagramIcon, LinkedinIcon, PhoneIcon, MailIcon } from "lucide-react";
// import { FooterBackgroundGradient, TextHoverEffect } from "./hover-footer";

// const Footer = () => {
//   return (
//     <footer className="bg-black relative h-fit rounded-t-[2rem] overflow-hidden mt-20 text-white">
//       {/* Background Gradient */}
//       <FooterBackgroundGradient />

//       <div className="max-w-7xl mx-auto p-8 md:p-14 z-20 relative">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 pb-12">
          
//           {/* Address */}
//           <div className="flex flex-col">
//             <h2 className="text-xl font-semibold text-[#67c6fe] mb-6">Address</h2>
//             <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5">
//               <iframe
//                 title="Google Maps"
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.2115320500!2d72.8339!3d19.1071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA2JzI1LjYiTiA3MsKwNTAnMDIuMCJF!5e0!3m2!1sen!2sin!4v1634567890123"
//                 width="100%"
//                 height="150"
//                 style={{ border: 0 }}
//                 allowFullScreen=""
//                 loading="lazy"
//                 className="opacity-70 hover:opacity-100 transition duration-300"
//               ></iframe>
//             </div>
//           </div>

//           {/* Contact */}
//           <div className="flex flex-col">
//             <h2 className="text-xl font-semibold text-[#67c6fe] mb-6">Contact</h2>
//             <div className="space-y-4 text-gray-300">
//               <a href="tel:+919545629801" className="flex items-center hover:text-white transition-colors">
//                 <PhoneIcon className="mr-3 h-5 w-5 text-[#3ca2fa]" /> +91 9545629801
//               </a>
//               <a href="tel:+919867720041" className="flex items-center hover:text-white transition-colors">
//                 <PhoneIcon className="mr-3 h-5 w-5 text-[#3ca2fa]" /> +91 9867720041
//               </a>
//               <a href="mailto:djs.sigai@gmail.com" className="flex items-center hover:text-white transition-colors">
//                 <MailIcon className="mr-3 h-5 w-5 text-[#3ca2fa]" /> djs.sigai@gmail.com
//               </a>
//             </div>
//           </div>

//           {/* Links */}
//           <div className="flex flex-col">
//             <h2 className="text-xl font-semibold text-[#67c6fe] mb-6">Quick Links</h2>
//             <ul className="space-y-3 text-gray-300">
//               <li><a href="/" className="hover:text-[#3ca2fa] transition-colors">Home</a></li>
//               <li><a href="/team" className="hover:text-[#3ca2fa] transition-colors">Team</a></li>
//               <li><a href="/events" className="hover:text-[#3ca2fa] transition-colors">Events</a></li>
//               <li><a href="/contact" className="hover:text-[#3ca2fa] transition-colors">Contact</a></li>
//             </ul>
//           </div>

//           {/* Socials */}
//           <div className="flex flex-col items-center md:items-start">
//             <h2 className="text-xl font-semibold text-[#67c6fe] mb-6">Follow Us</h2>
//             <div className="flex space-x-6 text-2xl mb-8">
//               <a href="#" className="text-gray-400 hover:text-blue-500 transition-transform hover:scale-110">
//                 <LinkedinIcon size={24} />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-pink-400 transition-transform hover:scale-110">
//                 <InstagramIcon size={24} />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white transition-transform hover:scale-110">
//                 <FaXTwitter size={24} />
//               </a>
//             </div>
//             <img src="/nav_logo.png" alt="logo" className="h-12 w-auto brightness-110" />
//           </div>
//         </div>
//       </div>

//       {/* LARGE TEXT SECTION AT THE BOTTOM */}
//       <div className="relative w-full flex flex-col items-center justify-center pb-8 z-30">
//         <div className="hidden lg:block h-[20rem] w-full">
//           {/* Change text to DJSCE SIGAI */}
//           <TextHoverEffect text="DJSCE SIGAI" className="w-full h-full" />
//         </div>
        
//         {/* Rights Reserved placed directly under the big text */}
//         <div className="text-center text-gray-500 text-sm mt-[-2rem] lg:mt-[-4rem]">
//           © {new Date().getFullYear()} DJSCE SIGAI. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { InstagramIcon, LinkedinIcon, PhoneIcon, MailIcon } from "lucide-react";
import { FooterBackgroundGradient, TextHoverEffect } from "./hover-footer";

const Footer = () => {
  return (
    <footer className="bg-black relative h-fit rounded-t-[2rem] overflow-hidden mt-20 text-white flex flex-col">
      <FooterBackgroundGradient />

      {/* Main Grid Content */}
      <div className="max-w-7xl mx-auto p-8 md:p-14 z-20 relative w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 pb-12">         
          {/* Address */}
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold text-[#67c6fe] mb-6">Address</h2>
            <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5">
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.211532152864!2d72.833633!3d19.102796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9bf10e051c7%3A0xe67c640e74f9d6c8!2sDwarkadas%20J.%20Sanghvi%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1710500000000!5m2!1sen!2sin"
                width="100%"
                height="150"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="opacity-70 hover:opacity-100 transition duration-300"
              ></iframe>
            </div>
          </div>
          {/* Contact */}
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold text-[#67c6fe] mb-6">Contact</h2>
            <div className="space-y-4 text-gray-300">
              <a href="tel:+919545629801" className="flex items-center hover:text-white transition-colors">
                <PhoneIcon className="mr-3 h-5 w-5 text-[#3ca2fa]" /> +91 9545629801
              </a>
              <a href="tel:+919867720041" className="flex items-center hover:text-white transition-colors">
                <PhoneIcon className="mr-3 h-5 w-5 text-[#3ca2fa]" /> +91 9867720041
              </a>
              <a href="mailto:djs.sigai@gmail.com" className="flex items-center hover:text-white transition-colors">
                <MailIcon className="mr-3 h-5 w-5 text-[#3ca2fa]" /> djs.sigai@gmail.com
              </a>
            </div>
          </div>
          {/* Links */}
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold text-[#67c6fe] mb-6">Quick Links</h2>
            <ul className="space-y-3 text-gray-300">
              <li><a href="/" className="hover:text-[#3ca2fa] transition-colors">Home</a></li>
              <li><a href="/team" className="hover:text-[#3ca2fa] transition-colors">Team</a></li>
              <li><a href="/events" className="hover:text-[#3ca2fa] transition-colors">Events</a></li>
              <li><a href="/contact" className="hover:text-[#3ca2fa] transition-colors">Contact</a></li>
            </ul>
          </div>
          {/* Socials */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-xl font-semibold text-[#67c6fe] mb-6">Follow Us</h2>
            <div className="flex space-x-6 text-2xl mb-8">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-transform hover:scale-110">
                <LinkedinIcon size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition-transform hover:scale-110">
                <InstagramIcon size={24} />
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-transform hover:scale-110">
                <FaXTwitter size={24} />
              </a>
            </div>
            <img src="/nav_logo.png" alt="logo" className="h-12 w-auto brightness-110" />
          </div>
        </div>
      </div>
      <div className="relative w-full flex flex-col items-center justify-center pb-12 z-30 px-4">
        <div className="w-full h-24 sm:h-32 md:h-64">
          <TextHoverEffect text="DJSCE SIGAI" className="w-full h-full" />
        </div>       
        <div className="text-center text-gray-500 text-[10px] sm:text-xs md:text-sm pt-4 border-t border-white/5 w-full max-w-7xl mx-auto">
          © {new Date().getFullYear()} DJSCE SIGAI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;