import { icons } from '../icons.js';
import { renderBackButton, renderMiniProfile, renderFooter, renderChecklist } from '../components.js';

export function renderEntreprisesPage() {
  return `
    <div class="page-container page-enter">
      ${renderBackButton()}
      ${renderMiniProfile()}

      <!-- Header -->
      <div class="section-header stagger-item">
        <div class="section-badge">
          ${icons.target} Offre B2B
        </div>
        <h1 class="section-title">Pour les Entreprises & P.M.E</h1>
        <p class="section-subtitle">Système d'Acquisition Clients Entreprise</p>
      </div>

      <!-- Intro -->
      <div class="content-card stagger-item">
        <h3>🏢 Nous travaillons pour vous</h3>
        <p>
          Nous travaillons <strong class="highlight">pour vous</strong> et faisons ceci selon votre demande. Voici ce qu'on peut faire pour vous :
        </p>
        ${renderChecklist([
          'Création et gestion de <strong>publicité Meta</strong>',
          'Création de <strong>contenu marketing</strong>',
          '<strong class="highlight">Acquisition clients</strong> — stratégie complète',
          "Création d'<strong>automatisation</strong> pour répondre à vos WhatsApp",
          'Création de <strong>SaaS</strong> sur-mesure',
        ])}
      </div>

      <!-- Portfolio CTA -->
      <a href="https://mister-jadore-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer" class="cta-button stagger-item" id="cta-portfolio">
        ${icons.sparkles}
        Voir mon portfolio & mes réalisations
      </a>

      <!-- Contact CTA -->
      <a href="https://wa.me/221776211824" target="_blank" rel="noopener noreferrer" class="cta-button cta-whatsapp stagger-item" id="cta-contact-entreprise" style="margin-top: var(--spacing-md);">
        ${icons.whatsapp}
        Nous contacter
      </a>

      ${renderFooter()}
    </div>
  `;
}
