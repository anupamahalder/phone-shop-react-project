import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-gray-800 h-40">
            <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between text-white px-4">
                <p className="block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                Phone Shop © 2023</p>
                <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                    <Link to="/"><p className="block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-pink-500 focus:text-pink-500">Home</p></Link>
                    
                    <Link to="/favorites"><p className="block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-pink-500 focus:text-pink-500">Favorites</p></Link>
                    
                    <Link to="/login"><p className="block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-pink-500 focus:text-pink-500">Contact Us</p></Link>
                </ul>
            </footer>
        </div>
    );
};

export default Footer;