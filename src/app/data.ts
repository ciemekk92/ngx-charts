export interface ReferenceLine {
  name: string;
  value: number;
}

export const optionOneReferenceLines: ReferenceLine[] = [
  {
    name: 'Max. Avg. 2017-2019 (22.6%)',
    value: 22.6,
  },
  {
    name: 'Min. Avg. 2017-2019 (-6.1%)',
    value: -6.1,
  },
];

export const multi = [
  {
    name: 'Tested Results (Annually)',
    series: [
      {
        name: '2017',
        value: 10.5,
      },
      {
        name: '2018',
        value: 14.61,
      },
      {
        name: '2019',
        value: 18.35,
      },
    ],
  },
  {
    name: 'Tested Result (All Year Average) | 14.49%',
    series: [
      {
        name: '2017',
        value: 14.49,
      },
      {
        name: '2018',
        value: 14.49,
      },
      {
        name: '2019',
        value: 14.49,
      },
    ],
  },
];
