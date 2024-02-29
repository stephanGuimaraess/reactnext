import React from "react";
import StarRating from "../starRating/startRating";





interface CarTableRowProps {
  carData: string;
  reservationData: string;
  statusData: string;
  ratingData: number;
  car : string;
}

const CarTableRow: React.FC<CarTableRowProps> = ({
  carData,
  car,
  reservationData,
  statusData,
  ratingData,
 
}) => {

const statusClass = statusData === "Available" ? "text-green-800  text-center " : "bg-red-300 text-red-800";
const statusBox = statusData === "Available" ? " bg-green-300 rounded-md pt-0.5  px-px-0.5 pb-0.5 w-20" : "bg-red-300 rounded-md pt-0.5  px-px-0.5 pb-0.5";




 
  return (
    <tr>
      <td className="py-2 px-4 border-b font-weight-400 text-size-14 line-height-21"><div className="flex items-center py-px px-1">
        <img src={car} style={{ width: "48.96px", height: "46px" }} alt="Car" />
        <span className="ml-2 text-gray-900">{carData}</span>
        </div></td>
      <td className="py-2 px-4 border-b text-start font-weight-400 text-size-14 line-height-21">{reservationData}</td>
      <td className={`py-2 px-4 border-b font-weight-400 text-size-14 line-height-21 ${statusClass} `}><div className={statusBox}>{statusData}</div></td>
      <td className="py-2 px-4 border-b">
        <StarRating rating={ratingData}/>
      </td>
      <td className="py-2 px-12 border-b cursor-pointer">
      &#8942;
    </td>
    </tr>
  );
};

export default CarTableRow;

