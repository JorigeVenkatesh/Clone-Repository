import logo from './logo.svg';
import './App.css';
import Movie from './components/Movie';

function App() {
  return (
      <div className='continer'>
      <h1>INDIAN CRICKET PLAYERS IPL TEAM'S</h1>
      <Movie pic="./images/vk.png" name="VIRAT KOHLI" role="right-hand batter" team="royal challengers bangalore"/>
      <Movie pic="./images/rs.png" name="ROHITH SARMA" role="captain,right-hand batter" team="mumbai indians"/>
      <Movie pic="./images/sky.png" name="SK YADAV" role="right-hand batter" team="mumbai  indians"/>
      <Movie pic="./images/ik.png" name="ISHAN KISHAN" role="left-hand batter" team="mumbai indians"/>
      <Movie pic="./images/kl.png" name="KL RAHUL" role="right-hand batter" team="lucknow super gaints"/>
      <Movie pic="./images/gill.png" name="S GILL" role="right-hand batter" team="gujarath taitans"/>
      <Movie pic="./images/hp.png" name="HARDIK PANDYA" role="captain,all-rounder" team="gujarath taitans"/>
      <Movie pic="./images/rj.png" name="R JADEJ" role="all-rounder" team="chennai super kings"/>
      <Movie pic="./images/st.png" name="S TAGUR" role="all-rounder" team="chennai super kings"/>
      <Movie pic="./images/jb.png" name="J BUMHRA" role="fast-bowler" team="mumbai indians"/>
      <Movie pic="./images/kuldeep.png" name="KULDEEP YADAAV" role="spin-bowler" team="kolkata knight riders"/>
      <Movie pic="./images/siraj.png" name="SIARJ" role="fast-bowler" team="royal challengers bangalore"/>
      <Movie pic="./images/ms.png" name="M SHAMI" role="fast-bowler" team="gujarath taitans"/>
      <Movie pic="./images/sa.png" name="S IYYER" role="right-hand batter" team="delhi capitals"/>
      <Movie pic="./images/rk.png" name="R ASWIN" role="spin-bowler" team="delhi capitals"/>

      
        
        
       
      </div>

  );
}

export default App;
