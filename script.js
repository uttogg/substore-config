
// Script Operator 用于重命名节点，加地区前缀以便 Clash 分组使用

function operator(proxies, targetPlatform, context) {
  return proxies.map(proxy => {
    const name = proxy.name;

    if (name.includes("香港")) {
      proxy.name = "🇭🇰 香港 - " + name;
    } else if (name.includes("新加坡")) {
      proxy.name = "🇸🇬 新加坡 - " + name;
    } else if (name.includes("日本")) {
      proxy.name = "🇯🇵 日本 - " + name;
    } else if (name.includes("美国")) {
      proxy.name = "🇺🇸 美国 - " + name;
    }

    return proxy;
  });
}
