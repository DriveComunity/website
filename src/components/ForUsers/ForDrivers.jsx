import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./ForUsers.css";

const ForDrivers = () => {
  return (
    <div className='cards-parent-container'>
      <Navbar />
      <div className='banner'>
        <h2 className='title-banner'>
          FOR
          <br />
          PASSENGERS
        </h2>
      </div>
      <div className='cards-container'>
        <div className='cards-column'>
          <Card
            title={"Poner algo para probar los espacios"}
            par={"asdasdasdsadadsd fg hfgh gf f fhfgfhgfedsdfsd"}
            number={"01 |"}
          />
          <Card
            title={"blabla blalb lbla bla"}
            par={"asdasdasdsadadsd fgh fghfg fg hfgfgf hola hoala hola hola"}
            number={"02 |"}
          />
        </div>
        <div className='cards-column'>
          <Card title={"gfdhgfh hg f"} par={"asdasdasdsadadsd dgdff h gh fhfg gf hfg hfg"} number={"03 |"} />
          <Card title={"hooal oasl os holaa"} par={"lsadasdas asd asdasd  asd sad  asdasdas"} number={"04 |"} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ForDrivers;
