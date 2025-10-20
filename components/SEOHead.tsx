import Head from 'next/head'

interface SEOHeadProps {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: string
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Lời Mời Tham Gia Sự Kiện 20-10 - PeaSoft Vietnam",
  description = "Mời tham gia sự kiện chào mừng ngày phụ nữ Việt Nam 20-10. Cùng nhau tạo nên những khoảnh khắc đáng nhớ với chương trình văn nghệ, trò chơi team building và phần quà hấp dẫn.",
  image = "/PeaSoft Vietnam.webp",
  url = "https://peasoft.vn/20-10-invitation",
  type = "website"
}) => {
  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Favicon */}
      <link rel="icon" href="/PeaSoft Vietnam.webp" />
      <link rel="icon" type="image/webp" href="/PeaSoft Vietnam.webp" />
      <link rel="shortcut icon" href="/PeaSoft Vietnam.webp" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="PeaSoft Vietnam - Lời mời tham gia sự kiện 20-10" />
      <meta property="og:site_name" content="PeaSoft Vietnam" />
      <meta property="og:locale" content="vi_VN" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:image:alt" content="PeaSoft Vietnam - Lời mời tham gia sự kiện 20-10" />
      
      {/* Additional meta tags */}
      <meta name="author" content="PeaSoft Vietnam" />
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#ec4899" />
      
      {/* Apple Touch Icon */}
      <link rel="apple-touch-icon" href="/PeaSoft Vietnam.webp" />
      <link rel="apple-touch-icon" sizes="180x180" href="/PeaSoft Vietnam.webp" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* PWA Manifest */}
      <link rel="manifest" href="/manifest.json" />
      
      {/* Additional SEO */}
      <meta name="keywords" content="PeaSoft Vietnam, 20-10, ngày phụ nữ Việt Nam, sự kiện, team building, văn nghệ" />
      <meta name="geo.region" content="VN" />
      <meta name="geo.country" content="Vietnam" />
      
      {/* Preconnect to external domains for better performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* DNS Prefetch for better performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            "name": "Chào Mừng Ngày Phụ Nữ Việt Nam 20-10",
            "description": description,
            "startDate": "2025-10-20T13:30:00+07:00",
            "location": {
              "@type": "Place",
              "name": "Văn phòng công ty",
              "address": "Vietnam"
            },
            "organizer": {
              "@type": "Organization",
              "name": "PeaSoft Vietnam",
              "url": "https://peasoft.vn"
            },
            "image": image,
            "url": url
          })
        }}
      />
    </Head>
  )
}

export default SEOHead
