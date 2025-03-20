export default function GlassContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex p-4  rounded-2xl min-h-[50vh] min-w-[70vw] w-[70vw] h-[50vh] backdrop-filter backdrop-blur-xl bg-slate-200 dark:bg-emerald-900 bg-opacity-40 dark:bg-opacity-40 } ${className}`}
    >
      {children}
    </div>
  );
}
