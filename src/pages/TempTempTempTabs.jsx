import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import GetCar from './getCar/GetCar';
import GetSsn from './getSsn/GetSsn';
import GetCriminal from './getCriminal/GetCriminal';
import GetDriver from './getDriver/GetDriver';
import GetStolen from './getStolen/GetStolen';
import GetCarFile from './getCarFile/GetCarFile';
import GetPersonFile from './getPersonFile/GetPersonFile';
import AlertsSection from './AlertsSection';
import axios from 'axios';
const backBaseURL = "http://ahmedadel1672003-001-site1.ctempurl.com/api/IntegratedProtectionServices/CarByPlate";
const   stolenapi = "http://ahmedadel1672003-001-site1.ctempurl.com/api/IntegratedProtectionServices/StolenCarByPlate"



function TabPanel(props) {
  const { children, value, index, plate, ...other } = props;
  const [car, setCar] = React.useState(null);
  const [stolen, setStolen] = React.useState(null);
  const [Driver, setDriver] = React.useState(null);
  const [Criminal, setCriminal] = React.useState(null);

  const sapClient = axios.create({
    baseURL: "http://ahmedadel1672003-001-site1.ctempurl.com/api/IntegratedProtectionServices/CarByPlate", // replace with your base URL
    paramsSerializer: (params) => {
      // Sample implementation of query string building
      let result = '';
      Object.keys(params).forEach(key => {
          result += `${key}=${encodeURIComponent(params[key])}`;
      });
      return result.substring(0, result.length );
  },
  });


  function getCar(platetxt){
    sapClient.get(backBaseURL, {
      params: {
        plate: "8784 alf non sad"
      }
  }).then((response) => {setCar(response.data.data)}).then(()=>{
    if(car){
      getStolen(plate)
    }
    } )
}


function getStolen(platetxt){

  sapClient.get(stolenapi,{
    params: {
      plate: platetxt
    }
  }
  ).then((response) => setStolen(response.data.data))
}

function getDriver(ssn)
{
  const driverApi = "http://ahmedadel1672003-001-site1.ctempurl.com/api/IntegratedProtectionServices/DriverBySSN"
  sapClient.get(driverApi,{
    params: {
      SSN: ssn
    }
  }
  ).then((response) => setDriver(response.data.data)).then(getCriminal(ssn))
}


function getCriminal(ssn)
{  
const driverApi = "http://ahmedadel1672003-001-site1.ctempurl.com/api/IntegratedProtectionServices/CriminalBySSN?"
    sapClient.get(driverApi,{
      params: {
        SSN: ssn
      }
    }
    ).then((response) => {setCriminal(response.data.data)})
      
}




  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <button  onClick={() => getDriver()}>sywasd</button>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function TabsSection() {
  const [value, setValue] = React.useState(0);
  const [carNumber, setCarNumber] = React.useState(99);
  const [carLetter, setCarLetter] = React.useState("o m");
  const [personSSN, setPersonSSN] = React.useState(11);


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
    {/* Alerts Section */}
    <AlertsSection carNumber={carNumber} carLetter={carLetter} personSSN={personSSN}/>

      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Car" {...a11yProps(0)} />
          <Tab label="card" {...a11yProps(1)} />
          <Tab label="Criminal" {...a11yProps(2)} />
          <Tab label="Driver" {...a11yProps(3)} />
          <Tab label="stolen" {...a11yProps(4)} />
          <Tab label="car file" {...a11yProps(5)} />
          <Tab label="person file" {...a11yProps(6)} />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
       <GetCar number={carNumber} letter={carLetter}/>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <GetSsn ssn={personSSN}/>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <GetCriminal ssn={personSSN}/>
      </TabPanel>

      <TabPanel value={value} index={3}>
        <GetDriver ssn={personSSN}/>
      </TabPanel>

      <TabPanel value={value} index={4}>
        <GetStolen letter="11" number="11"/>
      </TabPanel>

      <TabPanel value={value} index={5}>
        <GetCarFile />
      </TabPanel>

      <TabPanel value={value} index={6}>
        <GetPersonFile />
      </TabPanel>

    </Box>
  );
}

export default TabsSection
