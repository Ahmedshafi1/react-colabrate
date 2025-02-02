import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-teal-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* About Us Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">ABOUT US</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">FAQ</a></li>
            <li><a href="#" className="hover:underline">About Le Wagon</a></li>
            <li><a href="#" className="hover:underline">Press</a></li>
            <li><a href="#" className="hover:underline">Join us</a></li>
            <li><a href="#" className="hover:underline">Contact us</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Legal notice</a></li>
          </ul>
        </div>

        {/* Resources Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">RESOURCES</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Next sessions</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Free workshops</a></li>
            <li><a href="#" className="hover:underline">Career Services</a></li>
            <li><a href="#" className="hover:underline">All careers in Web development</a></li>
            <li><a href="#" className="hover:underline">All careers in Data science & AI</a></li>
          </ul>
        </div>

        {/* Corporate Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">CORPORATE</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Le Wagon for Business</a></li>
            <li><a href="#" className="hover:underline">Hiring Partners</a></li>
            <li><a href="#" className="hover:underline">Schools</a></li>
          </ul>
        </div>

        {/* Free Courses Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">EXPLORE OUR FREE COURSES</h3>
          
          <p className="mb-4">Get access to over 200 hours of expertly curated content.</p>
          <button className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-500">
            Start now!
          </button>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-purple-700 mt-8 pt-4 text-center">
        <p>&copy; 2025 Le Wagon, Inc. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:opacity-75">LinkedIn</a>
          <a href="https://www.facebook.com/mohamed.cali.3154" className="hover:opacity-75">Facebook</a>
          <a href="#" className="hover:opacity-75">YouTube</a>
          <a href="#" className="hover:opacity-75">Meetup</a>
          <a href="https://github.com/Ahmedshafi1" className="hover:opacity-75">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;