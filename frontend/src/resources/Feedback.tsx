//Source code generated by AppGPT (www.appgpt.tech)
import {
  Datagrid,
  List,
  EditButton,
  Edit,
  SimpleForm,
  Create,
  SelectColumnsButton,
  DatagridConfigurable,
  TopToolbar,
  CreateButton,
  ExportButton,
  FilterButton,
  //Field controls
  BooleanField,
  DateField,
  EmailField,
  ImageField,
  NumberField,
  ReferenceField,
  TextField,
  UrlField,
  //Input controls
  BooleanInput,
  DateInput,
  EmailInput,
  ImageInput,
  NumberInput,
  ReferenceInput,
  TextInput,
  UrlInput,
  PasswordInput,
} from 'react-admin';
import { useRecordContext } from 'react-admin';
import { Grid } from '@mui/material';
const ReadOnlyPasswordField = ({ record, source }) => {
  // You can customize the way you display the password here, e.g., mask it with asterisks
  const maskedPassword = '********';

  return <span>{maskedPassword}</span>;
};
const ListActions = () => (
  <TopToolbar>
    <FilterButton />
    <CreateButton />
    <ExportButton />
    <SelectColumnsButton />
  </TopToolbar>
);
const FeedbackTitle = () => {
  const record = useRecordContext();
  return <span>Feedback {record ? `"${record.id}"` : ''}</span>;
};

export const FeedbackList = () => (
  <List actions={<ListActions />} filters={ResourceFilters}>
    <DatagridConfigurable>
      <ReferenceField source="user_id" reference="User" />
      <ReferenceField source="book_id" reference="Book" />
      <NumberField source="rating" />
      <TextField source="comment" />
      <DateField source="created_at" />
      <EditButton />
    </DatagridConfigurable>
  </List>
);

export const FeedbackEdit = () => (
  <Edit title={<FeedbackTitle />}>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <ReferenceInput source="user_id" reference="User" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="book_id" reference="Book" />
        </Grid>
        <Grid item xs={4}>
          <NumberInput source="rating" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="comment" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="created_at" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Edit>
);

export const FeedbackCreate = () => (
  <Create>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <ReferenceInput source="user_id" reference="User" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="book_id" reference="Book" />
        </Grid>
        <Grid item xs={4}>
          <NumberInput source="rating" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="comment" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="created_at" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Create>
);

const ResourceFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  ,
  <ReferenceInput source="user_id" label="user_id" reference="User" alwaysOn />,
  <ReferenceInput source="book_id" label="book_id" reference="Book" alwaysOn />,
  ,
  ,
];
