import bgImage from "../assets/rug1.png";
import RosePetals from "./RosePetals";


export default function Footer() {
  return (
    <footer
      className="bg-cover bg-center mt-16"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="
        bg-gradient-to-tr from-[crimson]/80 to-[black]/100 text-white
        backdrop-blur-lg
        border-t border-white/20
        text-white
      ">
        
        <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

          {/* Brand */}
          <div>
            <RosePetals/>
            <h2 className="text-2xl font-bold font-serif mb-3">
              Mohd Junaid
            </h2>
            <p className="text-white/80 font-mono text-sm">
              Always thinking about you and how to make you smile. My love for you is endless and my heart belongs to you forever💕.
            </p>
            <p className="text-white/80 font-mono text-sm">
              ~ This small present is For the Most Beautiful Soul I Know ❤️
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-white/80 flex gap-3">
             <li><div className="flex gap-2">
  {/* Call */}
  <a href="tel:+919398357622" className="hover:text-indigo-300 transition">
    <svg className="w-6 h-10" fill="currentColor" viewBox="0 0 24 24">
      <path d="M6.62 10.79a15.53 15.53 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V21c0 .55-.45 1-1 1C10.07 22 2 13.93 2 3c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
    </svg>
  </a>

</div></li>
              <li>{/* WhatsApp */}
<a
  href="https://wa.me/919398357622"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-indigo-300 transition"
>
  <svg
    className="w-6 h-10"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12.04 2C6.56 2 2.1 6.46 2.1 11.94c0 1.87.5 3.7 1.46 5.3L2 22l4.9-1.52a9.9 9.9 0 005.14 1.41c5.48 0 9.94-4.46 9.94-9.94S17.52 2 12.04 2zm0 17.9a7.9 7.9 0 01-4.03-1.1l-.29-.17-2.9.9.94-2.83-.19-.3a7.9 7.9 0 01-1.23-4.2c0-4.38 3.56-7.94 7.94-7.94s7.94 3.56 7.94 7.94-3.56 7.7-8.18 7.7zm4.35-5.95c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1-.37-1.9-1.17-.7-.63-1.17-1.41-1.31-1.65-.14-.24-.01-.37.1-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.79-.2-.48-.4-.41-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.1.15 1.52.09.46-.07 1.43-.58 1.63-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z"/>
  </svg>
</a></li>
              <li>{/* Instagram */}
<a
  href="https://instagram.com/al.junaid.official"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-indigo-300 transition"
>
  <svg
    className="w-6 h-10"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm0 2h8.5C18.22 4 20 5.78 20 7.75v8.5c0 1.97-1.78 3.75-3.75 3.75h-8.5C5.78 20 4 18.22 4 16.25v-8.5C4 5.78 5.78 4 7.75 4zm9.25 1.5a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z"/>
  </svg>
</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-3">Contact</h3>
            <div className="flex gap-3">
             {/* GitHub */}
            <a href="https://github.com/al-junaid-dev" target="_blank" className="hover:text-indigo-300 transition">
              <svg className="w-6 h-10 " fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.47 2 2 6.47 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48v-1.69c-2.78.61-3.37-1.34-3.37-1.34-.45-1.13-1.1-1.43-1.1-1.43-.9-.61.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.64.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.02-2.68-.1-.25-.44-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 012.5-.34c.85 0 1.7.12 2.5.34 1.9-1.29 2.75-1.02 2.75-1.02.54 1.38.2 2.4.1 2.65.64.7 1.02 1.59 1.02 2.68 0 3.84-2.35 4.68-4.58 4.93.36.31.68.92.68 1.86v2.76c0 .27.16.58.67.48A10 10 0 0022 12c0-5.53-4.47-10-10-10z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/junaidaldev" target="_blank" className="hover:text-indigo-300 transition">
              <svg className="w-6 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM3 8.98h3.96V21H3V8.98zM9.96 8.98h3.79v1.64h.05c.53-1 1.82-2.06 3.74-2.06 4 0 4.74 2.63 4.74 6.06V21h-3.96v-5.36c0-1.28-.02-2.93-1.79-2.93-1.8 0-2.08 1.4-2.08 2.84V21H9.96V8.98z"/>
              </svg>
            </a>

            {/* Email */}
            <a href="mailto:al.junai.dev@gmail.com" className="hover:text-indigo-300 transition">
              <svg className="w-6 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2 6c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6zm2 0l8 5 8-5H4zm16 12V8l-8 5-8-5v10h16z"/>
              </svg>
            </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="text-center border-t border-white/20 py-4 text-white/60 text-sm">
          © {new Date().getFullYear()}  All rights reserved   |  Made With Love, Just for You ❤️  |  By Mohd Juanid
        </div>
      </div>
    </footer>
  );
}