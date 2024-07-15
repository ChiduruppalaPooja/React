import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import typography, { pxToRem } from '../../theme/typography';

const MuiColumnChart = ({
  series,
  categories,
  yaxisTitle,
  xaxisTitle,
  width,
  height,
  dataLabelsColor,
  primaryBarColor,
  secondaryBarColor,
}) => {
  const theme = useTheme();

  const options = {
    chart: {
      type: 'bar',
      margin: {
        left: 100,
      },
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        dataLabels: {
          position: 'top',
        },
        barHeight: '70%',
        columnWidth: '20px',
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val + '%';
      },
      offsetY: -20,
      style: {
        fontSize: '10px',
        fontFamily: 'Axiforma-SemiBold, Arial, sans-serif',
        fontWeight: 500,
        cssClass: 'apexcharts-xaxis-label',
        colors: series[0].data.map((value) =>
          value != 0 ? primaryBarColor : secondaryBarColor
        ),
      },
    },
    xaxis: {
      title: {
        text: xaxisTitle,
        style: {
          color: '#637381',
          fontFamily: typography.fontFamily,
          fontSize: pxToRem(14),
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: '20px',
        },
      },
      tickPlacement: 'on',
      categories: categories,
      lines: {
        show: false,
      },
      position: 'bottom',
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
      labels: {
        style: {
          colors: theme.palette.grey[500],
          fontSize: '10px',
          fontFamily: 'Axiforma-SemiBold, Arial, sans-serif',
          fontWeight: 500,
          cssClass: 'apexcharts-xaxis-label',
        },
      },
    },
    yaxis: {
      title: {
        text: yaxisTitle,
        style: {
          color: theme.palette.grey[500],
          fontSize: '10px',
          fontFamily: 'Axiforma-SemiBold, Arial, sans-serif',
          fontWeight: 400,
          cssClass: 'apexcharts-yaxis-title',
        },
      },
      position: 'top',
      lines: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        formatter: function (val) {
          return val;
        },
        style: {
          colors: theme.palette.grey[500],
          fontSize: '10px',
          fontFamily: 'Axiforma-SemiBold, Arial, sans-serif',
          fontWeight: 500,
          cssClass: 'apexcharts-xaxis-label',
        },
      },
    },
    grid: {
      show: true,
    },
    legend: {
      show: true,
      customLegendItems: ['Attempted', 'UnAttempted'],
    },
    colors: [
      function ({ value }) {
        return value !== 0 ? primaryBarColor : secondaryBarColor;
      },
    ],
    tooltip: {
      enabled: false,
    },
  };

  return (
    <Chart
      options={options}
      series={series}
      type="bar"
      width={width}
      height={height}
    />
  );
};

export default MuiColumnChart;
