import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import { ISPHttpClientOptions, SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';

import styles from './ApplicationWebPart.module.scss';
import * as strings from 'ApplicationWebPartStrings';

export interface IApplicationWebPartProps {
  description: string;
}

export default class ApplicationWebPart extends BaseClientSideWebPart<IApplicationWebPartProps> {

  // public render(): void {
  //   this.domElement.innerHTML = `
  //   <div>
  //   <div>
  //   <table border='10' bgcolor='blue'>
  //   <tr>
  //   <td>Customer Name</td>
  //   <td> <input type='text' id='textcustomername' /> </td>
  //   </tr>
  //   <tr>
  //   <td>Customer Complaint</td>
  //   <td><textarea rows='3' cols='10' type='text' id='textcustomercomplaint'></textarea>
  //   </td>
  //   </tr>
  //   <tr>
  //   <td>Customer email</td><td><input type='text' id='textcustomeremail' /></td>
  //   </tr>
  //   <tr>
  //   <td>Customer location</td><td>
  //   <select id='textcustomerlocation'>
  //   <option value='Lagos'>Lagos</option>
  //   <option value='Benin'>Benin</option>
  //   <option value='Portharcourt'>Portharcourt</option>
  //   <option value='Accra'>Accra</option>
  //   </select>
  //   </td>
  //   </tr>
  //   <td>
 
  //   </td>
  //   <td>
  //   <input type='submit' value='Submit Item' id='btnsubmit'>
  //   </td>
  //   </table>

  //   </div>
  //   <div id='divstatus'></div>
  //   </div>
    
  //   `;
  //   this.bindevents;

  // }

  // private bindevents(): void{
  //   this.domElement.querySelector('#btnsubmit').addEventListener('click', () => { this.addlistitem ();});
  // }
  // private addlistitem(): void {
  //   var customerName = document.getElementById("#textcustomername")["value"];
  //   var customerComplaint = document.getElementById("#textcustomercomplaint")["value"];
  //   var customerEmail = document.getElementById("#textcustomeremail")["value"];
  //   var customerLocation = document.getElementById("#textcustomerlocation")["value"];

  //   const siteurl: string= this.context.pageContext.site.absoluteUrl + "/_api/web/lists/getByTitle('Sabi')/items";

  //   const itembody: any={
  //   "Customer Name": customerName,
  //   "Customer complain": customerComplaint,
  //   "customer_email": customerEmail,
  //    "Location": customerLocation,
  //   };
  //   const sphttpClientOptions: ISPHttpClientOptions={
  //     "body": JSON.stringify(itembody)
  //   };

  //   this.context.spHttpClient.post(siteurl, SPHttpClient.configurations.v1, sphttpClientOptions)
  //   .then((response: SPHttpClientResponse) => {
  //     if (response.status === 201){
  //       let statusmessage: Element = this.domElement.querySelector('#divstatus');
  //       statusmessage.innerHTML = "List Item has been added successully";
  //       this.clear();
  //     }else {
  //       let statusmessage: Element = this.domElement.querySelector('#divstatus');
  //       statusmessage.innerHTML = "An error has occured i.e"+ response.status + " "+ response.statusText;
  //     }
  //   });
  // }
  //    private clear(): void {
  //     document.getElementById("#textcustomername")["value"]=' ';
  //     document.getElementById("#textcustomercomplaint")["value"]='';
  //     document.getElementById("#textcustomeremail")["value"]='';
  // //     document.getElementById("#textcustomerlocation")["value"]='Accra';
  // }
  public render(): void {
    this.domElement.innerHTML = `
    <div class="${ styles.application }">
    <div class="${ styles.container }">
      <div class="${styles.row}">
        <div class="" >
        <P class="${ styles.title }">APPLICATION PORTAL</p>
        <p class="${ styles.subTitle }">
        <p class="${ styles.description }">${escape(this.properties.description)}</p>
        <a href="http://2faapp:8080/Vasco2FAService/GlobalSearch" class="${ styles.button }" onClick={this.onClick} target="_blank" data-interception="off">
        <button class="${ styles.label }">2FA</button></a>

        <a href="https://devops-server2/AccountEnquiry" onClick={this.onClick} class="${ styles.button }" target="_blank" data-interception="off">
        <button class="${ styles.label }" onClick={this.onClick} >ACCOUNT ENQUIRY</button></a>

        <a href="https://appserver2/ATMCustodian" class="${ styles.button }" onClick={this.onClick} target="_blank" data-interception="off">
        <button class="${ styles.label }">ATM CUSTODIAN PORTAL</button></a>

        <a href="http://cognos/Reports/Pages/Folder.aspx?ItemPath=%2fBranch+Reports&ViewMode=Detail" onClick={this.onClick} class="${ styles.button }" target="_blank" data-interception="off">
        <button class="${ styles.label }" onClick={this.onClick} >BRANCH REPORT</button></a>

        <a href="https://appserver-ii:8181/UpdateBVNtoNIBSSR" onClick={this.onClick} class="${ styles.button }" target="_blank" data-interception="off">
        <button class="${ styles.label }" onClick={this.onClick} >BVN UPDATE PORTAL</button></a>

        <a href="https://172.18.192.100:8443/bvnvalidation/login" class="${ styles.button }" onClick={this.onClick} target="_blank" data-interception="off">
        <button class="${ styles.label }">BVN VALIDATION</button></a>

        <a href="https://devops-server2/carp" onClick={this.onClick} class="${ styles.button }" onClick={this.onClick} target="_blank" data-interception="off">
        <button class="${ styles.label }">CARP</button></a>

        <a href="http://appprod-java1:8080/Diesel_Monitoring_Solution/" class="${ styles.button }" onClick={this.onClick} target="_blank" data-interception="off">
        <button class="${ styles.label }">DIESEL MONITORING</button></a>

        <a href="https://docapproval/" class="${ styles.button }" onClick={this.onClick} target="_blank"  data-interception="off">
          <button class="${ styles.label }">DOCUMENT APPROVAL</button></a>

          <a href="https://unioncollect:7057/OfflineEnvelopeDepositPortalWebLogic" class="${ styles.button }" onClick={this.onClick} target="_blank"  data-interception="off">
          <button class="${ styles.label }">ENVELOP DEPOSIT PORTAL</button></a>

          <a href="https://erequest/login.php?msg=Your%20Session%20Has%20Expired%3C/br%3E2021-01-05%2010:42:25" class="${ styles.button }" target="_blank" onClick={this.onClick} data-interception="off">
          <button class="${ styles.label }">EREQUEST</button></a>

          <a href="https://etzubn/Console/disable_chrome.jsp" class="${ styles.button }" onClick={this.onClick} target="_blank"  data-interception="off">
          <button class="${ styles.label }">ETRANZACT</button></a>

          <a href="https://appprod-java1/FakeNotesRegisterPortal" class="${ styles.button }" target="_blank" onClick={this.onClick} data-interception="off">
          <button class="${ styles.label }">FAKE NOTE REGISTER</button></a>

          <a href="https://ubn-fcubslive:9094/FCJNeoWebLive/" class="${ styles.button }" onClick={this.onClick} target="_blank" data-interception="off">
          <button class="${ styles.label }">FCUBS</button></a>

         <a href="http://cpcibps.unionbank-ng.unionbankgroup.local:9080/omniapp/pages/login/loginapp.jsf" class="${ styles.button }" target="_blank"  onClick={this.onClick} data-interception="off">
          <button class="${ styles.label }">IBPS</button></a>

          <a href="https://devops-server2/InstantAccountOpening/" class="${ styles.button }" onClick={this.onClick} target="_blank"  data-interception="off">
            <button class="${ styles.label }">INSTANT ACC OPENING</button></a>

            <a href="https://unioninstant.unionbankng.com/UBNPortal/LoginPage.aspx?ReturnUrl=%2FUBNPortal%2F" class="${ styles.button }" target="_blank" onClick={this.onClick} data-interception="off">
            <button class="${ styles.label }">INSTANT CARD</button></a>

            <a href="https://service-desk.unionbankng.com/" class="${ styles.button }" onClick={this.onClick} target="_blank" data-interception="off">
            <button class="${ styles.label }">MANAGE ENGINE</button></a>

            <a href="http://10.8.1.210:8001/mobileadminportal/cevaappl.action" class="${ styles.button }" onClick={this.onClick} target="_blank" data-interception="off">
            <button class="${ styles.label }">MOBILE BANKING ADMIN</button></a>

            <a href="https://eas-server6:8181/MGAgentConnect/" class="${ styles.button }" onClick={this.onClick} target="_blank" data-interception="off">
            <button class="${ styles.label }">MONEYGRAM</button></a>

            <a href="http://172.16.10.133/mybankstatement/Login.aspx" class="${ styles.button }" onClick={this.onClick} target="_blank" data-interception="off">
              <button class="${ styles.label }">MY BANK STATEMENT</button></a>

              <a href="https://login.microsoftonline.com/" class="${ styles.button }" onClick={this.onClick} target="_blank" data-interception="off">
              <button class="${ styles.label }">OFFICE365</button></a>

              <a href="https://uniononline.unionbankng.com/OnlineBanking/" class="${ styles.button }" onClick={this.onClick} target="_blank" data-interception="off">
              <button class="${ styles.label }">ONLINE BANKING</button></a>

             <a href="https://fep-server3:9191/OnlineBankingAdmin/admin/index2.jsp" class="${ styles.button }" onClick={this.onClick} target="_blank" data-interception="off">
              <button class="${ styles.label }">ONLINE BANKING ADMIN</button></a>

              <a href="http://erp_app2_prod.unionbank-ng.unionbankgroup.local:8099/" class="${ styles.button }" onClick={this.onClick} target="_blank" data-interception="off">
                <button class="${ styles.label }">ORACLE ERP</button></a>

                <a href="https://devops-server2/POS" class="${ styles.button }" onClick={this.onClick} target="_blank" data-interception="off">
                <button class="${ styles.label }">POS TERMINAL</button></a>

                <a href="https://postilion:8443/portal/Login.faces" class="${ styles.button }" onClick={this.onClick} target="_blank" data-interception="off">
                <button class="${ styles.label }">POSTILLON</button></a>
  
                <a href="https://devops-server2/PTAPurchase" class="${ styles.button }" onClick={this.onClick} target="_blank" data-interception="off">
                  <button class="${ styles.label }">PTA APPLICATION PORTAL</button></a>

                <a href="https://star.unionbankng.com/" class="${ styles.button }" onClick={this.onClick} target="_blank" data-interception="off">
                <button class="${ styles.label }">STAR</button></a>

                <a href="https://10.8.4.46:7506/ubn-treasurybill-portal/" class="${ styles.button }" onClick={this.onClick} target="_blank" data-interception="off">
                <button class="${ styles.label }">TBILLS</button></a>

                <a href="https://fbti-app:9443/tiplus2-global/login" class="${ styles.button }" onClick={this.onClick} target="_blank" data-interception="off">
                  <button class="${ styles.label }">TI PlUS</button></a>

                  <a href="https://unioncollectservice/UIP/" class="${ styles.button }" onClick={this.onClick} target="_blank" data-interception="off">
                  <button class="${ styles.label }">    UIP    </button></a>
                  
                  <a href="https://unioncollect:7010/UnionCollectOnline/" class="${ styles.button }" onClick={this.onClick} target="_blank" data-interception="off">
                  <button class="${ styles.label }">UNION COLLECT</button></a>

                  <a href="https://union360.unionbankng.com/uonline/login" class="${ styles.button }" onClick={this.onClick} target="_blank" data-interception="off">
                  <button class="${ styles.label }">UNION360</button></a>

                  <a href="https://ureview/login" class="${ styles.button }" onClick={this.onClick} target="_blank" data-interception="off">
                  <button class="${ styles.label }">UREVIEW</button></a></p>
        </div>
      </div>
    </div>
  </div>`;
  }

  public onClick = (ev) => {
    ev.preventDefault();
    console.log('clicked event');
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
