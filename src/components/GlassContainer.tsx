export default function GlassContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex p-2 md:p-4  sm:rounded-2xl backdrop-filter backdrop-blur-xl bg-slate-200 dark:bg-emerald-900 bg-opacity-40 dark:bg-opacity-40 } ${className}`}
    >
      {children}
    </div>
  );
}
