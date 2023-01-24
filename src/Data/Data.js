import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilUsdSquare,
  UilMoneyWithdrawal,
} from '@iconscout/react-unicons';

export const SidebarData = [
  {
    icon: UilEstate,
    heading: 'Dashboard',
  },
  {
    icon: UilClipboardAlt,
    heading: 'Orders',
  },
  {
    icon: UilUsersAlt,
    heading: 'Customers',
  },
  {
    icon: UilPackage,
    heading: 'Products',
  },
  {
    icon: UilChart,
    heading: 'Analytics',
  },
];

export const cardsData = [
  {
    title: 'Sales',
    color: {
      background: 'linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)',
      boxShadow: '0px 10px 20px 0px #e0c6f5',
    },
    barValue: 70,
    value: '25,970',
    png: UilUsdSquare,
    series: [
      {
        name: 'Sales',
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: 'Revenue',
    color: {
      background: 'linear-gradient(180deg, #FF919D 0%, #FC929D 100%)',
      boxShadow: '0px 10px 20px 0px #FDC0C7',
    },
    barValue: 80,
    value: '14,270',
    png: UilMoneyWithdrawal,
    series: [
      {
        name: 'Revenue',
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: 'Expenses',
    color: {
      background: 'linear-gradient(180deg, #F9D976 0%, #F39F86 100%)',
      boxShadow: '0px 10px 20px 0px #F9D59B',
    },
    barValue: 60,
    value: '4,270',
    png: UilClipboardAlt,
    series: [
      {
        name: 'Expenses',
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];
