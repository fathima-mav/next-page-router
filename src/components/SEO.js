import Head from "next/head"

export default function SEO({
  title,
  description,
  keywords,
  image,
  url,
}) {
  const defaultTitle = "Velora | Luxury Collection"
  const defaultDescription =
    "Velora offers premium fashion and timeless luxury pieces."
  const defaultImage = "/og-image.jpg" // put inside public folder
  const siteUrl = "https://yourdomain.com"

  const seo = {
    title: title ? `${title} | Velora` : defaultTitle,
    description: description || defaultDescription,
    image: image || defaultImage,
    url: url ? `${siteUrl}${url}` : siteUrl,
  }

  return (
    <Head>
      {/* Basic SEO */}
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
    </Head>
  )
}