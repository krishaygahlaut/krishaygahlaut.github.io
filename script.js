// theme toggle
const toggle = document.querySelector('#theme-toggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});

// load saved theme
window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
  }
  AOS.init({ duration: 800, once: true });
});

// mobile nav toggle
const navToggle = document.querySelector('#nav-toggle');
const navMenu = document.querySelector('#nav-menu');
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

// pie chart setup (used in skills.html)
if (document.querySelector('.chart')) {
  const charts = [
    { id: 'swiftChart', value: 90 },
    { id: 'swiftuiChart', value: 85 },
    { id: 'htmlChart', value: 90 },
    { id: 'cssChart', value: 85 },
    { id: 'jsChart', value: 80 },
    { id: 'javaChart', value: 75 },
  ];

  charts.forEach(({ id, value }) => {
    new Chart(document.getElementById(id), {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [value, 100 - value],
          backgroundColor: ['#007aff', '#e0e0e0'],
          borderWidth: 0
        }]
      },
      options: {
        cutout: '70%',
        plugins: {
          tooltip: { enabled: false },
          legend: { display: false }
        }
      }
    });
  });
}