(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{289:function(n,t,c){n.exports=function(){"use strict";var n,t={name:"vi",messages:{_default:function(n){return"Giá trị của "+n+" không đúng"},after:function(n,t){return n+" phải xuất hiện sau "+t[0]},alpha:function(n){return n+" chỉ có thể chứa các kí tự chữ"},alpha_dash:function(n){return n+" có thể chứa các kí tự chữ (A-Z a-z), số (0-9), gạch ngang (-) và gạch dưới (_)"},alpha_num:function(n){return n+" chỉ có thể chứa các kí tự chữ và số"},alpha_spaces:function(n){return n+" chỉ có thế chứa các kí tự và khoảng trắng"},before:function(n,t){return n+" phải xuất hiện trước "+t[0]},between:function(n,t){return n+" phải có giá trị nằm trong khoảng giữa "+t[0]+" và "+t[1]},confirmed:function(n,t){return n+" khác với "+t[0]},credit_card:function(n){return"Đã điền "+n+" không chính xác"},date_between:function(n,t){return n+" phải có giá trị nằm trong khoảng giữa  "+t[0]+" và "+t[1]},date_format:function(n,t){return n+" phải có giá trị dưới định dạng "+t[0]},decimal:function(n,t){void 0===t&&(t=[]);var c=t[0];return void 0===c&&(c="*"),n+" chỉ có thể chứa các kí tự số và dấu thập phân"+(c&&"*"!==c?" "+c:"")},digits:function(n,t){return"Trường "+n+" chỉ có thể chứa các kí tự số và bắt buộc phải có độ dài là "+t[0]},dimensions:function(n,t){return n+" phải có chiều rộng "+t[0]+" pixels và chiều cao "+t[1]+" pixels"},email:function(n){return n+" phải là một địa chỉ email hợp lệ"},excluded:function(n){return n+" phải chứa một giá trị hợp lệ"},ext:function(n){return n+" phải là một tệp"},image:function(n){return"Trường "+n+" phải là một ảnh"},included:function(n){return n+" phải là một giá trị"},ip:function(n){return n+" phải là một địa chỉ ip hợp lệ"},max:function(n,t){return n+" không thể có nhiều hơn "+t[0]+" kí tự"},max_value:function(n,t){return n+" phải nhỏ hơn hoặc bằng "+t[0]},mimes:function(n){return n+" phải chứa kiểu tệp phù hợp"},min:function(n,t){return n+" phải chứa ít nhất "+t[0]+" kí tự"},min_value:function(n,t){return n+" phải lớn hơn hoặc bằng "+t[0]},numeric:function(n){return n+" chỉ có thể có các kí tự số"},regex:function(n){return n+" có định dạng không đúng"},required:function(n){return n+" là bắt buộc"},size:function(n,t){return n+" chỉ có thể chứa tệp nhỏ hơn "+function(n){var t=1024,c=0==(n=Number(n)*t)?0:Math.floor(Math.log(n)/Math.log(t));return 1*(n/Math.pow(t,c)).toFixed(2)+" "+["Byte","KB","MB","GB","TB","PB","EB","ZB","YB"][c]}(t[0])},url:function(n){return n+" không phải là một địa chỉ URL hợp lệ"}},attributes:{}};return"undefined"!=typeof VeeValidate&&VeeValidate.Validator.localize(((n={})[t.name]=t,n)),t}()}}]);