import { icons } from './icons.js';

// Social media links data
export const socialLinks = [
  { name: 'Instagram', url: 'https://www.instagram.com/mister_jadore_officiel/', icon: icons.instagram },
  { name: 'YouTube', url: 'https://youtube.com/@nashjarod10?feature=shared', icon: icons.youtube },
  { name: 'Facebook', url: 'https://www.facebook.com/share/194SdLy1jR/?mibextid=wwXIfr', icon: icons.facebook },
  { name: 'TikTok', url: 'https://www.tiktok.com/@theambitious.christian?_r=1&_t=ZS-972uF9kfG2D', icon: icons.tiktok },
];

// Shared profile section (mini version for sub-pages)
export function renderMiniProfile() {
  return `
    <div class="profile-mini stagger-item">
      <img src="/profile.png" alt="Mister Jadore" />
      <div class="profile-mini-info">
        <div class="profile-mini-name">Mister Jadore</div>
        <div class="profile-mini-title">Consultant en Croissance Digitale</div>
      </div>
    </div>
  `;
}

// Back button
export function renderBackButton() {
  return `
    <a class="back-button stagger-item" data-route="#home" id="btn-back-home">
      ${icons.arrowLeft}
      <span>Retour à l'accueil</span>
    </a>
  `;
}

// Social icons row
export function renderSocialIcons() {
  return `
    <div class="social-icons stagger-item">
      ${socialLinks.map(s => `
        <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="${s.name}" id="social-${s.name.toLowerCase()}">
          ${s.icon}
        </a>
      `).join('')}
    </div>
  `;
}

// Footer
export function renderFooter() {
  return `
    <footer class="page-footer stagger-item">
      <div class="footer-divider"></div>
      ${renderSocialIcons()}
      <p class="footer-text">© ${new Date().getFullYear()} Mister Jadore — Tous droits réservés</p>
    </footer>
  `;
}

// Checklist item
export function renderChecklist(items) {
  return `
    <ul class="checklist">
      ${items.map(item => `
        <li>
          <span class="checklist-icon">${icons.check}</span>
          <span>${item}</span>
        </li>
      `).join('')}
    </ul>
  `;
}
