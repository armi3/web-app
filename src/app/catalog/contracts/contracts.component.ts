import { Component, OnInit } from '@angular/core';

import { FixedSupplyDeployment } from '@factory/fixed-supply.deployment';
import { ExistingTokenDeployment } from '@factory/existing-token.deployment';

@Component({
  selector: 'app-catalog-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.css']
})
export class ContractsComponent implements OnInit {

  ExistingTokenDeployment: string = ExistingTokenDeployment._type
  FixedSupplyDeployment: string = FixedSupplyDeployment._type

  constructor() { }

  ngOnInit() {
  }

}