// Toggle dark mode
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
  }
  
  // ScrollReveal animations
  ScrollReveal().reveal('section', {
    distance: '50px',
    duration: 800,
    easing: 'ease-out',
    origin: 'bottom',
    interval: 200
  });
  
  // Skills charts
  function createChart(id, value) {
    if (!document.getElementById(id)) return;
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
  }
  
  createChart('swiftChart', 90);
  createChart('swiftuiChart', 85);
  createChart('htmlChart', 80);
  createChart('javaChart', 75);