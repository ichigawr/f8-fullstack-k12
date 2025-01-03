let jsContent = `Năm 1995: JavaScript được tạo ra bởi Brendan Eich chỉ trong khoảng 10 ngày khi ông làm việc tại Netscape. Tên ban đầu của Javascript là Mocha, sau đó được đổi tên thành LiveScript.<br/>
Năm 1996:Javascript được gửi đến ECMA(European Computer Manufacturers Association - Hội liên hiệp các nhà sản xuất máy tính Châu Âu)để chuẩn hóa và đổi tên thành JavaScript.<br/>
Năm 2009: ECMAScript 5 ra đời với nhiều cải tiến quan trọng như có thêm nhiều phương thức mới cho mảng và đối tượng và tính năng "strict mode". Cũng trong năm 2009 Ryan Dahl đã tạo ra Node.js, một nền tảng cho phép chạy javaScript ngoài trình duyệt. Điều này đã mở ra một cánh cửa mới cho JavaScript.<br/>
Năm 2015:ECMAScript 6 (ES6) ra đời,là phiên bản lớn nhất của ECMAScript với nhiều cải tiến và tính năng được coi là vượt bậc.<br/>
Năm 2016 - nay:Các phiên bản ECMAScript mới được ra mắt liên tục,với nhiều cải tiến và tính năng mới.Cho đến nay javaScript đã trở thành một trong số những ngôn ngữ được ưa chuộng và sử dụng nhiều nhất thế giới.`;

const printHighlight = (content, keyword) => {
  if (typeof content != "string") throw new Error("Not a string");

  const regex = new RegExp(keyword, "gi");
  return content.replaceAll(regex, (match) => `<b>${match}</b>`);
};

document.write(`
  <p>
    <b>printHighlight:</b><br>
    ${printHighlight(jsContent, "javascript")}
  <\p>
`);

console.log(printHighlight(jsContent, "javascript"));

const fixContent = (content) => {
  if (typeof content != "string") throw new Error("Not a string");

  return content
    .replaceAll(/[.!?](?=[A-Z])|[,;:)}\]](?!\s)/g, (match) => match + " ")
    .replaceAll(/(?<!\s)[({\[]/g, (match) => " " + match);
};

document.write(`
  <p>
    <b>fixContent:</b><br>
    ${fixContent(jsContent)}
  <\p>
`);

console.log(fixContent(jsContent));
