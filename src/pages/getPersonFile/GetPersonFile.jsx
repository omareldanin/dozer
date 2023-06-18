import { useEffect, useState } from "react";

const GetPersonFile = (props) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      `http://ahmedadel1672003-001-site1.ctempurl.com/api/IntegratedProtectionServices/GetPersonFile`
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
          <span>src : {data.src }</span>
        </div>
        <div className="name"  style={{marginBottom:"20px"}}>
          <span>is person file : {data.isPersonsFile ? "yes":"no" }</span>
        </div>
      </>
      :<h1>loading...</h1>
    }
  </div>);
};
export default GetPersonFile;
