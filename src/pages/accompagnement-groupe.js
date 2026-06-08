import { icons } from '../icons.js';
import { renderBackButton, renderMiniProfile, renderFooter, renderChecklist } from '../components.js';

export function renderAccompagnementGroupe() {
  return `
    <div class="page-container page-enter">
      ${renderBackButton()}
      ${renderMiniProfile()}

      <!-- Header -->
      <div class="section-header stagger-item">
        <div class="section-badge">
          ${icons.userGroup} Coaching Collectif
        </div>
        <h1 class="section-title">Accompagnement de Groupe</h1>
        <p class="section-subtitle">Avance avec un groupe motivé et atteins tes objectifs ensemble</p>
      </div>

      <!-- Description -->
      <div class="content-card stagger-item">
        <h3>👥 Comment ça fonctionne</h3>
        <p>
          Travail <strong class="highlight">en groupe de 10 à 20 personnes</strong>. Tous les participants sont ajoutés dans un <strong>groupe d'accompagnement</strong> où des instructions sont données régulièrement.
        </p>

        <div class="schedule-box">
          <div class="schedule-icon">${icons.calendar}</div>
          <div class="schedule-text">
            <strong>Chaque dimanche à partir de 18h</strong>
            Durée : 1h30 à 2h par session • 4 sessions sur tout un mois
          </div>
        </div>

        <div class="info-box">
          ${icons.sparkles}
          <span><strong class="highlight">Première session le 14 juin.</strong> Rejoins le groupe maintenant pour ne pas manquer le départ !</span>
        </div>
      </div>

      <!-- Programme -->
      <div class="content-card stagger-item">
        <h3>📋 Programme (4 sessions)</h3>
        ${renderChecklist([
          'Création de la boutique complète',
          'Création du produit digital rentable',
          'Configuration des campagnes publicitaires',
          'Création de contenu sur TikTok pour vendre',
        ])}
      </div>

      <!-- Rules -->
      <div class="rules-box stagger-item">
        <h4>${icons.warning} Règles importantes</h4>
        <ul>
          <li>Aucune session individuelle de rattrapage : <strong>celui qui manque une session a manqué</strong>, point.</li>
          <li>Pas de récapitulatif pour les absents, et impossible de poser des questions sur les sessions précédentes.</li>
          <li>Chacun doit <strong>s'efforcer d'assister à toutes les sessions</strong> pour ne pas ralentir le groupe.</li>
        </ul>
      </div>

      <!-- Promise -->
      <div class="promise-box stagger-item">
        <div class="promise-label">${icons.target} Objectif</div>
        <p class="promise-text">
          À la fin du mois, chaque participant réalise au moins<br/>
          <span class="promise-amount">100 000 FCFA (≈ 177 $)</span>
        </p>
      </div>

      <!-- Price -->
      <div class="price-box stagger-item">
        <div class="price-current">20 000 FCFA</div>
        <div class="price-usd">(≈ 35 $)</div>
        <div class="price-original">50 000 FCFA (≈ 89 $) — tarif individuel</div>
        <span class="price-save">Économie de 30 000 FCFA</span>
      </div>

      <!-- Payment options -->
      <div class="payment-options stagger-item">
        <div class="payment-option recommended">
          <div class="payment-option-number">1</div>
          <div>
            <span class="payment-option-badge">✅ La meilleure option</span>
            <div class="payment-option-price">15 000 FCFA (≈ 27 $)</div>
            <div class="payment-option-detail">
              Paiement <strong>en une fois à l'avance</strong> pour les 4 sessions — tarif réduit.
            </div>
          </div>
        </div>

        <div class="payment-option">
          <div class="payment-option-number">2</div>
          <div>
            <div class="payment-option-price">5 000 FCFA (≈ 9 $) / session</div>
            <div class="payment-option-detail">
              Paiement <strong>échelonné : 5 000 FCFA avant chaque session.</strong> Si tu paies, tu assistes ; si tu ne paies pas, tu n'as pas accès à la session suivante.
            </div>
          </div>
        </div>
      </div>

      <!-- Engagement note -->
      <div class="engagement-note stagger-item">
        <strong>⚠️ En t'engageant, tu t'engages pour tout le programme :</strong><br/>
        tu ne choisis pas les sessions, tu participes à toutes.
      </div>

      <!-- CTA -->
      <a href="https://chat.whatsapp.com/Bemm0FE3UfAAIKhEVJKXCV?mode=gi_t" target="_blank" rel="noopener noreferrer" class="cta-button cta-whatsapp stagger-item" id="cta-rejoindre-groupe">
        ${icons.whatsapp}
        Rejoindre le groupe d'accompagnement
      </a>

      ${renderFooter()}
    </div>
  `;
}
