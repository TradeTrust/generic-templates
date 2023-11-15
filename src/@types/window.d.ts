import { HostActions } from "@tradetrust/decentralized-renderer-react-components";
// for test cafe
declare global {
  interface Window {
    openAttestation: (action: HostActions) => void;
  }
}
