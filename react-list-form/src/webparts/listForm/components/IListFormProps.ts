import { SPHttpClient } from '@microsoft/sp-http';
import { ControlMode } from '../../../common/datatypes/ControlMode';
import { IFieldConfiguration } from './IFieldConfiguration';
import { LayoutMode } from '../../../common/layouttypes/LayoutMode';
export interface IListFormProps {
  title: string;
  description?: string;
  webUrl: string;
  listUrl: string;
  formType: ControlMode;
  formLayoutType: LayoutMode;
  id?: number;
  fields?: IFieldConfiguration[];
  spHttpClient: SPHttpClient;
  inDesignMode?: boolean;
  showUnsupportedFields?: boolean;
  onSubmitSucceeded?(id: number): void;
  onSubmitFailed?(fieldErrors: any): void;
  onUpdateFields?(newFields: IFieldConfiguration[]): void;
}
