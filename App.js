import React from "react";
import ReactDOM from "react-dom";

//ReactDOM.render(<h1>Swiggy App</h1>, document.getElementById("root"));

/*
Header
- Logo
- Nav Items
Body
- search
- ResturentContainer
- ResturentCard
- Img
- Name of Res , Star Rating , Cuisione, Delevery time, Cost for two
Footer
- Links
- address
- contact
*/

const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src="https://w7.pngwing.com/pngs/126/52/png-transparent-logo-brand-font-food-product-restaurant-logo-design-food-label-text-thumbnail.png"
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const resList = [
  {
    info: {
      id: "23596",
      name: "Angaara 5",
      cloudinaryImageId: "npu9n2pkxsawegspji1h",
      locality: "Dargah Road, Nampally",
      areaName: "Nampally",
      costForTwo: "₹400 for two",
      cuisines: ["Tandoor", "Biryani", "Chinese"],
      avgRating: 4.2,
      parentId: "5039",
      avgRatingString: "4.2",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-02 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-edf329af-6157-4d30-a1be-85c32e7e1e02",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/angaara-5-dargah-road-nampally-hyderabad-23596",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "391518",
      name: "Felfelah Restaurant",
      cloudinaryImageId: "qp9hwfx5tcybsvxdlifo",
      locality: "Beside Limes Hotel",
      areaName: "Tolichowki",
      costForTwo: "₹300 for two",
      cuisines: ["Indian", "Afghani", "Arabian"],
      avgRating: 4.2,
      parentId: "245441",
      avgRatingString: "4.2",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 5.7,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "5.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-02 06:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-edf329af-6157-4d30-a1be-85c32e7e1e02",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/felfelah-restaurant-beside-limes-hotel-tolichowki-hyderabad-391518",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "474009",
      name: "Hari Dosa",
      cloudinaryImageId: "ebg0qtutkmzzbsxkd19z",
      locality: "Tolichowki",
      areaName: "Tolichowki",
      costForTwo: "₹120 for two",
      cuisines: [
        "Indian",
        "South Indian",
        "Street Food",
        "Beverages",
        "Snacks",
      ],
      avgRating: 4,
      veg: true,
      parentId: "19891",
      avgRatingString: "4.0",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 53,
        lastMileTravel: 7.4,
        serviceability: "SERVICEABLE",
        slaString: "50-55 mins",
        lastMileTravelString: "7.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-02 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-edf329af-6157-4d30-a1be-85c32e7e1e02",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/hari-dosa-tolichowki-hyderabad-474009",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "485796",
      name: "Sahan Arabi",
      cloudinaryImageId: "rdvzql3b5natbxcskxmi",
      locality: "Aravind Nagar Colony",
      areaName: "Toli Chowki",
      costForTwo: "₹300 for two",
      cuisines: ["Lebanese", "Arabian", "Grill", "Salads"],
      avgRating: 4,
      parentId: "291502",
      avgRatingString: "4.0",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 42,
        lastMileTravel: 6.7,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "6.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-02 06:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-edf329af-6157-4d30-a1be-85c32e7e1e02",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/sahan-arabi-aravind-nagar-colony-toli-chowki-hyderabad-485796",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "369237",
      name: "AL Jamrah",
      cloudinaryImageId: "vvhpgw9vlzluze9i77by",
      locality: "Karwan Circle No 14",
      areaName: "Tolichowki",
      costForTwo: "₹250 for two",
      cuisines: ["Arabian", "Lebanese", "Snacks", "Salads"],
      avgRating: 4.1,
      parentId: "29174",
      avgRatingString: "4.1",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 45,
        lastMileTravel: 4.9,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "4.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-02 12:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-edf329af-6157-4d30-a1be-85c32e7e1e02",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/al-jamrah-karwan-circle-no-14-tolichowki-hyderabad-369237",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "28990",
      name: "Krupa Mess & tiffins",
      cloudinaryImageId: "tzyqy2ovy09e9y7hjyqq",
      locality: "JN road",
      areaName: "Koti",
      costForTwo: "₹200 for two",
      cuisines: ["South Indian"],
      avgRating: 3.7,
      veg: true,
      parentId: "4086",
      avgRatingString: "3.7",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 41,
        lastMileTravel: 6,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "6.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-03 01:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-edf329af-6157-4d30-a1be-85c32e7e1e02",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/krupa-mess-and-tiffins-jn-road-koti-hyderabad-28990",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "34634",
      name: "Shah Ghouse Hotel & Restaurant",
      cloudinaryImageId: "ks4d93rjtcbitkzkbqx0",
      locality: "Tolichowki",
      areaName: "Tolichowki",
      costForTwo: "₹350 for two",
      cuisines: ["Biryani", "North Indian", "Chinese", "Mughlai", "Tandoor"],
      avgRating: 4.2,
      parentId: "19271",
      avgRatingString: "4.2",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 4.2,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "4.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-02 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-edf329af-6157-4d30-a1be-85c32e7e1e02",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/shah-ghouse-hotel-and-restaurant-tolichowki-hyderabad-34634",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "107827",
      name: "Asoka Restaurant",
      cloudinaryImageId: "fegei0e2nqd7svcdpwa0",
      locality: "Koti",
      areaName: "Abids & Koti",
      costForTwo: "₹450 for two",
      cuisines: [
        "North Indian",
        "Chinese",
        "Hyderabadi",
        "Fast Food",
        "Tandoor",
        "Seafood",
        "Snacks",
      ],
      avgRating: 3.9,
      parentId: "19704",
      avgRatingString: "3.9",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 4.4,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "4.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-09 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-4ec35176-1524-4e50-88ba-03b8e5bd6ec2",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/asoka-restaurant-koti-abids-and-koti-hyderabad-107827",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "74646",
      name: "Riyan Hotel",
      cloudinaryImageId: "wmnrzs0vet0nxnatecy2",
      locality: "Vijaya Nagar Colony",
      areaName: "Masab Tank",
      costForTwo: "₹300 for two",
      cuisines: ["Hyderabadi", "Mughlai", "Biryani", "Indian", "Chinese"],
      avgRating: 3.9,
      parentId: "19805",
      avgRatingString: "3.9",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 4.4,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "4.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-09 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-4ec35176-1524-4e50-88ba-03b8e5bd6ec2",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/riyan-hotel-vijaya-nagar-colony-masab-tank-hyderabad-74646",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "23596",
      name: "Angaara 5",
      cloudinaryImageId: "npu9n2pkxsawegspji1h",
      locality: "Dargah Road, Nampally",
      areaName: "Nampally",
      costForTwo: "₹400 for two",
      cuisines: ["Tandoor", "Biryani", "Chinese"],
      avgRating: 4.2,
      parentId: "5039",
      avgRatingString: "4.2",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 3.5,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-02 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-4ec35176-1524-4e50-88ba-03b8e5bd6ec2",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/angaara-5-dargah-road-nampally-hyderabad-23596",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "661672",
      name: "Hotel City Diamond",
      cloudinaryImageId: "b328134beb7b0f5fe017b0cbf3515595",
      locality: "Jagadamba Nagar",
      areaName: "Mehdipatnam",
      costForTwo: "₹250 for two",
      cuisines: ["Indian", "Biryani"],
      avgRating: 4.2,
      parentId: "462857",
      avgRatingString: "4.2",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 6.1,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "6.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-03 04:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-4ec35176-1524-4e50-88ba-03b8e5bd6ec2",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/hotel-city-diamond-jagadamba-nagar-mehdipatnam-hyderabad-661672",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "28990",
      name: "Krupa Mess & tiffins",
      cloudinaryImageId: "tzyqy2ovy09e9y7hjyqq",
      locality: "JN road",
      areaName: "Koti",
      costForTwo: "₹200 for two",
      cuisines: ["South Indian"],
      avgRating: 3.7,
      veg: true,
      parentId: "4086",
      avgRatingString: "3.7",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-03 01:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-4ec35176-1524-4e50-88ba-03b8e5bd6ec2",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/krupa-mess-and-tiffins-jn-road-koti-hyderabad-28990",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "36263",
      name: "Veggie Chinese",
      cloudinaryImageId: "jl1hru4ngw8ft1kzic1i",
      locality: "Hari Vihar Colony",
      areaName: "Old Mla Quarters",
      costForTwo: "₹300 for two",
      cuisines: ["Chinese"],
      avgRating: 4.3,
      veg: true,
      parentId: "6567",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 1.5,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-03 05:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-4ec35176-1524-4e50-88ba-03b8e5bd6ec2",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/veggie-chinese-hari-vihar-colony-old-mla-quarters-hyderabad-36263",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "805610",
      name: "Bells N Pepper",
      cloudinaryImageId: "e63ce8b32408bce6426e367b8387e286",
      locality: "Kachiguda",
      areaName: "Kachiguda",
      costForTwo: "₹200 for two",
      cuisines: ["Pizzas", "Fast Food", "Burgers"],
      veg: true,
      parentId: "443366",
      avgRatingString: "NEW",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 1,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "1.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-02 07:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-4ec35176-1524-4e50-88ba-03b8e5bd6ec2",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/bells-n-pepper-kachiguda-hyderabad-805610",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "16158",
      name: "Royal Tiffin Centre",
      cloudinaryImageId: "xxvnkzmpgmbojcakxws4",
      locality: "Hanuman Tekdi",
      areaName: "Abids & Koti",
      costForTwo: "₹150 for two",
      cuisines: ["South Indian"],
      avgRating: 4,
      veg: true,
      parentId: "4621",
      avgRatingString: "4.0",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 2.7,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-03 03:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-4ec35176-1524-4e50-88ba-03b8e5bd6ec2",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/royal-tiffin-centre-hanuman-tekdi-abids-and-koti-hyderabad-16158",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "748240",
      name: "Fruitoholic",
      cloudinaryImageId: "d252c43531e004ac70d26fdb218b905d",
      locality: "Ap State Housing Board",
      areaName: "Himayath Nagar",
      costForTwo: "₹300 for two",
      cuisines: ["Juices", "Beverages"],
      avgRating: 4.7,
      veg: true,
      parentId: "84795",
      avgRatingString: "4.7",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 1,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-03 05:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "brand",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "brand",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "15% OFF",
        subHeader: "UPTO ₹45",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-4ec35176-1524-4e50-88ba-03b8e5bd6ec2",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/fruitoholic-ap-state-housing-board-himayath-nagar-hyderabad-748240",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
];

// //const resObj = {
//   type: "restaurant",
//   data: {
//     id: "424562",
//     name: "Shiva Sai Varma Fast Food, Mess & Biryani Point",
//     cloudinaryImageId: "plouudds2rzylvifdc3t",
//     locality: "Shivaji Nagar",
//     areaName: "Shalapally",
//     costForTwo: "₹150 for two",
//     cuisines: ["Chinese", "South Indian", "Biryani"],
//     avgRating: 4.3,
//     parentId: "236263",
//     avgRatingString: "4.3",
//     totalRatingsString: "500+",
//     sla: {
//       deliveryTime: 16,
//       lastMileTravel: 0.1,
//       serviceability: "SERVICEABLE",
//       slaString: "15-20 mins",
//       lastMileTravelString: "0.1 km",
//       iconType: "ICON_TYPE_EMPTY",
//     },
//     availability: { nextCloseTime: "2024-02-01 23:00:00", opened: true },
//     badges: {},
//     isOpen: true,
//     aggregatedDiscountInfoV2: {},
//     type: "F",
//     badgesV2: {
//       entityBadges: { imageBased: {}, textBased: {}, textExtendedBadges: {} },
//     },
//     differentiatedUi: {
//       displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//       differentiatedUiMediaDetails: {
//         mediaType: "ADS_MEDIA_ENUM_IMAGE",
//         lottie: {},
//         video: {},
//       },
//     },
//     reviewsSummary: {},
//     displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//     restaurantOfferPresentationInfo: {},
//   },
//   analytics: {},
//   cta: {
//     link: "https://www.swiggy.com/restaurants/shiva-sai-varma-fast-food-mess-and-biryani-point-shivaji-nagar-shalapally-ramagundam-424562",
//     type: "WEBLINK",
//   },
//};

// const styleCard = {
//   backgroundColor: "red",
// }; //in line style for react is also allowed but not used

const ResturentCard = (props) => {
  // console.log(props);
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating } = resData.info; //optional chaining - if the value is not present it will not throw error

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-img"
        style={{ width: "100%", height: "200px" }}
        alt="food-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      ></img>
      <h3 className="res-name">{name}</h3>
      <h4>{cuisines}</h4>
      <h3>⭐️{avgRating} </h3>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {
          /* <ResturentCard resData={resList[0]} />
        <ResturentCard resData={resList[1]} />
        <ResturentCard resData={resList[2]} />
        <ResturentCard resData={resList[3]} />
        <ResturentCard resData={resList[4]} /> */

          resList.map((rahul) => (
            <ResturentCard resData={rahul} />
          ))
        }
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

ReactDOM.render(<AppLayout />, document.getElementById("root"));
