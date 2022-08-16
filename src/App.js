
import './App.css';
import Maxence from './assets/images/maxence.png';
import MaxenceGlasses from './assets/images/maxence-glasses.png';
import Greetings from './components/Greetings';
import IdCard from './components/Idcard'
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard'
import Rating from './components/Rating'
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture'
import Dice from './components/Dice'
import Carousel from './components/Carousel';
import NumbersTable from './components/NumbersTable';
import FaceBook from './components/FaceBook';
import SignupPage from './components/SignupPage';
import ChooseColor from './components/ChooseColor';

function App() {  
  return (
    <div className='container'>
      <IdCard
        lastName={'Doe'}
        firstName={'John'}
        gender={'male'}
        height={178}
        birth={new Date("1992-07-14")}
        picture={"https://randomuser.me/api/portraits/men/44.jpg"}
      />
      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      
      <Greetings lang='es'></Greetings>
      <Random min={1} max={6}/>
      <Random min={1} max={100}/>
      <BoxColor r={255} g={125} b={12} />
      <BoxColor r={128} g={20} b={25} />
      <CreditCard
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white" 
      />          
      <CreditCard
        type="Master Card"
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Francisco Erlujio"
        bgColor="#eeeeee"
        color="#222222"
      />          
      <CreditCard
        type="Visa"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="CaixaBank"
        owner="Alfredo Hernández"
        bgColor="#ddbb55"
        color="white" 
      />
      <Rating children={5}></Rating>
      <DriverCard
        name="Travis Kalanick"
        rating={2.8}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: "Toyota Corolla Altis",
          licensePlate: "CO42DE"
        }}
      />
      <DriverCard
        name="Dara Khosrowshahi"
        rating={1.6}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: "Audi A3",
          licensePlate: "BE33ER"
        }}
      />
      <LikeButton />
      <ClickablePicture
        img={Maxence}
        imgClicked={MaxenceGlasses}
      />
      <Dice />
      <Carousel
        images={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg'
        ]}
      />
      <NumbersTable limit={12}/>
      <FaceBook/>
      <SignupPage/>
      <ChooseColor/> 
    </div>
   );
}
export default App;
