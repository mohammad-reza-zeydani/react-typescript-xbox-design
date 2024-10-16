import xboxLogo from "../../assets/xboxLogo.png";
import microsoftLogo from "../../assets/MicrosoftLogo.png";
import headerPic from "../../assets/headerPic.jpg";
//Data of the title and btns we have in our navigation 
export const NavBtnsData= [
  {
    title: "Support",//the first title we see in navigation bar
    extraBtns: [
      {
        btnsTitle: "Support home", //the title we have for our btns
        titleBtns:[],//btns under our title
      },
      {
        btnsTitle: "Xbox status",
        titleBtns: [],
      },
      {
        btnsTitle: "Help topics",
        titleBtns: [
          "Account & profile",
          "Subscriptions & billing",
          "Hardware & networking",
          "Family & online safety",
          "Games & apps",
          "Friends & social activity",
        ],
        
      },
      {
        btnsTitle: "Accessible gaming",
        titleBtns: [],
      },
      {
        btnsTitle: "Xbox system updates",
        titleBtns: [],
      },
    ],
    extraMenu:true
  },
  {
    title: "More",
    extraBtns: [
      {
        btnsTitle: "My Xbox",
        titleBtns: ["Profile", "Rewards", "Xbox Mastercard", "Wish list"],
      },
      {
        btnsTitle: "Developers",
        titleBtns: ["Games", "Designed for Xbox"],
      },
    ],
    extraMenu:true
  },
  {
    title: "Game Pass",
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
    title: "Games",
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
    title: "Devices",
    extraBtns: [
      {
        btnsTitle: "Cosoles",
        titleBtns: [
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
        btnsTitle: "Accessories",
        titleBtns: [
          "Shop all accessories,",
          "Design your controller",
          "Controller",
          "Headsets",
          "Hard drives & storage",
          "Mobile gaming accessories",
        ],
      },
      {
        btnsTitle: "PC Devices",
        titleBtns: ["Gaming PCs"],
      },
    ],
    large:true
  },
  {
    title: "Store",
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
    title: "Community",
    extraBtns: [
      {
        btnsTitle: "Community",
        titleBtns: ["Xbox community", "FanFest", "Xbox News", "Sustainability"],
      },
      {
        btnsTitle: "For Everyone",
        titleBtns: [
          "Our philosophy",
          "Family hub",
          "Accessible gaming",
          "Community standards",
        ],
      },
      {
        btnsTitle: "Xbox Gear Shop",
        titleBtns: ["Shop gear"],
      },
      {
        btnsTitle: "Apps & Entertainment",
        titleBtns: [
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
        btnsTitle: "Software",
        titleBtns: [
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
        btnsTitle: "Pcs & Devices",
        titleBtns: [
          "Computers",
          "Shop Xbox",
          "Accessories",
          "VR & mixed reality",
          "Certified Refurbished",
          "Trade-in for cash",
        ],
      },
      {
        btnsTitle: "Entertainment",
        titleBtns: [
          "Xbox Game Pass Ultimate",
          "PC Game Pass",
          "Xbox games",
          "PC and Windows games",
          "Movies & TV",
        ],
      },
      {
        btnsTitle: "Business",
        titleBtns: [
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
        btnsTitle: "Developer & IT",
        titleBtns: [
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
        btnsTitle: "Other",
        titleBtns: [
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
};