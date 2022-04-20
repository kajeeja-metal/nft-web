import axios from "axios";
import qs from "qs";
import { baseURL } from "@/services/endpoint";
import Router from "next/router";
import Cookies from "js-cookie";

export const getBanner = async () => {
  const token = Cookies.get("token");
  try {
    var config = {
      method: "get",
      url: baseURL + "/api/v1/banner?page=1&limit=10",
    };

    const response = await axios(config)
      .then(function (response) {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
    return response;
  } catch { }
};
export const getCheckin = async () => {
  const token = Cookies.get('token');
  try {
    var config = {
      method: "get",
      url: baseURL + "/api/v1/weeklyPass/listBOF",
      headers: {
        Authorization: axios.defaults.headers.Authorization,
      },
    };
    let data = await axios(config)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        return error.response.data;
      });
    return data;
  } catch {

  }
};
export const PostCheckin = async (chackin_id) => {
  const token = Cookies.get('token');
  try {
    var datas = qs.stringify({
      'weekly_pass_id': chackin_id
    });
    var config = {
      method: "post",
      url: baseURL + "/api/v1/weeklyPass/checkin",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: datas
    };
    let data = await axios(config)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        return error.response.data;
      });
    return data;
  } catch {

  }
};
export const getBannerCategory = async (id) => {
  const token = Cookies.get('token');
  try {
    var config = {
      method: "get",
      url: baseURL + "/api/v1/banner/bof?page=1&limit=10&banner_category_id=" + id,
      headers: { Authorization: axios.defaults.headers.Authorization }
    };
    let data = await axios(config)
      .then(function (response) {
        
        return response.data;
      })
      .catch(function (error) {
        return error.response.data;
      });
    return data;
  } catch {

  }
}
export const getBannerId = async (id) => {
  const token = Cookies.get('token');
  try {
    var config = {
      method: "get",
      url: baseURL + "/api/v1/banner/" + id,
    };
    let data = await axios(config)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        return error.response.data;
      });
    return data;
  } catch {

  }
}
export const getValidateRedeem = async (id,qty) => {
  const token = Cookies.get('token');
  typeof window !== "undefined" ? token = Cookies.get('token') : ""
 
 let count =  qty == undefined ? 1 : qty
  if (token != undefined) {
    try {
      const response = await axios.get(
        baseURL + "/api/v1/privilege/validateRedeem?dealId=" + id + "&qty="+count,
        {
          headers: { Authorization: `Bearer ${token}` }
        },
      ).then((res) => {
        return res.data;
      }).catch((error) => {
        return error.response.data;
      })
      return response
    } catch {

    }
  } else {
    return false
  }
}
export const getRedeem = async (id,qty,specialCampaignId) => {
  const token = Cookies.get('token');
  typeof window !== "undefined" ? token = Cookies.get('token') : ""
  let count =  qty == undefined ? 1 : qty
  let specialId = specialCampaignId == undefined || specialCampaignId == null ? null : specialCampaignId
  if (token != undefined) {
    try {
      // post  auth "specialCampaignId": "36"
      var data = { "dealId": id, "qty": count,"specialCampaignId" : specialId};
      const headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
      const response = await axios.post(baseURL + "/api/v1/privilege/redeem", data, { headers: headers })
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
          return error.response.data;
        })
      return response
    } catch {

    }
  } else {
    return false
  }
}
export const PostAddTimeExp = async (id) => {
  const token = Cookies.get('token');
  typeof window !== "undefined" ? token = Cookies.get('token') : ""
  if (token != undefined) {
    try {
      // post  auth
      var data = { "privilege_redeem_id": id};
      const headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
      const response = await axios.post(baseURL + "/api/v1/privilege/usedReward", data, { headers: headers })
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
          return error.response.data;
        })
      return response
    } catch {

    }
  } else {
    return false
  }
}

