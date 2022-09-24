import { ReactElement, useEffect, useState } from 'react';
import { DataSourceRow } from './components/DataSourceRow';
import { Table, TableCell, TableContainer, TableRow } from '@material-ui/core';
import { DataSource, getDataSources } from '../../digitalTwinApi';
import { IonContent, IonImg } from '@ionic/react';

const DataSources = (): ReactElement => {
  const [dataSources, setDataSources] = useState<DataSource[]>([]);

  useEffect(() => {
    getDataSources()
      .then((response) => setDataSources(response))
      .catch((err) => console.error(err));
  }, []);

  //debugger
  if (typeof dataSources === 'undefined') {
    setDataSources([]);
  }

  return (
    <IonContent>
      <TableContainer style={{ marginTop: '20px' }}>
        {dataSources && dataSources.length > 0 && (
          <Table>
            {(sortedData: DataSource[]) =>
              sortedData.map((dataSource, index) => {
                return (
                  <TableRow key={index} tabIndex={-1}>
                    <TableCell>
                      <IonImg src={dataSource.image} alt={` Logo`} />
                    </TableCell>
                    <TableCell>
                      <DataSourceRow data={dataSource} />
                    </TableCell>
                  </TableRow>
                );
              })
            }
          </Table>
        )}
      </TableContainer>
    </IonContent>
  );
};

export default DataSources;

