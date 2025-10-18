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
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
    { text: 'Terms', href: getPermalink('/terms') },
  ],
  socialLinks: [],
  footNote: `
    <div class="text-sm text-gray-600 dark:text-gray-400">
      <p>
        © ${new Date().getFullYear()} ExaOne Digital. All rights reserved.
      </p>
    </div>
  `,
};
