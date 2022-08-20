import { Version } from '@microsoft/sp-core-library';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
export interface IApplicationWebPartProps {
    description: string;
}
export default class ApplicationWebPart extends BaseClientSideWebPart<IApplicationWebPartProps> {
    render(): void;
    onClick: (ev: any) => void;
    protected get dataVersion(): Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=ApplicationWebPart.d.ts.map