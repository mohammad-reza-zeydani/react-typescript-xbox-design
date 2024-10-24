import xboxLogo from "../../assets/xboxLogo.png";
import microsoftLogo from "../../assets/MicrosoftLogo.png";
import headerPic from "../../assets/headerPic.jpg";
import mobileHeaderPic from "../../assets/mobileHeader.jpg"
//Data of the title and btns we have in our navigation 
export const NavBtnsData= [
  {
    mainTitle: "Support",//the first title we see in navigation bar
    extraBtns: [
      {
        title: "Support home", //the title we have for our btns
        buttons:[],//btns under our title
      },
      {
        title: "Xbox status",
        buttons: [],
      },
      {
        title: "Help topics",
        buttons: [
          "Account & profile",
          "Subscriptions & billing",
          "Hardware & networking",
          "Family & online safety",
          "Games & apps",
          "Friends & social activity",
        ],
        
      },
      {
        title: "Accessible gaming",
        buttons: [],
      },
      {
        title: "Xbox system updates",
        buttons: [],
      },
    ],
    extraMenu:true
  },
  {
    mainTitle: "More",
    extraBtns: [
      {
        title: "My Xbox",
        buttons: ["Profile", "Rewards", "Xbox Mastercard", "Wish list"],
      },
      {
        title: "Developers",
        buttons: ["Games", "Designed for Xbox"],
      },
    ],
    extraMenu:true
  },
  {
    mainTitle: "Game Pass",
    btns: [
      "Join Game Pass",
      "Browse Games",
      "Game Pass Ultimate",
      "PC Game Pass",
      "Game Pass Core",
      "Deals with Game Pass",
      "Xbox Cloud Gaming",
    ],
    large: false,
  },
  {
    mainTitle: "Games",
    btns: [
      "Games",
      "Games home",
      "Shop all PC games",
      "Cloud games",
      "Free-to-Play games",
      "Backward compatible games",
      "Sales & Specials",
      "Redeem Code",
    ],
    large: false,
  },
  {
    mainTitle: "Devices",
    extraBtns: [
      {
        title: "Cosoles",
        buttons: [
          "Xbox consoles",
          "Xbox Series X",
          "Xbox Series S",
          "Xbox All Access",
          "Shop all consoles",
          "Help Me Choose",
          "Where to buy",
        ],
      },
      {
        title: "Accessories",
        buttons: [
          "Shop all accessories,",
          "Design your controller",
          "Controller",
          "Headsets",
          "Hard drives & storage",
          "Mobile gaming accessories",
        ],
      },
      {
        title: "PC Devices",
        buttons: ["Gaming PCs"],
      },
    ],
    large:true
  },
  {
    mainTitle: "Store",
    btns: [
      "Shop Games",
      "Shop Game Pass",
      "Shop Console",
      "Shop Accessories",
      "Shop Deals",
    ],
    large: false,
  },
  {
    mainTitle: "Community",
    extraBtns: [
      {
        title: "Community",
        buttons: ["Xbox community", "FanFest", "Xbox News", "Sustainability"],
      },
      {
        title: "For Everyone",
        buttons: [
          "Our philosophy",
          "Family hub",
          "Accessible gaming",
          "Community standards",
        ],
      },
      {
        title: "Xbox Gear Shop",
        buttons: ["Shop gear"],
      },
      {
        title: "Apps & Entertainment",
        buttons: [
          " Xbox app on mobile",
          " Xbox app on Windows PC",
          " Xbox app on TVs",
          " Xbox Game Pass mobile app",
          "Xbox Family Settings app",
          "Console entertainment apps",
        ],
      },
    ],
    large:true
  },
];
export const AllMicrosoft= [
  {
    mainTitle: "All Microsoft",
    links: [
      "Microsoft 365",
      "Teams",
      "Windows",
      "Surface",
      "Xbox",
      "Deals",
      "Small Business",
      "Support",
    ],
    btns: [
      {
        title: "Software",
        buttons: [
          "Windows Apps",
          "AI",
          "Outlook",
          "OneDrive",
          "Microsoft Teams",
          "OneNote",
          "Microsoft Edge",
          "Skype",
        ],
      },
      {
        title: "Pcs & Devices",
        buttons: [
          "Computers",
          "Shop Xbox",
          "Accessories",
          "VR & mixed reality",
          "Certified Refurbished",
          "Trade-in for cash",
        ],
      },
      {
        title: "Entertainment",
        buttons: [
          "Xbox Game Pass Ultimate",
          "PC Game Pass",
          "Xbox games",
          "PC and Windows games",
          "Movies & TV",
        ],
      },
      {
        title: "Business",
        buttons: [
          "Microsoft Cloud",
          "Microsoft Security",
          "Dynamics 365",
          "Microsoft 365 for business",
          "Microsoft Power Platform",
          "Windows 365",
          "Microsoft Industry",
          "Small Busines",
        ],
      },
      {
        title: "Developer & IT",
        buttons: [
          "Azure",
          "Developer Center",
          "Documentation",
          "Microsoft Learn",
          "Microsoft Tech Community",
          "Azure Marketplace",
          "AppSource",
          "Visual Studio",
        ],
      },
      {
        title: "Other",
        buttons: [
          "Microsoft Rewards",
          "Free downloads & security",
          "Education",
          "Gift cards",
          "Licensing",
          "Unlocked stories",
        ],
      },
    ],
  },
];
export const Images = {
  xboxLogo,
  microsoftLogo,
  headerPic,
  mobileHeaderPic
};