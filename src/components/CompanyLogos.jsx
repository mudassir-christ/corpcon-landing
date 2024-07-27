import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">Where Innovation Meets Collaboration</h5>
      <ul className="flex flex-wrap items-center justify-around gap-6">
        {companyLogos.map((logo, index) => (
          <li key={index}>
            <img src={logo} width={134} height={28} alt={logo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
