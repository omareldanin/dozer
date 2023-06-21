import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AlertsSection from './AlertsSection';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
    role="tabpanel"
    hidden={value !== index}
    id={`simple-tabpanel-${index}`}
    aria-labelledby={`simple-tab-${index}`}
    {...other}
    >
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


  const [personInfo, setPersonInfo] = React.useState({
    "Name": "عمرو محمد عيد السولية",
    "ssn": "80105101100291",
    "dateOfBirth": "2/4/1989",
    "IsLicenseValid": true,
    "IsCriminal": true,
    "report": {
      "reason": "solid mobile",
      "center":  "Quessna - Menufia"
    }
  })

  const [carInfo, setCarInfo] = React.useState({
    "palte": "(4 9 8 6) - (أ ن ص)",
    "model": "nissan",
    "color": "Gray",
    "ownerSSN": "65498732110234",
    "IsLicenseValid": true,
    "IsStolen": false
  })

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
    <Tab label="Person" {...a11yProps(1)} />
    </Tabs>
    </Box>

    <TabPanel value={value} index={0}>
    <ul className="text-2xl flex flex-col gap-5">
    <li><b>Plate</b>: {carInfo.palte}</li>
    <li><b>Model</b>: {carInfo.model}</li>
    <li><b>Color</b>: {carInfo.color}</li>
    <li><b>Owner SSN</b>: {carInfo.ownerSSN}</li>
    <li><b>License</b>: {carInfo.IsLicenseValid? "License is valid" : "License is not valid!"}</li>
    <li><b>Stolen</b>: {carInfo.IsStolen?"Car is Stolen!":"Car is owned by the driver"}</li>
    </ul>
    </TabPanel>

    <TabPanel value={value} index={1}>
    <ul className="text-2xl flex flex-col gap-5">
    <li><b>Name </b>: {personInfo.Name}</li>
    <li><b>SSN: </b> {personInfo.ssn}</li>
    <li><b>Date Of Birth: </b> {personInfo.dateOfBirth}</li>
    <li><b>License: </b>: {personInfo.IsLicenseValid? "License is valid" : "License is not valid!"}</li>
    <li>
    <b>Criminal </b>: {personInfo.IsCriminal?"Yes":"No"}
    {personInfo.IsCriminal? <p>
        <u>Reason</u>: {personInfo.report.reason}
        <br/>
        <u>Center</u>: {personInfo.report.center}
        </p> : null}
    </li>
    </ul>
    </TabPanel>
    </Box>
  );
}

export default TabsSection
