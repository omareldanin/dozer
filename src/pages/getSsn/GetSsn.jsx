import { useEffect, useState } from "react";

const GetSsn = (props) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      `http://ahmedadel1672003-001-site1.ctempurl.com/api/IntegratedProtectionServices/CardBySSN?SSN=${props.ssn}`
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
          <span>job : {data.job }</span>
        </div>
        <div className="name"  style={{marginBottom:"20px"}}>
          <span>personId : {data.personId }</span>
        </div>
        <div className="name"  style={{marginBottom:"20px"}}>
          <span>is Valid : {data.isValid ? "valid":"not valid" }</span>
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
export default GetSsn;
