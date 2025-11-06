import { useEffect, useRef } from 'react';

function App() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observerRef.current?.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[500px] sm:h-[600px] md:h-[600px] flex items-center overflow-hidden bg-[#1A323C]">
        <img
          src="https://regainoptimalhealth.com/wp-content/uploads/2025/10/1-Cover-Image-Optimal-Health-Solutions-Comprehensive-Lab-Review-scaled.avif"
          alt="Comprehensive Lab Review"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
        />
        <div className="container mx-auto px-5 relative z-10">
          <div className="max-w-2xl text-white fade-in opacity-0 translate-y-8 transition-all duration-700">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-5 leading-tight">
              Comprehensive Lab Review
            </h1>
            <p className="text-lg sm:text-xl mb-3 sm:mb-4 text-gray-100">
              Gain a Clear Picture of Your Health
            </p>
            <p className="text-base sm:text-lg mb-6 sm:mb-8 text-gray-200">
              Your health is more than just how you feel day to day. At Optimal Health Solutions, our Comprehensive Lab Review is designed to give you an in-depth understanding of your body's inner workings so you can make informed decisions about your wellness.
            </p>
            <a
              href="https://regainoptimalhealth.com/contact-us/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 sm:px-8 py-3 sm:py-3.5 bg-[#f34c5b] text-white font-semibold rounded-md transition-all duration-300 border-2 border-[#f34c5b] hover:bg-white hover:text-[#f34c5b] text-center"
            >
              Schedule Your Review
            </a>
          </div>
        </div>
      </section>

      {/* What Is Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-[#1A323C] fade-in opacity-0 translate-y-8 transition-all duration-700">
            What is a Comprehensive Lab Review?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="fade-in opacity-0 translate-y-8 transition-all duration-700">
              <p className="text-base sm:text-lg text-gray-600 mb-8">
                A Comprehensive Lab Review is a detailed evaluation of your body's most important health indicators. This isn't just a routine blood test. It's a full-spectrum analysis that goes beyond the surface to uncover the underlying factors that may be affecting your energy, weight, mood, and overall well-being.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div className="bg-red-50 border-l-4 border-[#f34c5b] p-4 sm:p-5 rounded">
                  <h4 className="text-base sm:text-lg font-bold mb-2 text-[#1A323C]">Cholesterol Levels</h4>
                  <p className="text-xs sm:text-sm text-gray-600">Assess heart and vascular health with detailed lipid profiles</p>
                </div>
                <div className="bg-red-50 border-l-4 border-[#f34c5b] p-4 sm:p-5 rounded">
                  <h4 className="text-base sm:text-lg font-bold mb-2 text-[#1A323C]">Blood Sugar</h4>
                  <p className="text-xs sm:text-sm text-gray-600">Identify early signs of insulin resistance or diabetes risk</p>
                </div>
                <div className="bg-red-50 border-l-4 border-[#f34c5b] p-4 sm:p-5 rounded">
                  <h4 className="text-base sm:text-lg font-bold mb-2 text-[#1A323C]">Hormone Balance</h4>
                  <p className="text-xs sm:text-sm text-gray-600">Evaluate thyroid, adrenal, and reproductive health markers</p>
                </div>
                <div className="bg-red-50 border-l-4 border-[#f34c5b] p-4 sm:p-5 rounded">
                  <h4 className="text-base sm:text-lg font-bold mb-2 text-[#1A323C]">Nutritional Status</h4>
                  <p className="text-xs sm:text-sm text-gray-600">Discover vitamin and mineral deficiencies affecting your vitality</p>
                </div>
              </div>
            </div>
            <div className="fade-in opacity-0 translate-y-8 transition-all duration-700">
              <img
                src="https://regainoptimalhealth.com/wp-content/uploads/2025/10/2-Laboratory-Image-Optimal-Health-Solutions-Comprehensive-Lab-Review.avif"
                alt="Laboratory Testing"
                className="w-full rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-16 sm:py-20 bg-gray-100">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-[#1A323C] fade-in opacity-0 translate-y-8 transition-all duration-700">
            Why Should You Get a Comprehensive Lab Review?
          </h2>
          <p className="text-center text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mb-12 fade-in opacity-0 translate-y-8 transition-all duration-700">
            Most health issues develop silently before any symptoms appear. By catching potential problems early, you gain the power to transform your health proactively rather than reactively.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg border-l-4 border-[#f34c5b] fade-in opacity-0 translate-y-8 transition-all duration-700">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-[#1A323C]">Prevent Future Complications</h3>
              <p className="text-sm sm:text-base text-gray-600">Identify risk factors before they develop into serious health conditions</p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg border-l-4 border-[#f34c5b] fade-in opacity-0 translate-y-8 transition-all duration-700">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-[#1A323C]">Address Root Causes</h3>
              <p className="text-sm sm:text-base text-gray-600">Understand the underlying reasons behind fatigue, weight challenges, or mood changes</p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg border-l-4 border-[#f34c5b] fade-in opacity-0 translate-y-8 transition-all duration-700">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-[#1A323C]">Personalize Your Plan</h3>
              <p className="text-sm sm:text-base text-gray-600">Create targeted nutrition and wellness strategies based on your unique data</p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg border-l-4 border-[#f34c5b] fade-in opacity-0 translate-y-8 transition-all duration-700">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-[#1A323C]">Make Informed Decisions</h3>
              <p className="text-sm sm:text-base text-gray-600">Partner with experienced professionals to guide your personalized health journey</p>
            </div>
          </div>
          <div className="text-center fade-in opacity-0 translate-y-8 transition-all duration-700">
            <p className="text-base sm:text-lg">
              Think of it as your <span className="font-bold text-[#f34c5b]">roadmap to optimal health</span>, giving you clarity, confidence, and control over your wellness journey.
            </p>
          </div>
        </div>
      </section>

      {/* What You'll Receive Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-[#1A323C] fade-in opacity-0 translate-y-8 transition-all duration-700">
            What You'll Receive
          </h2>
          <p className="text-center text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mb-12 sm:mb-16 fade-in opacity-0 translate-y-8 transition-all duration-700">
            When you schedule your Comprehensive Lab Review, you'll receive a complete wellness assessment designed to empower your health journey.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center fade-in opacity-0 translate-y-8 transition-all duration-700">
              <img
                src="https://regainoptimalhealth.com/wp-content/uploads/2025/10/3-complete-lab-test-panel-Optimal-Health-Solutions-Comprehensive-Lab-Review.avif"
                alt="Complete Lab Test Panel"
                className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-lg mb-4 sm:mb-5"
              />
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-[#1A323C]">Complete Lab Test Panel</h3>
              <p className="text-xs sm:text-sm text-gray-600">Comprehensive testing tailored to your specific health needs and goals</p>
            </div>
            <div className="text-center fade-in opacity-0 translate-y-8 transition-all duration-700">
              <img
                src="https://regainoptimalhealth.com/wp-content/uploads/2025/10/4-Personalized-Report-Optimal-Health-Solutions-Comprehensive-Lab-Review.avif"
                alt="Personalized Report"
                className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-lg mb-4 sm:mb-5"
              />
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-[#1A323C]">Personalized Report</h3>
              <p className="text-xs sm:text-sm text-gray-600">Detailed analysis that breaks down your results in clear, understandable language</p>
            </div>
            <div className="text-center fade-in opacity-0 translate-y-8 transition-all duration-700">
              <img
                src="https://regainoptimalhealth.com/wp-content/uploads/2025/10/5-Expert-Recommendation-Optimal-Health-Solutions-Comprehensive-Lab-Review.avif"
                alt="Expert Recommendations"
                className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-lg mb-4 sm:mb-5"
              />
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-[#1A323C]">Expert Recommendations</h3>
              <p className="text-xs sm:text-sm text-gray-600">Professional guidance on lifestyle changes, supplements, and supportive therapies</p>
            </div>
            <div className="text-center fade-in opacity-0 translate-y-8 transition-all duration-700">
              <img
                src="https://regainoptimalhealth.com/wp-content/uploads/2025/10/6-Follow-up-consultation-Optimal-Health-Solutions-Comprehensive-Lab-Review.avif"
                alt="Follow-up Consultation"
                className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-lg mb-4 sm:mb-5"
              />
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-[#1A323C]">Follow-up Consultation</h3>
              <p className="text-xs sm:text-sm text-gray-600">Ongoing support to ensure you understand your results and feel confident in your next steps</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20 bg-[#1A323C] text-white">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 fade-in opacity-0 translate-y-8 transition-all duration-700">
            Pair Your Lab Review with Other Services
          </h2>
          <p className="text-center text-base sm:text-lg text-gray-300 max-w-3xl mx-auto mb-12 sm:mb-16 fade-in opacity-0 translate-y-8 transition-all duration-700">
            Your <span className="font-semibold">Comprehensive Lab Review</span> is the foundation of understanding your health—but the journey doesn't stop there. For even better results, combine it with our specialized wellness services.
          </p>
          <div className="grid grid-cols-1 gap-4 sm:gap-6 mb-10 max-w-4xl mx-auto">
            <a
              href="https://regainoptimalhealth.com/weight-loss-therapy-frankfort-il/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col sm:flex-row items-start p-4 sm:p-6 bg-white/5 rounded-lg transition-all duration-300 hover:bg-white/10 hover:translate-x-2 fade-in opacity-0 translate-y-8 cursor-pointer"
            >
              <div className="w-12 sm:w-14 h-12 sm:h-14 flex items-center justify-center mr-0 sm:mr-5 mb-4 sm:mb-0 flex-shrink-0">
                <svg className="w-10 sm:w-12 h-10 sm:h-12 text-[#f34c5b]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <path d="M3 9h18"/>
                  <path d="M9 21V9"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Weight Loss Therapy</h3>
                <p className="text-gray-300 text-xs sm:text-sm">Target stubborn weight with personalized medical solutions and metabolic optimization</p>
              </div>
            </a>
            <a
              href="https://regainoptimalhealth.com/iv-hydration-frankfort-il/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col sm:flex-row items-start p-4 sm:p-6 bg-white/5 rounded-lg transition-all duration-300 hover:bg-white/10 hover:translate-x-2 fade-in opacity-0 translate-y-8 cursor-pointer"
            >
              <div className="w-12 sm:w-14 h-12 sm:h-14 flex items-center justify-center mr-0 sm:mr-5 mb-4 sm:mb-0 flex-shrink-0">
                <svg className="w-10 sm:w-12 h-10 sm:h-12 text-[#f34c5b]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M12 2v4"/>
                  <path d="M12 18v4"/>
                  <path d="M4.93 4.93l2.83 2.83"/>
                  <path d="M16.24 16.24l2.83 2.83"/>
                  <path d="M2 12h4"/>
                  <path d="M18 12h4"/>
                  <path d="M4.93 19.07l2.83-2.83"/>
                  <path d="M16.24 7.76l2.83-2.83"/>
                  <rect x="8" y="8" width="8" height="8" rx="1"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">IV Hydration Therapy</h3>
                <p className="text-gray-300 text-xs sm:text-sm">Replenish nutrients and restore energy quickly with customized vitamin infusions</p>
              </div>
            </a>
            <a
              href="https://regainoptimalhealth.com/red-light-therapy-frankfort-il/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col sm:flex-row items-start p-4 sm:p-6 bg-white/5 rounded-lg transition-all duration-300 hover:bg-white/10 hover:translate-x-2 fade-in opacity-0 translate-y-8 cursor-pointer"
            >
              <div className="w-12 sm:w-14 h-12 sm:h-14 flex items-center justify-center mr-0 sm:mr-5 mb-4 sm:mb-0 flex-shrink-0">
                <svg className="w-10 sm:w-12 h-10 sm:h-12 text-[#f34c5b]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M9 3L5 7l4 4"/>
                  <path d="M5 7h11a5 5 0 0 1 0 10H9"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Red Light Therapy</h3>
                <p className="text-gray-300 text-xs sm:text-sm">Support cellular repair, reduce inflammation, and boost recovery naturally</p>
              </div>
            </a>
            <a
              href="https://regainoptimalhealth.com/hair-tissue-mineral-analysis-htma/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col sm:flex-row items-start p-4 sm:p-6 bg-white/5 rounded-lg transition-all duration-300 hover:bg-white/10 hover:translate-x-2 fade-in opacity-0 translate-y-8 cursor-pointer"
            >
              <div className="w-12 sm:w-14 h-12 sm:h-14 flex items-center justify-center mr-0 sm:mr-5 mb-4 sm:mb-0 flex-shrink-0">
                <svg className="w-10 sm:w-12 h-10 sm:h-12 text-[#f34c5b]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M3 12c0-4.97 4.03-9 9-9s9 4.03 9 9"/>
                  <path d="M3 12v6a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6"/>
                  <path d="M8 15v2"/>
                  <path d="M12 12v5"/>
                  <path d="M16 15v2"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Hair Tissue Mineral Analysis</h3>
                <p className="text-gray-300 text-xs sm:text-sm">Gain deeper insights into mineral imbalances and toxic element exposure</p>
              </div>
            </a>
            <a
              href="https://regainoptimalhealth.com/bio-identical-hormone-replacement-therapy-frankfort-il/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col sm:flex-row items-start p-4 sm:p-6 bg-white/5 rounded-lg transition-all duration-300 hover:bg-white/10 hover:translate-x-2 fade-in opacity-0 translate-y-8 cursor-pointer"
            >
              <div className="w-12 sm:w-14 h-12 sm:h-14 flex items-center justify-center mr-0 sm:mr-5 mb-4 sm:mb-0 flex-shrink-0">
                <svg className="w-10 sm:w-12 h-10 sm:h-12 text-[#f34c5b]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M12 2c-2.5 0-4.5 2-4.5 4.5 0 1.5.7 2.8 1.8 3.7C7.6 11.3 6 13.4 6 16v6h12v-6c0-2.6-1.6-4.7-3.3-5.8 1.1-.9 1.8-2.2 1.8-3.7C16.5 4 14.5 2 12 2z"/>
                  <circle cx="12" cy="6.5" r="2"/>
                  <path d="M9 12c0 1.7 1.3 3 3 3s3-1.3 3-3"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Bio-identical Hormone Therapy (BHRT)</h3>
                <p className="text-gray-300 text-xs sm:text-sm">Restore hormone balance for improved energy, mood, and overall vitality</p>
              </div>
            </a>
          </div>
          <p className="text-center text-base sm:text-lg fade-in opacity-0 translate-y-8 transition-all duration-700">
            Together, these services create a <span className="font-bold text-[#f34c5b]">comprehensive wellness plan</span> tailored to your body's unique needs and health goals.
          </p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 sm:py-20 bg-gray-100">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-16 items-center">
            <div className="fade-in opacity-0 translate-y-8 transition-all duration-700 order-2 md:order-1">
              <img
                src="https://regainoptimalhealth.com/wp-content/uploads/2025/10/7-Booking-an-appointment-Optimal-Health-Solutions-Comprehensive-Lab-Review.avif"
                alt="Book Your Appointment"
                className="w-full rounded-xl shadow-2xl"
              />
            </div>
            <div className="fade-in opacity-0 translate-y-8 transition-all duration-700 order-1 md:order-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-[#1A323C] leading-tight">
                Take Control of Your Health Today
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-10">
                Don't wait until symptoms appear. With our Comprehensive Lab Review, you'll get the clarity you need to feel your best, live longer, and feel stronger. Take the first step toward understanding your body and optimizing your wellness.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-8 sm:mb-10">
                <div className="bg-white p-4 sm:p-5 rounded-lg shadow-md">
                  <h4 className="text-base sm:text-lg font-bold mb-2 text-[#1A323C]">Schedule Today</h4>
                  <p className="text-xs sm:text-sm text-gray-600">Book your comprehensive lab, and begin your journey to optimal health</p>
                </div>
                <div className="bg-white p-4 sm:p-5 rounded-lg shadow-md">
                  <h4 className="text-base sm:text-lg font-bold mb-2 text-[#1A323C]">Expert Guidance</h4>
                  <p className="text-xs sm:text-sm text-gray-600">Receive professional support every step of the way</p>
                </div>
                <div className="bg-white p-4 sm:p-5 rounded-lg shadow-md sm:col-span-2">
                  <h4 className="text-base sm:text-lg font-bold mb-2 text-[#1A323C]">Personalized Results</h4>
                  <p className="text-xs sm:text-sm text-gray-600">Get insights tailored specifically to your unique health profile</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <a
                  href="https://regainoptimalhealth.com/contact-us/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 sm:px-8 py-3 sm:py-3.5 bg-[#f34c5b] text-white font-semibold rounded-md transition-all duration-300 border-2 border-[#f34c5b] hover:bg-white hover:text-[#f34c5b] text-center"
                >
                  Schedule Your Review
                </a>
                <a
                  href="https://regainoptimalhealth.com/contact-us/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 sm:px-8 py-3 sm:py-3.5 bg-[#f34c5b] text-white font-semibold rounded-md transition-all duration-300 border-2 border-[#f34c5b] hover:bg-white hover:text-[#f34c5b] text-center"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
