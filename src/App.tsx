import {useState, useEffect} from 'react';
import profileimage from './profpic.jpg';
import postimage from './post.jpg';
import {SkeletonComponent} from '@syncfusion/ej2-react-notifications';
import './App.css';

function App() {
  const [isLoading, load] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{ load(false)}, 3500);
  });
  let content;
  if(isLoading){
    content=(
      <div className='card'>
          <div style={{float:"left", marginRight:15}}>
              <SkeletonComponent width="40" shape='Circle' shimmerEffect='Pulse' cssClass='custom'></SkeletonComponent>
          </div>
          <div style={{marginTop:10, overflow:"hidden"}}>
              <SkeletonComponent width='30%' height='15px' shimmerEffect='Pulse'></SkeletonComponent>
          </div>
          <div style={{margin: "20px 0 30px"}}>
              <SkeletonComponent shape='Rectangle' width='100%' height='250px' shimmerEffect='Pulse'></SkeletonComponent>
          </div>
      </div>
    )
  } else{
    content=(
      <div className='card'>
          <div style={{float:"left", marginRight:15}}>
              <img src={profileimage} height="60" width="60" style={{borderRadius:50}}/>
          </div>
          <div style={{marginTop:10, overflow:"hidden"}}>
              <label id="name" style={{ fontSize: "15px" }}>Laura Callahan</label><br />
          </div>
          <div style={{margin: "20px 0 30px"}}>
              <img src={postimage} height="250" style={{backgroundSize:"cover", width:"100%"}}/>
          </div>
      </div>
    )
  }
  return (
    <div className="App">
      {content}
    </div>
  );
}

export default App;
