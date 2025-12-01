"use client";

import { useState } from 'react';
import { track } from '@/app/components/analytics';

type Step = 'check-availability' | 1 | 2 | 3 | 4;

export default function BookClient() {
  const [step, setStep] = useState<Step>('check-availability');
  const [size, setSize] = useState<string>('');
  const [delivery, setDelivery] = useState<string>('');
  const [pickup, setPickup] = useState<string>('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [isCheckingAvailability, setIsCheckingAvailability] = useState(false);
  const [availabilityResult, setAvailabilityResult] = useState<'available' | 'unavailable' | null>(null);

  const canNext1 = Boolean(size);
  const canNext2 = Boolean(delivery && pickup);
  const canNext3 = Boolean(name && phone && address);

  // Utah zip codes for service area validation
  const utahZipCodes = [
    '84020', '84021', '84025', '84026', '84028', '84029', '84032', '84033', '84034', '84035', '84036', '84037', '84038', '84039', '84040', '84041', '84042', '84043', '84044', '84045', '84046', '84047', '84049', '84050', '84051', '84052', '84053', '84054', '84055', '84056', '84057', '84058', '84059', '84060', '84061', '84062', '84063', '84064', '84065', '84066', '84067', '84068', '84069', '84070', '84071', '84072', '84073', '84074', '84075', '84076', '84078', '84080', '84081', '84082', '84083', '84084', '84085', '84086', '84087', '84088', '84089', '84090', '84091', '84092', '84093', '84094', '84095', '84096', '84097', '84098', '84101', '84102', '84103', '84104', '84105', '84106', '84107', '84108', '84109', '84110', '84111', '84112', '84113', '84114', '84115', '84116', '84117', '84118', '84119', '84120', '84121', '84122', '84123', '84124', '84125', '84126', '84127', '84128', '84129', '84130', '84131', '84132', '84133', '84134', '84135', '84136', '84137', '84138', '84139', '84140', '84141', '84142', '84143', '84144', '84145', '84146', '84147', '84148', '84149', '84150', '84151', '84152', '84153', '84154', '84155', '84156', '84157', '84158', '84159', '84160', '84161', '84162', '84163', '84164', '84165', '84166', '84167', '84168', '84169', '84170', '84171', '84172', '84173', '84174', '84175', '84176', '84177', '84178', '84179', '84180', '84181', '84182', '84183', '84184', '84185', '84186', '84187', '84188', '84189', '84190', '84191', '84192', '84193', '84194', '84195', '84196', '84197', '84198', '84199', '84201', '84244', '84301', '84302', '84304', '84305', '84306', '84307', '84308', '84309', '84310', '84311', '84312', '84313', '84314', '84315', '84316', '84317', '84318', '84319', '84320', '84321', '84322', '84323', '84324', '84325', '84326', '84327', '84328', '84329', '84330', '84331', '84332', '84333', '84334', '84335', '84336', '84337', '84338', '84339', '84340', '84341', '84342', '84343', '84344', '84345', '84346', '84347', '84348', '84349', '84350', '84351', '84352', '84353', '84354', '84355', '84356', '84357', '84358', '84359', '84360', '84361', '84362', '84363', '84364', '84365', '84366', '84367', '84368', '84369', '84370', '84371', '84372', '84373', '84374', '84375', '84376', '84377', '84378', '84379', '84380', '84381', '84382', '84383', '84384', '84385', '84386', '84387', '84388', '84389', '84390', '84391', '84392', '84393', '84394', '84395', '84396', '84397', '84398', '84399', '84401', '84402', '84403', '84404', '84405', '84407', '84408', '84409', '84412', '84414', '84415', '84431', '84432', '84433', '84435', '84436', '84437', '84439', '84440', '84441', '84442', '84443', '84444', '84445', '84446', '84447', '84448', '84449', '84450', '84451', '84452', '84453', '84454', '84455', '84456', '84457', '84458', '84459', '84460', '84461', '84462', '84463', '84464', '84465', '84466', '84467', '84468', '84469', '84470', '84471', '84472', '84473', '84474', '84475', '84476', '84477', '84478', '84479', '84480', '84481', '84482', '84483', '84484', '84485', '84486', '84487', '84488', '84489', '84490', '84491', '84492', '84493', '84494', '84495', '84496', '84497', '84498', '84499', '84501', '84502', '84503', '84504', '84505', '84506', '84507', '84508', '84510', '84511', '84512', '84513', '84514', '84515', '84516', '84517', '84518', '84519', '84520', '84521', '84522', '84523', '84524', '84525', '84526', '84527', '84528', '84529', '84530', '84531', '84532', '84533', '84534', '84535', '84536', '84537', '84538', '84539', '84540', '84541', '84542', '84543', '84544', '84545', '84546', '84547', '84548', '84549', '84550', '84551', '84552', '84553', '84554', '84555', '84556', '84557', '84558', '84559', '84560', '84561', '84562', '84563', '84564', '84565', '84566', '84567', '84568', '84569', '84570', '84571', '84572', '84573', '84574', '84575', '84576', '84577', '84578', '84579', '84580', '84581', '84582', '84583', '84584', '84585', '84586', '84587', '84588', '84589', '84590', '84591', '84592', '84593', '84594', '84595', '84596', '84597', '84598', '84599', '84601', '84602', '84603', '84604', '84605', '84606', '84607', '84608', '84609', '84610', '84611', '84612', '84613', '84614', '84615', '84616', '84617', '84618', '84619', '84620', '84621', '84622', '84623', '84624', '84625', '84626', '84627', '84628', '84629', '84630', '84631', '84632', '84633', '84634', '84635', '84636', '84637', '84638', '84639', '84640', '84641', '84642', '84643', '84644', '84645', '84646', '84647', '84648', '84649', '84650', '84651', '84652', '84653', '84654', '84655', '84656', '84657', '84658', '84659', '84660', '84661', '84662', '84663', '84664', '84665', '84666', '84667', '84668', '84669', '84670', '84671', '84672', '84673', '84674', '84675', '84676', '84677', '84678', '84679', '84680', '84681', '84682', '84683', '84684', '84685', '84686', '84687', '84688', '84689', '84690', '84691', '84692', '84693', '84694', '84695', '84696', '84697', '84698', '84699', '84701', '84702', '84703', '84704', '84705', '84706', '84707', '84708', '84709', '84710', '84711', '84712', '84713', '84714', '84715', '84716', '84717', '84718', '84719', '84720', '84721', '84722', '84723', '84724', '84725', '84726', '84727', '84728', '84729', '84730', '84731', '84732', '84733', '84734', '84735', '84736', '84737', '84738', '84739', '84740', '84741', '84742', '84743', '84744', '84745', '84746', '84747', '84748', '84749', '84750', '84751', '84752', '84753', '84754', '84755', '84756', '84757', '84758', '84759', '84760', '84761', '84762', '84763', '84764', '84765', '84766', '84767', '84768', '84769', '84770', '84771', '84772', '84773', '84774', '84775', '84776', '84777', '84778', '84779', '84780', '84781', '84782', '84783', '84784', '84785', '84786', '84787', '84788', '84789', '84790', '84791', '84792', '84793', '84794', '84795', '84796', '84797', '84798', '84799', '84801', '84802', '84803', '84804', '84805', '84806', '84807', '84808', '84809', '84810', '84811', '84812', '84813', '84814', '84815', '84816', '84817', '84818', '84819', '84820', '84821', '84822', '84823', '84824', '84825', '84826', '84827', '84828', '84829', '84830', '84831', '84832', '84833', '84834', '84835', '84836', '84837', '84838', '84839', '84840', '84841', '84842', '84843', '84844', '84845', '84846', '84847', '84848', '84849', '84850', '84851', '84852', '84853', '84854', '84855', '84856', '84857', '84858', '84859', '84860', '84861', '84862', '84863', '84864', '84865', '84866', '84867', '84868', '84869', '84870', '84871', '84872', '84873', '84874', '84875', '84876', '84877', '84878', '84879', '84880', '84881', '84882', '84883', '84884', '84885', '84886', '84887', '84888', '84889', '84890', '84891', '84892', '84893', '84894', '84895', '84896', '84897', '84898', '84899', '84901', '84902', '84903', '84904', '84905', '84906', '84907', '84908', '84909', '84910', '84911', '84912', '84913', '84914', '84915', '84916', '84917', '84918', '84919', '84920', '84921', '84922', '84923', '84924', '84925', '84926', '84927', '84928', '84929', '84930', '84931', '84932', '84933', '84934', '84935', '84936', '84937', '84938', '84939', '84940', '84941', '84942', '84943', '84944', '84945', '84946', '84947', '84948', '84949', '84950', '84951', '84952', '84953', '84954', '84955', '84956', '84957', '84958', '84959', '84960', '84961', '84962', '84963', '84964', '84965', '84966', '84967', '84968', '84969', '84970', '84971', '84972', '84973', '84974', '84975', '84976', '84977', '84978', '84979', '84980', '84981', '84982', '84983', '84984', '84985', '84986', '84987', '84988', '84989', '84990', '84991', '84992', '84993', '84994', '84995', '84996', '84997', '84998', '84999'
  ];

  const checkAvailability = async () => {
    if (!address || !zipCode) return;
    
    setIsCheckingAvailability(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Check if zip code is in Utah service area
    const isAvailable = utahZipCodes.includes(zipCode);
    setAvailabilityResult(isAvailable ? 'available' : 'unavailable');
    setIsCheckingAvailability(false);
    
    if (isAvailable) {
      setStep(1);
      try {
        track('funnel', 'availability_check_success', { address, zipCode });
      } catch {}
    }
  };

  async function submit() {
    await fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        dumpsterSize: size,
        deliveryDate: delivery,
        pickupDate: pickup,
        firstName: name,
        phone,
        additionalInfo: `Booking request via /book. Address: ${address}`,
        source: 'BookNow',
      }),
    });
    setStep(4);
  }

  if (step === 'check-availability') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0d9488] via-teal-700 to-[#0d9488] relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 bg-cover bg-center" style={{
          backgroundImage: 'url(/images/optimized/icondumpsters_logo_main_logo_brand.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
          <div className="absolute inset-0 bg-[#0d9488] bg-opacity-90"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
          <div className="w-full max-w-4xl">
            {/* Header Section */}
            <div className="text-center mb-12">
              <div className="inline-block bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl p-6 mb-8 shadow-2xl">
                <img 
                  src="https://icondumpsters.com/images/optimized/icondumpsters_logo_main_logo_brand.webp" 
                  alt="Icon Dumpsters" 
                  className="h-16 w-auto mx-auto mb-4"
                />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  Book Your Dumpster Rental
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
                  Service Availability Check
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Let's verify we can serve your location and get you started with your dumpster rental
                </p>
              </div>
            </div>

            {/* Main Form Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Card - Company Info */}
              <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white border-opacity-20">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-[#0d9488] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Icon Dumpsters</h2>
                  <p className="text-gray-600">Professional Dumpster Rental Services</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-gray-50 rounded-xl">
                    <div className="w-10 h-10 bg-[#0d9488] rounded-full flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Call Now</p>
                      <a href="tel:(801) 918-6000" className="text-lg font-bold text-[#0d9488] hover:text-teal-700 transition-colors">
                        (801) 918-6000
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-4 bg-gray-50 rounded-xl">
                    <div className="w-10 h-10 bg-[#0d9488] rounded-full flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email Us</p>
                      <a href="mailto:info@icondumpsters.com" className="text-lg font-bold text-[#0d9488] hover:text-teal-700 transition-colors">
                        info@icondumpsters.com
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-[#0d9488] bg-opacity-10 rounded-xl border border-[#0d9488] border-opacity-20">
                  <div className="flex items-center text-[#0d9488]">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm font-medium">24/7 Customer Support</span>
                  </div>
                </div>
              </div>

              {/* Right Card - Address Form */}
              <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white border-opacity-20">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-teal-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Address Verification</h2>
                  <p className="text-gray-600">Enter your address to check service availability</p>
                </div>

                <form onSubmit={(e) => { e.preventDefault(); checkAvailability(); }} className="space-y-6">
                  {/* Street Address Input */}
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                      Street Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <input
                        id="address"
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Enter your street address"
                        className="w-full pl-10 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d9488] focus:border-transparent focus:bg-white transition-all duration-200"
                        required
                      />
                    </div>
                  </div>

                  {/* Zip Code Input */}
                  <div>
                    <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-2">
                      Zip Code
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <input
                        id="zipCode"
                        type="text"
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                        placeholder="Enter zip code"
                        maxLength={5}
                        className="w-full pl-10 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d9488] focus:border-transparent focus:bg-white transition-all duration-200"
                        required
                      />
                    </div>
                  </div>

                  {/* Verify Address Button */}
                  <button
                    type="submit"
                    disabled={!address || !zipCode || isCheckingAvailability}
                    className="w-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-600 text-white py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-xl flex items-center justify-center space-x-3"
                  >
                    {isCheckingAvailability ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Verifying Address...</span>
                      </>
                    ) : (
                      <>
                        <span>Verify Address</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>

                {/* Error Message */}
                {availabilityResult === 'unavailable' && (
                  <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                    <div className="flex items-center text-red-800">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm font-medium">Service not available in this area</span>
                    </div>
                    <p className="text-sm text-red-600 mt-1">
                      We currently don't serve this location. Please contact us for alternative solutions.
                    </p>
                  </div>
                )}

                {/* Service Area Info */}
                <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-xl">
                  <div className="flex items-start text-trust-blue-dark">
                    <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-sm font-medium mb-1">Service Area</p>
                      <p className="text-xs text-trust-blue">
                        We proudly serve all of Utah including Salt Lake City, Provo, Ogden, and surrounding areas. 
                        Most locations within Utah receive same-day or next-day delivery.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom CTA Section */}
            <div className="text-center mt-12">
              <div className="inline-block bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
                <p className="text-gray-600 mb-4">Need immediate assistance?</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="tel:(801) 918-6000" 
                    className="inline-flex items-center justify-center bg-[#0d9488] text-white px-6 py-3 rounded-xl font-semibold hover:bg-teal-700 transition-colors shadow-lg hover:shadow-xl"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call (801) 918-6000
                  </a>
                  <a 
                    href="https://icondumpsters.com/#quote-form" 
                    className="inline-flex items-center justify-center bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-action-orange transition-colors shadow-lg hover:shadow-xl"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    Get Free Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Book Your Dumpster</h1>
        <div className="mb-6 text-sm text-gray-600">Step {step} of 4</div>

        {step === 1 && (
          <div className="bg-white rounded-xl shadow border p-6">
            <h2 className="text-xl font-semibold mb-4">Select Dumpster Size</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {['15', '20', '30'].map((s) => (
                <label
                  key={s}
                  className={`border rounded-lg p-4 cursor-pointer ${
                    size === s ? 'border-[#0d9488] bg-teal-50' : 'border-gray-200'
                  }`}
                >
                  <input
                    type="radio"
                    name="size"
                    className="sr-only"
                    checked={size === s}
                    onChange={() => setSize(s)}
                  />
                  <div className="font-semibold text-gray-900">{s} Yard</div>
                  <div className="text-xs text-gray-600">Popular choice</div>
                </label>
              ))}
            </div>
            <div className="mt-6 flex justify-end">
              <button
                disabled={!canNext1}
                onClick={() => {
                  setStep(2);
                  try {
                    track('funnel', 'book_step_1_next', { size });
                  } catch {}
                }}
                className="px-5 py-2 rounded-lg bg-[#0d9488] text-white disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="bg-white rounded-xl shadow border p-6">
            <h2 className="text-xl font-semibold mb-4">Choose Dates</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="deliveryDate" className="block text-sm font-medium text-gray-700 mb-1">Delivery Date</label>
                <input
                  type="date"
                  id="deliveryDate"
                  value={delivery}
                  onChange={(e) => setDelivery(e.target.value)}
                  className="w-full border rounded-lg px-3 py-2"
                />
              </div>
              <div>
                <label htmlFor="pickupDate" className="block text-sm font-medium text-gray-700 mb-1">Pickup Date</label>
                <input
                  type="date"
                  id="pickupDate"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  className="w-full border rounded-lg px-3 py-2"
                />
              </div>
            </div>
            <div className="mt-6 flex justify-between">
              <button onClick={() => setStep(1)} className="px-5 py-2 rounded-lg border">
                Back
              </button>
              <button
                disabled={!canNext2}
                onClick={() => {
                  setStep(3);
                  try {
                    track('funnel', 'book_step_2_next', { delivery, pickup });
                  } catch {}
                }}
                className="px-5 py-2 rounded-lg bg-[#0d9488] text-white disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="bg-white rounded-xl shadow border p-6">
            <h2 className="text-xl font-semibold mb-4">Your Info</h2>
            <div className="space-y-3">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full name"
                className="w-full border rounded-lg px-3 py-2"
              />
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone"
                className="w-full border rounded-lg px-3 py-2"
              />
              <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Delivery address"
                className="w-full border rounded-lg px-3 py-2"
              />
            </div>
            <div className="mt-6 flex justify-between">
              <button onClick={() => setStep(2)} className="px-5 py-2 rounded-lg border">
                Back
              </button>
              <button
                disabled={!canNext3}
                onClick={async () => {
                  try {
                    track('form', 'book_submit', { 
                      size, 
                      delivery, 
                      pickup,
                      sessionId: sessionStorage.getItem('sessionId') || 'unknown',
                      utm: JSON.parse(sessionStorage.getItem('utm')?.trim() || '{}'),
                      path: window.location.pathname,
                      referrer: document.referrer
                    });
                  } catch {}
                  await submit();
                }}
                className="px-5 py-2 rounded-lg bg-[#0d9488] text-white disabled:opacity-50"
              >
                Submit
              </button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="bg-white rounded-xl shadow border p-6 text-center">
            <h2 className="text-2xl font-bold mb-2 text-gray-900">Request Received</h2>
            <p className="text-gray-700">
              An Icon expert will get back to you, usually within 30 minutes. For immediate help call{' '}
              <a href="tel:801-918-6000" className="text-[#0d9488] underline">
                (801) 918‑6000
              </a>
              .
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
