import { DeploymentFilters, DeploymentID, Deployment } from "./deployment";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { GroupID, Group } from "./group";
import { Account } from "../../escrow/v1beta1/types";
import { LCDClient } from "@osmonauts/lcd";
import { setPaginationParams } from "@osmonauts/helpers";
import { QueryDeploymentsRequest, QueryDeploymentsResponse, QueryDeploymentRequest, QueryDeploymentResponse, QueryGroupRequest, QueryGroupResponse } from "./query";
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

  /* Deployments queries deployments */
  async deployments(params: QueryDeploymentsRequest): Promise<QueryDeploymentsResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.filters !== "undefined") {
      options.params.filters = params.filters;
    }

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `akash/deployment/v1beta1/deployments/list`;
    return await this.request<QueryDeploymentsResponse>(endpoint, options);
  }

  /* Deployment queries deployment details */
  async deployment(params: QueryDeploymentRequest): Promise<QueryDeploymentResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.id !== "undefined") {
      options.params.id = params.id;
    }

    const endpoint = `akash/deployment/v1beta1/deployments/info`;
    return await this.request<QueryDeploymentResponse>(endpoint, options);
  }

  /* Group queries group details */
  async group(params: QueryGroupRequest): Promise<QueryGroupResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.id !== "undefined") {
      options.params.id = params.id;
    }

    const endpoint = `akash/deployment/v1beta1/groups/info`;
    return await this.request<QueryGroupResponse>(endpoint, options);
  }

}