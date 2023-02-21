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
    TextInput
  } from 'react-admin';

import { useRecordContext} from 'react-admin';
import { useMediaQuery } from '@mui/material';

const rutinaFilters = [
    <TextInput source="q" label="Search" alwaysOn />
];

export const RutinaList = () => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  return (
    <List filters={rutinaFilters} >
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.name}
          secondaryText={(record) => record.meta}
          linkType={(record) => 'show'}
        >
          <EditButton />
        </SimpleList>
      ) : (
        <Datagrid bulkActionButtons={false}>
          <ReferenceField source="ejercicio_id" reference="ejercicios" />
          <ReferenceField source="entrenador_id" reference="entrenadores" />
          <TextField source="name" />
          <TextField source="descripcion" />
          <TextField source="meta" />
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
}

const RutinaTitle = () => {
  const record = useRecordContext();
  return <span>Rutina {record ? `"${record.name}"` : ''}</span>;
};

export const RutinaEdit = () => (
    <Edit title={<RutinaTitle />}>
    <SimpleForm>
        <TextInput source="id" disabled />
          <ReferenceInput source="entrenador_id" reference="entrenadores"/>
          <ReferenceInput source="ejercicio_id" reference="ejercicios"/>
          <TextInput source="name" />
          <TextInput source="descripcion" />
          <TextInput source="meta" />
    </SimpleForm>
    </Edit>
);

export const RutinaCreate = () => (
    <Create>
        <SimpleForm>
          <ReferenceInput source="entrenador_id" reference="entrenadores" />
          <ReferenceInput source="ejercicio_id" reference="ejercicios" />
          <TextInput source="name" />
          <TextInput source="descripcion" />
          <TextInput source="meta" />
        </SimpleForm>
    </Create>
    );