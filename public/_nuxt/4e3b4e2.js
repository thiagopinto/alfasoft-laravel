(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{267:function(n,t,e){n.exports=function(){"use strict";var n,t={name:"ko",messages:{_default:function(n){return n+"항목의 값이 유효하지 않습니다"},after:function(n,t){return n+"항목의 값은 "+t[0]+"항목의 값 이후"+(t[1]?"거나 같은 날이어야":"여야")+" 합니다"},alpha:function(n){return n+"항목에는 영문자만 사용 가능합니다"},alpha_dash:function(n){return n+"항목에는 영문자, 숫자와 특수기호(-),(_)만 사용 가능합니다"},alpha_num:function(n){return n+"항목에는 영문자와 숫자만 사용 가능합니다"},alpha_spaces:function(n){return n+"항목에는 영문자와 공백만 사용 가능합니다"},before:function(n,t){return n+"항목의 값은 "+t[0]+"항목의 값 이전"+(t[1]?"이거나 같은 날":"")+"이어야 합니다"},between:function(n,t){return n+"항목의 값은 "+t[0]+"에서 "+t[1]+" 사이여야 합니다"},confirmed:function(n){return n+"항목의 값이 일치하지 않습니다"},credit_card:function(n){return n+"항목의 값이 유효하지 않습니다"},date_between:function(n,t){return n+"항목의 값은 "+t[0]+"과 "+t[1]+" 사이의 날짜이어야 합니다"},date_format:function(n,t){return n+"항목의 값은 "+t[0]+"형식이어야 합니다"},decimal:function(n,t){void 0===t&&(t=[]);var e=t[0];return void 0===e&&(e="*"),n+"항목의 값은 숫자이어야 하며, 소수점 이하 "+(e&&"*"!==e?e:"")+"자리까지 사용 가능합니다"},digits:function(n,t){return n+"항목의 값은 "+t[0]+"자리의 숫자이어야 합니다"},dimensions:function(n,t){return n+"항목의 크기는 가로 "+t[0]+"픽셀, 세로 "+t[1]+"픽셀이어야 합니다"},email:function(n){return n+"항목의 값은 유효한 이메일 형식이어야 합니다"},excluded:function(n){return n+"항목은 유효한 값이어야 합니다"},ext:function(n){return n+"항목은 유효한 파일이어야 합니다"},image:function(n){return n+"항목은 이미지 파일이어야 합니다"},included:function(n){return n+"항목의 값은 유효한 값이어야 합니다"},integer:function(n){return n+"항목의 값은 정수이어야 합니다"},ip:function(n){return n+"항목의 값은 유효한 IP(ipv4) 주소이어야 합니다"},length:function(n,t){var e=t[0],r=t[1];return r?n+"항목의 값은 "+e+"자에서 "+r+"자이어야 합니다":n+"항목의 값은 "+e+"자이어야 합니다"},max:function(n,t){return n+"항목의 값은 최대 "+t[0]+"글자이어야 합니다"},max_value:function(n,t){return n+"항목의 값은 "+t[0]+" 이하이어야 합니다"},mimes:function(n){return n+"는 유효한 파일 형식의 파일이어야 합니다"},min:function(n,t){return n+"항목의 값은 최소 "+t[0]+"글자이어야 합니다"},min_value:function(n,t){return n+"항목의 값은 "+t[0]+" 이상이어야 합니다"},numeric:function(n){return n+"항목에는 숫자만 사용 가능합니다"},regex:function(n){return n+"항목은 형식에 맞지 않습니다"},required:function(n){return n+"항목은 필수 정보입니다"},size:function(n,t){return n+"항목의 크기는 "+function(n){var t=1024,e=0==(n=Number(n)*t)?0:Math.floor(Math.log(n)/Math.log(t));return 1*(n/Math.pow(t,e)).toFixed(2)+" "+["Byte","KB","MB","GB","TB","PB","EB","ZB","YB"][e]}(t[0])+"보다 작아야 합니다"},url:function(n){return n+"항목의 값은 유효한 주소(URL)가 아닙니다"}},attributes:{}};return"undefined"!=typeof VeeValidate&&VeeValidate.Validator.localize(((n={})[t.name]=t,n)),t}()}}]);