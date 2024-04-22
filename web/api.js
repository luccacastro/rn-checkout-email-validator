import { Client } from "@gadget-client/rn-checkout-email-validator";

export const api = new Client({ environment: window.gadgetConfig.environment });