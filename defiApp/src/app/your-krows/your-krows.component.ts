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




  async getAccounts() {

    interface Ikrow {
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
      console.log("resp " + resp)

      console.log("this.account " + JSON.stringify(this.account))
    })

    var response = await this.client.getAssets({ collection: '0x5f32923175e13713242b3ddd632bdee82ab5f509', user: this.account });
    //console.log(response.result);
    for (var i = 0; i < response.result.length; i++) {
      // console.log(JSON.parse(JSON.stringify(response.result[i].metadata)))
      const tempkrow = JSON.parse(JSON.stringify(response.result[i].metadata))
      const krow: Ikrow = {
        Accessories: tempkrow.Accessories,
        Backgrounds: tempkrow.Backgrounds,
        Clothes: tempkrow.Clothes,
        Face: tempkrow.Face,
        Hat: tempkrow.Hat,
        KrowBase: tempkrow["Krow Base"],
        image_url: tempkrow.image_url,
        name: tempkrow.name,
        isForSale: false
      }
      this.krowsArray.push(krow);

    }
    console.log(this.krowsArray)
    //   var krow = {

    //     Accessories: response.result[i].metadata.Accessories instanceof String,
    //     // Backgrounds: response.result[i].metadata.
    //     // Clothes: "None"
    //     // Face: "Cyclops"
    //     // Hat: "Beanie"
    //     // Krow Base: "Cheetah Print"
    //     // image_url: "https://ipfs.io/ipfs/QmNoYD5bZjhqwRz5gm2TZSaMjMP7Kt38KDGmvKRb7yeboy"
    //     // name: "#3147"

    //     isForSale: false
    //   }




    // var ordersRequest = await this.client.getOrders({ status: ImmutableOrderStatus.active, sell_token_address: '0x5f32923175e13713242b3ddd632bdee82ab5f509', user: this.account });
    // console.log('ordersRequest ' + JSON.stringify(ordersRequest));
    // if (response.result[i].name == "#" + ordersRequest.result[0].sell.data.token_id) {
    //   response.result[i].isForSale = true;
    // }
    //}
  }
}
