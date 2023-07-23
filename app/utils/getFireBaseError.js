const getErrorMessage = (errorCode) => {
  switch (errorCode) {
    case "Firebase: Error (auth/invalid-email).":
      return "Invalid email format. \n Please enter a valid email address.";
    case "Firebase: Error (auth/wrong-password).":
      return "Wrong Password";

    case "Firebase: Password should be at least 6 characters (auth/weak-password).":
      return "Password must be at least 8 characters ";

    case "Firebase: Error (auth/email-already-in-use).":
      return "Email already in use .";

    case "Firebase: Error (auth/user-not-found).":
      return "User not found.";
      case "Firebase: Error (auth/missing-email).":
        return "missing email";
    default:
      return "An error occurred. Please try again later.";
  }
};

export default getErrorMessage;
