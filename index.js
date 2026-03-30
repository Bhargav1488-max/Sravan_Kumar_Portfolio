const sections = Array.from(document.querySelectorAll('.page'));
const indicators = Array.from(document.querySelectorAll('.page-indicator span'));

if (sections.length > 0 && 'IntersectionObserver' in window) {
  document.body.classList.add('js-enhanced');
  sections[0].classList.add('in-view');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          sections.forEach((section) => section.classList.remove('in-view'));
          entry.target.classList.add('in-view');

          const pageIndex = Number(entry.target.dataset.page) - 1;
          indicators.forEach((item) => item.classList.remove('active'));

          if (indicators[pageIndex]) {
            indicators[pageIndex].classList.add('active');
          }
        }
      });
    },
    {
      threshold: 0.55,
    }
  );

  sections.forEach((section) => observer.observe(section));
}
