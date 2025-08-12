// contact-lang.js

let isArabic = true;

// Language content dictionary for Contact page
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
        ar: 'تواصل معنا',
        en: 'Contact Us'
    },
    'breadcrumbHome': {
        ar: 'الرئيسية',
        en: 'Home'
    },
    'breadcrumbContact': {
        ar: 'تواصل معنا',
        en: 'Contact Us'
    },
    
    // Contact Information Section
    'contactInfoTitle': {
        ar: 'معلومات التواصل',
        en: 'Contact Information'
    },
    'contactInfoDesc': {
        ar: 'تواصل معنا الآن أو ابدأ محادثة مباشرة!',
        en: 'Contact us now or start a direct conversation!'
    },
    
    // Contact Form
    'firstName': {
        ar: 'الاسم الأول',
        en: 'First Name'
    },
    'firstNamePlaceholder': {
        ar: 'أدخل اسمك الأول',
        en: 'Enter your first name'
    },
    'lastName': {
        ar: 'اسم العائلة',
        en: 'Last Name'
    },
    'lastNamePlaceholder': {
        ar: 'أدخل اسم العائلة',
        en: 'Enter your last name'
    },
    'email': {
        ar: 'البريد الإلكتروني',
        en: 'Email'
    },
    'emailPlaceholder': {
        ar: 'أدخل بريدك الإلكتروني',
        en: 'Enter your email address'
    },
    'phone': {
        ar: 'رقم الهاتف',
        en: 'Phone Number'
    },
    'phonePlaceholder': {
        ar: 'أدخل رقم هاتفك',
        en: 'Enter your phone number'
    },
    'message': {
        ar: 'رسالتك',
        en: 'Your Message'
    },
    'messagePlaceholder': {
        ar: 'اكتب رسالتك هنا',
        en: 'Write your message here'
    },
    'sendMessage': {
        ar: 'إرسال الرسالة',
        en: 'Send Message'
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
    const navLinks = document.querySelectorAll('.nav-link');
    if (navLinks.length >= 5) {
        navLinks[0].textContent = isArabic ? translations.home.ar : translations.home.en;
        navLinks[1].textContent = isArabic ? translations.aboutUs.ar : translations.aboutUs.en;
        navLinks[2].textContent = isArabic ? translations.services.ar : translations.services.en;
        navLinks[3].textContent = isArabic ? translations.drivers.ar : translations.drivers.en;
        navLinks[4].textContent = isArabic ? translations.contact.ar : translations.contact.en;
    }
    
    // Update book now button
    const bookNowBtn = document.querySelector('.header-btn a');
    if (bookNowBtn) {
        bookNowBtn.textContent = isArabic ? translations.bookNow.ar : translations.bookNow.en;
    }
    
    // Update page header
    const pageTitle = document.querySelector('.page-header-box h1');
    if (pageTitle) {
        pageTitle.textContent = isArabic ? translations.pageTitle.ar : translations.pageTitle.en;
    }
    
    // Update breadcrumb
    const breadcrumbItems = document.querySelectorAll('.breadcrumb-item');
    if (breadcrumbItems.length >= 2) {
        const homeLink = breadcrumbItems[0].querySelector('a');
        if (homeLink) {
            homeLink.textContent = isArabic ? translations.breadcrumbHome.ar : translations.breadcrumbHome.en;
        }
        breadcrumbItems[1].textContent = isArabic ? translations.breadcrumbContact.ar : translations.breadcrumbContact.en;
    }
    
    // Update contact information section
    const contactInfoTitle = document.querySelector('.contact-information .section-title h2');
    if (contactInfoTitle) {
        contactInfoTitle.textContent = isArabic ? translations.contactInfoTitle.ar : translations.contactInfoTitle.en;
    }
    
    const contactInfoDesc = document.querySelector('.contact-information .section-title p');
    if (contactInfoDesc) {
        contactInfoDesc.textContent = isArabic ? translations.contactInfoDesc.ar : translations.contactInfoDesc.en;
    }
    
    // Update form labels and placeholders
    const formLabels = document.querySelectorAll('.contact-us-form label');
    const formInputs = document.querySelectorAll('.contact-us-form input, .contact-us-form textarea');
    
    if (formLabels.length >= 5 && formInputs.length >= 5) {
        // First Name
        formLabels[0].textContent = isArabic ? translations.firstName.ar : translations.firstName.en;
        formInputs[0].placeholder = isArabic ? translations.firstNamePlaceholder.ar : translations.firstNamePlaceholder.en;
        
        // Last Name
        formLabels[1].textContent = isArabic ? translations.lastName.ar : translations.lastName.en;
        formInputs[1].placeholder = isArabic ? translations.lastNamePlaceholder.ar : translations.lastNamePlaceholder.en;
        
        // Email
        formLabels[2].textContent = isArabic ? translations.email.ar : translations.email.en;
        formInputs[2].placeholder = isArabic ? translations.emailPlaceholder.ar : translations.emailPlaceholder.en;
        
        // Phone
        formLabels[3].textContent = isArabic ? translations.phone.ar : translations.phone.en;
        formInputs[3].placeholder = isArabic ? translations.phonePlaceholder.ar : translations.phonePlaceholder.en;
        
        // Message
        formLabels[4].textContent = isArabic ? translations.message.ar : translations.message.en;
        formInputs[4].placeholder = isArabic ? translations.messagePlaceholder.ar : translations.messagePlaceholder.en;
    }
    
    // Update send button
    const sendBtn = document.querySelector('.contact-form-btn .btn-default');
    if (sendBtn) {
        sendBtn.textContent = isArabic ? translations.sendMessage.ar : translations.sendMessage.en;
    }
    
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
        document.getElementById('langText').textContent = 'Ar';
        updateLanguageContent();
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    loadLanguagePreference();
});