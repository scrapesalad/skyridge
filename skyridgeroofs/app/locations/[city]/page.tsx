import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/Footer';
import CityPageTemplate from '@/components/CityPageTemplate';
import Link from 'next/link';
import { getCityData } from '@/data/cityData';
import { INDEXABLE_CITY_SLUG_SET, INDEXABLE_CITY_SLUGS } from '@/data/seo';
import JsonLd from '@/components/JsonLd';
import { BUSINESS, SITE_URL } from '@/lib/site';
import { canonicalUrl } from '@/lib/seo';

// Legacy city data for backward compatibility - will be migrated to use cityData.ts
const legacyCityData: Record<string, {
  cityName: string;
  citySlug: string;
  state: string;
  phoneNumber: string;
  latitude: string;
  longitude: string;
  zipCodes: string[];
  neighborhoods: string[];
  contentSections: {
    overview: string;
    whyChooseUs: string;
    localInfo: string;
    serviceAreas: string;
  };
}> = {
  'salt-lake-city': {
    cityName: 'Salt Lake City',
    citySlug: 'salt-lake-city',
    state: 'UT',
    phoneNumber: '801-252-6936',
    latitude: '40.7608',
    longitude: '-111.8910',
    zipCodes: ['84101', '84102', '84103', '84104', '84105', '84106', '84107', '84108', '84111', '84115'],
    neighborhoods: ['Downtown', 'Sugar House', 'Liberty Wells', 'Marmalade District', 'East Bench', 'Avenues', 'Capitol Hill'],
    contentSections: {
      overview: `Sky Ridge Roofing is proud to serve homeowners throughout Salt Lake City, Utah. We understand the unique weather challenges that Salt Lake City roofs face, from heavy winter snow to intense summer sun and occasional severe storms. Our experienced team has been providing quality roofing services to Salt Lake City residents for years.`,
      whyChooseUs: `Our Salt Lake City-area roofing service helps streamline the roof replacement and repair process. We eliminate the stress of finding reliable contractors so you can work more efficiently. There are never hidden fees, and we're here to answer any questions you have along the way. With our low rates, quick service and helpful support, we make roofing simple.`,
      localInfo: `Salt Lake City experiences a semi-arid climate with four distinct seasons. Winters can bring heavy snowfall, which can cause ice dams and roof damage. Summers are hot and dry, which can cause shingles to deteriorate faster. Our team understands these conditions and uses materials designed to withstand Utah's climate.`,
      serviceAreas: `We provide roofing services throughout Salt Lake City, including Downtown, Sugar House, Liberty Wells, Marmalade District, East Bench, Avenues, Capitol Hill, and all surrounding neighborhoods.`,
    },
  },
  'provo': {
    cityName: 'Provo',
    citySlug: 'provo',
    state: 'UT',
    phoneNumber: '801-252-6936',
    latitude: '40.2338',
    longitude: '-111.6585',
    zipCodes: ['84601', '84602', '84603', '84604', '84605', '84606'],
    neighborhoods: ['Downtown Provo', 'Riverbottoms', 'Grandview', 'Franklin', 'Maeser', 'Foothill'],
    contentSections: {
      overview: `Sky Ridge Roofing provides expert roofing services to Provo, Utah homeowners. Provo's location in Utah Valley means roofs face unique challenges from mountain weather patterns, including heavy snow, strong winds, and temperature fluctuations. Our team understands Provo's specific roofing needs.`,
      whyChooseUs: `Our Provo roofing service is committed to providing exceptional service to local homeowners. We understand the importance of quality workmanship and use materials that perform well in Utah Valley's climate. With transparent pricing and expert installation, we make your roofing project stress-free.`,
      localInfo: `Provo experiences a humid continental climate with cold, snowy winters and hot, dry summers. The proximity to the Wasatch Mountains means roofs must handle significant snow loads and temperature variations. We use materials and installation techniques specifically suited for these conditions.`,
      serviceAreas: `We serve all of Provo including Downtown Provo, Riverbottoms, Grandview, Franklin, Maeser, Foothill, and surrounding areas throughout Utah County.`,
    },
  },
  'ogden': {
    cityName: 'Ogden',
    citySlug: 'ogden',
    state: 'UT',
    phoneNumber: '801-252-6936',
    latitude: '41.2230',
    longitude: '-111.9738',
    zipCodes: ['84401', '84402', '84403', '84404', '84405'],
    neighborhoods: ['Downtown Ogden', 'East Bench', 'West Ogden', 'Five Points', 'Harrison Boulevard', 'Eccles Avenue'],
    contentSections: {
      overview: `Sky Ridge Roofing serves homeowners throughout Ogden, Utah with professional roofing services. Ogden's northern Utah location means roofs must withstand heavy winter snow, spring storms, and summer heat. Our experienced team knows how to protect Ogden homes with quality roofing solutions.`,
      whyChooseUs: `Our Ogden-area roofing service provides reliable, professional service to local homeowners. We understand northern Utah's unique weather patterns and use materials designed to last. With fast response times and expert workmanship, we're the trusted choice for Ogden roofing needs.`,
      localInfo: `Ogden experiences a humid continental climate with cold winters and warm summers. The city receives significant snowfall, and roofs must be able to handle snow loads and prevent ice dam formation. Our team uses proven techniques to protect your home from these challenges.`,
      serviceAreas: `We provide roofing services throughout Ogden including Downtown Ogden, East Bench, West Ogden, Five Points, Harrison Boulevard, Eccles Avenue, and all surrounding neighborhoods.`,
    },
  },
  'west-valley-city': {
    cityName: 'West Valley City',
    citySlug: 'west-valley-city',
    state: 'UT',
    phoneNumber: '801-252-6936',
    latitude: '40.6916',
    longitude: '-111.9381',
    zipCodes: ['84119', '84120', '84128'],
    neighborhoods: ['Hunter', 'Grange Hall', 'Centennial Park', 'Redwood', 'West Valley Central'],
    contentSections: {
      overview: `Sky Ridge Roofing provides expert roofing services to West Valley City, Utah homeowners. As one of Utah's largest cities, West Valley City has diverse roofing needs from new construction to repairs and replacements. Our team is experienced with all types of roofing projects in the area.`,
      whyChooseUs: `Our West Valley City roofing service offers professional, reliable service to local homeowners. We understand the importance of quality workmanship and use premium materials. With competitive pricing and expert installation, we make your roofing project easy and stress-free.`,
      localInfo: `West Valley City experiences typical Utah weather with cold, snowy winters and hot, dry summers. Roofs must handle snow loads, temperature fluctuations, and occasional severe storms. We use materials and installation methods specifically designed for these conditions.`,
      serviceAreas: `We serve all of West Valley City including Hunter, Grange Hall, Centennial Park, Redwood, West Valley Central, and surrounding areas.`,
    },
  },
  'sandy': {
    cityName: 'Sandy',
    citySlug: 'sandy',
    state: 'UT',
    phoneNumber: '801-252-6936',
    latitude: '40.5649',
    longitude: '-111.8389',
    zipCodes: ['84070', '84092', '84093', '84094'],
    neighborhoods: ['Sandy City Center', 'Crescent', 'Bell Canyon', 'Dimple Dell', 'Sandy Hills', 'Pepperwood'],
    contentSections: {
      overview: `Sky Ridge Roofing serves Sandy, Utah homeowners with professional roofing services. Sandy's location at the base of the Wasatch Mountains means roofs face unique challenges from mountain weather, including heavy snow, strong winds, and temperature extremes. Our team understands these conditions.`,
      whyChooseUs: `Our Sandy-area roofing service provides exceptional service to local homeowners. We use premium materials designed for mountain weather conditions and provide expert installation. With transparent pricing and reliable service, we're the trusted choice for Sandy roofing needs.`,
      localInfo: `Sandy experiences a mountain-influenced climate with significant snowfall in winter and hot, dry summers. The elevation and proximity to mountains means roofs must handle heavy snow loads and prevent ice dam formation. We use proven techniques to protect your home.`,
      serviceAreas: `We provide roofing services throughout Sandy including Sandy City Center, Crescent, Bell Canyon, Dimple Dell, Sandy Hills, Pepperwood, and all surrounding neighborhoods.`,
    },
  },
  'orem': {
    cityName: 'Orem',
    citySlug: 'orem',
    state: 'UT',
    phoneNumber: '801-252-6936',
    latitude: '40.2970',
    longitude: '-111.6946',
    zipCodes: ['84057', '84058', '84059', '84097'],
    neighborhoods: ['Orem Downtown', 'Sharon', 'Canyon View', 'Hillcrest', 'Lakeridge', 'Timpanogos'],
    contentSections: {
      overview: `Sky Ridge Roofing provides expert roofing services to Orem, Utah homeowners. Orem's location in Utah Valley means roofs must handle mountain weather patterns, including heavy snow, strong winds, and temperature fluctuations. Our experienced team knows how to protect Orem homes.`,
      whyChooseUs: `Our Orem roofing service is committed to providing exceptional service to local homeowners. We understand Utah Valley's unique climate and use materials that perform well in these conditions. With expert workmanship and transparent pricing, we make your roofing project easy.`,
      localInfo: `Orem experiences a humid continental climate with cold, snowy winters and hot, dry summers. The proximity to the Wasatch Mountains means roofs must handle significant snow loads. We use materials and installation techniques specifically suited for these conditions.`,
      serviceAreas: `We serve all of Orem including Orem Downtown, Sharon, Canyon View, Hillcrest, Lakeridge, Timpanogos, and surrounding areas throughout Utah County.`,
    },
  },
  'layton': {
    cityName: 'Layton',
    citySlug: 'layton',
    state: 'UT',
    phoneNumber: '801-252-6936',
    latitude: '41.0602',
    longitude: '-111.9711',
    zipCodes: ['84040', '84041'],
    neighborhoods: ['Layton Hills', 'East Layton', 'West Layton', 'Layton Commons', 'Kays Creek'],
    contentSections: {
      overview: `Sky Ridge Roofing serves Layton, Utah homeowners with professional roofing services. Layton's location in Davis County means roofs face challenges from northern Utah weather, including heavy winter snow and summer heat. Our team understands these conditions and provides quality solutions.`,
      whyChooseUs: `Our Layton-area roofing service provides reliable, professional service to local homeowners. We use premium materials designed for northern Utah's climate and provide expert installation. With fast response times and competitive pricing, we're the trusted choice for Layton roofing needs.`,
      localInfo: `Layton experiences a humid continental climate with cold winters and warm summers. The city receives significant snowfall, and roofs must be able to handle snow loads. Our team uses proven techniques to protect your home from these challenges.`,
      serviceAreas: `We provide roofing services throughout Layton including Layton Hills, East Layton, West Layton, Layton Commons, Kays Creek, and all surrounding neighborhoods.`,
    },
  },
  'taylorsville': {
    cityName: 'Taylorsville',
    citySlug: 'taylorsville',
    state: 'UT',
    phoneNumber: '801-252-6936',
    latitude: '40.6677',
    longitude: '-111.9388',
    zipCodes: ['84118', '84123', '84129'],
    neighborhoods: ['Taylorsville Central', 'Bennion', 'Kearns', 'West Valley Junction'],
    contentSections: {
      overview: `Sky Ridge Roofing provides expert roofing services to Taylorsville, Utah homeowners. Taylorsville's central Salt Lake Valley location means roofs must handle typical Utah weather patterns. Our experienced team knows how to protect Taylorsville homes with quality roofing solutions.`,
      whyChooseUs: `Our Taylorsville roofing service offers professional, reliable service to local homeowners. We understand the importance of quality workmanship and use premium materials. With competitive pricing and expert installation, we make your roofing project easy and stress-free.`,
      localInfo: `Taylorsville experiences typical Utah weather with cold, snowy winters and hot, dry summers. Roofs must handle snow loads, temperature fluctuations, and occasional severe storms. We use materials and installation methods specifically designed for these conditions.`,
      serviceAreas: `We serve all of Taylorsville including Taylorsville Central, Bennion, Kearns, West Valley Junction, and surrounding areas.`,
    },
  },
  'st-george': {
    cityName: 'St. George',
    citySlug: 'st-george',
    state: 'UT',
    phoneNumber: '801-252-6936',
    latitude: '37.0965',
    longitude: '-113.5684',
    zipCodes: ['84770', '84790', '84791'],
    neighborhoods: ['Downtown St. George', 'Bloomington', 'Dixie Downs', 'Little Valley', 'Sunset', 'Washington Fields'],
    contentSections: {
      overview: `Sky Ridge Roofing serves St. George, Utah homeowners with professional roofing services. St. George's southern Utah location means roofs face unique challenges from desert heat, intense sun exposure, and occasional severe storms. Our team understands these desert conditions.`,
      whyChooseUs: `Our St. George-area roofing service provides exceptional service to local homeowners. We use materials designed for desert climates that can withstand intense heat and sun exposure. With expert installation and reliable service, we're the trusted choice for St. George roofing needs.`,
      localInfo: `St. George experiences a hot desert climate with very hot summers and mild winters. Roofs must be able to handle intense sun exposure and heat, which can cause materials to deteriorate faster. We use materials specifically designed for desert conditions.`,
      serviceAreas: `We provide roofing services throughout St. George including Downtown St. George, Bloomington, Dixie Downs, Little Valley, Sunset, Washington Fields, and all surrounding areas in Washington County.`,
    },
  },
  'logan': {
    cityName: 'Logan',
    citySlug: 'logan',
    state: 'UT',
    phoneNumber: '801-252-6936',
    latitude: '41.7370',
    longitude: '-111.8338',
    zipCodes: ['84321', '84322', '84323', '84341'],
    neighborhoods: ['Downtown Logan', 'Island', 'Hillcrest', 'Adams', 'Elm Park', 'Mount Logan'],
    contentSections: {
      overview: `Sky Ridge Roofing provides expert roofing services to Logan, Utah homeowners. Logan's northern Utah location in Cache Valley means roofs face unique challenges from heavy winter snow, cold temperatures, and mountain weather patterns. Our team understands these conditions.`,
      whyChooseUs: `Our Logan-area roofing service provides reliable, professional service to local homeowners. We use premium materials designed for cold climates and heavy snow loads. With expert installation and competitive pricing, we're the trusted choice for Logan roofing needs.`,
      localInfo: `Logan experiences a humid continental climate with very cold winters and warm summers. The valley location means roofs must handle significant snow loads and prevent ice dam formation. We use proven techniques and materials to protect your home from these challenges.`,
      serviceAreas: `We serve all of Logan including Downtown Logan, Island, Hillcrest, Adams, Elm Park, Mount Logan, and surrounding areas in Cache County.`,
    },
  },
  'murray': {
    cityName: 'Murray',
    citySlug: 'murray',
    state: 'UT',
    phoneNumber: '801-252-6936',
    latitude: '40.6669',
    longitude: '-111.8880',
    zipCodes: ['84107', '84117', '84121', '84123'],
    neighborhoods: ['Murray Central', 'Murray Park', 'Cottonwood', 'Little Cottonwood', 'Murray Heights'],
    contentSections: {
      overview: `Sky Ridge Roofing serves Murray, Utah homeowners with professional roofing services. Murray's central Salt Lake Valley location means roofs must handle typical Utah weather patterns, including heavy snow, temperature fluctuations, and occasional severe storms. Our experienced team knows how to protect Murray homes.`,
      whyChooseUs: `Our Murray-area roofing service provides reliable, professional service to local homeowners. We understand the importance of quality workmanship and use premium materials. With competitive pricing and expert installation, we make your roofing project easy and stress-free.`,
      localInfo: `Murray experiences typical Utah weather with cold, snowy winters and hot, dry summers. Roofs must handle snow loads, temperature fluctuations, and occasional severe storms. We use materials and installation methods specifically designed for these conditions.`,
      serviceAreas: `We provide roofing services throughout Murray including Murray Central, Murray Park, Cottonwood, Little Cottonwood, Murray Heights, and all surrounding neighborhoods.`,
    },
  },
  'south-jordan': {
    cityName: 'South Jordan',
    citySlug: 'south-jordan',
    state: 'UT',
    phoneNumber: '801-252-6936',
    latitude: '40.5622',
    longitude: '-111.9297',
    zipCodes: ['84095', '84009', '84065'],
    neighborhoods: ['Daybreak', 'Glenmoor', 'South Jordan Parkway', 'Bingham Junction', 'SoJo'],
    contentSections: {
      overview: `Sky Ridge Roofing provides expert roofing services to South Jordan, Utah homeowners. South Jordan's location in the southern Salt Lake Valley means roofs face challenges from mountain weather patterns and valley conditions. Our team understands these specific roofing needs.`,
      whyChooseUs: `Our South Jordan-area roofing service offers professional, reliable service to local homeowners. We use premium materials designed for Utah's climate and provide expert installation. With transparent pricing and fast service, we're the trusted choice for South Jordan roofing needs.`,
      localInfo: `South Jordan experiences typical Utah weather with cold, snowy winters and hot, dry summers. The proximity to the Wasatch Mountains means roofs must handle significant snow loads. We use materials and installation techniques specifically suited for these conditions.`,
      serviceAreas: `We serve all of South Jordan including Daybreak, Glenmoor, South Jordan Parkway, Bingham Junction, SoJo, and surrounding areas throughout Salt Lake County.`,
    },
  },
  'draper': {
    cityName: 'Draper',
    citySlug: 'draper',
    state: 'UT',
    phoneNumber: '801-252-6936',
    latitude: '40.5247',
    longitude: '-111.8638',
    zipCodes: ['84020', '84065'],
    neighborhoods: ['SunCrest', 'Corner Canyon', 'Draper Park', 'Lone Peak', 'Point of the Mountain'],
    contentSections: {
      overview: `Sky Ridge Roofing serves Draper, Utah homeowners with professional roofing services. Draper's location at the base of the Wasatch Mountains means roofs face unique challenges from mountain weather, including heavy snow, strong winds, and temperature extremes. Our team understands these conditions.`,
      whyChooseUs: `Our Draper-area roofing service provides exceptional service to local homeowners. We use premium materials designed for mountain weather conditions and provide expert installation. With transparent pricing and reliable service, we're the trusted choice for Draper roofing needs.`,
      localInfo: `Draper experiences a mountain-influenced climate with significant snowfall in winter and hot, dry summers. The elevation and proximity to mountains means roofs must handle heavy snow loads and prevent ice dam formation. We use proven techniques to protect your home.`,
      serviceAreas: `We provide roofing services throughout Draper including SunCrest, Corner Canyon, Draper Park, Lone Peak, Point of the Mountain, and all surrounding neighborhoods.`,
    },
  },
  'riverton': {
    cityName: 'Riverton',
    citySlug: 'riverton',
    state: 'UT',
    phoneNumber: '801-252-6936',
    latitude: '40.5219',
    longitude: '-111.9391',
    zipCodes: ['84065', '84096'],
    neighborhoods: ['Riverton City Center', 'Rose Creek', 'Riverton Meadows', 'Blackridge'],
    contentSections: {
      overview: `Sky Ridge Roofing provides expert roofing services to Riverton, Utah homeowners. Riverton's location in the southern Salt Lake Valley means roofs must handle typical Utah weather patterns. Our experienced team knows how to protect Riverton homes with quality roofing solutions.`,
      whyChooseUs: `Our Riverton-area roofing service offers professional, reliable service to local homeowners. We understand the importance of quality workmanship and use premium materials. With competitive pricing and expert installation, we make your roofing project easy and stress-free.`,
      localInfo: `Riverton experiences typical Utah weather with cold, snowy winters and hot, dry summers. Roofs must handle snow loads, temperature fluctuations, and occasional severe storms. We use materials and installation methods specifically designed for these conditions.`,
      serviceAreas: `We serve all of Riverton including Riverton City Center, Rose Creek, Riverton Meadows, Blackridge, and surrounding areas.`,
    },
  },
  'herriman': {
    cityName: 'Herriman',
    citySlug: 'herriman',
    state: 'UT',
    phoneNumber: '801-252-6936',
    latitude: '40.5141',
    longitude: '-112.0330',
    zipCodes: ['84096', '84065'],
    neighborhoods: ['Butterfield Park', 'Herriman Towne Center', 'Rosecrest', 'Blackridge'],
    contentSections: {
      overview: `Sky Ridge Roofing serves Herriman, Utah homeowners with professional roofing services. Herriman's location in the southwestern Salt Lake Valley means roofs face challenges from mountain weather patterns and valley conditions. Our team understands these specific roofing needs.`,
      whyChooseUs: `Our Herriman-area roofing service provides reliable, professional service to local homeowners. We use premium materials designed for Utah's climate and provide expert installation. With transparent pricing and fast service, we're the trusted choice for Herriman roofing needs.`,
      localInfo: `Herriman experiences typical Utah weather with cold, snowy winters and hot, dry summers. The proximity to the Oquirrh Mountains means roofs must handle significant snow loads. We use materials and installation techniques specifically suited for these conditions.`,
      serviceAreas: `We provide roofing services throughout Herriman including Butterfield Park, Herriman Towne Center, Rosecrest, Blackridge, and all surrounding neighborhoods.`,
    },
  },
  'west-jordan': {
    cityName: 'West Jordan',
    citySlug: 'west-jordan',
    state: 'UT',
    phoneNumber: '801-252-6936',
    latitude: '40.6097',
    longitude: '-111.9391',
    zipCodes: ['84081', '84084', '84088'],
    neighborhoods: ['West Jordan City Center', 'Copper Hills', 'Bingham Estates', 'Jordan Landing'],
    contentSections: {
      overview: `Sky Ridge Roofing provides expert roofing services to West Jordan, Utah homeowners. West Jordan's location in the southwestern Salt Lake Valley means roofs must handle typical Utah weather patterns. Our experienced team knows how to protect West Jordan homes with quality roofing solutions.`,
      whyChooseUs: `Our West Jordan-area roofing service offers professional, reliable service to local homeowners. We understand the importance of quality workmanship and use premium materials. With competitive pricing and expert installation, we make your roofing project easy and stress-free.`,
      localInfo: `West Jordan experiences typical Utah weather with cold, snowy winters and hot, dry summers. Roofs must handle snow loads, temperature fluctuations, and occasional severe storms. We use materials and installation methods specifically designed for these conditions.`,
      serviceAreas: `We serve all of West Jordan including West Jordan City Center, Copper Hills, Bingham Estates, Jordan Landing, and surrounding areas.`,
    },
  },
  'midvale': {
    cityName: 'Midvale',
    citySlug: 'midvale',
    state: 'UT',
    phoneNumber: '801-252-6936',
    latitude: '40.6111',
    longitude: '-111.8999',
    zipCodes: ['84047', '84047'],
    neighborhoods: ['Midvale City Center', 'Bingham Junction', 'Union Park', 'Midvale Heights'],
    contentSections: {
      overview: `Sky Ridge Roofing serves Midvale, Utah homeowners with professional roofing services. Midvale's central Salt Lake Valley location means roofs must handle typical Utah weather patterns. Our experienced team knows how to protect Midvale homes with quality roofing solutions.`,
      whyChooseUs: `Our Midvale-area roofing service provides reliable, professional service to local homeowners. We use premium materials designed for Utah's climate and provide expert installation. With competitive pricing and fast service, we're the trusted choice for Midvale roofing needs.`,
      localInfo: `Midvale experiences typical Utah weather with cold, snowy winters and hot, dry summers. Roofs must handle snow loads, temperature fluctuations, and occasional severe storms. We use materials and installation methods specifically designed for these conditions.`,
      serviceAreas: `We provide roofing services throughout Midvale including Midvale City Center, Bingham Junction, Union Park, Midvale Heights, and all surrounding neighborhoods.`,
    },
  },
  'millcreek': {
    cityName: 'Millcreek',
    citySlug: 'millcreek',
    state: 'UT',
    phoneNumber: '801-252-6936',
    latitude: '40.6869',
    longitude: '-111.8750',
    zipCodes: ['84106', '84109', '84117', '84124'],
    neighborhoods: ['Millcreek Commons', 'Canyon Rim', 'East Millcreek', 'Millcreek Canyon'],
    contentSections: {
      overview: `Sky Ridge Roofing provides expert roofing services to Millcreek, Utah homeowners. Millcreek's location at the base of the Wasatch Mountains means roofs face unique challenges from mountain weather, including heavy snow and strong winds. Our team understands these conditions.`,
      whyChooseUs: `Our Millcreek-area roofing service provides exceptional service to local homeowners. We use premium materials designed for mountain weather conditions and provide expert installation. With transparent pricing and reliable service, we're the trusted choice for Millcreek roofing needs.`,
      localInfo: `Millcreek experiences a mountain-influenced climate with significant snowfall in winter and hot, dry summers. The elevation and proximity to mountains means roofs must handle heavy snow loads. We use proven techniques to protect your home from these challenges.`,
      serviceAreas: `We serve all of Millcreek including Millcreek Commons, Canyon Rim, East Millcreek, Millcreek Canyon, and surrounding areas.`,
    },
  },
  'cottonwood-heights': {
    cityName: 'Cottonwood Heights',
    citySlug: 'cottonwood-heights',
    state: 'UT',
    phoneNumber: '801-252-6936',
    latitude: '40.6197',
    longitude: '-111.8103',
    zipCodes: ['84121', '84117'],
    neighborhoods: ['Butler', 'Cottonwood Heights City Center', 'Granite', 'Big Cottonwood Canyon'],
    contentSections: {
      overview: `Sky Ridge Roofing serves Cottonwood Heights, Utah homeowners with professional roofing services. Cottonwood Heights' location at the base of the Wasatch Mountains means roofs face unique challenges from mountain weather, including heavy snow and strong winds. Our team understands these conditions.`,
      whyChooseUs: `Our Cottonwood Heights-area roofing service provides exceptional service to local homeowners. We use premium materials designed for mountain weather conditions and provide expert installation. With transparent pricing and reliable service, we're the trusted choice for Cottonwood Heights roofing needs.`,
      localInfo: `Cottonwood Heights experiences a mountain-influenced climate with significant snowfall in winter and hot, dry summers. The elevation and proximity to mountains means roofs must handle heavy snow loads and prevent ice dam formation. We use proven techniques to protect your home.`,
      serviceAreas: `We provide roofing services throughout Cottonwood Heights including Butler, Cottonwood Heights City Center, Granite, Big Cottonwood Canyon, and all surrounding neighborhoods.`,
    },
  },
  'holladay': {
    cityName: 'Holladay',
    citySlug: 'holladay',
    state: 'UT',
    phoneNumber: '801-252-6936',
    latitude: '40.6688',
    longitude: '-111.8246',
    zipCodes: ['84117', '84121', '84124'],
    neighborhoods: ['Holladay Village', 'Cottonwood', 'Olympus Cove', 'Holladay Hills'],
    contentSections: {
      overview: `Sky Ridge Roofing provides expert roofing services to Holladay, Utah homeowners. Holladay's location in the eastern Salt Lake Valley means roofs face challenges from mountain weather patterns. Our experienced team knows how to protect Holladay homes with quality roofing solutions.`,
      whyChooseUs: `Our Holladay-area roofing service offers professional, reliable service to local homeowners. We use premium materials designed for Utah's climate and provide expert installation. With competitive pricing and fast service, we're the trusted choice for Holladay roofing needs.`,
      localInfo: `Holladay experiences typical Utah weather with cold, snowy winters and hot, dry summers. The proximity to the Wasatch Mountains means roofs must handle significant snow loads. We use materials and installation techniques specifically suited for these conditions.`,
      serviceAreas: `We serve all of Holladay including Holladay Village, Cottonwood, Olympus Cove, Holladay Hills, and surrounding areas.`,
    },
  },
  'bountiful': {
    cityName: 'Bountiful',
    citySlug: 'bountiful',
    state: 'UT',
    phoneNumber: '801-252-6936',
    latitude: '40.8894',
    longitude: '-111.8808',
    zipCodes: ['84010', '84011'],
    neighborhoods: ['Bountiful City Center', 'East Bench', 'South Bountiful', 'Woods Cross'],
    contentSections: {
      overview: `Sky Ridge Roofing serves Bountiful, Utah homeowners with professional roofing services. Bountiful's location in Davis County means roofs face challenges from northern Utah weather, including heavy winter snow and summer heat. Our team understands these conditions.`,
      whyChooseUs: `Our Bountiful-area roofing service provides reliable, professional service to local homeowners. We use premium materials designed for northern Utah's climate and provide expert installation. With fast response times and competitive pricing, we're the trusted choice for Bountiful roofing needs.`,
      localInfo: `Bountiful experiences a humid continental climate with cold winters and warm summers. The city receives significant snowfall, and roofs must be able to handle snow loads. Our team uses proven techniques to protect your home from these challenges.`,
      serviceAreas: `We provide roofing services throughout Bountiful including Bountiful City Center, East Bench, South Bountiful, Woods Cross, and all surrounding neighborhoods.`,
    },
  },
  'american-fork': {
    cityName: 'American Fork',
    citySlug: 'american-fork',
    state: 'UT',
    phoneNumber: '801-252-6936',
    latitude: '40.3769',
    longitude: '-111.7958',
    zipCodes: ['84003'],
    neighborhoods: ['American Fork City Center', 'Cedar Valley', 'Timpanogos', 'Alpine'],
    contentSections: {
      overview: `Sky Ridge Roofing provides expert roofing services to American Fork, Utah homeowners. American Fork's location in Utah Valley means roofs face unique challenges from mountain weather patterns, including heavy snow and strong winds. Our team understands these conditions.`,
      whyChooseUs: `Our American Fork-area roofing service provides exceptional service to local homeowners. We use premium materials designed for mountain weather conditions and provide expert installation. With transparent pricing and reliable service, we're the trusted choice for American Fork roofing needs.`,
      localInfo: `American Fork experiences a humid continental climate with cold, snowy winters and hot, dry summers. The proximity to the Wasatch Mountains means roofs must handle significant snow loads. We use materials and installation techniques specifically suited for these conditions.`,
      serviceAreas: `We serve all of American Fork including American Fork City Center, Cedar Valley, Timpanogos, Alpine, and surrounding areas throughout Utah County.`,
    },
  },
  'lehi': {
    cityName: 'Lehi',
    citySlug: 'lehi',
    state: 'UT',
    phoneNumber: '801-252-6936',
    latitude: '40.3916',
    longitude: '-111.8508',
    zipCodes: ['84043', '84045'],
    neighborhoods: ['Lehi City Center', 'Traverse Mountain', 'Eagle Mountain', 'Saratoga Springs'],
    contentSections: {
      overview: `Sky Ridge Roofing serves Lehi, Utah homeowners with professional roofing services. Lehi's location in Utah Valley means roofs face unique challenges from mountain weather patterns and rapid growth. Our experienced team knows how to protect Lehi homes with quality roofing solutions.`,
      whyChooseUs: `Our Lehi-area roofing service offers professional, reliable service to local homeowners. We use premium materials designed for Utah's climate and provide expert installation. With competitive pricing and fast service, we're the trusted choice for Lehi roofing needs.`,
      localInfo: `Lehi experiences a humid continental climate with cold, snowy winters and hot, dry summers. The proximity to the Wasatch Mountains means roofs must handle significant snow loads. We use materials and installation techniques specifically suited for these conditions.`,
      serviceAreas: `We provide roofing services throughout Lehi including Lehi City Center, Traverse Mountain, Eagle Mountain, Saratoga Springs, and all surrounding neighborhoods.`,
    },
  },
  'spanish-fork': {
    cityName: 'Spanish Fork',
    citySlug: 'spanish-fork',
    state: 'UT',
    phoneNumber: '801-252-6936',
    latitude: '40.1150',
    longitude: '-111.6549',
    zipCodes: ['84660'],
    neighborhoods: ['Spanish Fork City Center', 'Mapleton', 'Springville', 'Payson'],
    contentSections: {
      overview: `Sky Ridge Roofing provides expert roofing services to Spanish Fork, Utah homeowners. Spanish Fork's location in Utah Valley means roofs face unique challenges from mountain weather patterns. Our team understands these specific roofing needs.`,
      whyChooseUs: `Our Spanish Fork-area roofing service provides reliable, professional service to local homeowners. We use premium materials designed for Utah Valley's climate and provide expert installation. With transparent pricing and fast service, we're the trusted choice for Spanish Fork roofing needs.`,
      localInfo: `Spanish Fork experiences a humid continental climate with cold, snowy winters and hot, dry summers. The proximity to the Wasatch Mountains means roofs must handle significant snow loads. We use materials and installation techniques specifically suited for these conditions.`,
      serviceAreas: `We serve all of Spanish Fork including Spanish Fork City Center, Mapleton, Springville, Payson, and surrounding areas throughout Utah County.`,
    },
  },
  'beaver-mountain': {
    cityName: 'Beaver Mountain',
    citySlug: 'beaver-mountain',
    state: 'UT',
    phoneNumber: '801-252-6936',
    latitude: '41.8000',
    longitude: '-111.5000',
    zipCodes: ['84321', '84341', '84318', '84335', '84319', '84332', '84339', '84333', '84320'],
    neighborhoods: ['Logan', 'North Logan', 'Hyde Park', 'Smithfield', 'Hyrum', 'Providence', 'Nibley', 'Wellsville', 'Richmond', 'Lewiston'],
    contentSections: {
      overview: `Sky Ridge Roofing provides expert roofing services to Beaver Mountain area homeowners and businesses. Located in the Bear River Mountains near Logan Canyon, this area experiences heavy snowfall, strong winds, and extreme temperature fluctuations. Our experienced team understands the unique roofing challenges in this mountain region and uses premium materials designed to withstand harsh mountain weather conditions.`,
      whyChooseUs: `Our Beaver Mountain-area roofing service offers professional, reliable service to local homeowners and businesses. We use premium materials designed for mountain climates and provide expert installation that can handle heavy snow loads and extreme weather. With competitive pricing and fast service, we're the trusted choice for roofing needs in the Beaver Mountain region.`,
      localInfo: `The Beaver Mountain area experiences a high-altitude mountain climate with very cold, snowy winters and mild summers. Heavy snowfall accumulation, strong winds, and rapid temperature changes create unique challenges for roofs. We use materials and installation techniques specifically suited for mountain conditions, including enhanced snow load capacity and wind resistance.`,
      serviceAreas: `We provide roofing services throughout the Beaver Mountain area, including Logan, North Logan, Hyde Park, Smithfield, Hyrum, Providence, Nibley, Wellsville, Richmond, Lewiston, and all surrounding Cache County communities. We serve ZIP codes 84321, 84341, 84318, 84335, 84319, 84332, 84339, 84333, and 84320.`,
    },
  },
};

