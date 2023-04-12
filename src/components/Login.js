import { useDispatch, useSelector } from "react-redux";
import { auth, provider } from "../utils/firebase";
import { selectUser } from "../features/userSlice";
import HomePage from "./HomePage";

const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  // Google SignIn
  const googleSignIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        alert(error.message);
      })
      .then(() => {});
  };

  return (
    <>
      {!user ? (
        <div
          className="mt-24 sm:w-3/6 md:w-3/6 md:p-5 mx-auto items-center"
          to="/"
        >
          <h1 className="text-center text-gray-600 font-bold">
            Hello there and welcome to our group chat app
          </h1>

          <section className="md:w-4/5 mx-auto mt-5 border-2 sm:p-5 md:p-5 lg:p-6 index-50 bg-white space-y-10 ">
            <span
              onClick={googleSignIn}
              className="flex items-center justify-center mx-auto font-bold w-full text-yellow-600 border-2 border-gray-900 rounded-full cursor-pointer mt-4 py-2"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png"
                className="w-8 h-8"
                alt=""
              />
              <h3 className=" ml-5">Continue with Google </h3>
            </span>
          </section>
        </div>
      ) : (
        <HomePage />
      )}
    </>
  );
};

export default Login;
