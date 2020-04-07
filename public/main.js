getCss.onclick = () => {
  const re = new XMLHttpRequest();
  re.open("GET", "/style.css");
  re.onreadystatechange = () => {
    // 下载完成，但是不一定成功，成功是2xx，失败是3xx 4xx 5xx
    if (re.readyState === 4) {
      if (re.status >= 200 && re.status < 300) {
        const style = document.createElement("style");
        style.innerHTML = re.response;
        document.head.appendChild(style);
      } else {
        alert("下载css失败");
      }
    }
  };
  //   无效
  //   re.onerror = () => {
  //     console.log("请求css失败");
  //   };
  re.send();
};
getJS.onclick = () => {
  const re = new XMLHttpRequest();
  re.open("GET", "/2.js");
  re.onload = () => {
    const script = document.createElement("script");
    script.innerHTML = re.response;
    document.body.appendChild(script);
  };
  re.onerror = () => {
    console.log("请求失败");
  };
  re.send();
};
getHTML.onclick = () => {
  const re = new XMLHttpRequest();
  re.open("get", "/3.html");
  re.onload = () => {
    const div = document.createElement("div");
    div.innerHTML = re.response;
    document.body.appendChild(div);
  };
  re.onerror = () => {
    console.log("请求html失败");
  };
  re.send();
};
getXML.onclick = () => {
  const re = new XMLHttpRequest();
  re.open("get", "./4.xml");
  re.onreadystatechange = () => {
    if (re.readyState === 4 && re.status >= 200 && re.status < 300) {
      const dom = re.responseXML;
      const text = dom.getElementsByTagName("warning")[0].textContent;
      console.log(text);
    }
  };
  re.send();
};
getJSON.onclick = () => {
  const re = new XMLHttpRequest();
  re.open("get", "../5.json");
  re.onreadystatechange = () => {
    if (re.readyState === 4 && re.status >= 200 && re.status < 300) {
      const object = JSON.parse(re.response);
      myName.textContent = object.name;
    }
  };
  re.send();
};
// 默认第一页
let n = 1;
getPage.onclick = () => {
  const re = new XMLHttpRequest();
  re.open("get", `/page${n + 1}`);
  re.onreadystatechange = () => {
    if (re.readyState === 4 && re.status >= 200 && re.status < 300) {
      const arr = JSON.parse(re.response);
      console.log(arr);
      arr.forEach((element) => {
        const li = document.createElement("li");
        li.textContent = element.id;
        pageData.appendChild(li);
      });
      n += 1;
    }
  };
  re.send();
};
