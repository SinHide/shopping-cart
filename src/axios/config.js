/**
 * Created by hideyoshi on 2017/3/23.
 */
import Qs from 'qs'
export default{
  url: '/get',

  baseURL: 'http://....',
  method: 'POST',

  transformRequest: [
    function(data) {
      //为了避免qs格式化时对内层对象的格式化先把内层的对象转为
      data.strSQL = base64encode(data.strSQL);
      //由于使用的form-data传数据所以要格式化
      data = Qs.stringify(data);
      return data;
    }
  ],

  transformResponse: [
    function(data) {
      return data;
    }
  ],

  headers: {
    'Content-Type':'application/x-www-form-urlencoded'
  },

  params: {

  },

  paramsSerializer: function(params) {
    return Qs.stringify(params)
  },

  data: {
    eid: "514403",
    currentPage:1,
    ItemsOfPage:99999,
    type:0,
    strSQL:""
  },

  timeout: 5000,

  withCredentials: true, // default false

  responseType: 'json', // default

  //将upload事件注释掉，防止跨域状态下发起option请求

  // onUploadProgress: function(progressEvent) {
  // 	// Do whatever you want with the native progress event
  // },


  // onDownloadProgress: function(progressEvent) {
  // 	// Do whatever you want with the native progress event
  // },

  maxContentLength: 2000,

  validateStatus: function(status) {
    return status >= 200 && status < 300; // default
  },

  maxRedirects: 5, // default
}

let base64encode = (str) => {
  let keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  let output = "";
  let chr1, chr2, chr3 = "";
  let enc1, enc2, enc3, enc4 = "";
  let i = 0;
  let input = utf16to8(str);
  do {
    chr1 = input.charCodeAt(i++);
    chr2 = input.charCodeAt(i++);
    chr3 = input.charCodeAt(i++);
    enc1 = chr1 >> 2;
    enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
    enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
    enc4 = chr3 & 63;
    if (isNaN(chr2)) {
      enc3 = enc4 = 64;
    } else if (isNaN(chr3)) {
      enc4 = 64;
    }
    output = output + keyStr.charAt(enc1) + keyStr.charAt(enc2) + keyStr.charAt(enc3) + keyStr.charAt(enc4);
    chr1 = chr2 = chr3 = "";
    enc1 = enc2 = enc3 = enc4 = "";
  } while (i < input.length);
  return output;

}

let utf16to8 = (str) => {
  let out, i, len, c;
  out = "";
  len = str.length;
  for (i = 0; i < len; i++) {
    c = str.charCodeAt(i);
    if ((c >= 0x0001) && (c <= 0x007F)) {
      out += str.charAt(i);
    } else if (c > 0x07FF) {
      out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
      out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));
      out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
    } else {
      out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));
      out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
    }
  }
  return out;
}
