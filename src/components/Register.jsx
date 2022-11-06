export default function Register() {
  return (
    <div className="bg-black flex opacity-82 w-[100%] h-screen align-middle justify-center">
      <div className="m-auto rounded-lg p-6 bg-white w-[380px] md:w-[450px] h-auto align-middle justify-center">
        <h1 className="text-2xl font-medium ">Signup</h1>
        <form action="">
          <input
            className="mt-5 w-[100%] p-3 border-2  rounded-md"
            type="text"
            placeholder="Full Name"
          />
          <input
            className="mt-5 w-[100%] p-3 border-2  rounded-md"
            type="email"
            placeholder="Email"
          />
          <div className="flex mt-4 justify-center align-middle">
            <input type="checkbox" className="w-[25px] m-auto h-[25px]" />
            <h1 className="text-[13px] mx-4">I agree to Zomato's <span className="text-[#ef4f5f] "> Terms of Service, Privacy Policy </span> and <span className="text-[#ef4f5f] "> Content Policies </span></h1>
          </div>
          <div>
            <button className="mt-5 w-[100%] bg-[#ed1a2f] p-3 text-lg text-white font-semibold rounded-md">
              Create Account
            </button>
          </div>
          <div className="flex justify-center ">
            <hr />
            <h1>or</h1>
          </div>

          <div>
            <button className="mt-5 w-[100%] flex justify-center align-middle p-3 border-2 rounded-md">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAhVJREFUSEvlll9uGjEQxr9xpH0taFOphUolF0jcEzS9ATcIOUHCDeAEkBOEnKC5QcgNvJxgK5VtpYLgORI7kTdEWdb2rqFRoih+Qazt+c0f+xsTXmnQK3Hx9sCLppQ6W/WpUrtkzTvif1/ksUj5BEAbQK0Ai0F8LVbiov5XxT6OVIJ1ZJzygAnHPgYBjERA3XqslmXrS8GzpuwQ88ASYZUPSxHQQRncCV5DL6sItnkmOt2fqtHWEev0psw3jkgjgBUgHmpJqIFZ1/2r/usDfdhmGbPm4ZiYvptT1A8T1bPtmTdkjwlxVaSPew3wrCHbBP5ZNC6Ivu16dWyOGuB543AEkL42T4OpG/5Rw13q7dpjgj8fLUH4kNsQhUmUicVzjg3woiVr6R0vNgF8FSaTjr2uR+znjHk2NsBrddKn2SvN88ZbB+swzSheINUZ2DxccZhEB7Za6tIUvxOjRcwbimcTFb/rBLdwFMHzphyC+Sz/XQRUL+q2AbYeMAA+AuKQWut13FIyuRcmk75dZu2dLBX04+NvNTZKYjOSeZ7yuCAkj0tjYsRMvDZGLSDr1fq3cBP5dn86sfZxd1t0aLafYGSrfomApKsnlz4Esnqv+NoReZkPkSDqlDWV6qfPJ9la7aUje5u0sflKBOL8v54+ebNZ9Ix2vunn5iMQjcUKw2d77LnyqRtKVVRltahM9RaHaaul7w98D4O6+B/PrRVuAAAAAElFTkSuQmCC" />
              <h3 className="mx-4 text-lg">Continue with Google</h3>
            </button>
          </div>
          <h1 className="mt-4">
            Already have an account?{" "}
            
            <span className="text-[#ef4f5f] "> <a href="/">Login</a></span>
          </h1>
        </form>
      </div>
    </div>
  );
}
