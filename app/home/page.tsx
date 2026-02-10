import React from "react";

const Homepage = () => {
  return (
    <div className="font-[Poppins]">

      
      <section className="relative">
        {/* GIRLS BACKGROUND IMAGE */}
        <img
          src="/images/girlsbackground.png"
          alt="background"
          className="absolute right-0 top-0 w-[766px] h-[872px] z-10"
        />

        {/* NAVBAR */}
        <nav className="container mx-auto px-4 py-8 flex justify-between items-center relative z-40 bg-transparent">

          <img
            src="/images/jadooo.png"
            alt="background"
            className=" w-[114.91px] h-[33.99px] z-10"
          />
          <div className="hidden md:flex space-x-4 items-center text-[17px] font-google  font-sans font-medium text-gray-900">
            <a href="#" className="hover:text-orange-500">Destinations</a>
            <a href="#" className="hover:text-orange-500">Hotels</a>
            <a href="#" className="hover:text-orange-500">Flights</a>
            <a href="#" className="hover:text-orange-500">Bookings</a>
            <a href="#" className="hover:text-orange-500">Login</a>

            <button className="border border-gray-900 rounded-md px-3 py-2 hover:bg-gray-900 hover:text-white transition">
              Sign up
            </button>

            {/* Language Dropdown */}
            <select className="bg-transparent outline-none cursor-pointer border border-gray-300 rounded-md px-2 py-1">
              <option>EN</option>
              <option>BN</option>
            </select>
          </div>
        </nav>

        {/* HERO CONTENT */}
        <div className="container mx-auto py-[90px] flex flex-col lg:flex-row items-center relative -mt-24 z-20">

          {/* LEFT */}
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 max-w-lg">
            <h4 className="text-[#DF6951] uppercase font-poppins font-bold tracking-widest text-[20px] mb-6">
              Best Destinations around the world
            </h4>


            <h1 className="font-[Volkhov] font-bold text-[87px] md:text-7xl leading-tight mb-8">
              Travel,{' '}
              <span className="relative inline-block">
                <span className="relative z-10">enjoy</span>
                <img
                  src="/images/enjoybk.png"
                  className="absolute left-0 bottom-[10px] -z-10 w-full h-[12px] md:h-[16px] object-cover"
                  alt=""
                />
              </span>{' '}
              <br />
              and live a new <br />
              and full life
            </h1>
            <p className="font-poppins font-medium text-[16px] text-[#5E6282]">
              Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
            </p>
            <div className="flex items-center gap-6 py-[40px]">
              {/* Yellow Button */}
              <button className="bg-[#f1a501] text-white px-7 py-4 rounded-xl shadow-[0_15px_30px_rgba(241,165,1,0.4)] hover:opacity-90">
                Find out more
              </button>

              {/* Play Button */}
              <button className="flex items-center gap-3 group">
                <div className="bg-[#df6951] p-4 rounded-full shadow-[0_15px_25px_rgba(223,105,81,0.4)] group-hover:scale-105 transition">
                  <div className="w-0 h-0 border-y-[6px] border-y-transparent border-l-[10px] border-l-white ml-1" />
                </div>
                <span className="text-gray-500 font-medium">Play Demo</span>
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 relative flex justify-center items-center">
            <img
              src="/images/plane.png"
              alt="plane"
              className="absolute top-[170px] left-[-70px] w-[137px] h-[95px] z-20"
            />
            <img
              src="/images/plane.png"
              alt="plane"
              className="absolute top-[300px] left-[410px] w-[137px] h-[95px] z-20"
            />

            {/* Girl */}
            <img
              src="/images/girl.png"
              alt="Traveler"
              className="w-[765px] h-[764px] relative top-[10px] z-30"
            />
          </div>
        </div>
      </section>


      <img
        src="/images/+img.png"
        alt="background"
        className="absolute right-0  w-[153px] h-[166px] z-10"
      />
      <section className="relative bg-white py-20 px-6 overflow-hidden font-sans">
        <div className="text-center mb-16">
          <span className="text-gray-500 uppercase tracking-widest font-[poppins] font-semibold text-[18px]">Category</span>
          <h2 className="font-[Volkhov] font-bold text-[50px] text-slate-900 mt-2">
            We Offer Best Services
          </h2>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-stretch">
          <div className="group relative p-10 text-center transition-all duration-300 hover:bg-white hover:shadow-2xl hover:rounded-[40px]">
            <div className="relative w-20 h-20 mx-auto mb-6">
              <div className="absolute top-0 right-0 w-12 h-12 bg-orange-50 rounded-tr-2xl rounded-bl-xl -z-10"></div>
              <img src="/images/weather.png" alt="Weather" className="w-[92px] h-[78px] object-contain mx-auto" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-3">Calculated Weather</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Built Wicket longer admire do barton vanity itself do in it.</p>
          </div>
          <div className="relative p-10 text-center bg-white shadow-2xl rounded-[40px] z-10">
            <div className="group absolute -bottom-4 -left-4 w-20 h-20 bg-[#DF6951] rounded-2xl rounded-tr-[40px] -z-10]"></div>
            <div className="">
              <img src="/images/best.png" alt="Flights" className="w-[166.87px] h-[153.33px] object-contain mx-auto" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-3">Best Flights</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Engrossed listening. Park gate sell they west hard for the.</p>
          </div>
          <div className="group relative p-10 text-center transition-all duration-300 hover:bg-white hover:shadow-2xl hover:rounded-[40px]">
            <div className="relative w-20 h-20 mx-auto mb-6">
              <div className="absolute top-0 right-0 w-12 h-12 bg-orange-50 rounded-tr-2xl rounded-bl-xl -z-10"></div>
              <img src="/images/local.png" alt="Events" className="w-[67px] h-[75px] object-contain mx-auto" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-3">Local Events</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Barton vanity itself do in it. Preferd to men it engrossed listening.</p>
          </div>
          <div className="group relative p-10 text-center transition-all duration-300 hover:bg-white hover:shadow-2xl hover:rounded-[40px]">
            <div className="relative w-20 h-20 mx-auto mb-6">
              <div className="absolute top-0 right-0 w-12 h-12 bg-orange-50 rounded-tr-2xl rounded-bl-xl -z-10"></div>
              <img src="/images/Customization.png" alt="Customization" className="w-[77px] h-[66px] object-contain mx-auto" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-3">Customization</h3>
            <p className="text-gray-500 text-sm leading-relaxed">We deliver outsourced aviation services for military customers</p>
          </div>
        </div>
      </section>



      <div className="bg-white py-16 px-4 font-sans relative overflow-hidden">
        {/* Background Curl Image */}
        <img
          src="/images/curl.png"
          alt="background"
          className="absolute right-14 bottom-20 w-[120px] h-auto z-0 opacity-50"
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <p className="text-gray-500 uppercase tracking-widest text-[18px] font-semibold">Top Selling</p>
            <h2 className="font-[Volkhov] font-bold text-[50px] text-slate-900 mt-2">Top Destinations</h2>
          </div>

        
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">

            {/* Card 1 */}
            <div className="group cursor-pointer w-[315px] bg-white rounded-[2.5rem] shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="h-80 w-full overflow-hidden">
                <img
                  src="/images/image.1.png"
                  alt="Rome"
                  className="w-[400px] h-[700px] object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center text-gray-600 font-bold">
                  <span>Rome, Italy</span>
                  <span>$5,42k</span>
                </div>
                <div className="flex items-center gap-3 text-gray-500 text-sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M21 3L3 10.53v.98l7.5 2.5 2.5 7.5h.98L21 3z" /></svg>
                  <span>10 Days Trip</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group cursor-pointer w-[315px] bg-white rounded-[2.5rem] shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="h-80 w-full overflow-hidden">
                <img
                  src="/images/image2.png"
                  alt="London"
                  className="w-[400px] h-[700px] object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center text-gray-600 font-bold">
                  <span>London, UK</span>
                  <span>$4.2k</span>
                </div>
                <div className="flex items-center gap-3 text-gray-500 text-sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M21 3L3 10.53v.98l7.5 2.5 2.5 7.5h.98L21 3z" /></svg>
                  <span>12 Days Trip</span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group cursor-pointer w-[315px] bg-white rounded-[2.5rem] shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="h-80 w-full overflow-hidden">
                <img
                  src="/images/image3.png"
                  alt="Europe"
                  className="w-[400px] h-[700px] object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center text-gray-600 font-bold">
                  <span>Full Europe</span>
                  <span>$15k</span>
                </div>
                <div className="flex items-center gap-3 text-gray-500 text-sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M21 3L3 10.53v.98l7.5 2.5 2.5 7.5h.98L21 3z" /></svg>
                  <span>28 Days Trip</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    
      <section className="py-20 px-[100px] max-w-7xl mx-auto font-sans bg-white overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          
          <div className="lg:w-1/2 space-y-8">
            <div>
              <p className="text-gray-500 font-semibold font-poopins text-[18px] mb-2">Easy and Fast</p>
              <h2 className="text-[50px] md:text-5xl lg:text-[50px] font-bold font-[Volkhov] leading-tight">
                Book Your Next Trip <br /> In 3 Easy Steps
              </h2>
            </div>

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex items-start gap-5">
                <div className="bg-[#F0BB1F] p-3 rounded-xl  shadow-lg">

                  <img
                    src="/icons/icon1.png"
                    alt="home icon"
                    className="w-6 h-6"
                  />

                </div>
                <div>
                  <h4 className="font-bold font-[poppins] text-[#5E6282] text-[16px]">Choose Destination</h4>
                  <p className="text-gray-500 max-w-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-5">
                <div className="bg-[#F15A2B] p-3 rounded-xl shadow-lg">

                  <img
                    src="/icons/icon2.png"
                    alt="home icon"
                    className="w-6 h-6"
                  />

                </div>
                <div>
                  <h4 className="font-bold font-[poppins] text-[#5E6282] text-[16px]">Make Payment</h4>
                  <p className="text-gray-500 max-w-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-5">
                <div className="bg-[#006380] p-3 rounded-xl shadow-lg">

                  <img
                    src="/icons/icon3.png"
                    alt="home icon"
                    className="w-6 h-6"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-[#5E6282] text-lg">Reach Airport on Selected Date</h4>
                  <p className="text-gray-500 max-w-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
                </div>
              </div>
            </div>
          </div>


          <div className="lg:w-1/2 relative lg:pr-12">
            
            <div className="bg-white rounded-[2.5rem] p-6 shadow-2xl max-w-sm mx-auto z-10 relative">
              <img src="/images/redgirl.png" alt="Greece" className="w-full h-48 object-cover rounded-3xl mb-6" />
              <h3 className="text-xl font-bold text-black mb-2">Trip To Greece</h3>
              <p className="text-gray-500 font-medium mb-4">14-29 June | by Robbin joseph</p>

              <div className="flex gap-4 mb-6">
                <span className="bg-gray-100 p-2 rounded-full text-gray-600 h-[36px] w-[36px] flex items-center justify-center">
                  <img
                    src="/icons/icon4.png"
                    alt="home icon"
                    className="w-[14px] h-[14px]"
                  />


                </span>

                <span className="bg-gray-100 p-2 rounded-full text-gray-600 h-[36px] w-[36px] flex items-center justify-center">
                  <img
                    src="/icons/icon5.png"
                    alt="home icon"
                    className="w-[14px] h-[14px]"
                  />
                </span>

                <span className="bg-gray-100 p-2 rounded-full text-gray-600 h-[36px] w-[36px] flex items-center justify-center">
                  <img
                    src="/icons/icon6.png"
                    alt="home icon"
                    className="w-[14px] h-[14px]"
                  />

                </span>
              </div>

              <div className="flex justify-between items-center text-gray-500 font-medium">
                <div className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.266665 15.4667H1.86667V6.66667C1.86667 6.5194 1.98607 6.4 2.13333 6.4H5.86667V0.266667C5.86667 0.1194 5.98607 0 6.13333 0H13.0667C13.2139 0 13.3333 0.1194 13.3333 0.266667V15.4667H15.7333C15.8806 15.4667 16 15.5861 16 15.7333C16 15.8806 15.8806 16 15.7333 16H0.266665C0.119399 16 0 15.8806 0 15.7333C0 15.5861 0.119399 15.4667 0.266665 15.4667ZM10.4 15.4667H11.4667V13.0667C11.4667 12.9194 11.3473 12.8 11.2 12.8H10.6667C10.5194 12.8 10.4 12.9194 10.4 13.0667V15.4667ZM9.33333 6.66667V15.4667H9.86667V13.0667C9.86667 12.6248 10.2248 12.2667 10.6667 12.2667H11.2C11.6418 12.2667 12 12.6248 12 13.0667V15.4667H12.8V0.533333H6.4V6.4H9.06667C9.21393 6.4 9.33333 6.5194 9.33333 6.66667ZM2.4 15.4667H8.8V6.93333H2.4V15.4667Z" fill="#84829A" />
                    <path d="M7.46658 3.7334H9.06659C9.21385 3.7334 9.33325 3.8528 9.33325 4.00007V5.60007C9.33325 5.74733 9.21385 5.86673 9.06659 5.86673H7.46658C7.31932 5.86673 7.19992 5.74733 7.19992 5.60007V4.00007C7.19992 3.8528 7.31932 3.7334 7.46658 3.7334ZM7.73325 5.3334H8.79992V4.26673H7.73325V5.3334Z" fill="#84829A" />
                    <path d="M7.46658 1.06665H9.06659C9.21385 1.06665 9.33325 1.18605 9.33325 1.33332V2.93332C9.33325 3.08058 9.21385 3.19998 9.06659 3.19998H7.46658C7.31932 3.19998 7.19992 3.08058 7.19992 2.93332V1.33332C7.19992 1.18605 7.31932 1.06665 7.46658 1.06665ZM7.73325 2.66665H8.79992V1.59998H7.73325V2.66665Z" fill="#84829A" />
                    <path d="M10.1333 3.7334H11.7333C11.8806 3.7334 12 3.8528 12 4.00007V5.60007C12 5.74733 11.8806 5.86673 11.7333 5.86673H10.1333C9.98607 5.86673 9.86667 5.74733 9.86667 5.60007V4.00007C9.86667 3.8528 9.98607 3.7334 10.1333 3.7334ZM10.4 5.3334H11.4667V4.26673H10.4V5.3334Z" fill="#84829A" />
                    <path d="M10.1333 1.06665H11.7333C11.8806 1.06665 12 1.18605 12 1.33332V2.93332C12 3.08058 11.8806 3.19998 11.7333 3.19998H10.1333C9.98607 3.19998 9.86667 3.08058 9.86667 2.93332V1.33332C9.86667 1.18605 9.98607 1.06665 10.1333 1.06665ZM10.4 2.66665H11.4667V1.59998H10.4V2.66665Z" fill="#84829A" />
                    <path d="M10.1333 6.3999H11.7333C11.8806 6.3999 12 6.5193 12 6.66657V8.26657C12 8.41384 11.8806 8.53324 11.7333 8.53324H10.1333C9.98607 8.53324 9.86667 8.41384 9.86667 8.26657V6.66657C9.86667 6.5193 9.98607 6.3999 10.1333 6.3999ZM10.4 7.9999H11.4667V6.93324H10.4V7.9999Z" fill="#84829A" />
                    <path d="M10.1333 9.06665H11.7333C11.8806 9.06665 12 9.18605 12 9.33332V10.9333C12 11.0806 11.8806 11.2 11.7333 11.2H10.1333C9.98607 11.2 9.86667 11.0806 9.86667 10.9333V9.33332C9.86667 9.18605 9.98607 9.06665 10.1333 9.06665ZM10.4 10.6667H11.4667V9.59998H10.4V10.6667Z" fill="#84829A" />
                    <path d="M5.06659 12.2666H3.46659C3.31932 12.2666 3.19992 12.1472 3.19992 12V10.4C3.19992 10.2527 3.31932 10.1333 3.46659 10.1333H5.06659C5.21385 10.1333 5.33325 10.2527 5.33325 10.4V12C5.33325 12.1472 5.21385 12.2666 5.06659 12.2666ZM4.79992 10.6666H3.73325V11.7333H4.79992V10.6666Z" fill="#84829A" />
                    <path d="M5.06659 9.59989H3.46659C3.31932 9.59989 3.19992 9.48049 3.19992 9.33322V7.73322C3.19992 7.58595 3.31932 7.46655 3.46659 7.46655H5.06659C5.21385 7.46655 5.33325 7.58595 5.33325 7.73322V9.33322C5.33325 9.48049 5.21385 9.59989 5.06659 9.59989ZM4.79992 7.99989H3.73325V9.06655H4.79992V7.99989Z" fill="#84829A" />
                    <path d="M5.06659 14.9334H3.46659C3.31932 14.9334 3.19992 14.814 3.19992 14.6667V13.0667C3.19992 12.9194 3.31932 12.8 3.46659 12.8H5.06659C5.21385 12.8 5.33325 12.9194 5.33325 13.0667V14.6667C5.33325 14.814 5.21385 14.9334 5.06659 14.9334ZM4.79992 13.3334H3.73325V14.4H4.79992V13.3334Z" fill="#84829A" />
                    <path d="M7.73333 12.2666H6.13333C5.98607 12.2666 5.86667 12.1472 5.86667 12V10.4C5.86667 10.2527 5.98607 10.1333 6.13333 10.1333H7.73333C7.8806 10.1333 8 10.2527 8 10.4V12C8 12.1472 7.8806 12.2666 7.73333 12.2666ZM7.46667 10.6666H6.4V11.7333H7.46667V10.6666Z" fill="#84829A" />
                    <path d="M7.73333 9.59989H6.13333C5.98607 9.59989 5.86667 9.48049 5.86667 9.33322V7.73322C5.86667 7.58595 5.98607 7.46655 6.13333 7.46655H7.73333C7.8806 7.46655 8 7.58595 8 7.73322V9.33322C8 9.48049 7.8806 9.59989 7.73333 9.59989ZM7.46667 7.99989H6.4V9.06655H7.46667V7.99989Z" fill="#84829A" />
                    <path d="M7.73333 14.9334H6.13333C5.98607 14.9334 5.86667 14.814 5.86667 14.6667V13.0667C5.86667 12.9194 5.98607 12.8 6.13333 12.8H7.73333C7.8806 12.8 8 12.9194 8 13.0667V14.6667C8 14.814 7.8806 14.9334 7.73333 14.9334ZM7.46667 13.3334H6.4V14.4H7.46667V13.3334Z" fill="#84829A" />
                  </svg>

                  <span>24 people going</span>
                </div>
                <button className="text-blue-600"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg></button>
              </div>
            </div>

<div className="absolute -right-2 md:-right-6 lg:-right-10 bottom-16 z-20">
<div
                className="w-[354px] h-[367px] bg-no-repeat bg-contain bg-center"
                style={{ backgroundImage: "url('/images/blueshadow.png')" }}
              >
              </div>
 <div className="bg-white p-4 rounded-2xl shadow-xl flex gap-4 w-60 md:w-64 border border-gray-50">
                <img
                  src="/images/image.o.png"
                  alt="Rome"
                  className="w-12 h-12 rounded-full object-cover"
                />

                <div className="flex-1">
                  <p className="text-xs text-gray-400 font-bold uppercase">Ongoing</p>

                  <h4 className="text-sm font-bold text-gray-800">
                    Trip to rome
                  </h4>

                  <p className="text-xs font-bold text-blue-700 mt-1 mb-2">
                    40% <span className="text-gray-800 font-medium">completed</span>
                  </p>

                  <div className="w-full bg-gray-100 h-1.5 rounded-full">
                    <div className="bg-blue-600 h-1.5 rounded-full w-[40%]"></div>
                  </div>
                </div>
              </div>
            </div>


          </div>

        </div>
      </section>



      <div className="bg-white min-h-screen p-8 flex flex-col items-center justify-center space-y-20 font-sans">

        <div className="flex flex-wrap justify-center items-center gap-12">
          {/* Single Box */}
          <div className="w-[170px] h-[170px] flex justify-center items-center bg-white rounded-xl shadow-gray-200  transition-all duration-300  hover:scale-110 hover:shadow-xl hover:grayscale-0 hover:opacity-100">
            <img
              src="/icons/axon.png"
              alt="Axon"
              className="w-[130px] h-[130px] object-cover rounded-full"
            />
          </div>

          <div className="w-[170px] h-[170px] flex justify-center items-center bg-white rounded-xl shadow-gray-200  transition-all duration-300 hover:scale-110 hover:shadow-xl hover:grayscale-0 hover:opacity-100">
            <img
              src="/icons/jetstar.png"
              alt="Jetstar"
              className="w-[130px] h-[130px] object-cover rounded-full"
            />
          </div>

          <div className="w-[170px] h-[170px] flex justify-center items-center bg-white rounded-xl shadow-gray-200 transition-all duration-300  hover:scale-110 hover:shadow-xl">
            <img
              src="/icons/expedia.png"
              alt="Expedia"
              className="w-[130px] h-[130px] object-cover rounded-full"
            />
          </div>

          <div className="w-[170px] h-[170px] flex justify-center items-center bg-white rounded-xl shadow-gray-200  transition-all duration-300 over:scale-110 hover:shadow-xl hover:grayscale-0 hover:opacity-100">
            <img
              src="/icons/qantas.png"
              alt="Qantas"
              className="w-[162px] h-[32px] object-cover rounded-full"
            />
          </div>



          <div className="w-[170px] h-[170px] flex justify-center items-center bg-white rounded-xl shadow-gray-200  transition-all duration-300 hover:scale-110 hover:shadow-xl hover:grayscale-0 hover:opacity-100">
            <img
              src="/icons/alitalia.png"
              alt="Alitalia"
              className="w-[94px] h-[21px]  rounded-full"
            />
          </div>
        </div>




        <img
          src="/images/+img.png"
          alt="background"
          className="absolute mt-[700px] right-0  w-[153px] h-[166px] z-10"
        />



        <div className="relative w-full max-w-5xl">
          <div className="absolute -top-6 -right-6 w-16 h-16 bg-[#747DEF] rounded-full flex items-center justify-center text-white shadow-lg z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 -rotate-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </div>
          <div className="bg-[#DFD7F9] rounded-tl-[100px] rounded-br-2xl rounded-tr-2xl rounded-bl-2xl p-16 text-center relative overflow-hidden">
            {/* Right top image */}
            <div
              className="absolute top-0 right-0 w-[264px] h-[351.52px]"
              style={{
                backgroundImage: "url('/images/circle.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>

            <div
              className="absolute bottom-0 left-0 w-[361px] h-[480px] opacity-10"
              style={{
                backgroundImage: "url('/images/circle2.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",

              }}
            ></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 border border-indigo-100 rounded-full opacity-50"></div>
            <div className="absolute -bottom-28 -left-28 w-80 h-80 border border-indigo-100 rounded-full opacity-50"></div>

            <h2 className="text-[33px] font-semibold font-[poppins] text-[#5E6282] max-w-2xl mx-auto leading-tight mb-10">
              Subscribe to get information, latest news and other interesting offers about Jadoo
            </h2>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>

                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full py-4 pl-12 pr-4 rounded-xl border-none focus:ring-2 bg-[white] focus:ring-indigo-300 outline-none text-[#39425D] font-[Montserrat] font-[regular] text-[14px] shadow-sm"
                />
              </div>

              <button className="bg-[#FF946D] hover:bg-[#FF7D68] text-white font-medium px-10 py-4 rounded-xl transition-all shadow-md">
                Subscribe
              </button>
            </div>
          </div>

          <div className="absolute -bottom-12 -right-12 grid grid-cols-4 gap-4 opacity-20 -z-10">

          </div>
        </div>
      </div>


      <footer className="bg-white py-[100px] px-[100px] font-sans">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

          <div className="lg:col-span-1">
            <h2 className=" font-[medium] font-[poppins] text-[44px] text-gray-900 mb-6">Jadoo.</h2>
            <p className="text-gray-500 font-[medium] font-[poppins] text-[13px]">
              Book your trip in minute, get full Control for much longer.
            </p>
          </div>

          <div>
            <h3 className="font-bold font-[poppins] text-[21px] mb-6">Company</h3>
            <ul className="space-y-3 text-gray-600 font-medium">
              <li><a href="#" className="hover:text-gray-900 ">About</a></li>
              <li><a href="#" className="hover:text-gray-900">Careers</a></li>
              <li><a href="#" className="hover:text-gray-900">Mobile</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold font-[poppins] text-[21px] mb-6">Contact</h3>
            <ul className="space-y-3 text-gray-600 font-medium">
              <li><a href="#" className="hover:text-gray-900">Help/FAQ</a></li>
              <li><a href="#" className="hover:text-gray-900">Press</a></li>
              <li><a href="#" className="hover:text-gray-900">Affilates</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold font-[poppins] text-[21px] mb-6">More</h3>
            <ul className="space-y-3 text-gray-600 font-medium">
              <li><a href="#" className="hover:text-gray-900">Airlinefees</a></li>
              <li><a href="#" className="hover:text-gray-900">Airline</a></li>
              <li><a href="#" className="hover:text-gray-900">Low fare tips</a></li>
            </ul>
          </div>

          <div className="flex flex-col items-start lg:items-center">
            <div className="flex space-x-4 mb-6">
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full shadow-md bg-white hover:bg-gray-50 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full shadow-lg bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white hover:opacity-90 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.2 4.353 2.612 6.777 6.973 6.977 1.28.057 1.688.072 4.947.072s3.667-.015 4.947-.072c4.351-.2 6.777-2.62 6.977-6.977.058-1.28.072-1.688.072-4.947s-.015-3.667-.072-4.947c-.2-4.353-2.612-6.777-6.977-6.977C15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full shadow-md bg-white hover:bg-gray-50 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path></svg>
              </a>
            </div>

            <p className="text-gray-600 font-medium mb-4 text-center lg:text-left">Discover our app</p>

            <div className="flex space-x-3">
              <a href="#" className="bg-black text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-gray-800 transition">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-6" />
              </a>
              <a href="#" className="bg-black text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-gray-800 transition">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center text-gray-500 text-sm font-medium">
          All rights reserved@jadoo.co
        </div>
      </footer>





    </div>

  );
};

export default Homepage;
