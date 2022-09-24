import { ReactElement } from 'react';
import { FeaturedVariables } from './FeaturedVariables';
import MeasurementList from './Measurements/MeasurementList';
import { FeaturedDataSources } from './FeaturedDataSources';
import Grid from '@material-ui/core/Grid/Grid';
import { getAccessToken } from '../digitalTwinApi';
import { IonTitle } from '@ionic/react';

const DigitalTwinDashboard = (): ReactElement => {
  return (
    <Grid container spacing={3}>
      <IonTitle>Your Digital Twin</IonTitle>

      <FeaturedVariables />
      {getAccessToken() && <MeasurementList />}

      <FeaturedDataSources />
    </Grid>
  );
};

export default DigitalTwinDashboard;
