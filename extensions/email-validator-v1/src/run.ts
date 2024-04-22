import type {
  RunInput,
  FunctionRunResult,
  FunctionError,
  BuyerIdentity
} from "../generated/api";

export function run(input: RunInput): FunctionRunResult {
  const errors: FunctionError[] = []

  const hasBuyerIdentity: BuyerIdentity | boolean = input.cart.buyerIdentity ?? false

  if(hasBuyerIdentity){
    console.log(hasBuyerIdentity)

    const hasInvalidEmail: boolean = hasBuyerIdentity.email.endsWith("hotmail.com") ?? false

    if(hasInvalidEmail){
      errors.push({
            localizedMessage: "Hotmail emails are not accepted",
            target: "cart",
          }
      )
    }
  }

  return {
    errors
  }
};
