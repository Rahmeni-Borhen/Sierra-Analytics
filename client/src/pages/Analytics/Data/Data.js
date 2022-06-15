// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
} from "@iconscout/react-unicons";


// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent Card Imports
import img1 from "../../../imgs/img1.png"
import img2 from "../../../imgs/img2.png";
import img3 from "../../../imgs/img3.png";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "TableauDeBord",
  },
  // {
  //   icon: UilClipboardAlt,
  //   heading: "Orders",
  // },

  // {
  //   icon: UilUsersAlt,
  //   heading: "Customers",
  // },

  // {
  //   icon: UilPackage,
  //   heading: 'Products'
  // },

  {
    icon: UilChart,
    heading: 'Analyses',
  },

];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Taux_de_satisfaction",
    color: {
      backGround: "linear-gradient(180deg, #007FFF 70%,  #0CAFFF 100%)",
      boxShadow: "0px 10px 20px 0px #0CAFFF",
    },
    barValue: 70,
    value: "25",
    png: UilUsersAlt,
    series: [
      {
        name: "Taux_de_satisfaction",
        data: [13, 14, 20, 15, 25, 19, 10],
      },
    ],
  },
  {
    title: "Nombre_de_client",
    color: {
      backGround: "linear-gradient(180deg, #0000FF 80%, #0CAFFF 100%)",
      boxShadow: "0px 10px 20px 0px #0CAFFF",
    },
    barValue: 50,
    value: "14",
    png: UilUsersAlt,
    series: [
      {
        name: "Nombre_de_client",
        data: [4, 9, 5, 7, 8, 14, 10],
      },
    ],
  },
  {
    title: "Durée_de_vie_de_client",
    color: {
      backGround:
        "linear-gradient(180deg, #002244 80%, #0CAFFF 120%)",
      boxShadow: "0px 10px 20px 0px #0CAFFF",
    },
    barValue: 90,
    value: "15min",
    png: UilClipboardAlt,
    series: [
      {
        name: "Durée_de_vie_de_client",
        data: [4, 5, 3, 5, 2, 5, 2],
      },
    ],
  },
]

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "Andrew Thomas",
    noti: "has ordered Apple smart watch 2500mh battery.",
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "James Bond",
    noti: "has received Samsung gadget for charging battery.",
    time: "30 minutes ago",
  },
  {
    img: img3,
    name: "Iron Man",
    noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
    time: "2 hours ago",
  },
];
