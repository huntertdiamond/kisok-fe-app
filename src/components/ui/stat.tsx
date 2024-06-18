import { Typography, VStack } from "../elements";

function StatContainer({ label, value }: { label: string; value: string }) {
  return (
    <VStack horizontal="leading" vertical="top" gap={1} className="w-auto">
      <Typography variant="body" secondary>
        {label}
      </Typography>
      <Typography variant="h2" className="font-xl">
        {value}
      </Typography>
    </VStack>
  );
}
export { StatContainer };
