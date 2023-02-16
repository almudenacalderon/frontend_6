// in src/components/react-admin/lugares.js
import {
    List,
    SimpleList,
    Datagrid,
    TextField,
    ReferenceField,
    TextInput,
    ImageField,
    SelectField
  } from 'react-admin';

import { useRecordContext} from 'react-admin';
import { useMediaQuery } from '@mui/material';

const lugarFilters = [
    <TextInput source="q" label="Search" alwaysOn />
];

export const LugarList = () => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  return (
    <List filters={lugarFilters} >
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.hits}
          secondaryText={(record) => record.hits}
          tertiaryText={(record) => record.hits}
          linkType={(record) => 'show'}
        >
        </SimpleList>
      ) : (
        <Datagrid bulkActionButtons={false} >
          <TextField source="name" />
          <TextField source="tipo" />
          <TextField source="ubicacion" />
          <TextField source="descripcion" />
          <ImageField source="imagen" />
        </Datagrid>
      )}
    </List>
  );
}
const LugarTitle = () => {
  const record = useRecordContext();
  return <span>Lugar {record ? `"${record.name} ${record.tipo}"` : ''}</span>;
};
//SEGUIR POR AQUI EDITANDO NO TERMINADO

export const LugarEdit = () => (
    <Edit title={<LugarTitle />}>
    <SimpleForm>
        <TextInput source="id" disabled />
        <TextInput source="first_name" />
        <TextInput source="last_name" />
        <TextInput source="job_title" />
        <TextInput source="city" />
        <TextInput source="country" />
    </SimpleForm>
    </Edit>
);

export const LugarCreate = () => (
    <Create>
        <SimpleForm>
          <TextInput source="first_name" />
          <TextInput source="last_name" />
          <TextInput source="job_title" />
          <TextInput source="city" />
          <TextInput source="country" />
        </SimpleForm>
    </Create>
    );