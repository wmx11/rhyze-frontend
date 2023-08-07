import routes from './routes';

const navigation = [
  {
    label: 'dApp',
    href: '#about',
  },
  {
    label: 'Raffle',
    href: routes.resources,
  },
  {
    label: 'Whitepaper',
    href: routes.blog,
  },
  {
    label: 'Discord',
    href: '#newsletter',
  },
];

export const footerNavigation = [
  {
    section: 'Navigation',
    navigation,
  },
  {
    section: 'Socials',
    navigation: [
      {
        label: 'Twitter',
        href: 'https://twitter.com/vaynemyko',
      },
      {
        label: 'Telegram',
        href: 'https://www.linkedin.com/in/vainius-mykolaitis-07baa412a/',
      },
      {
        label: 'Medium',
        href: 'https://www.linkedin.com/in/vainius-mykolaitis-07baa412a/',
      },
      {
        label: 'Discord',
        href: 'https://www.linkedin.com/in/vainius-mykolaitis-07baa412a/',
      },
      // {
      //   label: 'Instagram',
      //   href: '#',
      // },
    ],
  },
  // {
  //   section: 'Legal',
  //   navigation: [
  //     {
  //       label: 'Privacy policy',
  //       href: '/privacy-policy',
  //     },
  //     {
  //       label: 'Terms of service',
  //       href: '/terms-of-service',
  //     },
  //     {
  //       label: 'Cookie policy',
  //       href: '/cookie-policy',
  //     },
  //   ],
  // },
  // {
  //   section: 'Email',
  //   navigation: [
  //     {
  //       label: 'v.mykolaitis@modiggo.com',
  //       href: 'mailto:v.mykolaitis@modiggo.com',
  //     },
  //   ],
  // },
];

export default navigation;
