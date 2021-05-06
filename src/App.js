import './styles/app.css';

function App() {
  return (
    <div className='background'>
        <div className='textbox'>
          <h1 className='myname'>Michael He</h1>
        </div>
        <div className='textbox'>
          <h2 className='mydesc'>Zealous, detail-oriented Software Engineer with a Graphic Design background and eye for design.</h2>
        </div>

        <div style={{ height: 2000, width: "100%", backgroundColor: "#1c1c1c", position:"absolute", top:600, border:'5px solid white' }}></div>
    </div>
  )
}

export default App;
