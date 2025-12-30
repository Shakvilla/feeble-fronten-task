import React from 'react';

const JsonLd = () => {
  const jsonLd =
   {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Coup',
    operatingSystem: 'macOS',
    applicationCategory: 'ProductivityApplication',
    description: 'The best iMessage automation tool for teams and AI workflows. Send iMessages directly from your phone number, running securely on your Mac.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '150',
    },
    url: 'https://feeble-frontend-task.vercel.app',
    image: 'https://feeble-frontend-task.vercel.app/images/og-image.jpg',
    author: {
        '@type': 'Organization',
        name: 'Feeble Inc.'
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default JsonLd;
