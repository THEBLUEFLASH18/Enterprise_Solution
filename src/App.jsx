import React, { useEffect, useRef, useState } from 'react';
import logo from '/New_logoV2.png';
import financeImage from '/Finance_Desk.jpg';
import taxImage from '/taxtable.jpg';
import taxesImage from '/taxes.jpg';
import moneyImage from '/Money.jpg';
import './App.css';
import Employee1 from '/Sandra.jpeg';
import Employee2 from '/CoOwner.jpeg';

function App() {
  // State variables
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [language, setLanguage] = useState('es');
  const closeButtonRef = useRef(null);

  const translations = {
    es: {
      nav: {
        about: 'Sobre Nosotros',
        values: 'Valores',
        employees: 'Empleados',
        services: 'Servicios',
        contact: 'Contactanos',
        switchTo: 'English',
        switchAria: 'Cambiar idioma a inglés',
      },
      modal: {
        title: 'Contactanos',
        description: 'Estamos aquí para ayudarle. Elija su método preferido para comunicarse con nosotros.',
        whatsapp: 'Chatear en WhatsApp',
        email: 'Enviar un Email',
        close: 'Cerrar',
      },
      hero: {
        title: 'C&G ENTERPRISE SOLUTION LLC',
        body:
          'C&G ENTERPRISE SOLUTION LLC es una empresa dedicada al servicio de contabilidad y preparación de declaraciones de impuestos individuales y de empresas. Asociarse con C&G ENTERPRISE SOLUTION LLC significa que su negocio está en las mejores manos porque contamos con un gran equipo de trabajo liderado por personas con una alta preparación académica con más de 20 años de experiencia en el área contable y financiera, adaptamos nuestros servicios a cada industria y a cada rubro de negocio, le ofrecemos atención personalizada, confiable y de calidad. Para C&G ENTERPRISE SOLUTION LLC usted no solo es un cliente más, es un asociado valioso por el que nos esmeramos en brindarle lo mejor para el buen funcionamiento de sus finanzas y de su compañía.',
        missionTitle: 'Misión',
        mission:
          'Ofrecer a nuestros clientes a través de las mejores prácticas un servicio personalizado y oportuno colaborando con su crecimiento y el logro de sus objetivos.',
        visionTitle: 'Visión',
        vision:
          'Ser líder en asesoría de negocios, brindar las mejores soluciones en el manejo de la contabilidad e impuestos colaborando con su crecimiento y el logro de sus objetivos.',
      },
      values: {
        title: 'VALORES',
        items: [
          {
            label: 'Responsabilidad',
            text: 'Puntualidad en la presentación de información financiera y en el cumplimiento de obligaciones fiscales de nuestros clientes.',
          },
          {
            label: 'Confidencialidad',
            text: 'Ofrecemos máxima confidencialidad en el manejo de la información de nuestros clientes.',
          },
          {
            label: 'Eficiencia',
            text: 'Somos un equipo de profesionales cualificados para ofrecer servicios que generen un mayor valor a su empresa.',
          },
          {
            label: 'Integridad',
            text: 'Garantizamos la aplicación de las políticas contables y regulaciones fiscales en el manejo de sus operaciones.',
          },
          {
            label: 'Honestidad',
            text: 'Brindamos las mejores soluciones de negocio basados en un diálogo claro y honesto sobre los intereses de nuestros clientes.',
          },
        ],
      },
      team: {
        title: 'Conoce A Nuestro Equipo De Trabajo',
        employee1: {
          name: 'Sandra Cruz Palma',
          role1: 'Socia',
          role2: 'Directora Ejecutiva',
          alt: 'Sandra Cruz Palma, Socia y Directora Ejecutiva',
          experience:
            'Licenciada en gerencia de negocios, con más de 20 años de experiencia en las áreas administrativa, contable y financiera, con amplios conocimientos en el área de impuestos individuales y empresariales, lo que permite ofrecer soluciones integrales y estratégicas para la gestión financiera y fiscal de nuestros clientes.',
        },
        employee2: {
          name: 'Adriana Gómez Zamora',
          role1: 'Socia',
          role2: 'Consultora Fiscal/ Financiera',
          alt: 'Adriana Gómez Zamora, Socia y Consultora Fiscal/Financiera',
          experience:
            'Licenciada en Contaduría Pública y finanzas y Master en Administración de Empresas, con más de 20 años de experiencia en contabilidad, auditorías financieras, auditorías fiscales. Ha desempeñado roles como profesora universitaria, contadora general, contador independiente y auditora, con dominio de las normas IFRS, IAASB y herramientas contables como SAP y QuickBooks.',
        },
        experienceLabel: 'Experiencia',
      },
      services: {
        title: 'NUESTROS SERVICIOS',
        description:
          'Nuestro objetivo principal es brindarles a nuestros clientes un apoyo que abarque todas las áreas en el proceso de la contabilidad, ofreciendo los siguientes servicios:',
        listA: [
          'Conciliaciones Bancarias',
          'Contabilidad y teneduría de libros',
          'Presentación de informes financieros periódicos (Anuales, trimestrales y mensuales).',
          'Análisis e interpretación de los estados Financieros.',
        ],
        listB: [
          'Presupuestos periódicos (Anuales, trimestrales y mensuales).',
          'Declaraciones de Taxes individuales y de empresas.',
          'Elaboración de facturas a sus clientes.',
          'Elaboración de formas 1099-MISC y 1099-NEC',
        ],
      },
      footer: {
        socials: 'Sociales',
        options: 'Opciones',
        about: 'Sobre Nosotros',
        employees: 'Empleados',
        values: 'Valores',
        services: 'Servicios',
      },
      images: {
        finance: 'Escritorio financiero que muestra servicios de contabilidad',
        money: 'Representación visual de los valores de la empresa y crecimiento financiero',
        values: 'Ilustración que representa los valores de la empresa',
        taxes: 'Ilustración de servicios financieros que enfatiza impuestos',
      },
      accessibility: {
        skip: 'Saltar al contenido principal',
      },
    },
    en: {
      nav: {
        about: 'About Us',
        values: 'Values',
        employees: 'Team',
        services: 'Services',
        contact: 'Contact Us',
        switchTo: 'Español',
        switchAria: 'Switch language to Spanish',
      },
      modal: {
        title: 'Contact Us',
        description: 'We are here to assist you. Choose your preferred method below to get in touch with us.',
        whatsapp: 'Chat on WhatsApp',
        email: 'Send an Email',
        close: 'Close',
      },
      hero: {
        title: 'C&G ENTERPRISE SOLUTION LLC',
        body:
          'C&G ENTERPRISE SOLUTION LLC is a company dedicated to accounting services and preparation of individual and business tax returns. Partnering with C&G ENTERPRISE SOLUTION LLC means your business is in the best hands because we have a strong team led by highly trained professionals with more than 20 years of experience in accounting and finance. We tailor our services to each industry and business category, and provide personalized, reliable, high-quality attention. For C&G ENTERPRISE SOLUTION LLC, you are not just another client; you are a valued partner and we strive to deliver the best for the proper functioning of your finances and your company.',
        missionTitle: 'Mission',
        mission:
          'Offer our clients personalized and timely service through best practices, supporting their growth and the achievement of their goals.',
        visionTitle: 'Vision',
        vision:
          'Be a leader in business advisory, providing the best solutions in accounting and tax management while supporting our clients\' growth and goals.',
      },
      values: {
        title: 'VALUES',
        items: [
          {
            label: 'Responsibility',
            text: 'Timely presentation of financial information and compliance with our clients tax obligations.',
          },
          {
            label: 'Confidentiality',
            text: 'We provide maximum confidentiality in handling our clients information.',
          },
          {
            label: 'Efficiency',
            text: 'We are a qualified team of professionals offering services that generate greater value for your business.',
          },
          {
            label: 'Integrity',
            text: 'We ensure the application of accounting policies and tax regulations in the management of your operations.',
          },
          {
            label: 'Honesty',
            text: 'We provide the best business solutions based on clear and honest dialogue about our clients interests.',
          },
        ],
      },
      team: {
        title: 'Meet Our Team',
        employee1: {
          name: 'Sandra Cruz Palma',
          role1: 'Partner',
          role2: 'Chief Executive Officer',
          alt: 'Sandra Cruz Palma, Partner and Chief Executive Officer',
          experience:
            'Bachelor in business management with more than 20 years of experience in administrative, accounting, and financial areas, with extensive knowledge in individual and business taxes, enabling comprehensive and strategic solutions for our clients financial and tax management.',
        },
        employee2: {
          name: 'Adriana Gómez Zamora',
          role1: 'Partner',
          role2: 'Tax/Financial Consultant',
          alt: 'Adriana Gómez Zamora, Partner and Tax/Financial Consultant',
          experience:
            'Bachelor in Public Accounting and Finance and MBA, with more than 20 years of experience in accounting, financial audits, and tax audits. She has served as a university professor, general accountant, independent accountant, and auditor, with knowledge of IFRS, IAASB, and accounting tools such as SAP and QuickBooks.',
        },
        experienceLabel: 'Experience',
      },
      services: {
        title: 'OUR SERVICES',
        description:
          'Our main goal is to provide support across all areas of the accounting process, offering the following services:',
        listA: [
          'Bank Reconciliations',
          'Accounting and bookkeeping',
          'Periodic financial reports (annual, quarterly, and monthly).',
          'Analysis and interpretation of financial statements.',
        ],
        listB: [
          'Periodic budgets (annual, quarterly, and monthly).',
          'Individual and business tax returns.',
          'Invoice preparation for clients.',
          'Preparation of 1099-MISC and 1099-NEC forms',
        ],
      },
      footer: {
        socials: 'Socials',
        options: 'Options',
        about: 'About Us',
        employees: 'Team',
        values: 'Values',
        services: 'Services',
      },
      images: {
        finance: 'Finance desk showcasing accounting services',
        money: 'Visual representation of company values and financial growth',
        values: 'Illustration representing company values',
        taxes: 'Financial services illustration emphasizing taxes',
      },
      accessibility: {
        skip: 'Skip to main content',
      },
    },
  };

  const t = translations[language];

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    if (isModalOpen) {
      closeButtonRef.current?.focus();
    }
  }, [isModalOpen]);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isModalOpen) {
        setIsModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  return (
    <>
      <a className="skip-link" href="#main-content">
        {t.accessibility.skip}
      </a>
      {/* Navigation Bar */}
      <header className="nav" role="banner">
        <div className="logo">
          <img src={logo} alt="C&G Enterprise Solutions LLC Logo" />
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="hamburger-menu"
          type="button"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg viewBox="0 0 32 32" className={`hamburger ${isMenuOpen ? 'open' : ''}`} aria-hidden="true">
            <path className="line line-top-bottom" d="M4 8H28"></path>
            <path className="line" d="M4 16H28"></path>
            <path className="line line-top-bottom" d="M4 24H28"></path>
          </svg>
        </button>

        {/* Navigation Links */}
        <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`} id="primary-navigation" aria-label="Primary">
          <ul>
            <li>
              <a href="#About" onClick={() => setIsMenuOpen(false)}>
                {t.nav.about}
              </a>
            </li>
            <li>
              <a href="#Values" onClick={() => setIsMenuOpen(false)}>
                {t.nav.values}
              </a>
            </li>
            <li>
              <a href="#Employees" onClick={() => setIsMenuOpen(false)}>
                {t.nav.employees}
              </a>
            </li>
            <li>
              <a href="#Services" onClick={() => setIsMenuOpen(false)}>
                {t.nav.services}
              </a>
            </li>
            <li>
              <button
                className="language-button"
                type="button"
                aria-label={t.nav.switchAria}
                onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
              >
                {t.nav.switchTo}
              </button>
            </li>
            {/* Contact Button */}
            <li>
              <button
                className="contact-button"
                type="button"
                aria-label={t.nav.contact}
                aria-haspopup="dialog"
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsModalOpen(true); // Open the modal
                }}
              >
                <span className="transition"></span>
                <span className="gradient"></span>
                <span className="label">{t.nav.contact}</span>
              </button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Modal Component */}
      {isModalOpen && (
        <div className="modal-overlay" role="presentation" onClick={() => setIsModalOpen(false)}>
          <div
            className="modal-content"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-title"
            aria-describedby="contact-description"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              type="button"
              aria-label={t.modal.close}
              ref={closeButtonRef}
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </button>
            <h2 id="contact-title">{t.modal.title}</h2>
            <p id="contact-description">{t.modal.description}</p>
            
            {/* WhatsApp Contact Button */}
            <a
              href="https://wa.me/18134760188"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-button"
              aria-label={t.modal.whatsapp}
            >
              <i className="fab fa-whatsapp" aria-hidden="true"></i> {t.modal.whatsapp}
            </a>

            {/* Email Contact Button */}
            <a
              href="mailto:ventas@cygsolution.com"
              className="email-button"
              aria-label={t.modal.email}
            >
              <i className="fas fa-envelope" aria-hidden="true"></i> {t.modal.email}
            </a>
          </div>
        </div>
      )}

      <main id="main-content" key={language}>
        {/* First Content Section */}
        <section className="content" id="About" aria-labelledby="about-title">
          <div className="image-content">
            <img src={financeImage} alt={t.images.finance} />
          </div>

          <div className="text-content">
            <h1 id="about-title">
              {t.hero.title} <i className="fa-solid fa-coins" aria-hidden="true"></i>
            </h1>
            <p>{t.hero.body}</p>

            <h2>
              {t.hero.missionTitle} <i className="fa-solid fa-bars-progress" aria-hidden="true"></i>
            </h2>
            <p>{t.hero.mission}</p>

            <h2>
              {t.hero.visionTitle} <i className="fa-solid fa-glasses" aria-hidden="true"></i>
            </h2>
            <p>{t.hero.vision}</p>
          </div>

          <div className="image-content">
            <img src={moneyImage} alt={t.images.money} />
          </div>
        </section>

        {/* Valores Section */}
        <section className="content values" id="Values" aria-labelledby="values-title">
          <div className="image-content">
            <img src={taxImage} alt={t.images.values} />
          </div>

          <div className="text-content values">
            <h2 id="values-title">{t.values.title}</h2>
            {t.values.items.map((item) => (
              <p key={item.label}>
                <strong>{item.label}:</strong> {item.text}
              </p>
            ))}
          </div>

          <div className="image-content">
            <img src={taxesImage} alt={t.images.taxes} />
          </div>
        </section>

        {/* Meet the Team Section */}
        <section className="team-section" id="Employees" aria-labelledby="team-title">
          <h2 id="team-title">{t.team.title}</h2>
          <div className="team-members">
            {/* Employee 1 */}
            <div className="team-member">
              <img src={Employee1} alt={t.team.employee1.alt} />
              <h3>{t.team.employee1.name}</h3>
              <h4>{t.team.employee1.role1}</h4>
              <h4>{t.team.employee1.role2}</h4>
              <p>
                <strong>{t.team.experienceLabel}: </strong>{t.team.employee1.experience}

              </p>
              <a href="https://www.linkedin.com/in/sandra-cruz-palma-59a95924a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
                  LinkedIn <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
                </a>
            </div>
            {/* Employee 2 */}
            <div className="team-member">
              <img src={Employee2} alt={t.team.employee2.alt} />
              <h3>{t.team.employee2.name}</h3>
              <h4>{t.team.employee2.role1}</h4>
              <h4>{t.team.employee2.role2}</h4>
              <p>
                <strong>{t.team.experienceLabel}: </strong>{t.team.employee2.experience}

              </p>
              <a href="https://www.linkedin.com/in/adriana-g%C3%B3mez-4a600640?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
                  LinkedIn <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
                </a>
            </div>
          </div>
        </section>

        {/* Servicios Section */}
        <section className="services-section" id="Services" aria-labelledby="services-title">
        <div>
          {/* Title */}
          <h2 id="services-title">{t.services.title}</h2>

          {/* Information Paragraph */}
          <p className="services-description">
            {t.services.description}
          </p>
        </div>

        {/* Services List */}
        <div className="services-container">
          <div className="service-box">
            <ul>
              {t.services.listA.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="service-box">
            <ul>
              {t.services.listB.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        </section>

      {/* Footer Section */}
      <footer className='Footer' role="contentinfo">
        <div className='left-side'>
          <h4>{t.footer.socials}</h4>
          <ul>
            <li>
              <a href="https://www.facebook.com/share/HcJLSEEMffhgtDVW/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
                Facebook <i className="fa-brands fa-facebook" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/cygenterprisesolution?igsh=aWgwOHpwaTJsaDVr`" target="_blank" rel="noopener noreferrer">
                Instagram <i className="fa-brands fa-square-instagram" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                LinkedIn <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                Reviews <i className="fa-brands fa-google" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className='img-footer'>
          <img src={logo} alt="C&G Enterprise Solutions LLC Logo" />
          <h3>C&G Enterprise Solution LLC&reg;</h3>
        </div>

        <div className='right-side'>
          <h4>{t.footer.options}</h4>
          <ul>
            <li><a href='#About'>{t.footer.about}</a></li>
            <li><a href='#Employees'>{t.footer.employees}</a></li>
            <li><a href='#Values'>{t.footer.values}</a></li>
            <li><a href='#Services'>{t.footer.services}</a></li>
          </ul>
        </div>
      </footer>
      </main>

    </>
  );
}

export default App;
