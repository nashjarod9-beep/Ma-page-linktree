import { icons } from '../icons.js';
import { renderBackButton, renderMiniProfile, renderFooter } from '../components.js';

const formations = [
  {
    number: 1,
    title: 'Chariow & Vente de Produits Digitaux',
    promise: '+500 000 FCFA (≈ 885 $) sur ton téléphone en 30 jours grâce à Chariow.',
    description: `Le système complet <strong>S.A.C Chariow 2.0</strong> pour vendre des produits digitaux de A à Z, même si tu débutes, même si tu es timide et que tu ne veux pas montrer ton visage. Tu apprends à créer ta boutique Chariow pro, utiliser l'IA pour créer du contenu sans te filmer, générer du trafic gratuit sur TikTok, lancer des Facebook Ads 2026 intelligentes et installer un système de vente complet <em>(+ agent IA WhatsApp qui convainc tes clients à ta place)</em>.`,
    bonus: `<strong>Bonus :</strong> Masterclass Chariow complète • 100 idées de produits digitaux rentables • Ebook « 10 conseils pour vendre rapidement » • Formation chatbot WhatsApp offerte. <strong>Accès immédiat après paiement.</strong>`,
    price: null,
    originalPrice: null,
    badge: null,
    link: 'https://theambitiousacademy.online/prd_4ff4ch/checkout',
  },
  {
    number: 2,
    title: 'Méthode Andromeda (Facebook Ads)',
    promise: 'Lance des publicités rentables avec seulement 10 000 FCFA (≈ 18 $).',
    description: `La nouvelle façon de faire de la pub Facebook depuis la mise à jour <strong>Andromeda</strong>. Tes anciennes méthodes (ciblage classique, boost) sont dépassées : aujourd'hui c'est ta <strong class="highlight">créative</strong> qui fait tout le travail. Tu apprends à comprendre le nouveau système Andromeda, à créer des créatives qui vendent à ta place <em>(le secret des 3 premières secondes, le texte qui influence le ciblage, les règles 2026)</em>, et à lancer tes pubs même avec une carte bancaire — pour faire arriver les messages directement sur WhatsApp et vendre.`,
    bonus: null,
    price: null,
    originalPrice: null,
    badge: null,
    link: 'https://theambitiousacademy.online/prd_hmiosb/checkout',
  },
  {
    number: 3,
    title: 'Commander sur Alibaba, Shein & Turquie',
    promise: 'Trouve, commande et fais livrer dans ton pays les produits gagnants, sans te faire arnaquer.',
    description: `La méthode simple et directe pour retrouver le produit exact vu en vidéo, identifier les bons fournisseurs et te faire livrer au meilleur prix. Tu apprends à commander sur <strong>Alibaba</strong> en sécurité <em>(trouver les bons fournisseurs, négocier, payer sans risque)</em>, à acheter sur <strong>Shein</strong> pour revendre avec marge, et à importer depuis la <strong>Turquie</strong> <em>(sacs, vêtements, chaussures…)</em>.`,
    bonus: `<strong>Bonus :</strong> Conseils anti-erreurs de débutant • Liste de produits qui se vendent très bien en Afrique • Ebook « 10 jours pour écouler ta marchandise ». <strong>Accès immédiat après paiement.</strong>`,
    price: null,
    originalPrice: null,
    badge: null,
    link: 'https://theambitiousacademy.online/prd_6f8bd4/checkout',
  },
  {
    number: 4,
    title: 'Maîtrise 1688, Taobao & Alipay',
    promise: 'Achète à prix usine (parfois moins de 100 FCFA / unité) et fais des marges plus élevées qu\'avec Alibaba — même sans parler chinois.',
    description: `Le guide ultime pour maîtriser <strong>1688</strong> pas à pas <em>(produits réservés aux pros, recherche efficace même en chinois, fournisseurs fiables)</em>, utiliser <strong>Taobao</strong> comme un pro, et créer/utiliser un <strong>compte Alipay sécurisé</strong> pour payer sans stress ni arnaque. Tu peux passer ta première commande en quelques heures, aucune connaissance technique requise.`,
    bonus: `<strong>Bonus :</strong> Assistance anti-pièges • Contacts de transitaires pour ton pays • Liste de produits gagnants • Ebook « 10 jours pour écouler ta marchandise ». <strong>Paiement Mobile Money, accès immédiat.</strong>`,
    price: '7 000 FCFA (≈ 12 $)',
    originalPrice: '20 000 FCFA (≈ 35 $)',
    badge: 'Offre limitée',
    link: 'https://theambitiousacademy.online/prd_a8q69i/checkout',
  },
  {
    number: 5,
    title: 'Promo Pack Shopify + Alibaba (Pack complet)',
    promise: 'Tout pour importer, vendre et réussir en partant de zéro, avec moins de 15 000 FCFA (≈ 27 $).',
    description: `Le programme ultime <strong>tout-en-un</strong> pour te lancer avec un petit budget. Tu obtiens un accès complet à : <strong>Alibaba Mastery</strong>, <strong>Shopify Express</strong> (boutique pro), <strong>1688 &amp; Taobao</strong>, <strong>Turquie Import</strong>, <strong>Shein Hack</strong>, <strong>Facebook Ads Starter Pack</strong> et <strong>TikTok Business Booster</strong>.`,
    bonus: `<strong>Bonus :</strong> Accompagnement anti-erreurs coûteuses • Contacts de transitaires fiables • Listes de fournisseurs (iPhones/téléphones/PC de Chine, sacs tendance de Turquie) • Liste de produits gagnants • Ebook « 10 jours pour écouler ta marchandise ». <strong>Tu peux commencer dès aujourd'hui.</strong>`,
    price: null,
    originalPrice: null,
    badge: 'Pack complet',
    link: 'https://theambitiousacademy.online/prd_ahtd31/checkout',
  },
];

