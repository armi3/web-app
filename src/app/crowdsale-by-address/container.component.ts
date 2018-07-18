import { Component, OnInit } from '@angular/core';
import { SimpleICOContract } from '@contract/simpleico.contract';
import { WalletService } from '@service/wallet.service';
import { SettingsService } from '@service/settings.service';
import { FixedSupplyComponent } from '../contract-index/fixed-supply/fixed-supply.component';

import { FixedSupplyDeployment } from '@factory/fixed-supply.deployment';

@Component({
  selector: 'app-crowdsale-by-address',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})

export class ContainerComponent extends FixedSupplyComponent {

  address: string

  FixedSupplyDeployment: string = FixedSupplyDeployment._type

  constructor(
    public wallet: WalletService,
    public settings: SettingsService){

    super(wallet, settings)

    settings.onNetworkChange.subscribe((networkChanged) => {
      this.crowdsales = []
      this.ngOnInit()
      this.getCrowdsalesByAddress()
    })
  }

  ngOnInit() {
    this.simpleICO = new SimpleICOContract(this.wallet.getInstance())
    this.simpleICO.connect()

    this.address = this.wallet.getAddress()
  }

  ngAfterViewInit(){
    this.getCrowdsalesByAddress()
  }

  async getCrowdsalesByAddress(){
    let crowdsales = await this.simpleICO.instance.methods.getCrowdsalesByAddress(this.address).call()

    this.initCrowdsales(crowdsales)
  }

}
