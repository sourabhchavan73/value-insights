import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trend',
  templateUrl: './trend.component.html',
  styleUrls: ['./trend.component.css']
})
export class TrendComponent implements OnInit {

  data: any;
  options: any;

  ngOnInit() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
      
        this.data = {
          labels: ['Q1 (Jan - Mar)', '02 (Apr - Jun)', 'Q3 (Jul - Sep)', '04 (Oct - Dec)'],
          datasets: [
              {
                  label: '1 Star',
                  backgroundColor: documentStyle.getPropertyValue('--green-200'),
                  borderColor: documentStyle.getPropertyValue('--green-200'),
                  data: [3.5, 5]
              },
              {
                  label: '2 Star',
                  backgroundColor: documentStyle.getPropertyValue('--green-400'),
                  borderColor: documentStyle.getPropertyValue('--green-400'),
                  data: [6,8]
              },
              {
                  label: '3 Star',
                  backgroundColor: documentStyle.getPropertyValue('--green-600'),
                  borderColor: documentStyle.getPropertyValue('--green-600'),
                  data: [10, 15]
              },
              {
                  label: '4 Star',
                  backgroundColor: documentStyle.getPropertyValue('--green-800'),
                  borderColor: documentStyle.getPropertyValue('--green-800'),
                  data: [2, 15]
              },
              {
                label: '5 Star',
                backgroundColor: documentStyle.getPropertyValue('--green-900'),
                borderColor: documentStyle.getPropertyValue('--green-900'),
                data: [0, 4]
            }
              
          ]
        };

        this.options = {
            responsive: true,   
            maintainAspectRatio: false,
            aspectRatio: 0.5,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {                        
                        color: textColor
                    }
                    
                },
                // layout: {
                //     padding: 50
                // }              
            },
            scales: 
            {                       
                x:
                {
                    barThickness: 5,  // number (pixels) or 'flex'
                    maxBarThickness: 8, // number (pixels),  
                    ticks: 
                    {
                        color: textColorSecondary,
                        font: {
                            weight: 500
                        }
                    },
                    grid: 
                    {
                        color: surfaceBorder,
                        drawBorder: false,
                        display:false
                    },
                    title: {
                        display: true,
                        text: 'Quality Measure by Stars Earned',
                    }
                },
                y: 
                {
                    ticks: 
                    {
                        color: textColorSecondary,
                        beginAtZero: true,
                    },
                    grid: 
                    {
                        color: surfaceBorder,
                        drawBorder: false
                    },
                    title:
                    { 
                        display: true,
                        text: 'Quality Measure Count',
                        padding: {
                            top: 10,
                            bottom: 30
                        }
                    }
                }
            }
        };
  }

}
