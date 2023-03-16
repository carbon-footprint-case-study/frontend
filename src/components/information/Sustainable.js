import React from "react";
import Goals from "./Goals";
import sustainable from "./images/sustainable.jpg";

function Sustainable() {
  return (
    <div className="info-card container">
      <div className="d-flex justify-content-center my-3">
        <img className="image" src={sustainable} alt="nn" />
      </div>
      <h2 className="heading">Sustainable Development Goals</h2>
      <hr />
      <h3>
        "Sustainable development is development that meets the needs of the
        present, without compromising the ability of future generations to meet
        their own needs."
      </h3>
      <p>
        Sustainable development can be defined as an approach to the economic
        development of a country without compromising with the quality of the
        environment for future generations. In the name of economic development,
        the price of environmental damage is paid in the form of land
        degradation, soil erosion, air and water pollution, deforestation, etc.
        This damage may surpass the advantages of having more quality output of
        goods and services.
      </p>
      <h4>The Sustainable Development Goals :</h4>
      <p>
        At the United Nations (UN) Sustainable Development Summit in 2015, world
        leaders adopted the 17 Sustainable Development Goals (SDGs). These
        global goals aim to address inequalities and challenges all across the
        planet whilst aiding development and protecting the environment. Meeting
        the target date of 2030 will require the work and co-operation of all
        these governments and the UN along with businesses and members of the
        public.
      </p>

      <Goals />

      <h4>Achieving Sustainable Development :</h4>
      <p>
        Sustainable development can be achieved if we follow the following
        points:
      </p>
      <ul>
        <li>It can be achieved by restricting human activities.</li>
        <li>
          Technological development should be input effective and not input
          utilising.
        </li>
        <li>
          The rate of consumption should not surpass the rate of salvation.
        </li>
        <li>
          For renewable resources, the rate of consumption should not surpass
          the rate of production of renewable substitutes
        </li>
        <li>All types of pollution should be minimised.</li>
        <li>It can be achieved by sensible use of natural resources.</li>
      </ul>
    </div>
  );
}

export default Sustainable;
