import React from "react";
import CarTableRow from "./car/car";




const Home: React.FC = () => {
  
  const data = [
    {
      carData: "Mini Cooper 2020",
      reservationData: "11/07",
      car : "../../assets/car.png",
      statusData: "Available",
      ratingData:0
      
    },
    {
      carData: "Mini Cooper 2020",
      reservationData: "11/07",
      car : "../../assets/car.png",
      statusData: "Available",
      ratingData:0
     
    },
    {
        carData: "Mini Cooper 2020",
        reservationData: "11/07",
        car : "../../assets/car.png",
        statusData: "Available",
        ratingData:0
       
      },
      {
        carData: "Mini Cooper 2020",
        reservationData: "11/07",
        car : "../../assets/car.png",
        statusData: "Available",
        ratingData:0
       
      },
      {
        carData: "Mini Cooper 2020",
        reservationData: "11/07",
        car : "../../assets/car.png",
        statusData: "Available",        
        ratingData:0
       
      },
      {
        carData: "Mini Cooper 2020",
        reservationData: "11/07",
        car : "../../assets/car.png",
        statusData: "Available",
        ratingData:0
       
      },
    
  ];

  const cellStyle = {
    boxShadow: "0px 1px 3px -1px #0000001A",
    width: "1376px"
  };


  const collunCar ={
    width:"287px",   
}

const collunActions ={
    width:"91px",
}

  return (
    <div>
      <table className=" w-{1376} min-w-full bg-white border border-gray-300 table-shadow " style={cellStyle}>
        <thead>
          <tr>
            <th className="py-2 px-4 border-b w-fixed text-start font-weight-600 text-size-12 line-height-18" style={collunCar}>CAR</th>
            <th className="py-2 px-4 border-b w-fill text-start font-weight-600 text-size-12 line-height-18">NEXT RESERVATION</th>
            <th className="py-2 px-4 border-b w-fill text-start font-weight-600 text-size-12 line-height-18">STATUS</th>
            <th className="py-2 px-4 border-b w-fill text-start font-weight-600 text-size-12 line-height-18">RATING</th>
            <th className="py-2 px-4 border-b w-fixed text-size-12 font-weight-600 line-height-18" style={collunActions}>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <CarTableRow key={index} {...item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;