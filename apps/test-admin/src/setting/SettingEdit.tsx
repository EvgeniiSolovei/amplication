import * as React from "react";
import { Edit, SimpleForm, EditProps, BooleanInput } from "react-admin";

export const SettingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="notifications" source="notifications" />
      </SimpleForm>
    </Edit>
  );
};
