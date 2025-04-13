import clsx from 'clsx';
import { useState } from 'react';

import { ChevronRightIcon } from '@/components/Icons';

function Disclaimer() {
  const [isOpen, setIsOpen] = useState(false); // 控制下拉状态

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="my-8">
      <button
        type="button" // Add the type attribute here
        onClick={toggleDropdown}
        className="flex items-center text-blue-600 focus:outline-none"
      >
        <span className="text-blue-600">友情链接免责声明</span>
        <ChevronRightIcon
          className={clsx('h-3 w-3 transition-transform duration-200', {
            'rotate-90': isOpen,
          })}
        />
      </button>

      {isOpen && (
        <div className="mt-4 rounded-lg bg-gray-100 p-5 dark:bg-gray-800">
          <h3 className="font-semibold">免责声明</h3>
          <p className="mt-2">
            本博客遵守中华人民共和国相关法律。本页内容仅作为方便学习而产生的快速链接的链接方式，对与友情链接中存在的链接、好文推荐链接等均为其他网站。我本人能力有限无法逐个甄别每篇文章的每个字，并无法获知是否在收录后原作者是否对链接增加了违反法律甚至其他破坏用户计算机等行为。因为部分友链网站甚至没有做备案、域名并未做实名认证等，所以友链网站均可能存在风险，请你须知。
          </p>
          <p>所以在我力所能及的情况下，我会包括但不限于：</p>
          <ul>
            <li>
              针对收录的博客中的绝大多数内容通过标题来鉴别是否存在有风险的内容
            </li>
            <li>在收录的友链好文推荐中检查是否存在风险内容</li>
          </ul>
          <p>但是你在访问的时候，仍然无法避免，包括但不限于：</p>
          <ul>
            <li>作者更换了超链接的指向，替换成了其他内容</li>
            <li>作者的服务器被恶意攻击、劫持、被注入恶意内容</li>
            <li>作者的域名到期，被不法分子用作他用</li>
            <li>作者修改了文章内容，增加钓鱼网站、广告等无效信息</li>
            <li>不完善的隐私保护对用户的隐私造成了侵害、泄漏</li>
          </ul>
          <p>
            最新文章部分为机器抓取，本站作者未经过任何审核和筛选，本着友链信任原则添加的。如果你发现其中包含违反中华人民共和国法律的内容，请即使联系和举报。该友链会被拉黑。
          </p>
          <p>
            如果因为从本页跳转给你造成了损失，深表歉意，并且建议用户如果发现存在问题在本页面进行回复。通常会很快处理。如果长时间无法得到处理，建议联系mango7281@163.com。
          </p>
        </div>
      )}
    </div>
  );
}

export default Disclaimer;
