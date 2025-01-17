import { Action, ClaimRecord } from "./claim";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Params } from "./params";
import { LCDClient } from "@osmonauts/lcd";
import { QueryModuleAccountBalanceRequest, QueryModuleAccountBalanceResponse, QueryParamsRequest, QueryParamsResponse, QueryClaimRecordRequest, QueryClaimRecordResponse, QueryClaimableForActionRequest, QueryClaimableForActionResponse, QueryTotalClaimableRequest, QueryTotalClaimableResponse } from "./query";
export class LCDQueryClient extends LCDClient {
  constructor({
    restEndpoint
  }: {
    restEndpoint: string;
  }) {
    super({
      restEndpoint
    });
  }

  /* ModuleAccountBalance */
  async moduleAccountBalance(_params: QueryModuleAccountBalanceRequest = {}): Promise<QueryModuleAccountBalanceResponse> {
    const endpoint = `osmosis/claim/v1beta1/module_account_balance`;
    return await this.request<QueryModuleAccountBalanceResponse>(endpoint);
  }

  /* Params */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const endpoint = `osmosis/claim/v1beta1/params`;
    return await this.request<QueryParamsResponse>(endpoint);
  }

  /* ClaimRecord */
  async claimRecord(params: QueryClaimRecordRequest): Promise<QueryClaimRecordResponse> {
    const endpoint = `osmosis/claim/v1beta1/claim_record/${params.address}`;
    return await this.request<QueryClaimRecordResponse>(endpoint);
  }

  /* ClaimableForAction */
  async claimableForAction(params: QueryClaimableForActionRequest): Promise<QueryClaimableForActionResponse> {
    const endpoint = `osmosis/claim/v1beta1/claimable_for_action/${params.address}/${params.action}`;
    return await this.request<QueryClaimableForActionResponse>(endpoint);
  }

  /* TotalClaimable */
  async totalClaimable(params: QueryTotalClaimableRequest): Promise<QueryTotalClaimableResponse> {
    const endpoint = `osmosis/claim/v1beta1/total_claimable/${params.address}`;
    return await this.request<QueryTotalClaimableResponse>(endpoint);
  }

}