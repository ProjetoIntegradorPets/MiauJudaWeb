// ---------- CHARTS ----------

// AREA CHART
const areaChartOptions = {
    series: [
      {
        name: 'Purchase Orders',
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: 'Sales Orders',
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    chart: {
      type: 'area',
      background: 'transparent',
      height: 350,
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    colors: ['#00ab57', '#d50000'],
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    dataLabels: {
      enabled: false,
    },
    fill: {
      gradient: {
        opacityFrom: 0.4,
        opacityTo: 0.1,
        shadeIntensity: 1,
        stops: [0, 100],
        type: 'vertical',
      },
      type: 'gradient',
    },
    grid: {
      borderColor: '#55596e',
      yaxis: {
        lines: {
          show: true,
        },
      },
      xaxis: {
        lines: {
          show: true,
        },
      },
    },
    legend: {
      labels: {
        colors: '#f5f7ff',
      },
      show: true,
      position: 'top',
    },
    markers: {
      size: 6,
      strokeColors: '#1b2635',
      strokeWidth: 3,
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      axisBorder: {
        color: '#55596e',
        show: true,
      },
      axisTicks: {
        color: '#55596e',
        show: true,
      },
      labels: {
        offsetY: 5,
        style: {
          colors: '#f5f7ff',
        },
      },
    },
    yaxis: [
      {
        title: {
          text: 'Purchase Orders',
          style: {
            color: '#f5f7ff',
          },
        },
        labels: {
          style: {
            colors: ['#f5f7ff'],
          },
        },
      },
      {
        opposite: true,
        title: {
          text: 'Sales Orders',
          style: {
            color: '#f5f7ff',
          },
        },
        labels: {
          style: {
            colors: ['#f5f7ff'],
          },
        },
      },
    ],
    tooltip: {
      shared: true,
      intersect: false,
      theme: 'dark',
    },
  };
  
  const areaChart = new ApexCharts(
    document.querySelector('#area-chart'),
    areaChartOptions
  );
  areaChart.render();
  
// GRAFICO PIZZA
const adoptionChartOptions = {
  series: [64, 36],
  chart: {
    type: 'pie',
    height: 350,
  },
  labels: ['Cães', 'Gatos'],
  colors: ['#f58c02', '#000000'],
  legend: {
    fontSize: '20px', //tamanho da legenda
    labels: {
      colors: '#000000',
    },
    position: 'bottom',
  },
  dataLabels: {
    style: {
      fontSize: '15px', //tamanho da porcentagem
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 600,
    }
  }
};

// GRAFICO ANIMAIS DISPONIVEIS
const availableAnimalsChartOptions = {
  series: [102],
  chart: {
    type: 'radialBar',
    height: 350,
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: '70%',
      },
      dataLabels: {
        show: true,
        name: {
          offsetY: -10,
          show: true,
          color: '#888',
          fontSize: '20px', //tamanho do titulo cinza
        },
        value: {
          color: '#111',
          fontSize: '30px', //tamanho da porcentagem
          show: true,
        }
      }
    }
  },
  labels: ['Animais disponíveis'],
  colors: ['#f58c02'],
};

// GRAFICO BARRA
const breedsChartOptions = {
  series: [{
    name: 'Quantidade',
    data: [25, 15, 10, 8, 2]
  }],
  chart: {
    type: 'bar',
    height: 350,
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: false,
    }
  },
  dataLabels: {
    enabled: false
  },
  xaxis: {
    categories: ['SRD', 'Pinscher', 'Husky', 'Pit Bull', 'Pastor Alemão'],
    labels: {
      style: {
        fontSize: '15px', //tamanho da legenda
        fontFamily: 'Montserrat, sans-serif',
      }
    }
  },
  yaxis: {
    title: {
      text: 'Quantidade',
      style: {
        fontSize: '18px', //tamanho legenda lateral
        fontFamily: 'Montserrat, sans-serif',
      }
    },
    labels: {
      style: {
        fontSize: '16px', //tamanho numero
        fontFamily: 'Montserrat, sans-serif',
      }
    }
  },
  colors: ['#f58c02'],
};

// GRAFICO DOACAO DE ANIMAIS
const donationsChartOptions = {
  series: [{
    name: 'Doações',
    data: [11, 26, 17, 30, 37]
  }],
  chart: {
    height: 350,
    type: 'line',
  },
  xaxis: {
    categories: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
    labels: {
      style: {
        fontSize: '16px', //tamanho legenda
        fontFamily: 'Montserrat, sans-serif',
      }
    }
  },
  yaxis: {
    labels: {
      style: {
        fontSize: '16px', //tamanho numero lateral
        fontFamily: 'Montserrat, sans-serif',
      }
    }
  },
  colors: ['#FF6B00'],
  dataLabels: {
    enabled: true,
    style: {
      fontSize: '14px', // tamanho numero grafico
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 600,
    }
  },
};

// Render the charts
const adoptionChart = new ApexCharts(document.querySelector('#adoption-chart'), adoptionChartOptions);
adoptionChart.render();

const availableAnimalsChart = new ApexCharts(document.querySelector('#available-animals-chart'), availableAnimalsChartOptions);
availableAnimalsChart.render();

const breedsChart = new ApexCharts(document.querySelector('#raça-chart'), breedsChartOptions);
breedsChart.render();

const donationsChart = new ApexCharts(document.querySelector('#donations-chart'), donationsChartOptions);
donationsChart.render();