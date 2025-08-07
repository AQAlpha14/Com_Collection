import {
  CallSVG,
  EmailSVG,
  FacebookSVG,
  InstagramSVG,
  MailSVG,
  PhoneSVG,
  PinPointSVG,
  TikTokSVG,
  WhatsappSVG,
  WPSVG,
} from "@/components/SVGIcons";

export const contactDetail = {
  Phone: "+97143243226",
  WappNo: "+971505082378",
  telNo: "+971505082290",
  Email: "hjkrentacar@gmail.com",
  Location: "Hor Al Anz, Abu Hail, Dubai, United Arab Emirates",
};

export const contactItems = [
  { icon: <MailSVG />, value: contactDetail.email },
  { icon: <CallSVG />, value: contactDetail.phone },
  { icon: <WPSVG />, value: contactDetail.whatApp },
  { icon: <PhoneSVG />, value: contactDetail.whatApp },
  { icon: <PinPointSVG />, value: contactDetail.location },
];
/**
 |--------------------------------------------------
 | Navbar Section
 |--------------------------------------------------
 */
export const navlinks = {
  en: [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about-us" },
    { name: "Rent A Car", link: "/product" },
    { name: "Brands", link: "/brands" },
    { name: "Contact Us", link: "/contact-us" },
  ],
  ar: [
    { name: "الرئيسية", link: "/" },
    { name: "من نحن", link: "/about-us" },
    { name: "إيجار سيارات", link: "/product" },
    { name: "العلامات التجارية", link: "/brands" },
    { name: "اتصل بنا", link: "/contact-us" },
  ],
};
/**
 |--------------------------------------------------
 | Footer Section
 |--------------------------------------------------
 */
export const socialLinks = [
  { link: "https://www.facebook.com/", icon: <FacebookSVG /> },
  { link: "https://www.instagram.com/", icon: <InstagramSVG /> },
  { link: "https://www.whatsapp.com/", icon: <WhatsappSVG /> },
  { link: "https://tiktok.com/", icon: <TikTokSVG /> },
];
export const footerSections = [
  {
    title: "About",
    links: [
      { name: "About Us", link: "/about-us" },
      { name: "Meet the Team", link: "/agents" },
      { name: "Careers", link: "/career" },
      { name: "Insights", link: "/contact-us" },
      { name: "Mortgage Calculator", link: "/mortgage-calculator" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "Property Management", link: "/rent" },
      { name: "Mortgage Services", link: "/rent" },
      { name: "Short-Term Rental Services", link: "/buy" },
      { name: "Property Valauation", link: "/buy" },
      { name: "Property Maintenance", link: "/buy" },
    ],
  },
  {
    title: "Buy",
    links: [
      { name: "Properties for sale", link: "/rent" },
      { name: "Villas for sale", link: "/rent" },
      { name: "Apartments for sale", link: "/buy" },
      { name: "Property Management", link: "/commercial" },
      { name: "Buy Commerical Property", link: "/commercial" },
    ],
  },
  {
    title: "Sell",
    links: [
      { name: "List Your Property", link: "/rent" },
      { name: "Book a Valuation", link: "/rent" },
      { name: "Sell Commerical Property", link: "/rent" },
    ],
  },
  {
    title: "Rent",
    links: [
      { name: "Properties For Rent", link: "/rent" },
      { name: "Short term rentals", link: "/rent" },
      { name: "Villas for rent", link: "/buy" },
      { name: "Apartments for rent", link: "/buy" },
      { name: "Buy Commerical Property", link: "/commercial" },
    ],
  },
  {
    title: "Visiting Hours",
    links: [
      { name: "The United States 1111 Oakfield Dr., Ste. 115E Brandon FL 33511", link: "/", icon: "/assets/icons/group1321316833.svg"  },
      { name: `${contactDetail.telNumber} | ${contactDetail.telNumber}`, link: `tel:${contactDetail.telNumber}`, icon: "/assets/icons/group1321316834.svg" },
      { name: "support@eliteproperties.com", link: contactDetail.email, icon: "/assets/icons/group1321316832.svg" },
     
    ],
  },
  
];

