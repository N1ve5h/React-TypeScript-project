import { useLocation } from "react-router";

export const Country: React.FC = () => {
  const location = useLocation();
  let {country}: any = location.state;
  return (
    <div>
      <h1>{country.name}</h1>
    </div>
  );
};
