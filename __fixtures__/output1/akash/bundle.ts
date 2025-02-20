import * as _0 from "./audit/v1beta1/audit";
import * as _1 from "./audit/v1beta2/audit";
import * as _2 from "./audit/v1beta2/genesis";
import * as _3 from "./audit/v1beta2/query";
import * as _4 from "./base/v1beta1/attribute";
import * as _5 from "./base/v1beta1/endpoint";
import * as _6 from "./base/v1beta1/resource";
import * as _7 from "./base/v1beta1/resourcevalue";
import * as _8 from "./base/v1beta2/attribute";
import * as _9 from "./base/v1beta2/endpoint";
import * as _10 from "./base/v1beta2/resource";
import * as _11 from "./base/v1beta2/resourceunits";
import * as _12 from "./base/v1beta2/resourcevalue";
import * as _13 from "./cert/v1beta2/cert";
import * as _14 from "./cert/v1beta2/genesis";
import * as _15 from "./cert/v1beta2/query";
import * as _16 from "./deployment/v1beta1/authz";
import * as _17 from "./deployment/v1beta1/deployment";
import * as _18 from "./deployment/v1beta1/genesis";
import * as _19 from "./deployment/v1beta1/group";
import * as _20 from "./deployment/v1beta1/params";
import * as _21 from "./deployment/v1beta1/query";
import * as _22 from "./deployment/v1beta2/authz";
import * as _23 from "./deployment/v1beta2/deployment";
import * as _24 from "./deployment/v1beta2/deploymentmsg";
import * as _25 from "./deployment/v1beta2/genesis";
import * as _26 from "./deployment/v1beta2/group";
import * as _27 from "./deployment/v1beta2/groupid";
import * as _28 from "./deployment/v1beta2/groupmsg";
import * as _29 from "./deployment/v1beta2/groupspec";
import * as _30 from "./deployment/v1beta2/params";
import * as _31 from "./deployment/v1beta2/query";
import * as _32 from "./deployment/v1beta2/resource";
import * as _33 from "./deployment/v1beta2/service";
import * as _34 from "./escrow/v1beta1/genesis";
import * as _35 from "./escrow/v1beta1/query";
import * as _36 from "./escrow/v1beta1/types";
import * as _37 from "./escrow/v1beta2/genesis";
import * as _38 from "./escrow/v1beta2/query";
import * as _39 from "./escrow/v1beta2/types";
import * as _40 from "./inflation/v1beta2/genesis";
import * as _41 from "./inflation/v1beta2/params";
import * as _42 from "./market/v1beta2/bid";
import * as _43 from "./market/v1beta2/genesis";
import * as _44 from "./market/v1beta2/lease";
import * as _45 from "./market/v1beta2/order";
import * as _46 from "./market/v1beta2/params";
import * as _47 from "./market/v1beta2/query";
import * as _48 from "./market/v1beta2/service";
import * as _49 from "./provider/v1beta1/provider";
import * as _50 from "./provider/v1beta2/genesis";
import * as _51 from "./provider/v1beta2/provider";
import * as _52 from "./provider/v1beta2/query";
import * as _310 from "./audit/v1beta1/audit.amino";
import * as _311 from "./audit/v1beta2/audit.amino";
import * as _312 from "./cert/v1beta2/cert.amino";
import * as _313 from "./deployment/v1beta2/service.amino";
import * as _314 from "./market/v1beta2/service.amino";
import * as _315 from "./provider/v1beta1/provider.amino";
import * as _316 from "./provider/v1beta2/provider.amino";
import * as _317 from "./audit/v1beta1/audit.registry";
import * as _318 from "./audit/v1beta2/audit.registry";
import * as _319 from "./cert/v1beta2/cert.registry";
import * as _320 from "./deployment/v1beta2/service.registry";
import * as _321 from "./market/v1beta2/service.registry";
import * as _322 from "./provider/v1beta1/provider.registry";
import * as _323 from "./provider/v1beta2/provider.registry";
import * as _324 from "./audit/v1beta2/query.lcd";
import * as _325 from "./cert/v1beta2/query.lcd";
import * as _326 from "./deployment/v1beta1/query.lcd";
import * as _327 from "./deployment/v1beta2/query.lcd";
import * as _328 from "./escrow/v1beta1/query.lcd";
import * as _329 from "./escrow/v1beta2/query.lcd";
import * as _330 from "./market/v1beta2/query.lcd";
import * as _331 from "./provider/v1beta2/query.lcd";
import * as _332 from "./audit/v1beta2/query.rpc.query";
import * as _333 from "./cert/v1beta2/query.rpc.query";
import * as _334 from "./deployment/v1beta1/query.rpc.query";
import * as _335 from "./deployment/v1beta2/query.rpc.query";
import * as _336 from "./escrow/v1beta1/query.rpc.query";
import * as _337 from "./escrow/v1beta2/query.rpc.query";
import * as _338 from "./market/v1beta2/query.rpc.query";
import * as _339 from "./provider/v1beta2/query.rpc.query";
import * as _340 from "./audit/v1beta1/audit.rpc.msg";
import * as _341 from "./audit/v1beta2/audit.rpc.msg";
import * as _342 from "./cert/v1beta2/cert.rpc.msg";
import * as _343 from "./deployment/v1beta1/deployment.rpc.msg";
import * as _344 from "./deployment/v1beta2/service.rpc.msg";
import * as _345 from "./market/v1beta2/service.rpc.msg";
import * as _346 from "./provider/v1beta1/provider.rpc.msg";
import * as _347 from "./provider/v1beta2/provider.rpc.msg";
import * as _515 from "./lcd";
import * as _516 from "./rpc.query";
import * as _517 from "./rpc.tx";
export namespace akash {
  export namespace audit {
    export const v1beta1 = { ..._0,
      ..._310,
      ..._317,
      ..._340
    };
    export const v1beta2 = { ..._1,
      ..._2,
      ..._3,
      ..._311,
      ..._318,
      ..._324,
      ..._332,
      ..._341
    };
  }
  export namespace base {
    export const v1beta1 = { ..._4,
      ..._5,
      ..._6,
      ..._7
    };
    export const v1beta2 = { ..._8,
      ..._9,
      ..._10,
      ..._11,
      ..._12
    };
  }
  export namespace cert {
    export const v1beta2 = { ..._13,
      ..._14,
      ..._15,
      ..._312,
      ..._319,
      ..._325,
      ..._333,
      ..._342
    };
  }
  export namespace deployment {
    export const v1beta1 = { ..._16,
      ..._17,
      ..._18,
      ..._19,
      ..._20,
      ..._21,
      ..._326,
      ..._334,
      ..._343
    };
    export const v1beta2 = { ..._22,
      ..._23,
      ..._24,
      ..._25,
      ..._26,
      ..._27,
      ..._28,
      ..._29,
      ..._30,
      ..._31,
      ..._32,
      ..._33,
      ..._313,
      ..._320,
      ..._327,
      ..._335,
      ..._344
    };
  }
  export namespace escrow {
    export const v1beta1 = { ..._34,
      ..._35,
      ..._36,
      ..._328,
      ..._336
    };
    export const v1beta2 = { ..._37,
      ..._38,
      ..._39,
      ..._329,
      ..._337
    };
  }
  export namespace inflation {
    export const v1beta2 = { ..._40,
      ..._41
    };
  }
  export namespace market {
    export const v1beta2 = { ..._42,
      ..._43,
      ..._44,
      ..._45,
      ..._46,
      ..._47,
      ..._48,
      ..._314,
      ..._321,
      ..._330,
      ..._338,
      ..._345
    };
  }
  export namespace provider {
    export const v1beta1 = { ..._49,
      ..._315,
      ..._322,
      ..._346
    };
    export const v1beta2 = { ..._50,
      ..._51,
      ..._52,
      ..._316,
      ..._323,
      ..._331,
      ..._339,
      ..._347
    };
  }
  export const ClientFactory = { ..._515,
    ..._516,
    ..._517
  };
}