export const column1 = {
  title: "Quick Links",
  links: [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Rent A Car",
      link: "/product",
    },
    {
      name: "Brands",
      link: "/brands",
    },
    {
      name: "Car Lease",
      link: "/",
    },
    {
      name: "Blog",
      link: "/blog",
    },
  ],
};
export const column2 = {
  title: "Sports Car",
  links: [
    {
      name: "Porsche 911 Carrera",
      link: "/",
    },
    {
      name: "Bentley Continental",
      link: "/",
    },
    {
      name: "Lamborghini Huracan STO",
      link: "/",
    },
    {
      name: "Audi RS7",
      link: "/",
    },
  ],
};
export const column3 = {
  title: "SUV’s",
  links: [
    {
      name: "BMW X6",
      link: "/",
    },
    {
      name: "Chevrolet Traverse",
      link: "/",
    },
    {
      name: "GMC Yukon Denali",
      link: "/",
    },
    {
      name: "Audi RSQ3",
      link: "/",
    },
  ],
};
export const column4 = {
  title: "Luxury Cars",
  links: [
    {
      name: "Lamborghini Huracan Evo Spyder",
      link: "/",
    },
    {
      name: "Rolls Royce Ghost",
      link: "/",
    },
    {
      name: "Chevrolet Corvette",
      link: "/",
    },
    {
      name: "BMW 840i Cabrio",
      link: "/",
    },
  ],
};
export const column5 = {
  title: "Inquiries & Support",
  links: [
    {
      icon: <CallSVG />,
      name: "+971505082290",
      link: "/",
    },
    {
      icon: <WPSVG />,
      name: "+971505082378",
      link: "/",
    },
    {
      icon: <PhoneSVG />,
      name: "+97143243226",
      link: "/",
    },
    {
      icon: <PinPointSVG />,
      name: "Hor Al Anz, Abu Hail, Dubai, United Arab Emirates",
      link: "/",
    },
    {
      icon: <EmailSVG />,
      name: contactDetail.email,
      link: "/",
    },
  ],
};
/**
|--------------------------------------------------
| Section Data
|--------------------------------------------------
*/
export const assetsDataHome1 = {
  topTitle: "Experience Luxury Like Never Before",
  heading: "Drive the Car of Your Dreams",
  bottomTitle: "Unmatched Elegance and Performance",
  paragraph: [
    "We provide access to the most luxurious and high-performance vehicles in the world.",
    "Perfect for weddings, VIP transport, photoshoots, or simply treating yourself.",
  ],
  listTitle: "What We Offer",
  list: [
    "Daily, Weekly & Monthly Rentals",
    "Pickup & Drop-off Services",
    "Premium Support",
  ],
  lists: [
    {
      subHeading: "Unparalleled Collection",
      text: "From Lamborghinis to Rolls-Royces, our fleet includes top-tier models across categories.",
    },
    {
      subHeading: "Tailored Experience",
      text: "Each rental includes customized support, so your luxury experience is worry-free.",
    },
  ],
};
export const assetsDataHome2 = {
  topTitle: "Experience Luxury Like Never Before",
  heading: "Drive the Car of Your Dreams",
  bottomTitle: "Unmatched Elegance and Performance",
  paragraph: [
    "We provide access to the most luxurious and high-performance vehicles in the world.",
    "Perfect for weddings, VIP transport, photoshoots, or simply treating yourself.",
  ],
};
export const productCardData = [
  {
    title: "Lamborghini Huracán EVO",
    model: "2023 Model",
    price: "4200",
    imageUrl: "/assets/images/image_42.webp",
    tags: ["Available", "2 Units", "Maintenance"],
    features: [
      {
        icon: <WhatsappSVG />,
        name: "V10 Engine",
      },
      {
        icon: <InstagramSVG />,
        name: "Automatic",
      },
      {
        icon: "/assets/icons/seats.svg",
        name: "2 Seats",
      },
    ],
  },
  {
    title: "Rolls-Royce Ghost",
    model: "2022 Model",
    price: "5200",
    imageUrl: "/assets/images/image_42.webp",
    tags: ["Unavailable", "Luxury Sedan"],
    features: [
      {
        icon: <WhatsappSVG />,
        name: "V12 Engine",
      },
      {
        icon: <InstagramSVG />,
        name: "Automatic",
      },
      {
        icon: "/assets/icons/seats.svg",
        name: "4 Seats",
      },
    ],
  },
  {
    title: "Ferrari 488 Spider",
    model: "2021 Model",
    price: "3900",
    imageUrl: "/assets/images/image_42.webp",
    tags: ["Available", "1 Unit"],
    features: [
      {
        icon: <WhatsappSVG />,
        name: "Twin Turbo V8",
      },
      {
        icon: <InstagramSVG />,
        name: "Automatic",
      },
      {
        icon: "/assets/icons/seats.svg",
        name: "2 Seats",
      },
    ],
  },
  {
    title: "Lamborghini Huracán EVO",
    model: "2023 Model",
    price: "4200",
    imageUrl: "/assets/images/image_42.webp",
    tags: ["Available", "2 Units", "Maintenance"],
    features: [
      {
        icon: <WhatsappSVG />,
        name: "V10 Engine",
      },
      {
        icon: <InstagramSVG />,
        name: "Automatic",
      },
      {
        icon: "/assets/icons/seats.svg",
        name: "2 Seats",
      },
    ],
  },
  {
    title: "Rolls-Royce Ghost",
    model: "2022 Model",
    price: "5200",
    imageUrl: "/assets/images/image_42.webp",
    tags: ["Unavailable", "Luxury Sedan"],
    features: [
      {
        icon: <WhatsappSVG />,
        name: "V12 Engine",
      },
      {
        icon: <InstagramSVG />,
        name: "Automatic",
      },
      {
        icon: "/assets/icons/seats.svg",
        name: "4 Seats",
      },
    ],
  },
  {
    title: "Ferrari 488 Spider",
    model: "2021 Model",
    price: "3900",
    imageUrl: "/assets/images/image_42.webp",
    tags: ["Available", "1 Unit"],
    features: [
      {
        icon: <WhatsappSVG />,
        name: "Twin Turbo V8",
      },
      {
        icon: <InstagramSVG />,
        name: "Automatic",
      },
      {
        icon: "/assets/icons/seats.svg",
        name: "2 Seats",
      },
    ],
  },
  {
    title: "Rolls-Royce Ghost",
    model: "2022 Model",
    price: "5200",
    imageUrl: "/assets/images/image_42.webp",
    tags: ["Unavailable", "Luxury Sedan"],
    features: [
      {
        icon: <WhatsappSVG />,
        name: "V12 Engine",
      },
      {
        icon: <InstagramSVG />,
        name: "Automatic",
      },
      {
        icon: "/assets/icons/seats.svg",
        name: "4 Seats",
      },
    ],
  },
  {
    title: "Ferrari 488 Spider",
    model: "2021 Model",
    price: "3900",
    imageUrl: "/assets/images/image_42.webp",
    tags: ["Available", "1 Unit"],
    features: [
      {
        icon: <WhatsappSVG />,
        name: "Twin Turbo V8",
      },
      {
        icon: <InstagramSVG />,
        name: "Automatic",
      },
      {
        icon: "/assets/icons/seats.svg",
        name: "2 Seats",
      },
    ],
  },
];

// export
// export
// export
// export
// export
// export
// export
// export
// export
// export
// export
// export
// export
// export
// export
// export
// export
// export
// export
// export
// export
// export
// export
// export
// export
// export
// export
// export
// export
// export
// export
