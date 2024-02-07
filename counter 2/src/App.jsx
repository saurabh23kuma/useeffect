function App() {
	return (
	  <div style={{border:"2px solid red",margin:"100px"}}>
		<h1  style= {{color:"red",text:"bold"}}>Welcome to Counter 2.0</h1>
		<div>
		  <button className="minusonebtn">-1</button>
		  <button className="plusonebtn">+1</button>
		<div>
		  <button className="resetbtn">Reset count</button>
		</div>
		</div>
		<span className="counter">Count:</span>
		<div>
		  <span className="odd-or-even">This Number is:</span>
		  <br></br>
		  <span className="is-prime">This Number is:</span>
		</div>
	  </div>
	);
  
  }
  
  export default App;
  