// about-lang.js

let isArabic = true;

// Language content dictionary for About page
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
        ar: 'انضم كسائق',
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
    
    // Page Header
    'pageTitle': {
        ar: 'من نحن',
        en: 'About Us'
    },
    'breadcrumbHome': {
        ar: 'الرئيسية',
        en: 'Home'
    },
    'breadcrumbAbout': {
        ar: 'من نحن',
        en: 'About Us'
    },
    
    // About Us Section
    'aboutHeading': {
            ar: 'شريكك الموثوق لرحلاتك بكل سهولة',
            en: 'Your trusted partner for easy car rental'
    },
    'aboutDescription': {
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
    
    // Vision & Mission Section
    'visionMissionTitle': {
        ar: 'رؤيتنا ورسالتنا',
        en: 'Our Vision & Mission'
    },
    'visionMissionHeading': {
        ar: 'قيادة التميز والابتكار في خدمات حجز السيارات',
        en: 'Leading excellence and innovation in car booking services'
    },
    'visionTab': {
        ar: 'رؤيتنا',
        en: 'Our Vision'
    },
    'missionTab': {
        ar: 'رسالتنا',
        en: 'Our Mission'
    },
    'approachTab': {
        ar: 'نهجنا',
        en: 'Our Approach'
    },
    'visionTitle': {
        ar: 'رؤيتنا',
        en: 'Our Vision'
    },
    'visionHeading': {
        ar: 'أن نكون الخيار الأول لحجز السيارات في أي وقت وأي مكان',
        en: 'To be the first choice for car booking anytime, anywhere'
    },
    'visionDescription': {
        ar: 'نطمح في TaxiF إلى تقديم خدمة تنقل آمنة وسريعة وبأفضل الأسعار، مع دمج أحدث التقنيات مثل الحجز عبر الإنترنت وتتبع السيارة لحظيًا، لضمان تجربة مريحة وسلسة لجميع عملائنا. نحافظ على أسطول متنوع من السيارات المجهزة بأعلى معايير الأمان والراحة.',
        en: 'At TaxiF, we aspire to provide safe, fast and affordable transportation services, integrating the latest technologies such as online booking and real-time vehicle tracking to ensure a comfortable and seamless experience for all our customers. We maintain a diverse fleet of vehicles equipped with the highest standards of safety and comfort.'
    },
    'visionList1': {
        ar: 'عملاؤنا هم أولويتنا القصوى',
        en: 'Our customers are our top priority'
    },
    'visionList2': {
        ar: 'الجودة والأمان أساس كل رحلة',
        en: 'Quality and safety are the foundation of every trip'
    },
    'visionList3': {
        ar: 'أسطول متجدد يناسب جميع الاحتياجات',
        en: 'Renewed fleet to suit all needs'
    },
    'missionTitle': {
        ar: 'رسالتنا',
        en: 'Our Mission'
    },
    'missionHeading': {
        ar: 'توفير تنقل آمن وموثوق للجميع',
        en: 'Providing safe and reliable transportation for all'
    },
    'missionDescription': {
        ar: 'في TaxiF، نسعى جاهدين لدمج الابتكار في كل تفاصيل الخدمة. من الحجز السهل عبر الموقع أو التطبيق، إلى نظام الدفع المرن نقدًا أو بالبطاقة، مع التزامنا التام بمعايير الجودة والسلامة في جميع الرحلات.',
        en: 'At TaxiF, we strive to integrate innovation into every detail of our service. From easy booking through the website or app, to flexible payment options with cash or card, with our full commitment to quality and safety standards in all trips.'
    },
    'missionList1': {
        ar: 'إرضاء العميل هو محور عملنا',
        en: 'Customer satisfaction is the core of our work'
    },
    'missionList2': {
        ar: 'تطوير مستمر لخدماتنا وتقنياتنا',
        en: 'Continuous development of our services and technologies'
    },
    'missionList3': {
        ar: 'تجربة آمنة وسلسة في كل مرة',
        en: 'Safe and seamless experience every time'
    },
    'approachTitle': {
        ar: 'نهجنا',
        en: 'Our Approach'
    },
    'approachHeading': {
        ar: 'الالتزام بالاحترافية وخدمة العملاء',
        en: 'Commitment to professionalism and customer service'
    },
    'approachDescription': {
        ar: 'نعمل على الجمع بين التكنولوجيا الحديثة والخدمة المتميزة، حيث نتيح للعملاء حجز سياراتهم بسهولة، وتتبع رحلاتهم، واختيار نوع السيارة التي تناسب احتياجاتهم، مع ضمان تجربة مريحة وسريعة وآمنة.',
        en: 'We work to combine modern technology with excellent service, enabling customers to easily book their cars, track their trips, and choose the type of vehicle that suits their needs, while ensuring a comfortable, fast and safe experience.'
    },
    'approachList1': {
        ar: 'استخدام أحدث أنظمة الحجز والتتبع',
        en: 'Using the latest booking and tracking systems'
    },
    'approachList2': {
        ar: 'خدمات تناسب جميع الفئات والاحتياجات',
        en: 'Services for all categories and needs'
    },
    'approachList3': {
        ar: 'أسعار تنافسية وخدمة عالية الجودة',
        en: 'Competitive prices and high quality service'
    },
    
    // Video Section
    'videoTitle': {
        ar: 'شاهد الفيديو الخاص بنا',
        en: 'Watch Our Video'
    },
    'videoHeading': {
        ar: 'اكتشف ما يميزنا في حجز سيارات ونوفر فئات متنوعة من السيارات',
        en: 'Discover what distinguishes us in car booking and we provide various categories of cars'
    },
    'satisfiedCustomers': {
        ar: 'عميل راضٍ',
        en: 'satisfied customer'
    },
    
    // Why Choose Us Section
    'whyChooseTitle': {
        ar: 'لماذا تختار TaxiF ؟',
        en: 'Why Choose TaxiF?'
    },
    'whyChooseHeading': {
        ar: 'الجودة، الراحة، والثقة في كل رحلة',
        en: 'Quality, comfort, and trust in every trip'
    },
    'fastResponse': {
        ar: 'سرعة الاستجابة',
        en: 'Fast Response'
    },
    'fastResponseDesc': {
        ar: 'سائقونا يصلون إليك في دقائق، لتبدأ رحلتك فورًا بدون انتظار.',
        en: 'Our drivers reach you in minutes, so you can start your trip immediately without waiting.'
    },
    'support24': {
        ar: 'دعم متواصل 24/7',
        en: '24/7 Continuous Support'
    },
    'support24Desc': {
        ar: 'فريق خدمة العملاء جاهز دائمًا للرد على استفساراتك وحل أي مشكلة فورًا.',
        en: 'The customer service team is always ready to answer your inquiries and solve any problem immediately.'
    },
    'flexibleDestinations': {
        ar: 'مرونة الوجهات',
        en: 'Flexible Destinations'
    },
    'flexibleDestinationsDesc': {
        ar: 'اختر أي نقطة انطلاق أو وصول، ونحن نتكفل بالباقي.',
        en: 'Choose any starting or ending point, and we take care of the rest.'
    },
    'safetyReliability': {
        ar: 'أمان وموثوقية',
        en: 'Safety and Reliability'
    },
    'safetyReliabilityDesc': {
        ar: 'سائقون مدربون وسيارات مفحوصة دوريًا لضمان رحلات آمنة ومريحة في كل مرة.',
        en: 'Trained drivers and periodically inspected cars to ensure safe and comfortable trips every time.'
    },
    
    // Testimonials Section
    'testimonialsTitle': {
        ar: 'آراء العملاء',
        en: 'Testimonials'
    },
    'testimonialsHeading': {
        ar: 'ماذا يقول عملاؤنا عن TaxiF',
        en: 'What our customers say about TaxiF'
    },
    'testimonial1': {
        ar: 'خدمة ممتازة! السائق وصل في الوقت تمامًا وكانت السيارة نظيفة ومريحة. أنصح باستخدام TaxiF.',
        en: 'Excellent service! The driver arrived right on time and the car was clean and comfortable. I recommend using TaxiF.'
    },
    'testimonial2': {
        ar: 'تجربتي مع TaxiF كانت سهلة وسريعة، التطبيق واضح والسائق كان محترف جدًا.',
        en: 'My experience with TaxiF was easy and fast, the app is clear and the driver was very professional.'
    },
    'testimonial3': {
        ar: 'التجربة كانت مريحة والسائق محترف، والسيارة نظيفة ومجهزة بالكامل.',
        en: 'The experience was comfortable, the driver was professional, and the car was clean and fully equipped.'
    },
    'testimonial4': {
        ar: 'أستخدم TaxiF يوميًا للذهاب للعمل، دائمًا في الوقت، وسائقين محترمين.',
        en: 'I use TaxiF daily to go to work, always on time, and respectful drivers.'
    },
    'businessman': {
        ar: 'رجل أعمال',
        en: 'Businessman'
    },
    'student': {
        ar: 'طالبة جامعية',
        en: 'University student'
    },
    'bankEmployee': {
        ar: 'موظف بنك',
        en: 'Bank employee'
    },
    'hrManager': {
        ar: 'مديرة موارد بشرية',
        en: 'HR Manager'
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
    }
};

