export const createCustomLCDClient = async ({
  restEndpoint
}: {
  restEndpoint: string;
}) => ({
  cosmos: {
    bank: {
      v1beta1: new (await import("../cosmos/bank/v1beta1/query.lcd")).LCDQueryClient({
        restEndpoint
      })
    },
    gov: {
      v1beta1: new (await import("../cosmos/gov/v1beta1/query.lcd")).LCDQueryClient({
        restEndpoint
      })
    }
  },
  osmosis: {
    gamm: {
      v1beta1: new (await import("./gamm/v1beta1/query.lcd")).LCDQueryClient({
        restEndpoint
      })
    }
  }
});