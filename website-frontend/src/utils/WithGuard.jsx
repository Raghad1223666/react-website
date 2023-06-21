import { useSelector } from "react-redux";

const WithGuard = (Component) => {
  // this pure js function i cann't use hooks here
  const Wrapper = (props) => {
    //react component // access for component // here i can use hooks
    const { isLoggedIn } = useSelector((state) => state.auth);
    return isLoggedIn ? (
      <Component {...props} />
    ) : (
      <div>Please login first</div>
    );
  };
  return Wrapper;
};

export default WithGuard;
