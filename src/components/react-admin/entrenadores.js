import {
    List,
    SimpleList,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    Edit,
    Create,
    SimpleForm,
    ReferenceInput,
    TextInput,
    ImageField
  } from 'react-admin';

import { useRecordContext} from 'react-admin';
import { useMediaQuery } from '@mui/material';

const entrenadorFilters = [
    <TextInput source="q" label="Search" alwaysOn />
];

export const EntrenadorList = () => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  return (
    <List filters={entrenadorFilters} >
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.name}
          secondaryText={(record) => record.email}
          tertiaryText={(record) => record.imagen}
          linkType={(record) => 'show'}
        >
          <EditButton />
        </SimpleList>
      ) : (
        <Datagrid bulkActionButtons={false}>
          <TextField source="name" />
          <ImageField source="imagen"/>
          <TextField source="email" />
          <TextField source="ciudad" />
          <TextField source="pais" />
          <TextField source="sexo" />
          <TextField source="telefono" />
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
}

const EntrenadorTitle = () => {
  const record = useRecordContext();
  return <span>Entrenador: {record ? `"${record.name}` : ''} Email: {record ? `"${record.email}` : ''}</span>;
};

export const EntrenadorEdit = () => (
    <Edit title={<EntrenadorTitle />}>
    <SimpleForm>
        <TextInput source="id" disabled />
          <TextInput source="name" />
          <ImageField source="imagen" />
          <TextInput source="email" />
          <TextInput source="ciudad" />
          <TextInput source="pais" />
          <TextInput source="sexo" />
          <TextInput source="telefono" />
    </SimpleForm>
    </Edit>
);

export const EntrenadorCreate = () => (
    <Create>
        <SimpleForm>
        <TextInput source="name" />
          <ImageField source="imagen" />
          <TextInput source="email" />
          <TextInput source="ciudad" />
          <TextInput source="pais" />
          <TextInput source="sexo" />
          <TextInput source="telefono" />
        </SimpleForm>
    </Create>
    );