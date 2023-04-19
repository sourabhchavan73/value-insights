import { Component } from '@angular/core';

@Component({
  selector: 'app-ps-mlrt-participation-rules',
  templateUrl: './ps-mlrt-participation-rules.component.html',
  styleUrls: ['./ps-mlrt-participation-rules.component.css']
})
export class PsMlrtParticipationRulesComponent {

  sharedRulesData = [
    {
      title: 'Shared Rules',
      data: [
        {
          title: 'Exclude Members with Overlapping Coverages',
          icon: true,
          value: 'pi-check'
        },
        {
          title: 'Exclude Members with Total Cost over',
          icon: true,
          value: 'pi-times'
        },
        {
          title: 'Exclude Host Members',
          icon: true,
          value: 'pi-check'
        },
        {
          title: 'Exclude Members with',
          value: '-',
          extra:true,
          data:[
            {
              label1:'line of business',
              value: 'Commercial',
            },
            {
              label1:'Sub Line of Business	',
              value: '-',
            },
          ]
        },
        {
          title: 'Exclude Members with Assignment/s to',
          value: '-',
          extra:true,
          data:[
            {
              label1:'Market Segment Code',
              value: 'RET',
            },
            {
              label1:'Funding Type Code',
              value: '-',
            },
            {
              label1:'Corporate Entity Code',
              value: '1234, 123456'
            },
          ]
        }
      ],
    }
  ]

  periodData = [
    {
      title: 'Performance Period',
      data: [
        {
          title: 'Attributed Only',
          icon: true,
          value: 'pi-check'
        },
        {
          title: 'Minimum Eligibility',
          value: '1 Month'
        },
        {
          title: 'Minimum Eligibility',
          value: '04-Jan-YYYY'
        }
      ]
    },
    {
      title: 'Benchmark Period',
      data: [
        {
          title: 'Attributed Only',
          icon: true,
          value: 'pi-check'
        },
        {
          title: 'Minimum Eligibility',
          value: '1 Month'
        },
      ]
    }
  ]


  products = [
    {
      id: '1000',
      name: 'Bamboo Watch',
      value: true
    },
    {
      id: '1001',
      name: 'Bamboo Watch',
      value: true
    },
    {
      id: '1002',
      name: 'Bamboo Watch',
      value: true
    },
  ]
}