function renderFormationCard(f) {
  return `
    <article class="formation-card stagger-item" id="formation-${f.number}">
      ${f.badge ? `<div class="formation-card-badge">${f.badge}</div>` : ''}

      <div class="formation-card-header">
        <div class="formation-card-number">${f.number}</div>
        <h2 class="formation-card-title">${f.title}</h2>
        <div class="formation-card-promise">
          ${icons.target} ${f.promise}
        </div>
      </div>

      <div class="formation-card-body">
        <p class="formation-card-desc">${f.description}</p>
        ${f.bonus ? `<div class="formation-card-bonus">${icons.gift} ${f.bonus}</div>` : ''}
      </div>

      ${f.price || f.originalPrice ? `
        <div class="formation-card-price">
          ${f.price ? `<span class="formation-card-price-current">${f.price}</span>` : ''}
          ${f.originalPrice ? `<span class="formation-card-price-original">${f.originalPrice}</span>` : ''}
        </div>
      ` : ''}

      <div class="formation-card-footer">
        <a href="${f.link}" target="_blank" rel="noopener noreferrer" class="cta-button" id="cta-formation-${f.number}">
          ${icons.shoppingBag}
          Acheter la formation
        </a>
      </div>
    </article>
  `;
}

export function renderFormationsPage() {
  return `
    <div class="page-container page-enter">
      ${renderBackButton()}
      ${renderMiniProfile()}

      <!-- Header -->
      <div class="section-header stagger-item">
        <div class="section-badge">
          ${icons.bookOpen} Catalogue
        </div>
        <h1 class="section-title">Mes Formations</h1>
        <p class="section-subtitle">Des formations pensées pour te faire passer de 0 à rentable, même en partant de zéro</p>
      </div>

      <!-- Formation Cards -->
      <div class="formation-cards">
        ${formations.map(f => renderFormationCard(f)).join('')}
      </div>

      ${renderFooter()}
    </div>
  `;
}