export const getRedeemAddress = async (pid,aid) => {
  const token = Cookies.get('token');
  typeof window !== "undefined" ? token = Cookies.get('token') : ""
  if (token != undefined) {
    try {
      // post  auth
      var data = JSON.stringify({"privilegeRedeemIds":[pid],"participantAddressId":aid});
      const headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
      const response = await axios.post(baseURL + "/api/v1/privilege/redeem/setAddress", data, { headers: headers })
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
          return error.response.data;
        })
      return response
    } catch {

    }
  } else {
    return false
  }
}
export const getLucky = async (id) => {
  const token = Cookies.get('token');
  typeof window !== "undefined" ? token = Cookies.get('token') : ""
  if (token != undefined) {
    try {
      // post  auth
      var data = { "dealId": id, "qty": 1 };
      const headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
      const response = await axios.post(baseURL + "/api/v1/privilege/redeem", data, { headers: headers })
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
          return error.response.data;
        })
      return response
    } catch {

    }
  } else {
    return false
  }
}
export const getDealDetail = async (id) => {
  const token = Cookies.get('token');
  typeof window !== "undefined" ? token = Cookies.get('token') : ""
  
  if (token != undefined || token != '') {
    const response = await axios.get(
      baseURL + "/api/v1/privilege/deal/" + id,
      {
        headers: { Authorization: axios.defaults.headers.Authorization }
      },
    );
    return response.data;
  } else {
    const response = await axios.get(
      baseURL + "/api/v1/privilege/deal/" + id,
    );
    return response.data;
  }
}
export const getTagCategoryRecommend = async (category, page) => {
  const token = Cookies.get('token');
  typeof window !== "undefined" ? token = Cookies.get('token') : ""
  if (token != undefined) {
    const response = await axios.get(
      baseURL + "/api/v1/privilege/deals?page=" + page + "&limit=5&tags=" + category,
      {
        headers: { Authorization: `Bearer ${token}` }
      },

    );

    return response.data;
  } else {
    const response = await axios.get(
      baseURL + "/api/v1/privilege/deals?page=" + page + "&limit=10&tags=" + category
    );
    return response.data;
  }
}
export const getTagCategoryAll = async (category, page) => {
  const token = Cookies.get('token');
  typeof window !== "undefined" ? token = Cookies.get('token') : ""
  if (axios.defaults.headers.Authorization != undefined) {
    const response = await axios.get(
      baseURL + "/api/v1/privilege/deals?page=" + page + "&limit=99&tags=" + category,
      {
        headers: { Authorization: axios.defaults.headers.Authorization }
      },
    );
    return response.data;
  } else {
    const response = await axios.get(
      baseURL + "/api/v1/privilege/deals?page=" + page + "&limit=10&tags=" + category
    );
    return response.data;
  }
}
export const getTagCategoryPages = async (category, page,limit) => {
  const token = Cookies.get('token');
  typeof window !== "undefined" ? token = Cookies.get('token') : ""
  const response = await axios.get(
    baseURL + "/api/v1/privilege/deals?page=" + page + "&limit=3&tags=" + category,
    {
      headers: { Authorization: axios.defaults.headers.Authorization }
    },
  );
  return response.data;
}
export const getSearch = async (keyword) => {
  const token = Cookies.get('token');
  typeof window !== "undefined" ? token = Cookies.get('token') : ""
  if (token != undefined) {
    const response = await axios.get(
      baseURL + "/api/v1/privilege/deals?limit=15&search=" + keyword,
      {
          headers: { Authorization: `Bearer ${token}` }
      },

  );
  return response.data;

  }
}
export const getTagCategory = async (category, page) => {
  const token = Cookies.get('token');
  typeof window !== "undefined" ? token = Cookies.get('token') : ""
  if (token != undefined) {
    const response = await axios.get(
      baseURL + "/api/v1/privilege/category",
      {
        headers: { Authorization: `Bearer ${token}` }
      },

    );

    return response.data;
  } else {
    const response = await axios.get(
      baseURL + "/api/v1/privilege/category"
    );
    return response.data;
  }
}
export const getTagCategoryDeal = async (category, page) => {
  const token = Cookies.get('token');
  typeof window !== "undefined" ? token = Cookies.get('token') : ""
  if (token != undefined) {
    const response = await axios.get(
      baseURL + "/api/v1/privilege/deals?page=" + page + "&&tags=" + category,
      {
        headers: { Authorization: `Bearer ${token}` }
      },

    );

    return response.data;
  } else {
    const response = await axios.get(
      baseURL + "/api/v1/privilege/deals?page=" + page + "&&tags=" + category
    );
    return response.data;
  }
}
export const getHistory = async (page) => {
  const token = Cookies.get('token');
  typeof window !== "undefined" ? token = Cookies.get('token') : ""
  if (token != undefined) {
    const response = await axios.get(
      baseURL + "/api/v1/privilege/history?page=" + page + "&limit=60",
      {
        headers: { Authorization: `Bearer ${token}` }
      },

    );

    return response.data.data;
  } else {
    const response = await axios.get(
      baseURL + "/api/v1/privilege/history?page=" + page + "&limit=20"
    );
    return response.data;
  }
}
export const getHistoryEarn = async (page) => {
  const token = Cookies.get('token');
  typeof window !== "undefined" ? token = Cookies.get('token') : ""
  if (token != undefined) {
    const response = await axios.get(
      baseURL + "/api/v1/participant/historyEarn",
      {
        headers: { Authorization: `Bearer ${token}` }
      },

    );

    return response.data;
  } else {
    const response = await axios.get(
      baseURL + "/api/v1/participant/historyEarn"
    );
    return response.data;
  }
}
export const getHistoryBurn = async (page) => {
  const token = Cookies.get('token');
  typeof window !== "undefined" ? token = Cookies.get('token') : ""
  if (token != undefined) {
    const response = await axios.get(
      baseURL + "/api/v1/participant/historyBurn",
      {
        headers: { Authorization: `Bearer ${token}` }
      },

    );

    return response.data;
  } else {
    const response = await axios.get(
      baseURL + "/api/v1/participant/historyBurn"
    );
    return response.data;
  }
}
export const getAddress = async () => {
  const token = Cookies.get('token');
  typeof window !== "undefined" ? token = Cookies.get('token') : ""
  if (token != undefined) {
    const response = await axios.get(
      baseURL + "/api/v1/participant/address",
      {
        headers: { Authorization: `Bearer ${token}` }
      },

    );

    return response.data;
  } else {
    const response = await axios.get(
      baseURL + "/api/v1/participant/address"
    );
    return response;
  }
}
export const privilegeUpdateAddress = async (data, id) => {
  const token = Cookies.get('token');
  typeof window !== "undefined" ? token = Cookies.get('token') : ""
  var data = qs.stringify(data);
  if (token != undefined) {
    var config = {
      method: 'put',
      url: baseURL + "/api/v1/privilege/updateAddress/" + id,
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: data
    };

    const response = await axios(config).then(function (response) {
      return response.data
    })
      .catch(function (error) {
        return error.response.data
      });

    return response;
  }
}
export const PostAddress = async (data) => {
  const token = Cookies.get('token');
  typeof window !== "undefined" ? token = Cookies.get('token') : ""
  var data = qs.stringify(data);
  if (token != undefined) {
    var config = {
      method: 'post',
      url: baseURL + "/api/v1/participant/address",
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: data
    };

    const response = await axios(config).then(function (response) {
      return response.data
    })
      .catch(function (error) {
        return error.response.data
      });

    return response;
  }
}
export const UpdateAddress = async (data, id) => {
  const token = Cookies.get('token');
  typeof window !== "undefined" ? token = Cookies.get('token') : ""
  var data = qs.stringify(data);
  if (token != undefined) {
    var config = {
      method: 'put',
      url: baseURL + "/api/v1/participant/address/" + id,
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: data
    };

    const response = await axios(config).then(function (response) {
      return response.data
    })
      .catch(function (error) {
        return error.response.data
      });

    return response;
  }
}
export const getGameList = async () => {
  const token = Cookies.get('token');
  typeof window !== "undefined" ? token = Cookies.get('token') : ""
  if (token != undefined) {
    const response = await axios.get(
      baseURL + "/api/v1/game?page=1&limit=10",
    );

    return response.data.data;
  } 
}
export const getGameListID = async (gameID) => {
  const token = Cookies.get('token');
  typeof window !== "undefined" ? token = Cookies.get('token') : ""
  const response = await axios.get(
    baseURL + "/api/v1/game/privilege?page=1&limit=10&game_id="+gameID,
  );
  return response.data.data;
}
export const SelectReward = async (data) => {
  const token = Cookies.get('token');
  typeof window !== "undefined" ? token = Cookies.get('token') : ""
  var data = qs.stringify(data);
  if (token != undefined) {
    var config = {
      method: 'post',
      url: baseURL + "/api/v1/game/selectReward",
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: data
    };

    const response = await axios(config).then(function (response) {
      return response.data
    })
      .catch(function (error) {
        return error.response.data
      });

    return response;
  }
}
export const endGame = async (data) => {
  const token = Cookies.get('token');
  typeof window !== "undefined" ? token = Cookies.get('token') : ""
  var data = qs.stringify(data);
  if (token != undefined) {
    var config = {
      method: 'post',
      url: baseURL + "/api/v2/game/endGame",
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: data
    };

    const response = await axios(config).then(function (response) {
      return response.data
    })
      .catch(function (error) {
        return error.response.data
      });

    return response;
  }
}

// export const getScanqr = async (qrText) => {
//     const token = Cookies.get('token')
//     try {
//         var data = qs.stringify({
//             'qrcode': qrText
//            });
//            var config = {
//              method: 'post',
//              url: baseURL +"/qrcode/scan",
//              headers: { Authorization: `Bearer ${token}`,'Content-Type': 'application/x-www-form-urlencoded' },
//              data : data
//            };

//            const response =   await axios(config)
//            .then(function (response) {
//              return response.data
//            }).catch((error)=>{
//              return error.response.data
//            })
//         return response;
//     } catch {

//     }
// }
// export const getMe = async (token) => {
//     var myHeaders = new Headers();
//     myHeaders.append("Authorization", "Bearer "+token);

//     var requestOptions = {
//     method: 'GET',
//     headers: myHeaders,
//     redirect: 'follow'
//     };

//     let data = await fetch(baseURL +"/participant/me", requestOptions)
//     .then(response => response.text())
//     .then(async result => {
//         return JSON.parse(result)
//     })
//     .catch(error => {
//         console.log(error)
//         return error
//     });
//     return data
// }
