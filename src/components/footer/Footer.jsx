import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-200 py-16">
      <div className="mx-auto px-3">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <a href="#" className="flex items-center text-3xl font-bold">
              Toy<span className="text-primary">Battle</span>Zone
            </a>
            <p className="mt-4">A place where imagination comes to life</p>
          </div>

          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">Contact Us</h3>
            <p>123 Main Street, City</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@toybattle.com</p>
          </div>

          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">Follow Us</h3>
            <div className="flex">
              <a href="#" className="mr-2">
                <FaFacebookSquare className="text-4xl md:text-5xl" />
              </a>
              <a href="#" className="mr-2">
                <FaTwitterSquare className="text-4xl md:text-5xl" />
              </a>
              <a href="#" className="mr-2">
                <FaInstagramSquare className="text-4xl md:text-5xl" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p className="text-lg md:text-xl">
            &copy; {new Date().getFullYear()} ToyBattle. All rights reserved.
          </p>
          <p>Terms of Service | Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
