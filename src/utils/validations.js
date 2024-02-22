export const nameInputValidation = {
    required: "First name is required",
    maxLength: {
      value: 20,
      message: "You have limit up to 20 symbols in your name",
    },
    minLength: {
      value: 2,
      message: "You should have at least 2 symbols in your name",
    },
    pattern: {
      value: /^[a-z," "]+$/i,
      message: "Name can only consist of letters",
    },
  };
  export const phoneInputValidation = {
    required: "Phone is required",
    pattern: {
      value: /^[+].[0-9]/,
      message: "Phone number must start with + and contain only numbers",
    },
    minLength: {
      value: 11,
      message: "You should have at least 11 symbols in your phone number",
    },
    maxLength: {
      value: 13,
      message: "You have limit up to 13 symbols in your phone number",
    },
  };
  export const emailInputValidation = {
    required: "Email is required",
    pattern: {
      value: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
      message: "Invalid email",
    },
  };
  