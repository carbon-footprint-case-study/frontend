import React from 'react';

const References = () => {
  const references = [
    {
      id: 1,
      title: 'Electricity',
      source: 'https://www3.epa.gov/ttnchie1/conference/ei20/session5/mmittal.pdf',
    },
    {
      id: 2,
      title: 'LPG',
      source: 'https://www.epa.gov/sites/default/files/2021-04/documents/emission-factors_apr2021.pdf',
    },
    {
      id: 3,
      title: 'Water',
      source: 'https://www.danfoss.com/en/about-danfoss/articles/dhs/the-carbon-footprint-of-potable-water/',
    },
    {
      id: 4,
      title: 'Vehicles (Petrol CNG Diesel)',
      source: 'https://www.example.com/reference2',
    },
    {
      id: 5,
      title: 'Bus',
      source: 'https://www.example.com/reference2',
    },
    {
      id: 6,
      title: 'Train',
      source: 'https://indiaghgp.org/sites/default/files/Rail%20Transport%20Emission.pdf',
    },
    {
      id: 7,
      title: 'Flight',
      source: 'https://indiaghgp.org/sites/default/files/AIR%20Transport%20Emission.pdf',
    },
    {
      id: 8,
      title: 'Food',
      source: 'https://www.sciencedirect.com/science/article/pii/S0048969718323350#bb0120',
    },

    // Add more references as needed
  ];

  return (
    <div>
      <h1>References</h1>
      <ul>
        {references.map(reference => (
          <li key={reference.id}>
              <em>{reference.title}</em>{'  '}
              <a href={reference.source} target="_blank" rel="noopener noreferrer">
              {reference.source}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default References;
