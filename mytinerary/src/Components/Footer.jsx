import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-blue-950 via-black to-blue-950 text-white pt-8 pb-3">
            <div className="container mx-auto flex justify-between items-center flex-wrap">

                <div className="w-full md:w-1/3 text-center md:text-left mb-6 md:mb-0">
                    <h4 className="text-xl font-bold">My Tineraries</h4>
                    <p className="text-sm mt-2">
                        Explore the world through detailed and customized itineraries.
                    </p>
                    <p className="text-sm mt-2">Address: 123rd Street, Madrid, Spain</p>
                    <p className="text-sm">Email: contacto@mytineraries.com</p>
                </div>

                <div className="w-full md:w-1/3 text-center mb-6 md:mb-0">
                    <h4 className="text-xl font-bold">Navegation</h4>
                    <ul className="mt-4 space-y-2">
                        <li>
                            <NavLink to="/" className="text-gray-400 hover:text-white transition-colors duration-300">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="#" className="text-gray-400 hover:text-white transition-colors duration-300">About Us</NavLink>
                        </li>
                        <li>
                            <NavLink to="#" className="text-gray-400 hover:text-white transition-colors duration-300">Itineraries</NavLink>
                        </li>
                        <li>
                            <NavLink to="#" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</NavLink>
                        </li>
                    </ul>
                </div>

                <div className="w-full md:w-1/3 text-center md:text-right">
                    <h4 className="text-xl font-bold">Follow us</h4>
                    <div className="mt-4 flex justify-center md:justify-end space-x-4">
                        <a href="https://facebook.com" className="text-gray-400 hover:text-white transition-colors duration-300">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M22.675 0H1.325C0.593 0 0 0.593 0 1.325v21.351C0 23.407 0.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.661-4.788 1.325 0 2.464 0.099 2.797 0.144v3.243H18.11c-1.781 0-2.126 0.847-2.126 2.09v2.738h4.233l-0.552 3.622h-3.681V24h7.224C23.407 24 24 23.407 24 22.675V1.325C24 0.593 23.407 0 22.675 0z" />
                            </svg>
                        </a>
                        <a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors duration-300">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775a4.932 4.932 0 0 0 2.165-2.723 9.864 9.864 0 0 1-3.127 1.195 4.924 4.924 0 0 0-8.388 4.482A13.978 13.978 0 0 1 1.671 3.149a4.921 4.921 0 0 0 1.524 6.573 4.897 4.897 0 0 1-2.23-.616v.061a4.924 4.924 0 0 0 3.946 4.827 4.935 4.935 0 0 1-2.224.084 4.928 4.928 0 0 0 4.6 3.417A9.876 9.876 0 0 1 0 21.54a13.951 13.951 0 0 0 7.548 2.213c9.054 0 14.007-7.497 14.007-13.986 0-.213-.005-.425-.014-.637A10.025 10.025 0 0 0 24 4.557z" />
                            </svg>
                        </a>
                        <a href="https://instagram.com" className="text-gray-400 hover:text-white transition-colors duration-300">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.057 1.97.24 2.432.412a4.919 4.919 0 0 1 1.75 1.141 4.919 4.919 0 0 1 1.141 1.75c.172.462.355 1.262.412 2.432.059 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.057 1.17-.24 1.97-.412 2.432a4.919 4.919 0 0 1-1.141 1.75 4.919 4.919 0 0 1-1.75 1.141c-.462.172-1.262.355-2.432.412-1.266.059-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.057-1.97-.24-2.432-.412a4.919 4.919 0 0 1-1.75-1.141 4.919 4.919 0 0 1-1.141-1.75c-.172-.462-.355-1.262-.412-2.432-.059-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.057-1.17.24-1.97.412-2.432a4.919 4.919 0 0 1 1.141-1.75 4.919 4.919 0 0 1 1.75-1.141c.462-.172 1.262-.355 2.432-.412 1.266-.059 1.646-.07 4.85-.07zm0-2.163C8.756 0 8.342.012 7.052.07 5.708.129 4.737.263 3.968.507a6.923 6.923 0 0 0-2.674 1.633A6.923 6.923 0 0 0 .507 3.968C.263 4.737.129 5.708.07 7.052.012 8.342 0 8.756 0 12s.012 3.584.07 4.85c.059 1.266.193 2.237.437 3.006a6.923 6.923 0 0 0 1.633 2.674 6.923 6.923 0 0 0 2.674 1.633c.769.244 1.74.378 3.006.437C8.342 23.988 8.756 24 12 24s3.584-.012 4.85-.07c1.266-.059 2.237-.193 3.006-.437a6.923 6.923 0 0 0 2.674-1.633 6.923 6.923 0 0 0 1.633-2.674c.244-.769.378-1.74.437-3.006.059-1.266.07-1.646.07-4.85s-.012-3.584-.07-4.85c-.059-1.266-.193-2.237-.437-3.006a6.923 6.923 0 0 0-1.633-2.674A6.923 6.923 0 0 0 18.032.507C17.263.263 16.292.129 15.052.07 13.756.012 13.342 0 12 0zM12 5.839a6.161 6.161 0 1 0 0 12.322 6.161 6.161 0 0 0 0-12.322zm0 10.329a4.168 4.168 0 1 1 0-8.337 4.168 4.168 0 0 1 0 8.337zm6.125-10.64a1.44 1.44 0 1 1 0-2.88 1.44 1.44 0 0 1 0 2.88z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className="text-center mt-8">
                <p className="text-sm">© {new Date().getFullYear()} My Tineraries. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}