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
          ${icons.userGroup} Programme Croissance Accompagnée
        </div>
        <h1 class="section-title">Accompagnement de Groupe</h1>
        <p class="section-subtitle">Pour ceux qui ne veulent pas rester seuls mais ne peuvent pas payer le premium</p>
      </div>

      <!-- Intro -->
      <div class="content-card stagger-item">
        <h3>🚀 Tu veux travailler en groupe avec les autres</h3>
        <p>
          On construit <strong class="highlight">ensemble</strong> votre système pour acquérir des clients <strong>étape par étape</strong>.
        </p>
        <div class="promise-box" style="margin-top: var(--spacing-md); margin-bottom: 0;">
          <p class="promise-text" style="font-size: 1rem;">
            Passer d'un vendeur qui n'arrivait pas à faire une seule vente par mois sur ta boutique, à quelqu'un qui génère <span class="promise-amount">100 000 FCFA chaque semaine</span>
          </p>
        </div>
      </div>

      <!-- Structure -->
      <div class="content-card stagger-item">
        <h3>📦 Structure du programme</h3>

        <div style="margin-bottom: var(--spacing-md);">
          <h4 style="color: var(--gold-primary); font-size: 0.9rem; margin-bottom: var(--spacing-sm);">🔹 1. Session hebdomadaire</h4>
          ${renderChecklist([
            'Stratégie business',
            'Cours en live',
            'Correction des erreurs',
            "Plan d'action concret",
          ])}
        </div>

        <div style="margin-bottom: var(--spacing-md);">
          <h4 style="color: var(--gold-primary); font-size: 0.9rem; margin-bottom: var(--spacing-sm);">🔹 2. Groupe WhatsApp actif</h4>
          ${renderChecklist([
            'Support quotidien',
            'Feedback personnalisé',
          ])}
        </div>

        <div style="margin-bottom: var(--spacing-md);">
          <h4 style="color: var(--gold-primary); font-size: 0.9rem; margin-bottom: var(--spacing-sm);">🔹 3. Analyse business</h4>
          ${renderChecklist([
            'Audit de tes pages',
            'Audit de tes publicités',
            'Audit de ton tunnel de vente',
          ])}
        </div>

        <div>
          <h4 style="color: var(--gold-primary); font-size: 0.9rem; margin-bottom: var(--spacing-sm);">🔹 4. Exécution guidée</h4>
          ${renderChecklist([
            "Ce qu'il faut faire chaque semaine",
            'Correction et ajustements en direct',
          ])}
        </div>
      </div>

      <!-- Schedule -->
      <div class="content-card stagger-item">
        <h3>📅 Comment ça se passe</h3>
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

      <!-- Help note -->
      <div class="engagement-note stagger-item" style="display: flex; align-items: flex-start; gap: 8px; text-align: left;">
        <div style="min-width: 16px; margin-top: 2px;">${icons.info}</div>
        <span>Si tu as du mal à accéder au groupe WhatsApp, écris sur le numéro WhatsApp que j'ai laissé dans mon profil TikTok.</span>
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
