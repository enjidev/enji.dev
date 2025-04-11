import clsx from "clsx";

interface CardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

// eslint-disable-next-line react/require-default-props
function Card({ title, children, className }: CardProps) {
  return (
    <nav
      className={clsx(
        "border-divider-light rounded-xl border bg-white",
        "dark:border-divider-dark dark:bg-[#161e31]",
        className,
      )}
    >
      <div
        className={clsx(
          "border-divider-light flex items-center justify-between border-b py-3 px-5 text-sm font-bold",
          "dark:border-divider-dark",
        )}
      >
        <h2 className={clsx("text-slate-700", "dark:text-slate-300")}>
          {title}
        </h2>
      </div>
      <div className={clsx("relative p-3 py-4")}>{children}</div>
    </nav>
  );
}

export default Card;
