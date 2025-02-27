import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

interface FooterLink {
  label: string;
  url: string;
  isExternal?: boolean;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

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
      },
      {
        label: "Solicitar demo",
        url: "https://globodain.com/es-es/softcamp/demo",
        isExternal: true
      }
    ]
  },
  {
    title: "Legal",
    links: [
      {
        label: "Términos de servicio",
        url: "https://app.softcamp.eu/help/terms-for-engagement",
        isExternal: true
      },
      {
        label: "Políticas",
        url: "https://app.softcamp.eu/help/terms",
        isExternal: true
      },
      {
        label: "Privacidad",
        url: "/privacy"
      }
    ]
  },
  {
    title: "Contacto",
    links: [
      {
        label: "office@globodain.com",
        url: "mailto:office@globodain.com"
      },
      {
        label: "+34 900 000 000",
        url: "tel:+34900000000"
      }
    ]
  }
];

const socialLinks = [
  {
    icon: <FaLinkedin className="text-[1.8rem]" />,
    url: "https://www.linkedin.com/company/softcamp-europe",
    label: "LinkedIn"
  },
  {
    icon: <FaFacebook className="text-[1.8rem]" />,
    url: "https://www.facebook.com/globodain/",
    label: "Facebook"
  },
  {
    icon: <FaInstagram className="text-[1.8rem]" />,
    url: "https://www.instagram.com/softcamp_europe/",
    label: "Instagram"
  }
];

export default function Footer() {
  return (
    <footer className="bg-white pt-20 pb-8 border-t border-gray-100">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
          {/* Brand Section */}
          <div className="flex-none md:w-[35%]">
            <img
              className="h-10 mb-6"
              src="https://cdn-static.globodain.com/softcamp/logos/logotipo"
              alt="SoftCamp"
            />
            <p className="text-gray-600 mb-8 leading-relaxed">
              Software de gestión inteligente para campings. Simplifica y optimiza los procesos mediante la automatización.
            </p>
          </div>

          {/* Footer Links */}
          <div className="flex-none md:w-[60%]">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {footerColumns.map((column) => (
                <div key={column.title} className="link-group">
                  <h4 className="text-gray-800 font-semibold text-base mb-5">{column.title}</h4>
                  <ul className="space-y-3">
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.url}
                          className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
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

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-gray-100 text-center">
          <div className="flex justify-center gap-8 mb-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                className="text-gray-600 hover:text-blue-600 hover:-translate-y-1 transition-all duration-200"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
          <p className="text-gray-500 text-sm">
            SoftCamp © 2025 | Globodain Technology Corporation
          </p>
        </div>
      </div>
    </footer>
  );
}
