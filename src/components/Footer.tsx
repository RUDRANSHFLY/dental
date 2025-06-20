import React from "react";

const Footer = () => {
  return (
    <footer className="w-full">
      {/* Top Section */}
      <div className="bg-[#004681] text-white px-6 py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
          {/* Contact Info */}
          <div className="md:w-1/3">
            <h4 className="text-xl font-semibold mb-4">Contact</h4>
            <p className="text-lg leading-relaxed">
              Michael I. Wollock, DMD  
              <br />
              32 Parking Plaza, Suite 604  
              <br />
              Ardmore, PA 19003  
              <br />
              Located in The Times Building in Suburban Square.  
              <br />
              Phone: (610) 649-0313
            </p>
          </div>

          {/* Mission Statement */}
          <div className="md:w-1/3">
            <h4 className="text-xl font-semibold mb-4">Our Passion</h4>
            <p className="text-lg leading-relaxed">
              Doing what we <strong>LOVE</strong> in the service of people who <strong>LOVE</strong> what we do.
            </p>
          </div>

          {/* Office Hours (Styled) */}
          <div className="md:w-1/3 text-right">
            <h4 className="text-xl font-semibold mb-4">Office Hours</h4>
            <ul className="space-y-1 text-lg leading-relaxed">
              <li>Mon: 7:00 AM - 5:00 PM</li>
              <li>Tue: 9:00 AM - 8:00 PM</li>
              <li>Wed: 8:00 AM - 5:00 PM</li>
              <li>Thu: 9:00 AM - 8:00 PM</li>
              <li>Fri: 7:00 AM - 3:00 PM</li>
              <li>Sat: Hours by Appointment</li>
            </ul>
            <p className="text-sm mt-2 italic text-right">*Hours are subject to change</p>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="bg-[#D4AF37] text-black text-base px-6 py-4">
        <div className="max-w-7xl mx-auto text-center">
          © 2025 Dentistry at Suburban Square &nbsp;|&nbsp; Privacy Policy &nbsp;|&nbsp; Terms and Conditions &nbsp;|&nbsp; Directions
        </div>
      </div>
    </footer>
  );
};

export default Footer;
