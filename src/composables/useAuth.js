export const useAuth = () => {
  const authUser = useState("auth_user", () => ({
    email: "test@ggg.comn",
  }));
  return { authUser };
};
