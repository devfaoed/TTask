import "./Home.css";
import characters from '../../../db/Character/Character';

function List(props) {
  return <div className='props'>
      <img src={ props.img } alt='cha_image' className='img'/>
        <div className="wrap"><br/>
        <span><h4>{ props.id }  { props.name }</h4> <span className="nick">{ props.nickname }</span></span> 
          
        </div>
    </div>
  ;
}

function Home() {

  return (
    <>
     <div>
        <h2>BREAKINGBAD SOFTWARE</h2>
    </div>
    
      <ul>
        {characters.map((i) => 
        <List 
        key={i.char_id} 
        id={i.char_id}
        name={i.name}
        birthday={i.birthday}
        occupation={i.occupation}
        img={i.img}
        status={i.status}
        appearance={i.appearance}
        nickname={i.nickname}
        portrayed={i.portrayed}
        better_call_saul_appearance={i.better_call_saul_appearance}

         />)}
      </ul>
    </>
  );
}
export default Home;
