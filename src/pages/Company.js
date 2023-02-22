import React from "react";
import CompanySkyCraper from "../assets/images/company_sky_craper.jpeg";

export default function Company() {
  return (
    <div className="company">
      <div
        className="company__pic"
        style={{ backgroundImage: `url(${CompanySkyCraper})` }}
      ></div>
      <div className="company__text">
        <h1 style={{ color: "#21569c" }}>Who we are</h1>
        <p>
          Professionals committed to provide the best care and high quality
          products to our clients. LGS distributes PVC Windows, processed glass
          and mirrors, ready for installation, among other construction
          supplies. We are part of Leslie Group.
        </p>
        <h1 style={{ color: "#21569c" }}>Mission</h1>
        <p>
          Provide the best solution for your project, with excellent quality,
          sustainable products, and great customer service.
        </p>
        <h1 style={{ color: "#21569c" }}>Vision</h1>
        <p>
          Be recognized for our professionalism, quality and commitment to
          sustainability in the construction sector.
        </p>
        <h1 style={{ color: "#21569c" }}>Values</h1>
        <p>Respect, Sustainability, Commitment, Quality</p>
      </div>

      {/* Texto en espaniol
      <div>
        <h1>Quiénes Somos</h1>
        <p>
          Empresa de compra/venta de productos y artículos de construcción en Estados Unidos. Es una de las empresas del Grupo Leslie. 
        </p>
        <h1>Misión</h1>
        <p>
          Proveer la mejor solución para su proyecto, con una excelente calidad, con productos sostenibles, y un gran servicio al cliente. 
        </p>
        <h1>Visión</h1>
        <p>
          Ser una empresa reconocida por su profesionalismo, calidad y compromiso por la sostenibilidad en el sector de la construcción. 
        </p>
        <h1>Values</h1>
        <p>Respeto, Sostenibilidad, Compromiso, Calidad</p>
      </div> */}
    </div>
  );
}
