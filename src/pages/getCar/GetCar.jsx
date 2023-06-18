import { useEffect, useState } from "react";

const GetCar = (props) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      `http://ahmedadel1672003-001-site1.ctempurl.com/api/IntegratedProtectionServices/CarByPlate?letters=${props.letter}&number=${props.number}`
    )
      .then((res) => res.json())
      .then((data) => {
        if(data.statusCode === 200){
          setData(data.data)
        }
      });
  }, []);

  return (
  <div className="car">
    {
      data ? 
      <> 
        <div className="name" style={{marginBottom:"20px"}}>
          <span>Plate : {data.plate }</span>
        </div>
        <div className="name"  style={{marginBottom:"20px"}}>
          <span>model : {data.model }</span>
        </div>
        <div className="name"  style={{marginBottom:"20px"}}>
          <span>company : {data.company }</span>
        </div>
        <div className="name"  style={{marginBottom:"20px"}}>
          <span>color : {data.color }</span>
        </div>
        <div className="name"  style={{marginBottom:"20px"}}>
          <span>is License Valid : {data.isLicenseValid ? "valid":"not valid" }</span>
        </div>
        <div className="name"  style={{marginBottom:"20px"}}>
          <span>created date : {data.createdDate }</span>
        </div>
        <div className="name"  style={{marginBottom:"20px"}}>
          <span>end date : {data.endDate }</span>
        </div>
      </>
      :<h1>loading...</h1>
    }
  </div>);
};
export default GetCar;
