
import { FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi'; // Social Media Icons

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700">
      <div className="container mx-auto py-8 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-4">Better</h3>
          <p className="mb-4">
            Better is a family of companies serving all your homeownership needs.
          </p>
          <div className="space-y-2">
            <p><strong>Better Mortgage</strong></p>
            <p>We can’t wait to say “Welcome home.” Apply 100% online, with expert customer support.</p>
            <p><strong>Better Real Estate</strong></p>
            <p>Connect with a local Better Real Estate Partner Agent to find out all the ways you can save.</p>
            <p><strong>Better Cover</strong></p>
            <p>Shop, bundle, and save on insurance coverage for home, auto, life, and more.</p>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-4">Resources</h4>
          <ul className="space-y-2">
            <li>Home affordability calculator</li>
            <li>Mortgage calculator</li>
            <li>Free mortgage calculator</li>
            <li>Mortgage calculator with taxes</li>
            <li>Mortgage calculator with PMI</li>
            <li>Rent vs buy calculator</li>
            <li>HELOC payment calculator</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-4">Contact Us</h4>
          <p>Email: hello@better.com</p>
          <p>Phone: 415-523-8837</p>
          <ul className="space-y-2 mt-4">
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Glossary</a></li>
            <li><a href="#">NMLS Consumer Access</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-200 py-4">
        <div className="container mx-auto flex justify-center space-x-6">
          <a href="#" aria-label="Facebook"><FiFacebook className="text-gray-600 hover:text-green-600" /></a>
          <a href="#" aria-label="Instagram"><FiInstagram className="text-gray-600 hover:text-green-600" /></a>
          <a href="#" aria-label="LinkedIn"><FiLinkedin className="text-gray-600 hover:text-green-600" /></a>
        </div>
      </div>
      <div className="bg-gray-100 py-8 text-sm">
        <div className="container mx-auto text-center md:text-left">
          <p className="mb-4">
            © 2024 Better Home & Finance Holding Company and/or its affiliates. Better is a family of companies. Better Mortgage Corporation provides home loans; Better Real Estate, LLC and Better Real Estate California Inc License # 02164055 provides real estate services; Better Cover, LLC sells insurance products; and Better Settlement Services provides title insurance services. All rights reserved.
          </p>
          <p>
            <a href="#" className="text-green-500">NMLS Consumer Access</a> | 
            <a href="#" className="text-green-500"> Privacy Policy</a> | 
            <a href="#" className="text-green-500"> Terms of Use</a> | 
            <a href="#" className="text-green-500"> Affiliated Business</a> | 
            <a href="#" className="text-green-500"> Browser Disclaimer</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
