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
        <h1 class="section-title">Accompagnement Privé</h1>
        <p class="section-subtitle">On travaille avec toi et pour toi : mets sur pieds un Système d'Accélération Business</p>
      </div>

      <!-- Intro -->
      <div class="content-card stagger-item">
        <h3>🥇 Ce que tu obtiens</h3>
        <p>
          <strong class="highlight">« Je construis et j'accélère le système d'acquisition clients des e-commerçants et PME. »</strong>
        </p>
        <p>
          Vous obtenez un <strong>système complet</strong> capable d'attirer, convertir et transformer des prospects en clients de manière <strong class="highlight">régulière et prévisible</strong>.
        </p>
        <div class="info-box">
          ${icons.info}
          <span>Un coaching <strong>100% individuel</strong> en appel vidéo Google Meet, où nous travaillons <strong>ensemble en direct</strong> sur TON projet. Durée : <strong class="highlight">2 mois d'accompagnement.</strong></span>
        </div>
      </div>

      <!-- PHASE 1 -->
      <div class="content-card stagger-item">
        <h3>🔥 PHASE 1 — Diagnostic & Stratégie</h3>

        <div style="margin-bottom: var(--spacing-md);">
          <h4 style="color: var(--gold-primary); font-size: 0.9rem; margin-bottom: var(--spacing-sm);">1. Audit complet de ton business</h4>
          ${renderChecklist([
            'Produit / offre actuelle',
            'Cible client',
            'Positionnement',
            'Analyse des concurrents',
          ])}
        </div>

        <div style="margin-bottom: var(--spacing-md);">
          <h4 style="color: var(--gold-primary); font-size: 0.9rem; margin-bottom: var(--spacing-sm);">2. Clarification de ton offre</h4>
          ${renderChecklist([
            "Création ou optimisation de l'offre principale",
            "Création de l'argument de vente unique",
          ])}
        </div>

        <div>
          <h4 style="color: var(--gold-primary); font-size: 0.9rem; margin-bottom: var(--spacing-sm);">3. Stratégie d'acquisition clients</h4>
          ${renderChecklist([
            'Choix des canaux (Meta Ads / TikTok / WhatsApp)',
            'Définition du système de conversion',
          ])}
        </div>
      </div>

      <!-- PHASE 2 -->
      <div class="content-card stagger-item">
        <h3>🔥 PHASE 2 — Construction du Système de Vente</h3>

        <div style="margin-bottom: var(--spacing-md);">
          <h4 style="color: var(--gold-primary); font-size: 0.9rem; margin-bottom: var(--spacing-sm);">1. Tunnel de vente complet</h4>
          ${renderChecklist([
            'Création de page de capture ou boutique Chariow / Shopify',
            "Structure de la page pour qu'elle devienne convaincante",
          ])}
        </div>

        <div style="margin-bottom: var(--spacing-md);">
          <h4 style="color: var(--gold-primary); font-size: 0.9rem; margin-bottom: var(--spacing-sm);">2. WhatsApp Business optimisé</h4>
          ${renderChecklist([
            'Messages automatiques',
            'Scripts de réponse',
            'Organisation des leads',
          ])}
        </div>

        <div>
          <h4 style="color: var(--gold-primary); font-size: 0.9rem; margin-bottom: var(--spacing-sm);">3. Contenu stratégique</h4>
          ${renderChecklist([
            'Angles de contenu performants',
            'Scripts vidéos pour contenu viral',
            'Structure de contenu viral orienté vente',
          ])}
        </div>
      </div>

      <!-- PHASE 3 -->
      <div class="content-card stagger-item">
        <h3>🔥 PHASE 3 — Acquisition Clients (Publicité)</h3>

        <div style="margin-bottom: var(--spacing-md);">
          <h4 style="color: var(--gold-primary); font-size: 0.9rem; margin-bottom: var(--spacing-sm);">1. Mise en place Meta Ads</h4>
          ${renderChecklist([
            'Structure campagne',
            'Structuration du pixel Facebook',
            'Ciblage optimisé',
            'Angles publicitaires',
          ])}
        </div>

        <div>
          <h4 style="color: var(--gold-primary); font-size: 0.9rem; margin-bottom: var(--spacing-sm);">2. Optimisation conversion</h4>
          ${renderChecklist([
            'Analyse des performances',
            'Amélioration du coût par lead',
            'Scaling progressif',
          ])}
        </div>
      </div>

      <!-- PHASE 4 -->
      <div class="content-card stagger-item">
        <h3>🔥 PHASE 4 — Accompagnement (Done With You)</h3>

        <div style="margin-bottom: var(--spacing-md);">
          <h4 style="color: var(--gold-primary); font-size: 0.9rem; margin-bottom: var(--spacing-sm);">1. Coaching stratégique</h4>
          ${renderChecklist([
            'Suivi hebdomadaire',
            'Correction business',
          ])}
        </div>

        <div>
          <h4 style="color: var(--gold-primary); font-size: 0.9rem; margin-bottom: var(--spacing-sm);">2. Implémentation guidée</h4>
          ${renderChecklist([
            'On construit ensemble',
            "Tu valides, j'exécute avec toi",
          ])}
        </div>
      </div>

      <!-- PHASE 5 -->
      <div class="content-card stagger-item">
        <h3>🔥 PHASE 5 — Done For You (Partiel)</h3>
        <p>Ce que je peux faire <strong class="highlight">pour vous</strong> si vous êtes bloqué :</p>
        ${renderChecklist([
          'Configurer et créer pour vous une <strong>publicité Meta Ads</strong>',
          "Création de votre <strong>boutique</strong> avec mise en place d'un produit",
          'Création et correction de votre <strong>page de vente</strong>',
        ])}
      </div>

      <!-- Price -->
      <div class="price-box stagger-item">
        <div class="price-current">150 000 FCFA</div>
        <div class="price-usd">(≈ 265 $)</div>
        <div class="price-installment">
          💳 <strong>Possibilité de payer en 02 tranches</strong><br/>
          <strong class="highlight">Durée : 2 mois d'accompagnement</strong>
        </div>
      </div>

      <!-- CTA -->
      <a href="https://wa.me/221776211824" target="_blank" rel="noopener noreferrer" class="cta-button cta-whatsapp stagger-item" id="cta-reserver-prive">
        ${icons.whatsapp}
        Réserver mon accompagnement privé
      </a>

      <!-- ==================== -->
      <!-- SECTION ENTREPRISES -->
      <!-- ==================== -->
      <div class="gold-separator stagger-item" style="margin: var(--spacing-2xl) auto;"></div>

      <div class="section-header stagger-item">
        <div class="section-badge">
          ${icons.target} Offre B2B
        </div>
        <h1 class="section-title">Pour les Entreprises & P.M.E</h1>
        <p class="section-subtitle">Système d'Acquisition Clients Entreprise</p>
      </div>

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
      <a href="https://mister-jadore-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer" class="cta-button stagger-item" id="cta-portfolio" style="margin-top: var(--spacing-md);">
        ${icons.sparkles}
        Voir mon portfolio & mes réalisations
      </a>

      ${renderFooter()}
    </div>
  `;
}
