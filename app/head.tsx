'use client';

import { usePathname } from 'next/navigation';

const Head = () => {

  const pathname = usePathname() as string;

  const titleFixedToShow = pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2);

  const meta = {
    title: `Vani ${pathname === '/' ? '' : '· ' + titleFixedToShow}`,
    description: `I'm Vani - Freshman at Ho Chi Minh City University of Education (HCMUE)`,
    keywords: 'Vani, Vani Developer, Vani the dev, Vani frontend developer, vanixjnk, github, vani nextjs portfolio, nextjs portfolio, portfolio, github',
    type: 'website'
  };

  return (
    <>
      <title>{meta.title}</title>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='robots' content='follow, index' />
      <meta content={meta.description} name='description' />
      <meta name='keywords' content={meta.keywords} />
      <meta property='og:url' content='https://github.com/vanixjnk' />
      <link rel='canonical' href='https://github.com/vanixjnk' />
      <link rel='me' href='mailto:vanixjnk@gmail.com' />
      <meta property='og:type' content={meta.type} />
      <meta property='og:site_name' content='Vani' />
      <meta property='og:description' content={meta.description} />
      <meta property='og:title' content={meta.title} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@vanixjnk' />
      <meta name='twitter:title' content={meta.title} />
      <meta name='twitter:description' content={meta.description} />
    </>
  )
}

export default Head;