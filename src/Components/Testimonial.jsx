

import React from "react";

const Testimonial = () => {
  return (
    <section className="text-center py-16 px-6 bg-gradient-to-r from-orange-500 to-pink-500">
      {/* Testimonial Content */}
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
          Kaleb Lechtenberg
        </h3>

        <p className="mt-6 text-base sm:text-lg md:text-xl leading-relaxed text-white font-medium">
          “Working with this freelancer has been great. His attention to detail
          is unparalleled and he finished all work ahead of schedule. I will
          gladly send more work his way and do not hesitate to recommend him to
          you for your project as well.”
        </p>
      </div>
    </section>
  );
};

export default Testimonial;

