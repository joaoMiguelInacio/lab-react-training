import './App.css';

// Iteration 12
//
import NumbersTable from './components/NumbersTable';
import Number from './components/Number';

function App(){
    const displayNumbers = () => {
        let limit = 12;
        let numbers = [];
        numbers.length = limit;
        for (let i=0; i< numbers.length; i++){
          numbers[i] = i+1;
        }
        return numbers.map((number) => {
          return (
            <Number number = {number}/>
          );
        });
      };
    return (
        <NumbersTable displayNumbers={displayNumbers}/>
    )
}


// Iteration11
//
// import { useState } from 'react';
// import Carousel from './components/Carousel';
//
// function App(){
//     const [urlIndex, changeUrl] = useState(0);
//     const imagesUrl = [
//         'https://images.unsplash.com/photo-1431512284068-4c4002298068?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
//         'https://images.unsplash.com/photo-1596900520965-3112ea0e4eb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
//         'https://images.unsplash.com/photo-1596888478388-f30179f48a72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
//         'https://images.unsplash.com/photo-1635184098438-67f39704abb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80'
//     ];
//     function nextImage () {
//         changeUrl(urlIndex === imagesUrl.length -1 ? 0 : urlIndex +1);
//     }
//     function prevImage () {
//         changeUrl(urlIndex === 0 ? imagesUrl.length - 1 : urlIndex - 1);
//     }
//     return (       
//         <Carousel
//             imageUrl={imagesUrl[urlIndex]}
//             nextImage = {nextImage}
//             prevImage = {prevImage}
//         />
//     )
// }


//Iteration10
//
// import Dice from './components/Dice';
// import { useState } from 'react';
//
// function App(){
//     const [url, changeUrl] = useState("https://res.cloudinary.com/dvru7nv6q/image/upload/v1655499698/Random/dice-empty_fc1fnr.png");
//     function rollDice () {
//         changeUrl("https://res.cloudinary.com/dvru7nv6q/image/upload/v1655499698/Random/dice-empty_fc1fnr.png");
//         setTimeout(() => {
//             switch(Math.floor(Math.random() * 6)) {
//                 case 0:
//                     changeUrl("https://res.cloudinary.com/dvru7nv6q/image/upload/v1655499698/Random/dice-empty_fc1fnr.png");
//                   break;
//                 case 1:
//                     changeUrl("https://res.cloudinary.com/dvru7nv6q/image/upload/v1655499698/Random/dice1_nhdc1m.png");
//                   break;
//                 case 2:
//                     changeUrl("https://res.cloudinary.com/dvru7nv6q/image/upload/v1655499699/Random/dice2_hxed0z.png");
//                 break;
//                 case 3:
//                     changeUrl("https://res.cloudinary.com/dvru7nv6q/image/upload/v1655499699/Random/dice3_j8mbtg.png");
//                 break;
//                 case 4:
//                     changeUrl("https://res.cloudinary.com/dvru7nv6q/image/upload/v1655499699/Random/dice4_oemjni.png");
//                 break;
//                 case 5:
//                     changeUrl("https://res.cloudinary.com/dvru7nv6q/image/upload/v1655499699/Random/dice5_zcd6je.png");
//                 break;
//                 case 6:
//                     changeUrl("https://res.cloudinary.com/dvru7nv6q/image/upload/v1655499699/Random/dice6_g6zizw.png");
//                 break;
//                 default:
//                   console.log("the dice fell off the table, roll again!");
//               }
//         }, 1000);
//     }
//     return (
//         <Dice url={url} rollDice = {rollDice} />
//     )
// }


//Iteration9
//
// import ClickablePicture from './components/ClickablePicture';
//
// function App(){
//     return (
//         <ClickablePicture
//         img='https://res.cloudinary.com/dvru7nv6q/image/upload/v1655484910/Random/maxence_ayoa9o.png'
//         imgClicked='https://res.cloudinary.com/dvru7nv6q/image/upload/v1655484910/Random/maxence-glasses_iosrty.png'
//         />
//     )
// }


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
//
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
// import BoxColor from './components/BoxColor';
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
