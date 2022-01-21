import { Helmet } from 'react-helmet'
import defaultImage from '../assets/img/img_background.png';

export default function SEO({
  title = "피치플래너",
  ogTitle = "웨딩플래너 비교서비스, 피치플래너",
  description = "한번뿐인 결혼식, 믿을 수 있는 웨딩플래너를 피치플래너에서 찾아보세요.",
  image = defaultImage,
  siteTitle = "",
}: { title?: string; ogTitle?: string; description?: string; siteTitle?: string; image?: string; }) {
  return (
    <Helmet
      title={title}
      titleTemplate={siteTitle ? `%s | ${siteTitle}` : undefined}
      meta={[
        {
          name: `viewport`,
          content: "width=device-width, initial-scale=1.0",
        },
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:title`,
          content: ogTitle,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:image`,
          content: image,
        },
        {
          property: `og:url`,
          content: "https://peachplanner.com/",
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        // {
        //   name: `twitter:creator`,
        //   content: twitter,
        // },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
        {
          name: `robots`,
          content: "ALL",
        },
        {
          name: `robots`,
          content: "웨딩플래너,웨딩업체,결혼준비,결혼,웨딩플래너업체",
        },
        {
          name: `author`,
          content: "피치플래너",
        },
      ]}
    />
  )
}