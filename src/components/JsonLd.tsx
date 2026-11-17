import React from "react";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "Riverside Cabin and Van Park",
    description:
      "Clean cabins and powered caravan sites on Mill Street, Muswellbrook NSW alongside the Hunter River. Serving mining personnel, contractors, and regional travellers.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "10 Mill Street",
      addressLocality: "Muswellbrook",
      addressRegion: "NSW",
      postalCode: "2333",
      addressCountry: "AU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -32.2644,
      longitude: 150.8872,
    },
    telephone: "+61452185145",
    email: "bookings@riversidecabinandvanpark.au",
    url: "https://riversidecabinandvanpark.com",
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Kitchenette",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Refrigerator",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Television",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Dedicated Vehicle Parking",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "On-Site Laundromat",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Housekeeping Available",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Powered Caravan Sites",
        value: true,
      },
    ],
  };

  // Defense-in-depth: escape '<' to prevent potential script breakout
  const safeJson = JSON.stringify(schema).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJson }}
    />
  );
}
