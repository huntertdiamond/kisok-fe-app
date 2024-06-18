import { Kiki } from "@/assets/icons";

function EmptyStateKiki({ size = 20 }: { size: number }) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <Kiki height={size.toString()} width={size.toString()} />
    </div>
  );
}
export { EmptyStateKiki };
