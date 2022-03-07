import { Component, OnInit } from '@angular/core';
// import { ImmutableXClient, Link } from '@imtbl/imx-sdk';
// import { ImmutableXClient } from "@imtbl/imx-sdk";
// import { Link } from '@imtbl/imx-sdk';
// import ImmutableXClient as ImmutableXClient from '@imtbl/imx-sdk'
//import * as ImmutableXClient from '@imtbl/imx-sdk'

const web3 = require('../../app/web3.js')
@Component({
  selector: 'app-your-krows',
  templateUrl: './your-krows.component.html',
  styleUrls: ['./your-krows.component.scss']
})
export class YourKrowsComponent implements OnInit {

  constructor() { }

  async ngOnInit(): Promise<void> {
    this.accounts = await web3.eth.getAccounts();
    console.log(this.accounts);

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


}
