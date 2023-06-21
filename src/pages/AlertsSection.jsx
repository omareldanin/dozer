import { useEffect, useState } from "react";

const AlertsSection = ({ carNumber, carLetter, personSSN }) => {
  const [isPersonOk, setIsPersonOk] = useState(true);
  const [isCarOk, setIsCarOk] = useState(true);

  useEffect(() => {
    let isStolenCar = false;
    let isCarLicenceValid = true;
    let isDriverLicenceValid = true;
    let isDriverCardValid = true;
    let isCrimenal = false;

    /* Car Info  && Stolen Info*/
    fetch(
      `http://ahmedadel1672003-001-site1.ctempurl.com/api/IntegratedProtectionServices/CarByPlate?letters=${carLetter}&number=${carNumber}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.statusCode === 200) {
          isCarLicenceValid = data.data.isLicenseValid;
          console.log('############### isCarLicenceValid ##############', isCarLicenceValid);
        }
      })
      .catch((error) => {
        console.log(error);
      }).then(()=>{


        /* Stolen Info */
        fetch(
          `http://ahmedadel1672003-001-site1.ctempurl.com/api/IntegratedProtectionServices/StolenCarByPlate?letters=${carLetter}&number=${carNumber}`
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.statusCode === 200) {
              isStolenCar = data.data !== null && data.data !== undefined;
              console.log('############### isStolenCar ##############', isStolenCar);

              /************************************/
              /***************  isCarOk  **********/
              /************************************/
              setIsCarOk(!isStolenCar && isCarLicenceValid);
            }
          })
          .catch((error) => {
            console.log(error);
          });

      });



    /* Driver Info  && Crimenal Info */
    fetch(
      `http://ahmedadel1672003-001-site1.ctempurl.com/api/IntegratedProtectionServices/DriverBySSN?SSN=${personSSN}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.statusCode === 200) {
          isDriverLicenceValid = data.data.isLicenseValid;
          console.log('############### isDriverLicenceValid ##############', isDriverLicenceValid);
        }
      })
      .catch((error) => {
        console.log(error);
      }).then(()=>{

        /* Crimenal Info */
        fetch(
          `http://ahmedadel1672003-001-site1.ctempurl.com/api/IntegratedProtectionServices/CriminalBySSN?SSN=${personSSN}`
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.statusCode === 200) {
              isCrimenal = data.data !== null && data.data !== undefined;

              console.log('############### isCrimenal ##############', isCrimenal);
            }
          }).catch((error) => {
            console.log(error);
          }).then(()=>{

            fetch(
              `http://ahmedadel1672003-001-site1.ctempurl.com/api/IntegratedProtectionServices/CardBySSN?SSN=${personSSN}`
            )
              .then((res) => res.json())
              .then((data) => {
                if(data.statusCode === 200){

                  isDriverCardValid = data.data.isValid;

                  console.log('############### isDriverCardValid ##############', isDriverCardValid);


                  /************************************/
                  /************  isPersonOk  **********/
                  /************************************/
                  setIsPersonOk(!isCrimenal && isDriverLicenceValid && isDriverCardValid);

                }

              });

          })

          .catch((error) => {
            console.log(error);
          });
      });

  }, [carLetter, carNumber, personSSN]);

  return (
    <div className="w-full p-8 flex flex-row justify-around gap-4">
    {/* Car Section */}
    <div className="flex-1 flex flex-col gap-4 justify-center items-center">
    <h2 className="text-3xl">Car</h2>
    <AlertCircle valid={isCarOk} />
    </div>
    {/* Person Section */}
    <div className="flex-1 flex flex-col gap-4 justify-center items-center">
    <h2 className="text-3xl">Person</h2>
    <AlertCircle valid={isPersonOk} />
    </div>
    </div>
  );
};

const AlertCircle = ({ valid }) => {
  return (
    <div className={`w-10 h-10 rounded-full ${valid ? 'bg-green-500' : 'bg-red-600 animate-pulse'}`}></div>
  );
};

export default AlertsSection;
