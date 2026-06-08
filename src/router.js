// Simple SPA router
export class Router {
  constructor(routes) {
    this.routes = routes;
    this.currentPage = null;
    this.appElement = document.getElementById('app');

    window.addEventListener('popstate', () => this.navigate(location.hash, false));

    // Delegate clicks on [data-route] elements
    document.addEventListener('click', (e) => {
      const link = e.target.closest('[data-route]');
      if (link) {
        e.preventDefault();
        const route = link.getAttribute('data-route');
        this.navigate(route);
      }
    });
  }

  navigate(hash, pushState = true) {
    const route = hash || '#home';
    if (pushState) {
      history.pushState(null, '', route);
    }

    // Animate out current page
    const container = this.appElement.querySelector('.page-container');
    if (container) {
      container.classList.add('page-exit');
      setTimeout(() => this.renderRoute(route), 280);
    } else {
      this.renderRoute(route);
    }
  }

  renderRoute(route) {
    const pageRenderer = this.routes[route] || this.routes['#home'];
    this.appElement.innerHTML = `
      <div class="bg-gradient"></div>
      <div class="bg-particles"></div>
      ${pageRenderer()}
    `;

    // Trigger stagger animations
    const items = this.appElement.querySelectorAll('.stagger-item');
    items.forEach((item, i) => {
      item.style.animationDelay = `${i * 0.07}s`;
    });

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  start() {
    this.navigate(location.hash || '#home', false);
  }
}
