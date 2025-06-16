import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = "Hogar de Ancianos Nuestra Señora del Rosario",
  description = "Hogar de ancianos en Santa Cruz, Guanacaste. Brindamos cuidado y atención integral a adultos mayores con servicios de calidad.",
  keywords = "hogar de ancianos, cuidado de adultos mayores, Nuestra Señora del Rosario, Santa Cruz Guanacaste, donaciones, voluntariado",
  image = "https://i.ibb.co/D5xXgD5/Icon-whitout-fondo.png",
  url = "https://nuestrasenorainformativo.com/",
  type = "website"
}) => {
  const fullTitle = title.includes("Hogar") ? title : `${title} | Hogar de Ancianos Nuestra Señora del Rosario`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Hogar Nuestra Señora del Rosario" />
      <meta property="og:locale" content="es_CR" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Canonical */}
      <link rel="canonical" href={url} />
      
      {/* JSON-LD for specific pages */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": fullTitle,
          "description": description,
          "url": url,
          "isPartOf": {
            "@type": "WebSite",
            "name": "Hogar de Ancianos Nuestra Señora del Rosario",
            "url": "https://nuestrasenorainformativo.com"
          },
          "about": {
            "@type": "Organization",
            "name": "Hogar de Ancianos Nuestra Señora del Rosario"
          }
        })}
      </script>
    </Helmet>  );
};
