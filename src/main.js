import './style.css';
import { Router } from './router.js';
import { renderHomePage } from './pages/home.js';
import { renderAccompagnementPrive } from './pages/accompagnement-prive.js';
import { renderAccompagnementGroupe } from './pages/accompagnement-groupe.js';
import { renderFormationsPage } from './pages/formations.js';

// Define routes
const routes = {
  '#home': renderHomePage,
  '#accompagnement-prive': renderAccompagnementPrive,
  '#accompagnement-groupe': renderAccompagnementGroupe,
  '#formations': renderFormationsPage,
};

// Initialize router
const router = new Router(routes);
router.start();
