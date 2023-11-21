import { HostActions } from "@tradetrust-tt/decentralized-renderer-react-components";
// for test cafe
declare global {
  interface Window {
    openAttestation: (action: HostActions) => void;
  }
}
