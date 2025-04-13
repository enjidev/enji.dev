import Code from '@/components/mdx/Code';

export default function ApplyFormat() {
  return (
    <>
      <h2 className="mt-12 text-xl font-bold">友链申请格式</h2>
      <div className="mt-4 rounded-lg bg-gray-100 p-5 dark:bg-gray-800">
        <p>如果您希望与我交换友链，请使用以下格式申请：</p>
        <Code language="markdown" lines={6}>
          <span className="text-gray-800 dark:text-gray-100">
            昵称（请勿包含博客等字样）：Yulo Han
            <br />
            网站地址（要求博客地址，请勿提交个人主页）：https://www.yulo.com/
            <br />
            头像图片url（请提供尽可能清晰的图片，我会上传到我自己的图床）：https://cdn.yulo.com/images/yulo.jpg
            <br />
            描述：一名小小的计算机爱好者
            <br />
            类型（生活类或者技术类二选一）：技术类
            <br />
            能看到友情链接的地址：https://www.yulo.com/links
          </span>
        </Code>

        <p className="mt-4">
          发送申请至:{' '}
          <a href="mailto:your-email@example.com">mango7281@163.com</a>{' '}
          或者在下方留言。
        </p>
      </div>
    </>
  );
}
