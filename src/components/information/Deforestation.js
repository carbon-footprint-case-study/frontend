import React from 'react'
import deforestation from './images/deforestation.jfif'
import "./InfoCard.scss";

function Deforestation() {
  return (
    <div className="info-card container" >
      <div className="d-flex justify-content-center my-3">
        <img src={deforestation} alt="nn" />
      </div>
      <h2 className="heading">Deforestation</h2>

      <hr />
      <h3>
        Deforestation represents a highly significant threat to our climate, air
        quality and also biodiversity.
      </h3>
      <p>
        Deforestation is the conversion of forest to another land use – this
        includes conversion in ‘invaluable’ forest areas - e.g. palm oil
        plantations and other uses. Deforestation is frequently mentioned
        alongside forest degradation and both have devastating impacts that need
        urgent mitigation. Around 13 Million hectares of forests lost per annum
        between 2000 and 2010 and as well as the ecological impact, rainforest
        deforestation jeopardises people’s livelihoods.
      </p>
      <p>
        It accounts for a staggering 15% of Global Greenhouse Gas (GHG)
        emissions. Irresponsible felling of trees is leading to irreversible
        environmental and ecological catastrophe. Unless we all as businesses
        and individuals make the right decisions about products we buy and
        actions to take, the impact will only get worst and see the extinction
        of many species of flora and fauna.
      </p>
      <h4>What can we do ???</h4>
      <p>
        Every human on the planet shares the responsibility of preserving its
        resources (for other humans, other species, and for future generations).
        An individual can contribute to the prevention of deforestation by
        implementing the 3R (Reduce, Reuse, and Recycle) principle in their
        daily lives.
      </p>
      <ul>
        <li>
          Reduce – Reducing the amount of paper consumed by using alternatives
          wherever possible.
        </li>
        <li>Reuse – Avoid use-and-throw products to prevent wastage</li>
        <li>Recycle – Diligently recycle all used wood and paper products</li>
      </ul>
    </div>
  );
}

export default Deforestation