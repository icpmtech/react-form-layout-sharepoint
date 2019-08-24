import { ControlMode } from '../../common/datatypes/ControlMode';
import { IFieldConfiguration } from './components/IFieldConfiguration';
import { LayoutMode } from '../../common/layouttypes/LayoutMode';
export interface IListFormWebPartProps {
  title: string;
  description: string;
  listUrl: string;
  formType: ControlMode;
  formLayoutType: LayoutMode;
  itemId?: string;
  showUnsupportedFields: boolean;
  redirectUrl?: string;
  fields?: IFieldConfiguration[];
}
