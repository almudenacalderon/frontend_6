// in src/components/react-admin/lugares.js
import {
    List,
    SimpleList,
    Datagrid,
    TextField,
    Edit,
    EditButton,
    Create,
    TextInput,
    ImageField,
    SimpleForm
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
          primaryText={(record) => record.name}
          secondaryText={(record) => record.tipo}
          tertiaryText={(record) => record.imagen}
          linkType={(record) => 'show'}
        >
          <EditButton />
        </SimpleList>
      ) : (
        <Datagrid bulkActionButtons={false} >
         
          <TextField source="name" />
          <TextField source="tipo" />
          <TextField source="ubicacion" />
          <TextField source="descripcion" />
          <ImageField source="imagen" />
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
}
const LugarTitle = () => {
  const record = useRecordContext();
  return <span>Lugar {record ? `"${record.name} ${record.tipo}"` : ''}</span>;
};

export const LugarEdit = () => (
    <Edit title={<LugarTitle />}>
    <SimpleForm>
        <TextInput source="id" disabled />
        <TextInput source="name" />
        <TextInput source="ubicacion" />
        <TextInput source="descripcion" />
        <ImageField source="imagen" />
    </SimpleForm>
    </Edit>
);

export const LugarCreate = () => (
    <Create>
        <SimpleForm>
        <TextInput source="name" />
        <TextInput source="ubicacion" />
        <TextInput source="descripcion" />
        <ImageField source="imagen" />
        </SimpleForm>
    </Create>
    );