import { useEffect, useState } from "react";

const GetStolen = (props) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      `http://ahmedadel1672003-001-site1.ctempurl.com/api/IntegratedProtectionServices/StolenCarByPlate?letters=${props.letter}&number=${props.number}`
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
          <span>car id : {data.getStolenCarViewModel.carId }</span>
        </div>
        <div className="name"  style={{marginBottom:"20px"}}>
          <span>traffic Officer Id : {data.getStolenCarViewModel.trafficOfficerId }</span>
        </div>
        <div className="name"  style={{marginBottom:"20px"}}>
          <span>Officer code : {data.getTrafficOfficerViewModel.code }</span>
        </div>
        <div className="name"  style={{marginBottom:"20px"}}>
          <span>Officer fullName : {data.getTrafficOfficerViewModel.fullName }</span>
        </div>
        <div className="name"  style={{marginBottom:"20px"}}>
          <span>Officer center : {data.getTrafficOfficerViewModel.center }</span>
        </div>
        <div className="name"  style={{marginBottom:"20px"}}>
          <span>created date : {data.getStolenCarViewModel.createdDate }</span>
        </div>
      </>
      :<h1>loading...</h1>
    }
  </div>);
};
export default GetStolen;
