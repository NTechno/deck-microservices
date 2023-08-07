import logo from "./logo.svg";
import "./App.css";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

function App() {
	return (
		<div className="App">
			{/* <GoogleOAuthProvider clientId="147737003183-sg690jj13ceul080g3b0eian76cr8bjr.apps.googleusercontent.com">
				<GoogleLogin
					onSuccess={(credentials) => {
						console.log("Credentils::", credentials);
					}}
					onError={(err) => {
						console.log("error in the google login", err);
					}}
          useOneTap
				></GoogleLogin>
			</GoogleOAuthProvider> */}
			<GoogleOAuthProvider clientId="147737003183-6vsu446gtiu1lt9ru4adulaeh2hi1pj9.apps.googleusercontent.com">
				<GoogleLogin
					onSuccess={(credentialResponse) => {
						console.log(credentialResponse);
					}}
					onError={() => {
						console.log("Login Failed");
					}}
				/>
			</GoogleOAuthProvider>
		</div>
	);
}

export default App;
