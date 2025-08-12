    let isArabic = true;

    // Language content dictionary
    const translations = {
        // Navbar
        'home': {
            ar: 'الرئيسية',
            en: 'Home'
        },
        'aboutUs': {
            ar: 'من نحن',
            en: 'About Us'
        },
        'services': {
            ar: 'خدماتنا',
            en: 'Our Services'
        },
        'drivers': {
            ar: 'انضم ككابتن',
            en: 'Become a Driver'
        },
        'contact': {
            ar: 'تواصل معنا',
            en: 'Contact Us'
        },
        'bookNow': {
            ar: 'احجز الآن',
            en: 'Book Now'
        },
        
        // Hero Section
        'welcomeToTaxiF': {
            ar: 'TaxiF مرحبًا بك في',
            en: 'Welcome to TaxiF'
        },
        'heroTitle': {
            ar: 'هل تبحث عن وسيلة تنقل موثوقة وسريعة؟',
            en: 'Looking for reliable and fast transportation?'
        },
        'heroDescription': {
            ar: 'سواء كنت بحاجة إلى توصيلة سريعة، أو كابتن خاص، أو نقل طلبات، توفر لك جميع أنواع النقليات بسهولة وأمان.',
            en: 'Whether you need a quick ride, a private driver, or delivery services, we provide all types of transportation easily and safely.'
        },
        'learnMore': {
            ar: 'اعرف المزيد',
            en: 'Learn More'
        },
        
        // Service Type Dropdown
        'serviceType': {
            ar: 'نوع الخدمة',
            en: 'Service Type'
        },
        'chooseService': {
            ar: 'اختر نوع الخدمة',
            en: 'Choose Service Type'
        },
        'taxi': {
            ar: 'سيارة',
            en: 'Taxi'
        },
        'privateDriver': {
            ar: 'كابتن خاص',
            en: 'Private Driver'
        },
        'delivery': {
            ar: 'توصيل طلبات',
            en: 'Delivery'
        },
        'transportation': {
            ar: 'نقل بضائع',
            en: 'Goods Transportation'
        },
        'pickupLocation': {
            ar: 'مكان الانطلاق',
            en: 'Pickup Location'
        },
        
        'enterPickup': {
            ar: 'اكتب مكان الانطلاق',
            en: 'Enter pickup location'
        },
        'tripDate': {
            ar: 'تاريخ الرحلة',
            en: 'Trip Date'
        },
        'destination': {
            ar: 'الوجهة',
            en: 'Destination'
        },
        'enterDestination': {
            ar: 'اكتب الوجهة',
            en: 'Enter destination'
        },
        'returnTime': {
            ar: 'وقت العودة',
            en: 'Return Time'
        },
        
        // About Us Section
        'aboutUsTitle': {
            ar: 'من نحن',
            en: 'About Us'
        },
        'aboutUsHeading': {
            ar: 'شريكك الموثوق لرحلاتك بكل سهولة',
            en: 'Your trusted partner for easy car rental'
        },
        'aboutUsDescription': {
            ar: 'في TaxiF نؤمن بتوفير خدمة نقل احترافية، آمنة وسهلة الوصول. سواء كنت بحاجة إلى لرحلة للعمل أو الترفيه، نوفر لك كابتن موثوقين لتوصيلك الي جهتك بسرعة وراحة.',
            en: 'At TaxiF, we believe in providing professional, safe and accessible car rental services. Whether you need a car for work or tourism, we offer you the best options with minimal effort.'
        },
        'easyBooking': {
            ar: 'عملية حجز الرحلة سهلة وسريعة',
            en: 'Easy and fast booking process'
        },
        'easyBookingDesc': {
            ar: 'قمنا بتبسيط خطوات طلب الرحلة لتصبح أكثر سلاسة وأمانًا، مما يمنحك تجربة مريحة دون أي تعقيدات.',
            en: 'We have simplified the booking steps to be smoother and safer, giving you a comfortable experience without any complications.'
        },
        'easyPickup': {
            ar: 'راحة في الوصول والانطلاق',
            en: 'Easy pickup and return'
        },
        'easyPickupDesc': {
            ar: 'نقدم لك تجربة سلسة في الانطلاق من موقعك والوصول الي وجهتك في الوقت الذي يناسبك مع متابعة دقيقة للرحلة.',
            en: 'We provide a smooth experience when picking up or returning the car, at the place and time that suits you.'
        },
        
        // Services Section
        'ourServices': {
            ar: 'خدماتنا',
            en: 'Our Services'
        },
        'servicesHeading': {
            ar: 'استمتع مع <span>Taxi<span style="color: #fabe12;">F</span></span> بتجربة نقل متكاملة تجمع بين الراحة، السرعة، والأسعار المناسبة.',
            en: 'Enjoy a complete transportation experience with <span>Taxi<span style="color: #fabe12;">F</span></span> that combines comfort, speed, and affordable prices.'
        },
        'instantTaxi': {
            ar: 'طلب سيارة فوري',
            en: 'Instant car Booking'
        },
        'instantTaxiDesc': {
            ar: 'احجز رحلتك بسهولة عبر تطبيق أو موقع TaxiF، وكابتننا يصل إليك في دقائق.',
            en: 'Book your trip easily through the TaxiF app or website, and our driver will reach you in minutes.'
        },
        'businessTransport': {
            ar: 'خدمات النقل للأعمال',
            en: 'Business Transportation'
        },
        'businessTransportDesc': {
            ar: 'حلول نقل مرنة للشركات والمؤسسات مع خطط مخصصة لتلبية احتياجات فرق العمل.',
            en: 'Flexible transportation solutions for companies and institutions with customized plans to meet work team needs.'
        },
        'airportService': {
            ar: 'التوصيل من وإلى المطار',
            en: 'Airport Pickup and Drop-off'
        },
        'airportServiceDesc': {
            ar: 'ابدأ رحلتك أو اختتمها براحة تامة مع خدمة التوصيل الفوري من وإلى المطار.',
            en: 'Start or end your journey in complete comfort with instant airport pickup and drop-off service.'
        },
        'privateDriverService': {
            ar: 'كابتن خاص بالطلب',
            en: 'Private Driver on Demand'
        },
        'privateDriverServiceDesc': {
            ar: 'كابتنون محترفون لمرافقتك في تنقلاتك اليومية أو رحلاتك الخاصة داخل وخارج المدينة.',
            en: 'Professional drivers to accompany you on your daily commutes or private trips within and outside the city.'
        },
        'servicesFooter': {
            ar: 'مع TaxiF، استمتع بخدمات نقل وتأجير متنوعة من السيارات الاقتصادية إلى الفاخرة، مع خطط مرنة تناسب الجميع.',
            en: 'With TaxiF, enjoy diverse transportation and rental services from economy to luxury cars, with flexible plans for everyone.'
        },
        'viewAllServices': {
            ar: 'عرض جميع الخدمات',
            en: 'View All Services'
        },
        
        // Fleet Section
        'ourFleet': {
            ar: 'أسطولنا',
            en: 'Our Fleet'
        },
        'fleetHeading': {
            ar: ' استكشف أفضل السيارات مع <span>Taxi<span style="color: #fabe12;">F</span></span>',
            en: 'Explore the best cars with <span>Taxi<span style="color: #fabe12;">F</span></span>'
        },
        'economyCar': {
            ar: 'سيارة الاقتصادية',
            en: 'Economy Car'
        },
        'economyCarSub': {
            ar: 'توفر - أداء وأناقة',
            en: 'Affordable - Performance and Style'
        },
        'familyCar': {
            ar: 'سيارة العائلية',
            en: 'Family Car'
        },
        'familyCarSub': {
            ar: 'العائلية - فخامة بلا حدود',
            en: 'Family - Unlimited Luxury'
        },
        'luxuryCar': {
            ar: 'سيارة الفاخرة',
            en: 'Luxury Car'
        },
        'luxuryCarSub': {
            ar: 'الفاخرة - لعشاق السرعة',
            en: 'Luxury - For Speed Lovers'
        },
        'standardCar': {
            ar: 'سيارة عادية',
            en: 'Standard Car'
        },
        'standardCarSub': {
            ar: 'عادية - مثالية للمدينة',
            en: 'Standard - Perfect for the City'
        },
        'largeFamilyCar': {
            ar: 'سيارة العائلية الكبيرة',
            en: 'Large Family Car'
        },
        'largeFamilyCarSub': {
            ar: 'العائلية - للمجموعات الكبيرة',
            en: 'Family - For Large Groups'
        },
        'fourWheelDrive': {
            ar: 'سيارة اقتصادية',
            en: '4x4 Vehicle'
        },
        'fourWheelDriveSub': {
            ar: 'الدفع الرباعي - مثالية للمدينة',
            en: '4x4 - Perfect for the City'
        },
        'passengers': {
            ar: 'ركاب',
            en: 'Passengers'
        },
        'doors': {
            ar: 'أبواب',
            en: 'Doors'
        },
        'bags': {
            ar: 'شنط',
            en: 'Bags'
        },
        'automatic': {
            ar: 'أوتوماتيك',
            en: 'Automatic'
        },
        
        // How It Works (Passengers)
        'howPassengersUse': {
            ar: 'كيف يستخدام ركاب TaxiF ؟',
            en: 'How Passengers Use TaxiF?'
        },
        'passengersHeading': {
            ar: 'كل ما تحتاجه في تنقلاتك، في تطبيق واحد',
            en: 'Everything you need for your trips in one app'
        },
        'passengersDescription': {
            ar: 'احجز سيارة أجرة بسهولة عبر المتصفح أو التطبيق، تابع موقع الكابتن مباشر، ادفع بالطريقة اللي تريحك، واعرف تكلفة الرحلة قبل الانطلاق.',
            en: 'Book a taxi easily through the browser or app, track the driver\'s location in real-time, pay the way you prefer, and know the trip cost before starting.'
        },
        'bookFromApp': {
            ar: 'إحجز من المتصفح أو التطبيق',
            en: 'Book from browser or app'
        },
        'bookFromAppDesc': {
            ar: 'افتح تطبيق TaxiF أو المتصفح، اختر موقعك ووجهتك، ثم اضغط "طلب" لتبدأ رحلتك فورًا.',
            en: 'Open the TaxiF app or browser, choose your location and destination, then click "Request" to start your trip immediately.'
        },
        'trackCar': {
            ar: 'تتبع السيارة لحظة بلحظة',
            en: 'Track the car in real-time'
        },
        'trackCarDesc': {
            ar: 'شاهد تحرك الكابتن مباشرة على الخريطة من لحظة تأكيد الطلب حتى الوصول إليك.',
            en: 'Watch the driver\'s movement directly on the map from the moment the request is confirmed until arrival.'
        },
        'flexiblePayment': {
            ar: 'الدفع والتقييم بمرونة',
            en: 'Flexible payment and rating'
        },
        'flexiblePaymentDesc': {
            ar: 'ادفع نقدًا، ببطاقة، أو باستخدام مكافآتك. يظهر لك السعر التقريبي قبل الرحلة، ويمكنك تقييم الكابتن بعد الانتهاء.',
            en: 'Pay with cash, card, or using your rewards. You see the approximate price before the trip, and you can rate the driver after finishing.'
        },
        'passengerApp': {
            ar: 'تنزيل التطبيق للركاب',
            en: 'Download Passenger App'
        },
        'dailyUsers': {
            ar: 'مستخدم يوميًا',
            en: 'daily users'
        },
        
        // Become Driver Section
        'joinTaxiF': {
            ar: 'كن جزءًا من فريق TaxiF',
            en: 'Join TaxiF Team'
        },
        'driverHeading': {
            ar: 'اشترك ككابتن معنا الأن واكسب المال',
            en: 'Subscribe as a driver with us now and earn money'
        },
        'driverDescription': {
            ar: 'ابدأ رحلتك المهنية بسهولة مع TaxiF بدون أي تعقيدات، وحقق دخلًا مرنًا يناسب وقتك ونوع مركبتك.',
            en: 'Start your professional journey easily with TaxiF without any complications, and achieve flexible income that suits your time and vehicle type.'
        },
        'noUpfrontPayment': {
            ar: 'لا حاجة لدفعة أولى',
            en: 'No upfront payment needed'
        },
        'noUpfrontPaymentDesc': {
            ar: 'ابدأ القيادة فورًا دون أي التزام مالي مسبق، فقط قدم مستنداتك الأساسية وابدأ الكسب.',
            en: 'Start driving immediately without any prior financial commitment, just submit your basic documents and start earning.'
        },
        'flexibleSchedule': {
            ar: 'جدول عمل مرن وحر',
            en: 'Flexible and free work schedule'
        },
        'flexibleScheduleDesc': {
            ar: 'اختر أوقات العمل التي تناسبك، وحقق دخلًا إضافيًا أو ثابتًا كما ترغب، دون قيود.',
            en: 'Choose work times that suit you, and achieve additional or fixed income as you wish, without restrictions.'
        },
        'noMandatoryOrders': {
            ar: 'بدون أوامر إلزامية ونقبل جميع المركبات',
            en: 'No mandatory orders and we accept all vehicles'
        },
        'noMandatoryOrdersDesc': {
            ar: 'قد بسيارتك أياً كان نوعها، ولا يوجد حد أدنى للطلبات أو التزامات إجبارية. نحن نؤمن بالمرونة.',
            en: 'Drive your car whatever its type, and there is no minimum for orders or mandatory commitments. We believe in flexibility.'
        },
        'driverApp': {
            ar: 'تنزيل التطبيق للكابتنين',
            en: 'Download Driver App'
        },
        'driversEarning': {
            ar: 'كابتن يربح معنا',
            en: 'drivers earning with us'
        },
        
        // Video Section
        'watchFullVideo': {
            ar: 'شاهد الفيديو الكامل',
            en: 'Watch Full Video'
        },
        'videoHeading': {
            ar: 'اكتشف بنفسك مدي سهولة وراحة طلب الرحلة مع <span>Taxi<span style="color: #fabe12;">F</span></span>',
            en: 'Discover how easy and comfortable it is to rent a car with <span>Taxi<span style="color: #fabe12;">F</span></span>'
        },
        
        // FAQ Section
        'faq': {
            ar: 'الأسئلة الشائعة',
            en: 'FAQs'
        },
        'faqHeading': {
            ar: 'كل ما تحتاج معرفته عن خدمات <span>Taxi<span style="color: #fabe12;">F</span></span>',
            en: 'Everything you need to know about <span>Taxi<span style="color: #fabe12;">F</span></span> services'
        },
        'howToBook': {
            ar: 'كيف أستطيع حجز سيارة؟',
            en: 'How can I book a car or taxi?'
        },
        'howToBookAnswer': {
            ar: 'يمكنك الحجز بسهولة عبر موقعنا أو تطبيق TaxiF، اختر نوع الخدمة، حدد موقعك ووجهتك، وسيصل الكابتن في دقائق.',
            en: 'You can book easily through our website or TaxiF app, choose the service type, select your location and destination, and the driver will arrive in minutes.'
        },
        'ageLimit': {
            ar: 'هل هناك حد أدنى للعمر لاستخدام الخدمة؟',
            en: 'Is there a minimum age to use the service?'
        },
        'ageLimitAnswer': {
            ar: 'لا ، الخدمة متاحة للجميع وفوق الشروط والأحكام',
            en: 'No, service to all and above terms and conditions'
        },
        'paymentMethods': {
            ar: 'ما هي طرق الدفع المتاحة؟',
            en: 'What payment methods are available?'
        },
        'paymentMethodsAnswer': {
            ar: 'نقبل الدفع نقدًا عند الوصول، أو عبر بطاقات الائتمان والخصم، وأيضًا المحافظ الإلكترونية المعتمدة.',
            en: 'We accept cash payment upon arrival, or via credit and debit cards, as well as approved e-wallets.'
        },
        
        // Testimonials
        'testimonials': {
            ar: 'آراء العملاء',
            en: 'Testimonials'
        },
        'testimonialsHeading': {
            ar: 'ماذا يقول عملاؤنا عن <span>Taxi<span style="color: #fabe12;">F</span></span>',
            en: 'What our customers say about <span>Taxi<span style="color: #fabe12;">F</span></span>'
        },
        'testimonial1': {
            ar: 'خدمة ممتازة! الكابتن وصل في الوقت تمامًا وكانت السيارة نظيفة ومريحة. أنصح باستخدام TaxiF.',
            en: 'Excellent service! The driver arrived right on time and the car was clean and comfortable. I recommend using TaxiF.'
        },
        'testimonial2': {
            ar: 'تجربتي مع TaxiF كانت سهلة وسريعة، التطبيق واضح والكابتن كان محترف جدًا.',
            en: 'My experience with TaxiF was easy and fast, the app is clear and the driver was very professional.'
        },
        'testimonial3': {
            ar: 'التجربة كانت مريحة والكابتن محترف، والسيارة نظيفة ومجهزة بالكامل.',
            en: 'The experience was comfortable, the driver was professional, and the car was clean and fully equipped.'
        },
        'testimonial4': {
            ar: 'أستخدم TaxiF يوميًا للذهاب للعمل، دائمًا في الوقت، وكابتنين محترمين.',
            en: 'I use TaxiF daily to go to work, always on time, and respectful drivers.'
        },
        
        // CTA Section
        'needRide': {
            ar: 'محتاج توصيلة بسرعة؟ احجز سيارةك الآن مع <span>Taxi<span style="color: #fabe12;">F</span></span>!',
            en: 'Need a quick ride? Book your taxi now with <span>Taxi<span style="color: #fabe12;">F</span></span>!'
        },
        'ctaDescription': {
            ar: 'فريق خدمة العملاء متواجد دائمًا لخدمتك على مدار الساعة. لا تتردد في التواصل معنا لأي استفسارات أو دعم.',
            en: 'The customer service team is always available to serve you around the clock. Do not hesitate to contact us for any inquiries or support.'
        },
        'contactUsNow': {
            ar: 'تواصل معنا الآن',
            en: 'Contact Us Now'
        },
        
        // Footer Section
        'footerDescription': {
            ar: 'استمتع بسهولة وراحة تأجير السيارات مع TaxiF – خيارك الموثوق في التنقل.',
            en: 'Enjoy the ease and comfort of car rental with TaxiF - your trusted choice for transportation.'
        },
        'legalPolicies': {
            ar: 'السياسات القانونية',
            en: 'Legal Policies'
        },
        'privacyPolicy': {
            ar: 'سياسة الخصوصية',
            en: 'Privacy Policy'
        },
        'cancellationPolicy': {
            ar: 'سياسة الإلغاء',
            en: 'Cancellation Policy'
        },
        'paymentPolicy': {
            ar: 'سياسة الدفع',
            en: 'Payment Policy'
        },
        'terms': {
            ar: 'الشروط',
            en: 'Terms'
        },
        'quickLinks': {
            ar: 'روابط سريعة',
            en: 'Quick Links'
        },
        'subscribeNewsletter': {
            ar: 'قم بتنزيل التطبيق الأن',
            en: 'Download the app'
        },
        'driverr': {
            ar: 'للكابتن',
            en: 'drivers',
        },
        'customer': {
            ar: 'للركاب',
            en: 'passengers',
        },
        'enterEmail': {
            ar: 'البريد الإلكتروني ...',
            en: 'Email ...'
        },
        'copyright': {
            ar: '© 2025 TaxiF . جميع الحقوق محفوظة.',
            en: '© 2025 TaxiF . All rights reserved.'
        },
        'dragText': {
            ar: 'اسحب',
            en: 'Drag'
        },
        'economyCar': {
            ar: 'سيارة الاقتصادية',
            en: 'Economy Car'
        },
        'economyCarSub': {
            ar: 'توفر - أداء وأناقة',
            en: 'Affordable - Performance & Style'
        },
        'familyCar': {
            ar: 'سيارة العائلية',
            en: 'Family Car'
        },
        'familyCarSub': {
            ar: 'العائلية - فخامة بلا حدود',
            en: 'Family - Unlimited Luxury'
        },
        'luxuryCar': {
            ar: 'سيارة الفاخرة',
            en: 'Luxury Car'
        },
        'luxuryCarSub': {
            ar: 'الفاخرة - لعشاق السرعة',
            en: 'Luxury - For Speed Lovers'
        },
        'standardCar': {
            ar: 'سيارة عادية',
            en: 'Standard Car'
        },
        'standardCarSub': {
            ar: 'عادية - مثالية للمدينة',
            en: 'Standard - Perfect for City'
        },
        'largeFamilyCar': {
            ar: 'سيارة العائلية الكبيرة',
            en: 'Large Family Car'
        },
        'largeFamilyCarSub': {
            ar: 'العائلية - للمجموعات الكبيرة',
            en: 'Family - For Large Groups'
        },
        'fourWheelDrive': {
            ar: 'الدفع الرباعي',
            en: '4x4 Vehicle'
        },
        'fourWheelDriveSub': {
            ar: 'الدفع الرباعي - مثالية للمدينة',
            en: '4x4 - Perfect for City'
        },
        'passengers': {
            ar: 'ركاب',
            en: 'Passengers'
        },
        'doors': {
            ar: 'أبواب',
            en: 'Doors'
        },
        'bags': {
            ar: 'شنط',
            en: 'Bags'
        },
        'automatic': {
            ar: 'أوتوماتيك',
            en: 'Automatic'
        },
        'economyCarsTitle': {
            ar: 'السيارات الاقتصادية',
            en: 'Economy Cars'
        },
        'familyCarsTitle': {
            ar: 'السيارات العائلية',
            en: 'Family Cars'
        },
        'luxuryCarsTitle': {
            ar: 'السيارات الفاخرة / VIP',
            en: 'Luxury / VIP Cars'
        },
        'smallCarsTitle': {
            ar: 'السيارات الصغيرة',
            en: 'Small Cars'
        },
        'largeFamilyCarsTitle': {
            ar: 'السيارات العائلية الكبيرة',
            en: 'Large Family Cars'
        },
        
        // Luxury Collection Translations
        'featuredCars': {
            ar: 'سارات مميزة',
            en: 'Featured Cars'
        },
        'viewText': {
            ar: 'View',
            en: 'View'
        }
    };

    function toggleLanguage() {
        isArabic = !isArabic;
        
        // Toggle language button text
        document.getElementById('langText').textContent = isArabic ? 'EN' : 'Ar';
        document.getElementById('langTextMobile').textContent = isArabic ? 'EN' : 'Ar';
        
        // Update all elements with translations
        updateLanguageContent();
    }

    function updateLanguageContent() {
        // Update all elements with data attributes
        const elements = document.querySelectorAll('[data-ar][data-en]');
        elements.forEach(element => {
            element.textContent = isArabic ? element.getAttribute('data-ar') : element.getAttribute('data-en');
        });
        
        // Update the drag text in the swiper wrapper
        const swiperWrapper = document.querySelector('.swiper-wrapper');
        if (swiperWrapper) {
            swiperWrapper.setAttribute('data-cursor-text', isArabic ? translations.dragText.ar : translations.dragText.en);
        }
        
        // Update direction of the document    
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            navbar.setAttribute('dir', isArabic ? 'rtl' : 'ltr'); 
        }
        
        // Manually update other elements that don't have data attributes
        // Navbar links
        document.querySelectorAll('.nav-link')[0].textContent = isArabic ? translations.home.ar : translations.home.en;
        document.querySelectorAll('.nav-link')[1].textContent = isArabic ? translations.aboutUs.ar : translations.aboutUs.en;
        document.querySelectorAll('.nav-link')[2].textContent = isArabic ? translations.services.ar : translations.services.en;
        document.querySelectorAll('.nav-link')[3].textContent = isArabic ? translations.drivers.ar : translations.drivers.en;
        document.querySelectorAll('.nav-link')[4].textContent = isArabic ? translations.contact.ar : translations.contact.en;

        
        document.querySelector('.nav-fotters1').textContent = isArabic ? translations.home.ar : translations.home.en;
        document.querySelector('.nav-fotters2').textContent = isArabic ? translations.aboutUs.ar : translations.aboutUs.en;
        document.querySelector('.nav-fotters3').textContent = isArabic ? translations.services.ar : translations.services.en;
        document.querySelector('.nav-fotters4').textContent = isArabic ? translations.contact.ar : translations.contact.en;
        
        // Book now button
        document.querySelector('.header-btn a').textContent = isArabic ? translations.bookNow.ar : translations.bookNow.en;
        
        // Hero section
        document.querySelector('.hero-content h3').textContent = isArabic ? translations.welcomeToTaxiF.ar : translations.welcomeToTaxiF.en;
        document.querySelector('.hero-content h1').textContent = isArabic ? translations.heroTitle.ar : translations.heroTitle.en;
        document.querySelector('.hero-content p').textContent = isArabic ? translations.heroDescription.ar : translations.heroDescription.en;
        document.querySelectorAll('.hero-content-body a')[0].textContent = isArabic ? translations.bookNow.ar : translations.bookNow.en;
        document.querySelectorAll('.hero-content-body a')[1].textContent = isArabic ? translations.learnMore.ar : translations.learnMore.en;
        
        // Service form
        document.querySelectorAll('.rent-details-content h3')[0].textContent = isArabic ? translations.serviceType.ar : translations.serviceType.en;
        document.querySelector('.rent-details-form option[disabled]').textContent = isArabic ? translations.chooseService.ar : translations.chooseService.en;
        document.querySelectorAll('.rent-details-form option')[1].textContent = isArabic ? translations.taxi.ar : translations.taxi.en;
        document.querySelectorAll('.rent-details-form option')[2].textContent = isArabic ? translations.privateDriver.ar : translations.privateDriver.en;
        document.querySelectorAll('.rent-details-form option')[3].textContent = isArabic ? translations.delivery.ar : translations.delivery.en;
        document.querySelectorAll('.rent-details-form option')[4].textContent = isArabic ? translations.transportation.ar : translations.transportation.en;
        document.querySelectorAll('.rent-details-content h3')[1].textContent = isArabic ? translations.pickupLocation.ar : translations.pickupLocation.en;
        document.querySelectorAll('.form-control')[0].placeholder = isArabic ? translations.enterPickup.ar : translations.enterPickup.en;
        document.querySelectorAll('.rent-details-content h3')[2].textContent = isArabic ? translations.tripDate.ar : translations.tripDate.en;
        document.querySelectorAll('.rent-details-content h3')[3].textContent = isArabic ? translations.destination.ar : translations.destination.en;
        document.querySelectorAll('.form-control')[1].placeholder = isArabic ? translations.enterDestination.ar : translations.enterDestination.en;
        document.querySelectorAll('.rent-details-content h3')[4].textContent = isArabic ? translations.returnTime.ar : translations.returnTime.en;
        
        // About Us section
        document.querySelector('.about-content h3').textContent = isArabic ? translations.aboutUsTitle.ar : translations.aboutUsTitle.en;
        document.querySelector('.about-content h2').textContent = isArabic ? translations.aboutUsHeading.ar : translations.aboutUsHeading.en;
        document.querySelectorAll('.about-content p')[0].textContent = isArabic ? translations.aboutUsDescription.ar : translations.aboutUsDescription.en;
        document.querySelectorAll('.trusted-booking-content h3')[0].textContent = isArabic ? translations.easyBooking.ar : translations.easyBooking.en;
        document.querySelectorAll('.trusted-booking-content p')[0].textContent = isArabic ? translations.easyBookingDesc.ar : translations.easyBookingDesc.en;
        document.querySelectorAll('.trusted-booking-content h3')[1].textContent = isArabic ? translations.easyPickup.ar : translations.easyPickup.en;
        document.querySelectorAll('.trusted-booking-content p')[1].textContent = isArabic ? translations.easyPickupDesc.ar : translations.easyPickupDesc.en;
        document.querySelector('.about-content-footer a').textContent = isArabic ? translations.learnMore.ar : translations.learnMore.en;
        
        // Services section
        document.querySelector('.section-title h3.ser').textContent = isArabic ? translations.ourServices.ar : translations.ourServices.en;
        document.querySelectorAll('.section-title h2')[1].innerHTML = isArabic ? translations.servicesHeading.ar : translations.servicesHeading.en;
        document.querySelectorAll('.service-content h3')[0].textContent = isArabic ? translations.instantTaxi.ar : translations.instantTaxi.en;
        document.querySelectorAll('.service-content p')[0].textContent = isArabic ? translations.instantTaxiDesc.ar : translations.instantTaxiDesc.en;
        document.querySelectorAll('.service-content h3')[1].textContent = isArabic ? translations.businessTransport.ar : translations.businessTransport.en;
        document.querySelectorAll('.service-content p')[1].textContent = isArabic ? translations.businessTransportDesc.ar : translations.businessTransportDesc.en;
        document.querySelectorAll('.service-content h3')[2].textContent = isArabic ? translations.airportService.ar : translations.airportService.en;
        document.querySelectorAll('.service-content p')[2].textContent = isArabic ? translations.airportServiceDesc.ar : translations.airportServiceDesc.en;
        document.querySelectorAll('.service-content h3')[3].textContent = isArabic ? translations.privateDriverService.ar : translations.privateDriverService.en;
        document.querySelectorAll('.service-content p')[3].textContent = isArabic ? translations.privateDriverServiceDesc.ar : translations.privateDriverServiceDesc.en;
        document.querySelector('.services-box-footer p').textContent = isArabic ? translations.servicesFooter.ar : translations.servicesFooter.en;
        document.querySelector('.services-box-footer a').textContent = isArabic ? translations.viewAllServices.ar : translations.viewAllServices.en;
        
        // Fleet section
        document.querySelector('.section-title h3.fle').textContent = isArabic ? translations.ourFleet.ar : translations.ourFleet.en;
        document.querySelectorAll('.section-title h2')[2].innerHTML = isArabic ? translations.fleetHeading.ar : translations.fleetHeading.en;
        
        // How it works (passengers)
        document.querySelector('.section-title h3.cus').textContent = isArabic ? translations.howPassengersUse.ar : translations.howPassengersUse.en;
        document.querySelectorAll('.section-title h2')[3].textContent = isArabic ? translations.passengersHeading.ar : translations.passengersHeading.en;
        document.querySelectorAll('.section-title p')[2].textContent = isArabic ? translations.passengersDescription.ar : translations.passengersDescription.en;
        document.querySelectorAll('.accordion-button')[0].textContent = isArabic ? translations.bookFromApp.ar : translations.bookFromApp.en;
        document.querySelectorAll('.accordion-body p')[0].textContent = isArabic ? translations.bookFromAppDesc.ar : translations.bookFromAppDesc.en;
        document.querySelectorAll('.accordion-button')[1].textContent = isArabic ? translations.trackCar.ar : translations.trackCar.en;
        document.querySelectorAll('.accordion-body p')[1].textContent = isArabic ? translations.trackCarDesc.ar : translations.trackCarDesc.en;
        document.querySelectorAll('.accordion-button')[2].textContent = isArabic ? translations.flexiblePayment.ar : translations.flexiblePayment.en;
        document.querySelectorAll('.accordion-body p')[2].textContent = isArabic ? translations.flexiblePaymentDesc.ar : translations.flexiblePaymentDesc.en;
        document.querySelector('.title-dowinlod').textContent = isArabic ? translations.passengerApp.ar : translations.passengerApp.en;
        document.querySelectorAll('.trusted-client-content h3')[0].textContent = (isArabic ? '5M+' : '5M+ ') + (isArabic ? translations.dailyUsers.ar : translations.dailyUsers.en);
        
        // Become driver section
        document.querySelector('.section-title h3.drev').textContent = isArabic ? translations.joinTaxiF.ar : translations.joinTaxiF.en;
        document.querySelectorAll('.section-title h2')[4].textContent = isArabic ? translations.driverHeading.ar : translations.driverHeading.en;
        document.querySelectorAll('.section-title p')[3].textContent = isArabic ? translations.driverDescription.ar : translations.driverDescription.en;
        document.querySelectorAll('.accordion-button')[3].textContent = isArabic ? translations.noUpfrontPayment.ar : translations.noUpfrontPayment.en;
        document.querySelectorAll('.accordion-body p')[3].textContent = isArabic ? translations.noUpfrontPaymentDesc.ar : translations.noUpfrontPaymentDesc.en;
        document.querySelectorAll('.accordion-button')[4].textContent = isArabic ? translations.flexibleSchedule.ar : translations.flexibleSchedule.en;
        document.querySelectorAll('.accordion-body p')[4].textContent = isArabic ? translations.flexibleScheduleDesc.ar : translations.flexibleScheduleDesc.en;
        document.querySelectorAll('.accordion-button')[5].textContent = isArabic ? translations.noMandatoryOrders.ar : translations.noMandatoryOrders.en;
        document.querySelectorAll('.accordion-body p')[5].textContent = isArabic ? translations.noMandatoryOrdersDesc.ar : translations.noMandatoryOrdersDesc.en;
        document.querySelectorAll('.title-dowinlod')[1].textContent = isArabic ? translations.driverApp.ar : translations.driverApp.en;
        document.querySelectorAll('.trusted-client-content h3')[1].textContent = (isArabic ? '4M+' : '4M+ ') + (isArabic ? translations.driversEarning.ar : translations.driversEarning.en);
        
        // Video section
        document.querySelector('.section-title h3.vs').textContent = isArabic ? translations.watchFullVideo.ar : translations.watchFullVideo.en;
        document.querySelectorAll('.section-title h2')[5].innerHTML = isArabic ? translations.videoHeading.ar : translations.videoHeading.en;
        
        document.querySelectorAll('.section-title h2')[6].innerHTML = isArabic ? translations.testimonialsHeading.ar : translations.testimonialsHeading.en;
        document.querySelectorAll('.section-title h2')[6].innerHTML = isArabic ? translations.testimonialsHeading.ar : translations.testimonialsHeading.en;
        document.querySelectorAll('.testimonial-content p')[0].textContent = isArabic ? translations.testimonial1.ar : translations.testimonial1.en;
        document.querySelectorAll('.testimonial-content p')[1].textContent = isArabic ? translations.testimonial2.ar : translations.testimonial2.en;
        document.querySelectorAll('.testimonial-content p')[2].textContent = isArabic ? translations.testimonial3.ar : translations.testimonial3.en;
        document.querySelectorAll('.testimonial-content p')[3].textContent = isArabic ? translations.testimonial4.ar : translations.testimonial4.en;
        // FAQ section
        document.querySelectorAll('.section-title h3')[7].textContent = isArabic ? translations.faq.ar : translations.faq.en;
        document.querySelectorAll('.section-title h2')[7].innerHTML = isArabic ? translations.faqHeading.ar : translations.faqHeading.en;
        document.querySelectorAll('.accordion-button')[6].textContent = isArabic ? translations.howToBook.ar : translations.howToBook.en;
        document.querySelectorAll('.accordion-body p')[6].textContent = isArabic ? translations.howToBookAnswer.ar : translations.howToBookAnswer.en;
        document.querySelectorAll('.accordion-button')[7].textContent = isArabic ? translations.ageLimit.ar : translations.ageLimit.en;
        document.querySelectorAll('.accordion-body p')[7].textContent = isArabic ? translations.ageLimitAnswer.ar : translations.ageLimitAnswer.en;
        document.querySelectorAll('.accordion-button')[8].textContent = isArabic ? translations.paymentMethods.ar : translations.paymentMethods.en;
        document.querySelectorAll('.accordion-body p')[8].textContent = isArabic ? translations.paymentMethodsAnswer.ar : translations.paymentMethodsAnswer.en;
        
        // Testimonials
        document.querySelector('.section-title.testimonials h3').textContent = isArabic ? translations.testimonials.ar : translations.testimonials.en;
        
        // CTA section
        document.querySelector('.section-title h2.fo').innerHTML = isArabic ? translations.needRide.ar : translations.needRide.en;
        document.querySelectorAll('.section-title p')[4].textContent = isArabic ? translations.ctaDescription.ar : translations.ctaDescription.en;
        document.querySelector('.cta-box-btn a').textContent = isArabic ? translations.contactUsNow.ar : translations.contactUsNow.en;
        
        // Footer
        document.querySelector('.about-footer-content p').textContent = isArabic ? translations.footerDescription.ar : translations.footerDescription.en;
        document.querySelectorAll('.footer-links h3')[0].textContent = isArabic ? translations.legalPolicies.ar : translations.legalPolicies.en;
        document.querySelectorAll('.footer-links a')[0].textContent = isArabic ? translations.privacyPolicy.ar : translations.privacyPolicy.en;
        document.querySelectorAll('.footer-links a')[1].textContent = isArabic ? translations.cancellationPolicy.ar : translations.cancellationPolicy.en;
        document.querySelectorAll('.footer-links a')[2].textContent = isArabic ? translations.paymentPolicy.ar : translations.paymentPolicy.en;
        document.querySelectorAll('.footer-links a')[3].textContent = isArabic ? translations.terms.ar : translations.terms.en;
        document.querySelectorAll('.footer-links h3')[1].textContent = isArabic ? translations.quickLinks.ar : translations.quickLinks.en;
        document.querySelectorAll('.footer-newsletter h3')[0].textContent = isArabic ? translations.subscribeNewsletter.ar : translations.subscribeNewsletter.en;
        document.querySelector('.drivers_p').textContent = isArabic ? translations.driverr.ar : translations.driverr.en;
        document.querySelector('.passengers_p').textContent = isArabic ? translations.customer.ar : translations.customer.en;
        document.getElementById('mail').placeholder = isArabic ? translations.enterEmail.ar : translations.enterEmail.en;
        document.querySelector('.footer-copyright-text p').textContent = isArabic ? translations.copyright.ar : translations.copyright.en;
    }

    // Save language preference
    function saveLanguagePreference() {
        localStorage.setItem('language', isArabic ? 'ar' : 'en');
    }

    // Load language preference
    function loadLanguagePreference() {
        const savedLang = localStorage.getItem('language');
        if (savedLang === 'en') {
            isArabic = false;
            updateLanguageContent();
        }
    }

    // Initialize on page load
    document.addEventListener('DOMContentLoaded', function() {
        loadLanguagePreference();
    });

    // Auto-close mobile menu when clicking a link
    document.querySelectorAll('#mobileMenu a').forEach(link => {
        link.addEventListener('click', () => {
            const mobileMenu = document.getElementById('mobileMenu');
            if (mobileMenu.classList.contains('show')) {
                bootstrap.Collapse.getInstance(mobileMenu).hide();
            }
        });
    });
