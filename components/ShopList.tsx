export default function ShopList({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="
        w-full
        grid
        grid-cols-1          /* mobile: 1 column */
        sm:grid-cols-2       /* small screens */
        lg:grid-cols-3       /* tablets / small laptops */
        xl:grid-cols-4       /* desktop */
        gap-6
        gap-y-8
      "
    >
      {children}
    </div>
  );
}