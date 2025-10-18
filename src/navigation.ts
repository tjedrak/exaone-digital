import { getPermalink } from './utils/permalinks';

// Minimal navigation for "Coming Soon" landing page
export const headerData = {
  links: [
    {
      text: 'Contact',
      href: 'mailto:contact@exaone.digital',
    },
  ],
  actions: [],
};

export const footerData = {
  links: [],
  secondaryLinks: [
    { text: 'Privacy Policy', href: getPermalink('/legal/privacy-policy') },
    { text: 'Terms', href: getPermalink('/legal/terms') },
  ],
  socialLinks: [],
  footNote: `
    <div class="text-sm text-gray-600 dark:text-gray-400">
      <p class="mb-2">
        <strong>AEONEX OÜ</strong> (trading as ExaOne Digital)
      </p>
      <p class="mb-2">
        Registration: 17350891 | Tornimäe tn 5, 10145 Tallinn, Estonia
      </p>
      <p>
        Professional technology consulting for European businesses.
      </p>
    </div>
  `,
};
