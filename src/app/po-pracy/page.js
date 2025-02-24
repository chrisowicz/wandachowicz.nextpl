import { generateMetadata } from "./metadata";
import { ClientAfterWork } from "./client";

export { generateMetadata };

export default function AfterWork() {
  return <ClientAfterWork />;
}