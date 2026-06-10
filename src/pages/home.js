import { icons } from '../icons.js';
import { renderSocialIcons } from '../components.js';

export function renderHomePage() {
  return `
    <div class="page-container page-enter">
      <!-- Profile Section -->
      <section class="profile-section">
        <div class="profile-photo-wrapper stagger-item">
          <div class="profile-ring"></div>
          <img class="profile-photo" src="/profile.png" alt="Mister Jadore — Consultant en Croissance Digitale" id="profile-photo" />
          <div class="profile-verified">
            ${icons.verified}
          </div>
        </div>

        <h1 class="profile-name stagger-item">Mister Jadore</h1>
        <p class="profile-title stagger-item">Consultant en Croissance Digitale</p>

        <p class="profile-bio stagger-item">
          Je suis <strong class="highlight">Mister Jadore</strong>, Consultant en Croissance Digitale spécialisé dans la création de contenu, la publicité payante, l'e-commerce, l'automatisation marketing et les solutions IA. J'aide les entrepreneurs et les entreprises à attirer plus de clients, augmenter leur visibilité en ligne et développer leur chiffre d'affaires grâce à du contenu performant, des publicités Facebook &amp; TikTok, des landing pages orientées conversion, des solutions e-commerce et des agents WhatsApp propulsés par l'IA.
        </p>
      </section>

      <!-- Main Buttons -->
      <nav class="main-buttons" aria-label="Navigation principale">
        <a class="main-btn stagger-item" data-route="#accompagnement-prive" id="btn-accompagnement-prive">
          <div class="main-btn-icon">
            ${icons.userStar}
          </div>
          <div class="main-btn-content">
            <span class="main-btn-label">Accompagnement Privé</span>
            <span class="main-btn-sub">Coaching 100% individuel & personnalisé</span>
          </div>
          <span class="main-btn-arrow">${icons.arrowRight}</span>
        </a>

        <a class="main-btn stagger-item" data-route="#accompagnement-groupe" id="btn-accompagnement-groupe">
          <div class="main-btn-icon">
            ${icons.userGroup}
          </div>
          <div class="main-btn-content">
            <span class="main-btn-label">Accompagnement de Groupe</span>
            <span class="main-btn-sub">Avance ensemble avec la communauté</span>
          </div>
          <span class="main-btn-arrow">${icons.arrowRight}</span>
        </a>

        <a class="main-btn stagger-item" data-route="#formations" id="btn-formations">
          <div class="main-btn-icon">
            ${icons.bookOpen}
          </div>
          <div class="main-btn-content">
            <span class="main-btn-label">Mes Formations</span>
            <span class="main-btn-sub">100% pratiques et déjà enregistrées en vidéo</span>
          </div>
          <span class="main-btn-arrow">${icons.arrowRight}</span>
        </a>

        <a class="main-btn stagger-item" data-route="#entreprises" id="btn-entreprises">
          <div class="main-btn-icon">
            ${icons.target}
          </div>
          <div class="main-btn-content">
            <span class="main-btn-label">Pour les Entreprises</span>
            <span class="main-btn-sub">Système d'acquisition clients pour PME</span>
          </div>
          <span class="main-btn-arrow">${icons.arrowRight}</span>
        </a>
      </nav>

      <!-- Social Icons -->
      <footer class="page-footer stagger-item">
        <div class="footer-divider"></div>
        ${renderSocialIcons()}
        <p class="footer-text">© ${new Date().getFullYear()} Mister Jadore — Tous droits réservés</p>
      </footer>
    </div>
  `;
}
