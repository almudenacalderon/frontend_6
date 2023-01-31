import {
    List,
    SimpleList,
    Datagrid,
    TextField,
    ReferenceField,
    TextInput,
    ImageField
  } from 'react-admin';

import { useRecordContext} from 'react-admin';
import { useMediaQuery } from '@mui/material';

const mealFilters = [
    <TextInput source="q" label="Search" alwaysOn />
];

export const MealList = () => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  return (
    <List filters={mealFilters} >
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.title}
          secondaryText={(record) => record.title}
          tertiaryText={(record) => record.title}
          linkType={(record) => 'show'}
        >
        </SimpleList>
      ) : (
        <Datagrid bulkActionButtons={false} >
          <TextField source="title" />
          <ImageField source="image" />
        </Datagrid>
      )}
    </List>
  );
}