function toggleLanguage() {
    isArabic = !isArabic;
    
    // Toggle language button text
    document.getElementById('langText').textContent = isArabic ? 'EN' : 'Ar';
    
    // Update all elements with translations
    updateLanguageContent();
    saveLanguagePreference();
}

function updateLanguageContent() {
    // Update navbar links
    document.querySelectorAll('.nav-link')[0].textContent = isArabic ? translations.home.ar : translations.home.en;
    document.querySelectorAll('.nav-link')[1].textContent = isArabic ? translations.aboutUs.ar : translations.aboutUs.en;
    document.querySelectorAll('.nav-link')[2].textContent = isArabic ? translations.services.ar : translations.services.en;
    document.querySelectorAll('.nav-link')[3].textContent = isArabic ? translations.drivers.ar : translations.drivers.en;
    document.querySelectorAll('.nav-link')[4].textContent = isArabic ? translations.contact.ar : translations.contact.en;
    
    // Update book now button
    document.querySelector('.header-btn a').textContent = isArabic ? translations.bookNow.ar : translations.bookNow.en;
    
    // Update page header
    document.querySelector('.page-header-box h1').textContent = isArabic ? translations.pageTitle.ar : translations.pageTitle.en;
    document.querySelectorAll('.breadcrumb-item')[0].textContent = isArabic ? translations.breadcrumbHome.ar : translations.breadcrumbHome.en;
    document.querySelectorAll('.breadcrumb-item')[1].textContent = isArabic ? translations.breadcrumbAbout.ar : translations.breadcrumbAbout.en;
    
    // Update about us section
    document.querySelectorAll('.section-title h3')[0].textContent = isArabic ? translations.pageTitle.ar : translations.pageTitle.en;
    document.querySelectorAll('.section-title h2')[0].textContent = isArabic ? translations.aboutHeading.ar : translations.aboutHeading.en;
    document.querySelectorAll('.section-title p')[0].textContent = isArabic ? translations.aboutDescription.ar : translations.aboutDescription.en;
    document.querySelectorAll('.trusted-booking-content h3')[0].textContent = isArabic ? translations.easyBooking.ar : translations.easyBooking.en;
    document.querySelectorAll('.trusted-booking-content p')[0].textContent = isArabic ? translations.easyBookingDesc.ar : translations.easyBookingDesc.en;
    document.querySelectorAll('.trusted-booking-content h3')[1].textContent = isArabic ? translations.easyPickup.ar : translations.easyPickup.en;
    document.querySelectorAll('.trusted-booking-content p')[1].textContent = isArabic ? translations.easyPickupDesc.ar : translations.easyPickupDesc.en;
    
    // Update vision & mission section
    document.querySelectorAll('.section-title h3')[1].textContent = isArabic ? translations.visionMissionTitle.ar : translations.visionMissionTitle.en;
    document.querySelectorAll('.section-title h2')[1].textContent = isArabic ? translations.visionMissionHeading.ar : translations.visionMissionHeading.en;
    
    // Update tabs
    document.querySelectorAll('.nav-tabs button')[0].textContent = isArabic ? translations.visionTab.ar : translations.visionTab.en;
    document.querySelectorAll('.nav-tabs button')[1].textContent = isArabic ? translations.missionTab.ar : translations.missionTab.en;
    document.querySelectorAll('.nav-tabs button')[2].textContent = isArabic ? translations.approachTab.ar : translations.approachTab.en;
    
    // Update vision tab content
    document.querySelectorAll('.section-title h3')[2].textContent = isArabic ? translations.visionTitle.ar : translations.visionTitle.en;
    document.querySelectorAll('.section-title h2')[2].textContent = isArabic ? translations.visionHeading.ar : translations.visionHeading.en;
    document.querySelectorAll('.section-title p')[1].textContent = isArabic ? translations.visionDescription.ar : translations.visionDescription.en;
    document.querySelectorAll('.vision-mission-list li')[0].textContent = isArabic ? translations.visionList1.ar : translations.visionList1.en;
    document.querySelectorAll('.vision-mission-list li')[1].textContent = isArabic ? translations.visionList2.ar : translations.visionList2.en;
    document.querySelectorAll('.vision-mission-list li')[2].textContent = isArabic ? translations.visionList3.ar : translations.visionList3.en;
    
    // Update mission tab content
    document.querySelectorAll('.section-title h3')[3].textContent = isArabic ? translations.missionTitle.ar : translations.missionTitle.en;
    document.querySelectorAll('.section-title h2')[3].textContent = isArabic ? translations.missionHeading.ar : translations.missionHeading.en;
    document.querySelectorAll('.section-title p')[2].textContent = isArabic ? translations.missionDescription.ar : translations.missionDescription.en;
    document.querySelectorAll('.vision-mission-list li')[3].textContent = isArabic ? translations.missionList1.ar : translations.missionList1.en;
    document.querySelectorAll('.vision-mission-list li')[4].textContent = isArabic ? translations.missionList2.ar : translations.missionList2.en;
    document.querySelectorAll('.vision-mission-list li')[5].textContent = isArabic ? translations.missionList3.ar : translations.missionList3.en;
    
    // Update approach tab content
    document.querySelectorAll('.section-title h3')[4].textContent = isArabic ? translations.approachTitle.ar : translations.approachTitle.en;
    document.querySelectorAll('.section-title h2')[4].textContent = isArabic ? translations.approachHeading.ar : translations.approachHeading.en;
    document.querySelectorAll('.section-title p')[3].textContent = isArabic ? translations.approachDescription.ar : translations.approachDescription.en;
    document.querySelectorAll('.vision-mission-list li')[6].textContent = isArabic ? translations.approachList1.ar : translations.approachList1.en;
    document.querySelectorAll('.vision-mission-list li')[7].textContent = isArabic ? translations.approachList2.ar : translations.approachList2.en;
    document.querySelectorAll('.vision-mission-list li')[8].textContent = isArabic ? translations.approachList3.ar : translations.approachList3.en;
    
    // Update video section
    document.querySelectorAll('.section-title h3')[5].textContent = isArabic ? translations.videoTitle.ar : translations.videoTitle.en;
    document.querySelectorAll('.section-title h2')[5].textContent = isArabic ? translations.videoHeading.ar : translations.videoHeading.en;
    document.querySelector('.satisfied-customer-counter p').textContent = isArabic ? translations.satisfiedCustomers.ar : translations.satisfiedCustomers.en;
    
    // Update why choose us section
    document.querySelectorAll('.section-title h3')[6].textContent = isArabic ? translations.whyChooseTitle.ar : translations.whyChooseTitle.en;
    document.querySelectorAll('.section-title h2')[6].textContent = isArabic ? translations.whyChooseHeading.ar : translations.whyChooseHeading.en;
    document.querySelectorAll('.why-choose-content h3')[0].textContent = isArabic ? translations.fastResponse.ar : translations.fastResponse.en;
    document.querySelectorAll('.why-choose-content p')[0].textContent = isArabic ? translations.fastResponseDesc.ar : translations.fastResponseDesc.en;
    document.querySelectorAll('.why-choose-content h3')[1].textContent = isArabic ? translations.support24.ar : translations.support24.en;
    document.querySelectorAll('.why-choose-content p')[1].textContent = isArabic ? translations.support24Desc.ar : translations.support24Desc.en;
    document.querySelectorAll('.why-choose-content h3')[2].textContent = isArabic ? translations.flexibleDestinations.ar : translations.flexibleDestinations.en;
    document.querySelectorAll('.why-choose-content p')[2].textContent = isArabic ? translations.flexibleDestinationsDesc.ar : translations.flexibleDestinationsDesc.en;
    document.querySelectorAll('.why-choose-content h3')[3].textContent = isArabic ? translations.safetyReliability.ar : translations.safetyReliability.en;
    document.querySelectorAll('.why-choose-content p')[3].textContent = isArabic ? translations.safetyReliabilityDesc.ar : translations.safetyReliabilityDesc.en;
    
    // Update testimonials section
    document.querySelectorAll('.section-title h3')[7].textContent = isArabic ? translations.testimonialsTitle.ar : translations.testimonialsTitle.en;
    document.querySelectorAll('.section-title h2')[7].textContent = isArabic ? translations.testimonialsHeading.ar : translations.testimonialsHeading.en;
    document.querySelectorAll('.testimonial-content p')[0].textContent = isArabic ? translations.testimonial1.ar : translations.testimonial1.en;
    document.querySelectorAll('.testimonial-content p')[1].textContent = isArabic ? translations.testimonial2.ar : translations.testimonial2.en;
    document.querySelectorAll('.testimonial-content p')[2].textContent = isArabic ? translations.testimonial3.ar : translations.testimonial3.en;
    document.querySelectorAll('.testimonial-content p')[3].textContent = isArabic ? translations.testimonial4.ar : translations.testimonial4.en;
    document.querySelectorAll('.author-content p')[0].textContent = isArabic ? translations.businessman.ar : translations.businessman.en;
    document.querySelectorAll('.author-content p')[1].textContent = isArabic ? translations.student.ar : translations.student.en;
    document.querySelectorAll('.author-content p')[2].textContent = isArabic ? translations.bankEmployee.ar : translations.bankEmployee.en;
    document.querySelectorAll('.author-content p')[3].textContent = isArabic ? translations.hrManager.ar : translations.hrManager.en;
    
    // Update footer
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
        document.querySelector('.nav-fotters1').textContent = isArabic ? translations.home.ar : translations.home.en;
        document.querySelector('.nav-fotters2').textContent = isArabic ? translations.aboutUs.ar : translations.aboutUs.en;
        document.querySelector('.nav-fotters3').textContent = isArabic ? translations.services.ar : translations.services.en;
        document.querySelector('.nav-fotters4').textContent = isArabic ? translations.contact.ar : translations.contact.en;
    
    // Update swiper drag text
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    if (swiperWrapper) {
        swiperWrapper.setAttribute('data-cursor-text', isArabic ? translations.dragText.ar : translations.dragText.en);
    }
    
    // Update document direction
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        navbar.setAttribute('dir', isArabic ? 'rtl' : 'ltr');
    }
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