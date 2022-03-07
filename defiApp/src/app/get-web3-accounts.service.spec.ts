import { TestBed } from '@angular/core/testing';

import { GetWeb3AccountsService } from './get-web3-accounts.service';

describe('GetWeb3AccountsService', () => {
  let service: GetWeb3AccountsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetWeb3AccountsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
