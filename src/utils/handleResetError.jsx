const handleResetErrors = (err) => {
    switch (err.code){
      case "auth/invalid-email":
        return "Provided email address is not valid."
      case "auth/user-disabled":
        return "This account has been disbaled.";
      case "auth/operation-not-allowed":
        return "Sorry, not accepting any more signups using this method."
     default:
        return "If the email exists, expect a reset link soon."
    }
  } 
  
  export default handleResetErrors;