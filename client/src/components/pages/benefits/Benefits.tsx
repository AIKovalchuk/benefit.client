import React from "react";
import { IBenefit } from "../../../interfaces";
import BenefitsService from "../../../service/Benefits";

import Header from "../../layout/Header";

interface Props {}

const Benefits = (props: Props) => {
  const [benefits, setBenefits] = React.useState<IBenefit[]>([]);

  const getBenefits = async () => {
    try {
      const benes = await BenefitsService.getAll();
      setBenefits(benes);
    } catch (error) {
      console.warn(error.message);
    }
  };

  React.useEffect(() => {
    getBenefits();
  }, []);

  return (
    <div>
      <Header />
      <div className="benefit-search"></div>
      <div className="benefit-list">
        {benefits.map((val, id) => (
          <div key={id} className="benefit-list__item">
            {val.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
