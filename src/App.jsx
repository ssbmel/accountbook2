import Router from "./Router";

// export const getUserInfo = async() => {
//   const accessToken = localStorage.getItem("accessToken");
//   if(accessToken) {
//     try {
//       const response = await axios.get("https://moneyfulpublicpolicy.co.kr/user",
//       {
//         headers : {
//           Authorization : `Bearer ${accessToken}`,
//         },
//       });
//       return response.data;
//     } catch (err) {
//       console.log(error?.response?.data?.message);
//       alert(error?.response?.data?.message);
//     }
//   }
// }

const App = () => {

  return <Router>
  </Router>;
};

export default App;
