import { UserContext, TokenContext } from "../context";
import { useContext } from "react";

function useUserToken() {
  const user = useContext(UserContext)
  const token = useContext(TokenContext)
  return { user, token }
}

export default useUserToken