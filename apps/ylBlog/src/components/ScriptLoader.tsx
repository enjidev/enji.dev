import { useEffect } from 'react';

// 工具函数：设置元素的文本
const setElementText = (id: string, text: string | undefined) => {
  const element = document.getElementById(id);
  if (element) {
    element.textContent = text || '未知';
  }
};

// 工具函数：解析浏览器信息
const getBrowserInfo = (userAgent: string): string => {
  const browserRegex =
    /(Chrome|Firefox|Safari|Edge|Opera|MSIE|Trident)\/([\d.]+)/;
  const match = userAgent.match(browserRegex);
  return match ? `${match[1]} ${match[2]}` : '未知浏览器';
};

function ScriptLoader() {
  useEffect(() => {
    const fetchIpInfo = async () => {
      const fetchUrl = 'https://api.qjqq.cn/api/Local';

      try {
        const res = await fetch(fetchUrl);
        if (!res.ok) {
          throw new Error(`网络请求失败，状态码：${res.status}`);
        }

        const json = await res.json();
        const data = json.data || {};

        // 使用 setElementText 填充页面中的数据
        setElementText('userAgentIp', json.ip);
        setElementText('userAgentCountry', data.country);
        setElementText('userAgentRegion', data.prov);
        setElementText('userAgentCity', data.city);
        setElementText('userAgentIsp', data.isp);

        // 显示简化后的浏览器信息
        const uaInfo = navigator.userAgent;
        const browserInfo = getBrowserInfo(uaInfo);
        setElementText('userAgentOs', navigator.platform);
        setElementText('userAgentBrowser', browserInfo);
      } catch (error) {
        // console.error('获取 IP 信息失败:', error); // 使用 console.error 避免警告
      }
    };

    fetchIpInfo();
  }, []);

  return null; // 组件不需要渲染 UI
}

export default ScriptLoader;
