import { useEffect, useState } from "react";

const GetCriminal = (props) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      `http://ahmedadel1672003-001-site1.ctempurl.com/api/IntegratedProtectionServices/CriminalBySSN?SSN=${props.ssn}`
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
          <span>id : {data.id }</span>
        </div>
        <div className="name"  style={{marginBottom:"20px"}}>
          <span>ssn : {data.ssn }</span>
        </div>
        <div className="name"  style={{marginBottom:"20px"}}>
          <span>person : {data.reason }</span>
        </div>
        <div className="name"  style={{marginBottom:"20px"}}>
          <span>created date : {data.createdDate }</span>
        </div>
      
      </>
      :<h1>loading...</h1>
    }
  </div>);
};
export default GetCriminal;
