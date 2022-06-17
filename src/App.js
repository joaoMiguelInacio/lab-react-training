import './App.css';

//Iteration9
//
import ClickablePicture from './components/ClickablePicture'

function App(){
    return (
        <ClickablePicture
        img='https://res.cloudinary.com/dvru7nv6q/image/upload/v1655484910/Random/maxence_ayoa9o.png'
        imgClicked='https://res.cloudinary.com/dvru7nv6q/image/upload/v1655484910/Random/maxence-glasses_iosrty.png'
        />
    )
}

//Iteration8
//
// import LikeButton from './components/LikeButton';
//
// function App (){
//     return (
//         <>
//         <LikeButton />
//         <LikeButton />
//         </>  
//     )
// }


//Iteration7
// import DriverCard from './components/DriverCard';
// 
// function App (){
//     return (
//         <>
//             <DriverCard
//                 name="Travis Kalanick"
//                 rating={4.2}
//                 img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
//                 car={{
//                     model: "Toyota Corolla Altis",
//                     licensePlate: "CO42DE"
//                 }}
//             />
//             <DriverCard
//                 name="Dara Khosrowshahi"
//                 rating={4.9}
//                 img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
//                 car={{
//                     model: "Audi A3",
//                     licensePlate: "BE33ER"
//                 }}
//             />  
//         </>  
//     )
// }


// Iteration6
//
// import Rating from './components/Rating';
//
// function App (){
//     return (
//         <>
//             <Rating>0</Rating>
//             <Rating>1.49</Rating>
//             <Rating>1.5</Rating>
//             <Rating>3</Rating>
//             <Rating>4</Rating>
//             <Rating>5</Rating>    
//         </>  
//     )
// }


//Iteration5
//
// import CreditCard from './components/CreditCard';
//
// function App(){
//   return (
//     <>
//         <CreditCard
//             type="Visa"
//             number="0123456789018845"
//             expirationMonth={3}
//             expirationYear={2021}
//             bank="BNP"
//             owner="Maxence Bouret"
//             bgColor="#11aa99"
//             color="white" 
//         />
//         <CreditCard
//             type="Master Card"
//             number="0123456789010995"
//             expirationMonth={3}
//             expirationYear={2021}
//             bank="N26"
//             owner="Maxence Bouret"
//             bgColor="#eeeeee"
//             color="#222222"
//         /> 
//         <CreditCard
//             type="Visa"
//             number="0123456789016984"
//             expirationMonth={12}
//             expirationYear={2019}
//             bank="Name of the Bank"
//             owner="Firstname Lastname"
//             bgColor="#ddbb55"
//             color="white" 
//         />
//     </>
//   )
// }


//Iteration4
//
// import BoxColor from './components/BoxColor'
//
// function App(){
//   return (
//     <>
//       <BoxColor r={255} g={0} b={0} />
//       <BoxColor r={0} g={71} b={171} />
//       <BoxColor r={128} g={36} b={86} />
//     </>
//   )
// }


// Iteration3
// 
// import Random from './components/Random';
//
// function App() {
//   return (
//     <>
//       <Random min={1} max={6}/>
//       <Random min={1} max={100}/>
//       <Random min={50} max={100}/>
//     </>
//   );
// }


// Iteration2
//
// import Greetings from './components/Greetings';
//
// function App() {
//   return (
//     <>
//     <Greetings lang={"de"}>Ludwig</Greetings>
//     <Greetings lang={"fr"}>Francois</Greetings>
//     <Greetings lang={"es"}>Diego</Greetings>
//     <Greetings lang={"pt"}>Gabriel</Greetings>
//     <Greetings>Mr.Bean</Greetings>
//     </>
//   );
// }


// Iteration1
//
// import it1Data from './data/iteration1.json';
// import IdCard from './components/IdCard';
//
// function App() {
//   return (
//     <div className="cards-container">
//       <IdCard data = {it1Data[0]} birthDate = {new Date (it1Data[0].birth)}/>
//       <IdCard data = {it1Data[1]} birthDate = {new Date (it1Data[0].birth)}/>
//     </div>
//   );
// }

// Props
//
//import data from './data/berlin.json';
//import IdCardProps from './components/IdCardProps';
//
// function App() {
//     return (
//       <div className="cards-container">
//         <IdCardProps data = {data[0]}/>
//         <IdCardProps data = {data[1]}/>
//         <IdCardProps data = {data[2]}/>
//         <IdCardProps data = {data[3]}/>
//         <IdCardProps data = {data[4]}/>
//         <IdCardProps data = {data[5]}/>
//         <IdCardProps data = {data[6]}/>
//         <IdCardProps data = {data[7]}/>
//         <IdCardProps data = {data[8]}/>
//         <IdCardProps data = {data[9]}/>
//         <IdCardProps data = {data[10]}/>
//         <IdCardProps data = {data[11]}/>
//         <IdCardProps data = {data[12]}/>
//         <IdCardProps data = {data[13]}/>
//         <IdCardProps data = {data[14]}/>
//         <IdCardProps data = {data[15]}/>
//         <IdCardProps data = {data[16]}/>
//         <IdCardProps data = {data[17]}/>
//         <IdCardProps data = {data[18]}/>
//         <IdCardProps data = {data[19]}/>
//         <IdCardProps data = {data[20]}/>
//         <IdCardProps data = {data[21]}/>
//         <IdCardProps data = {data[22]}/>
//         <IdCardProps data = {data[23]}/>
//         <IdCardProps data = {data[24]}/>
//         <IdCardProps data = {data[25]}/>
//         <IdCardProps data = {data[26]}/>
//         <IdCardProps data = {data[27]}/>
//       </div>
//     );
// }

export default App;
