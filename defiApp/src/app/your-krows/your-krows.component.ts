import { Component, OnInit } from '@angular/core';
// import { ImmutableXClient, Link } from '@imtbl/imx-sdk';
// import { ImmutableXClient } from "@imtbl/imx-sdk";
// import { Link } from '@imtbl/imx-sdk';
// import * as ImmutableXClient from '@imtbl/imx-sdk';
import { getWeb3accounts } from '../get-web3-accounts.service';

@Component({
  selector: 'app-your-krows',
  templateUrl: './your-krows.component.html',
  styleUrls: ['./your-krows.component.scss']
})
export class YourKrowsComponent implements OnInit {

  constructor(private getWeb3accounts: getWeb3accounts) { }

  async ngOnInit(): Promise<void> {

    // this.link = new Link(this.linkAddress);
    // this.client = await ImmutableXClient.build({ publicApiUrl: this.apiAddress });
  }

  errorMessage = '';
  loading = false
  krowsArray = [];
  linkAddress = 'https://link.x.immutable.com';
  apiAddress = 'https://api.x.immutable.com/v1';
  accounts = [];
  // link: Link = new Link;
  // client!: ImmutableXClient;

  getAccounts() {
    this.getWeb3accounts.openMetamask().then((resp: any) => {
      console.log(resp)

    })
  }
}
