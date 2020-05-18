import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Top Models',
    icon: 'pantone-outline',
    link: '/pages/dashboard',
    home: true,
  },
  // {
  //   title: 'Recent Search',
  //   icon: 'home-outline',
  //   link: '/pages/iot-dashboard',
  // },
  {
    title: 'Phones',
    group: true,
  },
  {
    title: 'Apple',
    icon: 'layout-outline',
    children: [
      {
        title: 'Iphone 11 Pro',
      },
      {
        title: 'Iphone X',
      },
      {
        title: 'Iphone 8',
      },
      {
        title: 'Iphone XR',
      },
      {
        title: 'Iphone 12',
      },
    ],
  },
  {
    title: 'Samsung',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Samsung Note 10',
      },
      {
        title: 'Samsung S10',
      },
      {
        title: 'Samsung A8',
      },
      {
        title: 'Samsung Edge 8',
      },
    ],
  },
  {
    title: 'One Plus',
    icon: 'keypad-outline',
    children: [
      {
        title: 'One Plus 5T',
      },
      {
        title: 'One Plus 6',
      },
      {
        title: 'One Plus 7T',
      },
      {
        title: 'One Plus 8',
      },
    ],
  },
  {
    title: 'Xiaomi',
    icon: 'message-circle-outline',
    children: [
      {
        title: 'Xiomi M9',
      },
      {
        title: 'Xiaomi Redmi Note 8',
      },
      {
        title: 'Xiaomi Mi Note 10',
      },
      {
        title: 'Xiaomi Redmi k20',
      },
      {
        title: 'Xiaomi Poco F1',
      },
    ],
  },
];
