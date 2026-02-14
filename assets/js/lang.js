const translations = {
  pl: {
    hero: {
        title: "Coreli Automation",
        subtitle: "Nowoczesna automatyzacja i integracja systemów przemysłowych",
        contact: "Skontaktuj się"
    },
    about: {
        title: "O nas",
        content: "Specjalizujemy się w diagnostyce i programowaniu sterowników PLC, projektowaniu systemów SCADA oraz integracji urządzeń przemysłowych. Nasze rozwiązania są dostosowane do indywidualnych potrzeb klientów, zapewniając efektywność i niezawodność procesów produkcyjnych."
    },
    services: {
        title: "Usługi",
        plc_programming: "Programowanie PLC",
        plc_programming_desc: "Projektowanie i wdrażanie oprogramowania dla sterowników Siemens, Allen-Bradley, Mitsubishi i innych.",
        scada_hmi: "Systemy SCADA / HMI",
        scada_hmi_desc: "Tworzenie i konfiguracja interfejsów wizualnych dla operatorów oraz monitorowanie procesów przemysłowych.",
        integration_modernization: "Integracja i modernizacja",
        integration_modernization_desc: "Łączenie maszyn, linii produkcyjnych i systemów sterowania w jeden spójny ekosystem.",
        diagnostic: "Diagnostyka",
        diagnostic_desc: "Szybka pomoc zdalna i serwis w terenie. Diagnostyka, naprawy i optymalizacja procesów."
    },
    features: {
        title: "Dlaczego my",
        experience: "Doświadczenie",
        experience_desc: "Wieloletnia praktyka w branży automatyki przemysłowej i realizacja projektów dla różnych sektorów.",
        fast_response: "Szybka reakcja",
        fast_response_desc: "Gwarantujemy krótkie czasy reakcji i elastyczne podejście do potrzeb klienta.",
        quality: "Jakość i niezawodność",
        quality_desc: "Nasze rozwiązania są testowane, bezpieczne i zgodne ze standardami przemysłowymi."
    },
    projects: {
        title: "Realizacje",
        content: "Wybrane projekty z zakresu automatyki przemysłowej.",
        automation_line: "Automatyzacja linii pakującej",
        automation_line_desc: "Projekt sterowania PLC oraz panelu HMI dla zakładu produkcyjnego.",
        scada_system: "System SCADA dla oczyszczalni",
        scada_system_desc: "Kompleksowy system wizualizacji i raportowania pracy obiektu wodno-kanalizacyjnego.",
        factory_integration: "Integracja systemów w fabryce",
        factory_integration_desc: "Połączenie maszyn od różnych producentów w jeden zautomatyzowany system nadzoru."
    },
    contact: {
        title: "Kontakt",
        company_label: "Firma",
        name_label: "Imię i nazwisko",
        email_label: "Adres e-mail",
        message_label: "Wiadomość",
        submit_button: "Wyślij",
        contakt_info: "Dane kontaktowe",
        phone_label: "Telefon:",
        email_info_label: "E-mail:",
        hours_label: "Godziny kontaktu:",
        hours_info: "Pon–Pt: 8:00 – 16:00",
        company_info_label: "Dane firmy:"
    },
    footer: {
        rights: "Wszelkie prawa zastrzeżone."
    }
    
},
    en: {
        hero: {
            title: "Coreli Automation",
            subtitle: "Modern automation and industrial system integration",
            contact: "Contact Us"
        },
        about: {
            title: "About Us",
            content: "We specialize in PLC diagnostics and programming, SCADA system design, and industrial equipment integration. Our solutions are tailored to individual client needs, ensuring efficiency and reliability of production processes."
        },
        services: {
            title: "Services",
            plc_programming: "PLC Programming",
            plc_programming_desc: "Design and implementation of software for Siemens, Allen-Bradley, Mitsubishi and other PLCs.",
            scada_hmi: "SCADA / HMI Systems",
            scada_hmi_desc: "Creation and configuration of visual interfaces for operators and monitoring of industrial processes.",
            integration_modernization: "Integration and Modernization",
            integration_modernization_desc: "Connecting machines, production lines and control systems into a single coherent ecosystem.",
            diagnostic: "Diagnostics",
            diagnostic_desc: "Remote assistance and on-site service. Diagnostics, repairs and process optimization."
        },
        features: {
            title: "Why Us",
            experience: "Experience",
            experience_desc: "Years of practice in the industrial automation industry and project implementation for various sectors.",
            fast_response: "Fast Response",
            fast_response_desc: "We guarantee short response times and a flexible approach to customer needs.",
            quality: "Quality and Reliability",
            quality_desc: "Our solutions are tested, safe and compliant with industrial standards."
        },
        projects: {
            title: "Projects",
            content: "Selected projects in the field of industrial automation.",
            automation_line: "Packaging Line Automation",
            automation_line_desc: "PLC control and HMI panel project for a production plant.",
            scada_system: "SCADA System for Wastewater Treatment Plant",
            scada_system_desc: "Comprehensive visualization and reporting system for the operation of a water and sewage facility.",
            factory_integration: "Factory Systems Integration",
            factory_integration_desc: "Connecting machines from different manufacturers into one automated supervision system."
        },
        contact: {
            title: "Contact",
            company_label: "Company",
            name_label: "Name",
            email_label: "Email Address",
            message_label: "Message",
            submit_button: "Send",
            contakt_info: "Contact Information",
            phone_label: "Phone:",
            email_info_label: "Email:",
            hours_label: "Contact Hours:",
            hours_info: "Mon–Fri: 8:00 AM – 4:00 PM",
            company_info_label: "Company Information:"
        },
        footer: {
            rights: "All rights reserved."
        }
    }
};

function setLanguage(lang) {
  if (!translations[lang]) lang = "pl";

  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const keys = el.dataset.i18n.split(".");
    let text = translations[lang];

    keys.forEach(k => text = text[k]);
    el.textContent = text;
  });

  localStorage.setItem("lang", lang);
}

/* ===== AUTO-WYKRYWANIE ===== */
function detectBrowserLanguage() {
  const browserLang = navigator.language || navigator.userLanguage;
  const shortLang = browserLang.slice(0, 2);

  return translations[shortLang] ? shortLang : "pl";
}

/* ===== INIT ===== */
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang");

  if (savedLang && translations[savedLang]) {
    setLanguage(savedLang);
  } else {
    const detectedLang = detectBrowserLanguage();
    setLanguage(detectedLang);
  }
});