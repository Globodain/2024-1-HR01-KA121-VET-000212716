import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

interface SocialLink {
  icon: React.ReactNode;
  url: string;
  label: string;
}

interface FooterLink {
  label: string;
  url: string;
  isExternal?: boolean;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

const socialLinks: SocialLink[] = [
  {
    icon: <FaLinkedin className="w-5 h-5" />,
    url: "https://www.linkedin.com/company/softcamp-europe",
    label: "LinkedIn"
  },
  {
    icon: <FaFacebook className="w-5 h-5" />,
    url: "https://www.facebook.com/globodain/",
    label: "Facebook"
  },
  {
    icon: <FaInstagram className="w-5 h-5" />,
    url: "https://www.instagram.com/softcamp_europe/",
    label: "Instagram"
  }
];

const footerColumns: FooterColumn[] = [
  {
    title: "Recursos",
    links: [
      {
        label: "Desarrolladores",
        url: "https://devs.softcamp.eu",
        isExternal: true
      },
      {
        label: "Centro de soporte",
        url: "https://globodain.com/es-es/softcamp",
        isExternal: true
      }
    ]
  },
  {
    title: "Políticas",
    links: [
      {
        label: "Términos de contratación del servicio",
        url: "https://app.softcamp.eu/help/terms-for-engagement",
        isExternal: true
      },
      {
        label: "Otras políticas y condiciones",
        url: "https://app.softcamp.eu/help/terms",
        isExternal: true
      }
    ]
  }
];

export default function Footer() {
  return (
    <footer className="bg-white pt-16 pb-12">
      <div className="container mx-auto px-4">

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-12 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-5">
            <img
              className="h-8 mb-6"
              src="https://cdn-static.globodain.com/softcamp/logos/logotipo"
              alt="SoftCamp Logo"
            />
            <p className="text-gray-600 mb-6">
              SoftCamp es un software de gestión inteligente para campings que simplifica y optimiza los procesos de gestión mediante la automatización y el trabajo colaborativo.
              <br /><br />
              <strong>Sólo disponible en Español</strong>
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  className="text-gray-400 hover:text-primary transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Columns */}
          <div className="md:col-span-7">
            <div className="grid md:grid-cols-2 gap-8">
              {footerColumns.map((column) => (
                <div key={column.title}>
                  <h4 className="text-lg font-semibold mb-4">{column.title}</h4>
                  <ul className="space-y-3">
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.url}
                          className="text-gray-600 hover:text-primary transition-colors duration-300"
                          target={link.isExternal ? "_blank" : undefined}
                          rel={link.isExternal ? "noopener noreferrer" : undefined}
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-600 text-sm pt-8 border-t border-gray-200">
          <p>
            SoftCamp © 2025 | Una marca registrada por{' '}
            <a
              href="https://globodain.com/es-es/softcamp"
              className="text-primary hover:text-primary-dark transition-colors duration-300"
            >
              Globodain Technology Corporation
            </a>{' '}
            | Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
