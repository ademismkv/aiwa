
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-4 gap-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 border border-white/30 flex items-center justify-center">
                <span className="text-white font-light text-2xl tracking-[0.2em]">A</span>
              </div>
              <span className="text-white heading-luxury text-2xl tracking-[0.15em]">
                AIWA RENT
              </span>
            </Link>
            <p className="text-luxury text-white/60 max-w-md leading-relaxed mb-8">
              Where automotive artistry meets Arabian luxury. Experience the world's most coveted masterpieces 
              in the city that defines impossible.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-white/40 hover:text-white transition-colors duration-500">
                <span className="sr-only">Instagram</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297L3.323 14.59c-.49-.49-.49-1.297 0-1.787s1.297-.49 1.787 0l1.297 1.297c.49.49 1.297.49 1.787 0l5.367-5.367c.49-.49 1.297-.49 1.787 0s.49 1.297 0 1.787l-5.367 5.367c-.49.49-1.297.49-1.787 0z"/>
                </svg>
              </a>
              <a href="#" className="text-white/40 hover:text-white transition-colors duration-500">
                <span className="sr-only">WhatsApp</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.687"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="heading-luxury text-white text-sm tracking-[0.15em] mb-8">NAVIGATION</h3>
            <ul className="space-y-4">
              {[
                { name: 'Fleet', path: '/fleet' },
                { name: 'About', path: '/about' },
                { name: 'Contact', path: '/contact' },
                { name: 'Booking', path: '/booking' }
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/60 hover:text-white text-sm transition-colors duration-500 font-light"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="heading-luxury text-white text-sm tracking-[0.15em] mb-8">CONCIERGE</h3>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-white/40 mb-1">24/7 HOTLINE</p>
                <a href="tel:+97141234567" className="text-white hover:text-white/80 transition-colors duration-500 font-light">
                  +971 4 123 4567
                </a>
              </div>
              <div>
                <p className="text-white/40 mb-1">WHATSAPP</p>
                <a href="https://wa.me/971501234567" className="text-white hover:text-white/80 transition-colors duration-500 font-light">
                  +971 50 123 4567
                </a>
              </div>
              <div>
                <p className="text-white/40 mb-1">EMAIL</p>
                <a href="mailto:concierge@aiwarent.ae" className="text-white hover:text-white/80 transition-colors duration-500 font-light">
                  concierge@aiwarent.ae
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/40 text-sm font-light">
            © 2024 Aiwa Rent. Crafted in Dubai for the world's most discerning.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-8">
            <a href="#" className="text-white/40 hover:text-white text-sm transition-colors duration-500 font-light">
              Privacy Policy
            </a>
            <a href="#" className="text-white/40 hover:text-white text-sm transition-colors duration-500 font-light">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
