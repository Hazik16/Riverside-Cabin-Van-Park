export interface AccommodationImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface AccommodationType {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  images: AccommodationImage[];
  inquirySubject: string;
  inquiryWhatsApp: string;
}

export const accommodations: AccommodationType[] = [
  {
    id: "ensuite-cabins",
    name: "Ensuite Cabins",
    tagline: "Private comfort with everything you need",
    description:
      "Well-appointed cabins with your own dedicated space, designed for workers and travellers who value a straightforward, comfortable stay in Muswellbrook.",
    features: [
      "Double bed",
      "Television",
      "Fridge",
      "Kitchenette",
      "One parking space",
    ],
    images: [
      {
        src: "/images/cabins/ensuite-cabin-interior-1.png",
        alt: "Interior view of an ensuite cabin showing bed and living area",
        width: 1448,
        height: 1086,
      },
      {
        src: "/images/cabins/ensuite-cabin-interior-2.png",
        alt: "Second interior view of an ensuite cabin",
        width: 1448,
        height: 1086,
      },
      {
        src: "/images/cabins/cabin-exterior-front.png",
        alt: "Front exterior view of a cabin at the park",
        width: 1448,
        height: 1086,
      },
    ],
    inquirySubject: "Ensuite Cabin Inquiry – Riverside Cabin & Van Park",
    inquiryWhatsApp:
      "Hello Riverside Cabin and Van Park, I would like to inquire about Ensuite Cabin availability.",
  },
  {
    id: "basic-cabins",
    name: "Basic Cabins",
    tagline: "Everything essential, nothing unnecessary",
    description:
      "Clean, functional cabins with the essentials covered — ideal for contractors, FIFO workers, and short-stay visitors to the Upper Hunter.",
    features: [
      "Double bed",
      "Television",
      "Fridge",
      "Kitchenette",
      "One parking space",
    ],
    images: [
      {
        src: "/images/cabins/basic-cabin-interior-1.png",
        alt: "Interior view of a basic cabin showing bed and kitchenette",
        width: 1448,
        height: 1086,
      },
      {
        src: "/images/cabins/basic-cabin-interior-2.png",
        alt: "Second interior view of a basic cabin",
        width: 1448,
        height: 1086,
      },
      {
        src: "/images/cabins/cabin-exterior-angled.png",
        alt: "Angled exterior view of a cabin at the park",
        width: 1448,
        height: 1086,
      },
    ],
    inquirySubject: "Basic Cabin Inquiry – Riverside Cabin & Van Park",
    inquiryWhatsApp:
      "Hello Riverside Cabin and Van Park, I would like to inquire about Basic Cabin availability.",
  },
];

export const poweredSites = {
  id: "powered-sites",
  name: "Powered Caravan Sites",
  tagline: "Powered sites for caravans along the Hunter River",
  description:
    "Powered caravan sites are available at the park. Tent camping is not accommodated.",
  notice: "Powered caravan sites only. Tent camping is not available.",
  inquirySubject: "Powered Caravan Site Inquiry – Riverside Cabin & Van Park",
  inquiryWhatsApp:
    "Hello Riverside Cabin and Van Park, I would like to inquire about Powered Caravan Site availability.",
} as const;

export const sharedFacilities = [
  "On-site laundromat",
  "Housekeeping available",
  "Dedicated vehicle parking",
] as const;
