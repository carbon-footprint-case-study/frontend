import React from 'react'
import climate from './images/climate-1.jpg'
import volcano from './images/volcano.jpg'
import ocean from './images/ocean.jpg'
import ghg from './images/ghg.png'
import napcc from './images/napcc.jpg'
import "./InfoCard.scss";

function Deforestation() {
  return (
    <div className="info-card container" >
      <div className="d-flex justify-content-center my-3">
        <img src={climate} alt="climate change" />
      </div>
      <h2 className="heading">Climate Changes</h2>

      <hr />
      <h3>
      Climate change is the long-term change in the weather patterns of a specific geographical location.
      </h3>
      <p>
      As per an estimate by WHO, climate change may be the prime reason for the death of around 250,000 people every year due to increasing pollution-related problems.
      </p>
      
      <ul>
        <li>
        This change in the weather patterns can either be human-induced or due to anthropogenic factors.
        </li>
        <li>All these factors collectively raise the temperature of the local environment and hence contribute to ecological imbalances in the weather conditions</li>
        <li>These weather conditions, when hampered for a longer period of time, lead to a substantial change in the climate of that area; i.e., a rise in the temperature; an increased concentration of greenhouse gases; disturbed natural cycles; all of this leads to change in the climatic conditions of the geographical area.</li>
      </ul>

      <h3>
      Causes of Climate Change
      </h3>
      <p>
      There are natural factors and anthropogenic factors that have contributed to climate change. It has led to drastic alterations in weather patterns. The natural factors include continental drifts, plate tectonics, the eruption of volcanoes etc. Below we have mentioned all the causes of Climate Change-
      </p>
      <h4>
      Natural Factors
      </h4>
      <div className="my-3">
        <img src={volcano} alt="Natural Factors" />
      </div>
      <hr/>
      <p>
      Natural factors are the natural events that occur in the environment. Man has no control over these occurrences. These can include the following:
      </p>
      <h5>Continental Drifts </h5>
      <p>
      The movement of the tectonic plates has been taking place for millions of years. The movement of these plates leads to changes in the physical features of the landmass and the placement of the water bodies on the earth’s surface. This leads to a change in the weather patterns, which over the years contributes to climate change.
      </p>
      <h5>
      Plate tectonics
      </h5>
      <p>
      The constant change in temperature of the core of the Earth’s surface causes plate repositioning. This affects the local temperature of the environment and other codependent environmental factors, which in turn lead to climate change.
      </p>
      <h5>
      Eruption of volcano
      </h5>
      <p>
      An eruption of a volcano lasts for a very short period of time, but its after-effects are persistent for years. When lava erupts out of a volcano, a large amount of carbon dioxide, dust particles, aerosol droplets, and other greenhouse gases enter the earth’s atmosphere. When excreted in large concentrations, <strong>these gases can warm up the earth’s atmospheric layers and contribute to global warming.</strong> Hence, causing climate change.
      </p>
      <h4>
      Ocean currents
      </h4>
      <div className="my-3">
        <img src={ocean} alt="Ocean currents" />
      </div>
      <hr/>
      <p>
      The movement of winds in the horizontal direction contradicts the natural flow of ocean currents. Hence, causes temperature variation, which in turn leads to a change in the climate of the particular geographical area. This contributes to climate change as well.
      </p>
      <h4>
      Anthropogenic Factors
      </h4>
      <div className="my-3">
        <img src={ghg} alt="Anthropogenic Factors" />
      </div>
      <hr/>
      <p>
      Anthropogenic factors are influenced by human actions and deeds. The anthropogenic factors include the following:
      </p>
      <h5>
      Greenhouse Gases
      </h5>
      <p>
      <strong>The gases that absorb heat radiation from the sun and result in an increase in the temperature of the Earth’s surface are called greenhouse gases.</strong> These include carbon dioxide, chlorofluorocarbons, water vapors, methane, and nitrous oxide. Due to industrialization, deforestation, and urbanization, the levels of concentrations of these gases are increasing in the atmosphere day by day, hence contributing to global warming.
      </p>
      <h5>
      Aerosoles
      </h5>
      <p>
      Aerosols are extremely tiny liquid particles suspended in the earth’s atmosphere. Their presence can be caused by a variety of activities such as coal burning, burning of plants grown with ammonia-containing fertilizers, biomass burning, and other industrial processes. aerosols They scatter and absorb solar radiation as well as infrared radiation, causing a change in the temperature of atmospheric layers. They also affect the physical and chemical composition of clouds, including cloud formation. Hence, it has an indirect impact on the climate.
      </p>
      <h5>
      Land use pattern
      </h5>
      <p>
      Extensive usage of land for industrial purposes leads to deforestation, and changes in agricultural patterns lead to increased levels of greenhouse gases. Losing trees means losing the capability of cooling the environment, which is equivalent to increased carbon dioxide levels.
      </p>
      <h4>
      Evidence of Climate Change
      </h4>
      <p>
      According to a research<strong> study by the Intergovernmental Panel on Climate Change (IPCC), human activities have led to an increase in global temperature of about 1 ° C </strong>(0.8 ° C to 1.2 ° C) above pre-industrial levels. Following is the evidence that proves that climate change is a reality and needs to be taken into account for future policies and action:-
      </p>
      <ul>
        <li>
        A rise in the Global Temperature
        </li>
        <li>
        A decrease in the snow cover on Glaciers
        </li>
        <li>
        A reduction in Arctic Sea Ice Cover
        </li>
        <li>
        Warming of Ocean Waters
        </li>
        <li>
        The rising sea level of the Ocean
        </li>
        <li>
        Increase in the event of forest fires around the world
        </li>
        <li>
        Ocean acidification resulting in the death of marine plants and animals
        </li>
        <li>
        Extreme weather events at regular intervals. Like – excessive precipitation, floods, earthquakes, tsunamis, high winds, hail, thunderstorms, downbursts, tornadoes, waterspouts, tropical cyclones etc.
        </li>
      </ul>
      <h4>
      Impacts of Climate Change
      </h4>
      <ul>
        <li>
        Landscape Change
        </li>
        <li>
        Rise in the Levels of the Sea
        </li>
        <li>
        Ocean Acidification
        </li>
        <li>
        Ecosystem Imbalances
        </li>
        <li>
        Natural Disasters
        </li>
        <li>
        Adverse Human Health
        </li>

      </ul>
      <h4>
      Steps Taken By India To Combat Climate Change – NAPCC
      </h4>
      <div className="my-3">
        <img src={napcc} alt="NAPCC" />
      </div>
      <hr/>
      <p>
      The NAPCC [ National Action Plan on Climate Change] is a committee set up by the Indian government with the aim of tackling climate change. It comprises 8 missions such as the National Solar Mission, National Mission for Enhanced Energy Efficiency, National Water Mission, National Mission for sustaining the Himalayan ecosystem, the National mission on sustainable habitat, the national mission on strategic knowledge for climate change, National Mission for a Green India, National Mission for Sustainable Agriculture
      </p>
      <p>
      Govt has launched the following programs to address climate change under NAPCC:-
      </p>
      <ul>
        <li>
        The National Solar Mission has been launched for promoting the use of solar energy for power generation
        </li>
        <li>
        The Government of India has initiated the National Enhanced Energy Efficiency Mission for Energy Conservation in Industries.
        </li>
        <li>
        India is making various policies for the conservation of the environment like – Environment (Protection) Act, 1986, Forest (Conservation) Act, 1980, Wildlife Protection Act, 1972 etc.
        </li>
        <li>
        The Government of India has initiated a “Green India Mission” for the afforestation of more than 6 mn hectares of degraded forest land and to increase forest cover from 23% to 33%.
        </li>
        <li>
        India is promoting the use of renewable energy sources.
        </li>
        <li>
        For conserve biodiversity, forest cover, and other ecological values in the Himalayan region National Mission for Sustaining the Himalayan Ecosystem has been launched.
        </li>
      </ul>

    </div>
  );
}

export default Deforestation