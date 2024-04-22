import type { GadgetSettings } from "gadget-server";

export const settings: GadgetSettings = {
  type: "gadget/settings/v1",
  frameworkVersion: "v1.0.0",
  plugins: {
    connections: {
      shopify: {
        apiVersion: "2024-01",
        enabledModels: [],
        type: "partner",
        scopes: [
          "write_checkouts",
          "read_checkouts",
          "read_products",
          "write_products",
          "read_cart_transforms",
          "write_cart_transforms",
          "read_validations",
          "write_validations",
        ],
      },
    },
  },
};
