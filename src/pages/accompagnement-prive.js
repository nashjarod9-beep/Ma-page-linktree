import { icons } from '../icons.js';
import { renderBackButton, renderMiniProfile, renderFooter, renderChecklist } from '../components.js';

export function renderAccompagnementPrive() {
  return `
    <div class="page-container page-enter">
      ${renderBackButton()}
      ${renderMiniProfile()}

      <!-- Header -->
      <div class="section-header stagger-item">
        <div class="section-badge">
          ${icons.sparkles} Coaching Premium
        </div>
        <h1 class="section-title">Accompagnement Privé &amp; Personnalisé</h1>
        <p class="section-subtitle">Un coaching sur-mesure pour propulser ton business au niveau supérieur</p>
      </div>

      <!-- Description -->
      <div class="content-card stagger-item">
        <h3>🎯 Ce que tu obtiens</h3>
        <p>
          Un coaching <strong class="highlight">100 % individuel</strong> de <strong>6 heures de travail intense</strong>, en <strong>appel vidéo Google Meet</strong>, où nous travaillons <strong>ensemble en direct</strong> sur TON projet.
        </p>

        <div class="schedule-box">
          <div class="schedule-icon">${icons.clock}</div>
          <div class="schedule-text">
            <strong>2h / semaine sur 3 semaines</strong>
            Flexibilité possible jusqu'à 6 semaines maximum.
          </div>
        </div>

        <div class="info-box">
          ${icons.info}
          <span>Tout doit se dérouler dans la même période — <strong>sans disparaître et revenir des mois plus tard.</strong> Selon la difficulté rencontrée, des <strong class="highlight">sessions exceptionnelles</strong> supplémentaires peuvent être ajoutées.</span>
        </div>
      </div>

      <!-- What we build together -->
      <div class="content-card stagger-item">
        <h3>🛠️ Ensemble, nous allons :</h3>
        ${renderChecklist([
          'Créer ta boutique (Chariow) de A à Z',
          'Choisir et créer ton produit digital rentable',
          'Configurer tes campagnes publicitaires Facebook',
          'Créer du contenu sur TikTok pour vendre tes produits digitaux',
        ])}
      </div>

      <!-- Exclusive advantages -->
      <div class="content-card stagger-item">
        <h3>🌟 Avantages exclusifs réservés à l'accompagnement privé</h3>
        <p>Ce que les autres n'ont pas :</p>
        ${renderChecklist([
          'Je travaille <strong>personnellement</strong> sur ta boutique',
          'Correction de tes flyers et descriptions',
          'Propositions et idées de produits sur-mesure',
          '<strong class="highlight">Produits digitaux offerts</strong>',
          '<strong class="highlight">Liens d\'affiliation offerts</strong>',
          'Plusieurs autres <strong>bonus exclusifs</strong>',
        ])}
      </div>

      <!-- Promise -->
      <div class="promise-box stagger-item">
        <div class="promise-label">${icons.target} Objectif</div>
        <p class="promise-text">
          Dès ton <strong>premier mois</strong>, atteindre au moins<br/>
          <span class="promise-amount">150 000 FCFA (≈ 265 $)</span><br/>
          de chiffre d'affaires
        </p>
      </div>

      <!-- Price -->
      <div class="price-box stagger-item">
        <div class="price-current">50 000 FCFA</div>
        <div class="price-usd">(≈ 89 $)</div>
        <div class="price-original">75 000 FCFA (≈ 133 $)</div>
        <span class="price-save">Économie de 25 000 FCFA</span>
        <div class="price-installment">
          💳 <strong>Paiement possible en 2 fois :</strong><br/>
          <strong class="highlight">25 000 FCFA (≈ 44 $)</strong> pour les 2 premières sessions<br/>
          + <strong class="highlight">25 000 FCFA (≈ 44 $)</strong> pour la dernière session + les sessions exceptionnelles
        </div>
      </div>

      <!-- CTA -->
      <a href="https://wa.me/221776211824" target="_blank" rel="noopener noreferrer" class="cta-button cta-whatsapp stagger-item" id="cta-reserver-prive">
        ${icons.whatsapp}
        Réserver mon accompagnement privé
      </a>

      ${renderFooter()}
    </div>
  `;
}
