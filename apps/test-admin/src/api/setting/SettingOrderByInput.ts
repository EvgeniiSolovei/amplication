import { SortOrder } from "../../util/SortOrder";

export type SettingOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  notifications?: SortOrder;
  updatedAt?: SortOrder;
};