export async function generateStaticParams() {
  return INDEXABLE_CITY_SLUGS.map((slug) => ({ city: slug }));
}

export async function generateMetadata({ params }: { params: { city: string } }): Promise<Metadata> {
  const city = getCityData(params.city) || legacyCityData[params.city];
  if (!city) {
    return {
      title: 'City Not Found',
    };
  }

  const indexable = INDEXABLE_CITY_SLUG_SET.has(params.city);

  return {
    title: `Roofing Services in ${city.cityName}, ${city.state} | Sky Ridge Roofing`,
    description: `Expert roofing services in ${city.cityName}, ${city.state}. Roof replacement, repairs, and insurance claims. Free estimates. Licensed & insured.`,
    alternates: {
      canonical: canonicalUrl(`/locations/${params.city}`),
    },
    robots: {
      index: indexable,
      follow: true,
    },
    openGraph: {
      title: `${city.cityName} Roofing Services - Sky Ridge Roofing`,
      description: `Expert roofing services in ${city.cityName}, ${city.state}. Free estimates.`,
      type: 'website',
    },
  };
}

export default function CityPage({ params }: { params: { city: string } }) {
  // Try new cityData first, then fall back to legacy
  const newCityData = getCityData(params.city);
  const legacyData = legacyCityData[params.city];
  
  if (!newCityData && !legacyData) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">City Not Found</h1>
            <Link href="/locations" className="text-blue-600 hover:text-blue-800">
              View All Locations
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  // Use new cityData if available, otherwise use legacy
  const city = newCityData || legacyData;
  
  // Convert new cityData structure to template props if needed
  if (newCityData) {
    // Extract neighborhoods from businessDistricts for backward compatibility
    const neighborhoods = newCityData.businessDistricts.map(d => d.name);
    const zipCodes: string[] = []; // Will need to be added to cityData if needed
    
    return (
      <>
        <Header />
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: BUSINESS.name,
            legalName: BUSINESS.legalName,
            url: SITE_URL,
            telephone: BUSINESS.phone,
            areaServed: `${city.cityName}, ${city.state}`,
            geo: {
              '@type': 'GeoCoordinates',
              latitude: city.latitude,
              longitude: city.longitude,
            },
          }}
        />
        <CityPageTemplate 
          cityName={city.cityName}
          citySlug={city.citySlug}
          state={city.state}
          phoneNumber={city.phoneNumber}
          latitude={city.latitude}
          longitude={city.longitude}
          zipCodes={zipCodes}
          neighborhoods={neighborhoods}
          contentSections={{
            overview: city.contentSections.overview,
            whyChooseUs: city.contentSections.whyChooseUs,
            localInfo: city.contentSections.localInfo,
            serviceAreas: city.contentSections.serviceAreas,
          }}
          landmarks={newCityData.landmarks}
          businessDistricts={newCityData.businessDistricts}
          permitInfo={newCityData.permitInfo}
          roofingServices={newCityData.contentSections.roofingServices}
        />
        <Footer />
      </>
    );
  }

  // Use legacy data structure
  const legacyCity = legacyData!;
  return (
    <>
      <Header />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: BUSINESS.name,
          legalName: BUSINESS.legalName,
          url: SITE_URL,
          telephone: BUSINESS.phone,
          areaServed: `${legacyCity.cityName}, ${legacyCity.state}`,
          geo: {
            '@type': 'GeoCoordinates',
            latitude: legacyCity.latitude,
            longitude: legacyCity.longitude,
          },
        }}
      />
      <CityPageTemplate {...legacyCity} />
      <Footer />
    </>
  );
}

