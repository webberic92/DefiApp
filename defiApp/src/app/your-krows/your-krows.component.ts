import { Component, OnInit } from '@angular/core';
// import { ImmutableXClient, Link } from '@imtbl/imx-sdk';
import { ImmutableOrderStatus, ImmutableXClient } from "@imtbl/imx-sdk";
import { Link } from '@imtbl/imx-sdk';
import { getWeb3accounts } from '../get-web3-accounts.service';

@Component({
  selector: 'app-your-krows',
  templateUrl: './your-krows.component.html',
  styleUrls: ['./your-krows.component.scss']
})




export class YourKrowsComponent implements OnInit {

  constructor(private getWeb3accounts: getWeb3accounts) {

  }

  async ngOnInit(): Promise<void> {

    this.link = new Link(this.linkAddress);
    this.client = await ImmutableXClient.build({ publicApiUrl: this.apiAddress });
  }

  errorMessage = '';
  loading = false;
  krowsArray: any[] = [];
  linkAddress = 'https://link.x.immutable.com';
  apiAddress = 'https://api.x.immutable.com/v1';
  account = '';
  link: Link = new Link;
  client!: ImmutableXClient;
  krowsForSaleSet = new Set<string>();

  async getAccounts() {
    interface Ikrow {
      Name: string,
      Accessories: string,
      Backgrounds: string,
      Clothes: string,
      Face: string,
      Hat: string,
      KrowBase: string,
      image_url: string,
      name: string,
      isForSale: boolean
    }
    await this.getWeb3accounts.openMetamask().then(async (resp: any) => {
      this.account = (resp)
    })
    var response = await this.client.getAssets({ collection: '0x5f32923175e13713242b3ddd632bdee82ab5f509', user: this.account });
    var ordersRequests = await this.client.getOrders({ status: ImmutableOrderStatus.active, sell_token_address: '0x5f32923175e13713242b3ddd632bdee82ab5f509', user: this.account });
    var tempOrder = JSON.parse(JSON.stringify(ordersRequests));
    for (var i = 0; i < tempOrder.result.length; i++) {
      this.krowsForSaleSet.add("#" + tempOrder.result[i].sell.data.token_id)
    }
    for (var i = 0; i < response.result.length; i++) {
      var tempOrder = JSON.parse(JSON.stringify(ordersRequests));
      const tempkrow = JSON.parse(JSON.stringify(response.result[i].metadata))
      var krowISForSaleBool = false;
      if (this.krowsForSaleSet.has(tempkrow.name)) {
        krowISForSaleBool = true;
      }
      const krow: Ikrow = {
        Name: tempkrow.name,
        Accessories: tempkrow.Accessories,
        Backgrounds: tempkrow.Backgrounds,
        Clothes: tempkrow.Clothes,
        Face: tempkrow.Face,
        Hat: tempkrow.Hat,
        KrowBase: tempkrow["Krow Base"],
        image_url: tempkrow.image_url,
        name: tempkrow.name,
        isForSale: krowISForSaleBool
      }
      this.krowsArray.push(krow);
    }
  }
}
