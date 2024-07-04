import './App.css';
import Button from "../src/Reusables/Button";
import ImageCard, { ImageCard2 } from "../src/Reusables/ImageCard";
import Navbar from "../src/Reusables/Navbar";
import cardBg from "../src/images/center-2d76a691.png";


const user = {
  name: 'Pinterest',
  imageurl: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png',
  imageSize: 90,
}

const HeroSwipeTexts = [
  { "key": "weeknight dinner idea", "color": "#c28b00" },
  { "key": "home decor idea", "color": "#618c7b" },
  { "key": "new look outfit", "color": "#0076d3" },
  { "key": "green thumb idea", "color": "#407a57" },
]

const saveIdeasImages = [
  { "h": 26, "w": 25, "size": 25, class: "image1", text: "Fern future home vibes", "fontSize": 3.7, "radius": 5 },
  { "h": 15, "w": 14, "size": 14, class: "image2", text: "My Scandinavian bedroom", "fontSize": 1.6, "radius": 3 },
  { "h": 11, "w": 10, "size": 10, class: "image3", text: "The deck of my dreams", "fontSize": 1.4, "radius": 3 },
  { "h": 15, "w": 14, "size": 14, class: "image4", text: "Serve my drinks in style", "fontSize": 1.9, "radius": 3 },
  { "h": 15, "w": 14, "size": 14, class: "image5", text: "Our bathroom upgrade", "fontSize": 2, "radius": 3 },
]


const HeroImageGrider = [
  { "size": "0rem" },
  { "size": "-18rem" },
  { "size": "-28rem" },
  { "size": "-41rem" },
  { "size": "-28rem" },
  { "size": "-18rem" },
  { "size": "0rem" },
]

function saveIdeasChildImages() {
  return(
    <>
    <p>hello</p>
    </>
  )
}

export function Hero() {
  return (

    <div className='hero' style={{
      display: 'flex',
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      paddingTop: "12rem",
    }}>

      <div className='home-title'>Get your next</div>
      <div >
        {HeroSwipeTexts.slice(0, 1).map((value, index) => (
          <div style={{
            color: value.color,
            fontSize: "3.6rem",
            fontWeight: "600"
          }} key={index}>{value.key}</div>
        ))}
      </div>
      <div className="hero-slide-nav" style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "600",
        columnGap: "1rem",
        textAlign: "center",
        padding: "2rem 1rem 1rem 1rem",
      }}>
        <ul>
          {[...Array(4)].map((e, i) => <li key={i} style={{ display: 'inline-block', padding: ".3rem" }}>
            <div className="hero-slide-nav-item" style={{
              backgroundColor: "gray", padding:
                ".3rem", borderRadius: "1rem",

            }}></div>
          </li>)}
        </ul>
      </div>
      <div className="hero-overlay" style={{
        padding: "1rem",
        marginTop: "-11rem",
        position: "relative",
        width: "100vw",
      }}>
        <div className="hero-image-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: "0.5rem",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          height: '43rem',
        }}>
          {
            HeroImageGrider.map((e, i) => <div key={i} style={{
              marginBottom: e.size,
            }}>
              <ImageCard font={1} w={15} h={22} />
            </div>)
          }
          {
            HeroImageGrider.map((e, i) => <div key={i} style={{
              marginBottom: e.size,
            }}>
              <ImageCard font={1} w={15} h={25} overlay={1} />
            </div>)
          }
          <div className="overlay" style={{
            // backgroundColor: "red",
            padding: "1rem",
            position: "absolute",
            width: "100%",
            height: "100%",
            overflow: "hidden",
            // left: "0",
            // right: "0",
            bottom: "0",
            backgroundImage: "linear-gradient(to bottom, rgba(255,0,0,0), rgba(255,255,255,1) 90%)",
          }}>
          </div>
        </div>

      </div>
      {/* <ImageCard font={1} w={10} h={10} overlay={1} /> */}
    </div>
  )
}

const ideaImagesRadius = 3;

export function SearchIdea() {
  return (
    <div className='save-idea'>
      <div className="section-title">
        Here's how it works
      </div>
      <div className="grid-parent">
        <div className="left-image-grid-container">
          {/* <div className="search-bar-container">
            <input type="text" placeholder='easy chicken dinner' />
          </div> */}
          <div className="image-grid-layer1">
            <div className="grid-image">
              <ImageCard w={9} h={14} radius={ideaImagesRadius} />
            </div>
            <div className="grid-image">
              <ImageCard w={9} h={15} radius={ideaImagesRadius} />
            </div>
            <div className="image-grid-layer2">
              <div className="grid-image">
                <ImageCard w={15} h={18} radius={ideaImagesRadius} />
              </div>
              <div className="image-grid-layer3">
                <div className="grid-image">
                  <ImageCard w={19} h={28} radius={ideaImagesRadius} />
                </div>
                <div className="image-text">
                  <p>easy chicken dinner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="left-text-grid-container">
          <h2 className='primary-text'>Search for an idea</h2>
          <p className='secondary-text'>What do you want to try next? Think of something you’re
            into—like “easy chicken dinner”—and see what you find.</p>
          <div className="button-container">
            <Button text={'Explore'} font={2} />
          </div>
        </div>
      </div>
    </div>
  )
}

export function SaveIdea() {
  return (
    <div>
      <div className="SaveIdea-section-container">
        <div className="section-grid">
          <div className="section-text-grid">
            <h1>Save ideas you like</h1>
            <p>Collect your favorites so you can get back to them</p>
          </div>
          <div className="section-image-grid">
            <div className="section-image-grid-container">
              {
                saveIdeasImages.map((data, index) => (
                  <div key={data} className={`grid-item ${data.class}`}>
                    {/* {index} */}
                    <ImageCard2 w={data.w} h={data.h} radius={data.radius} overlay={1} text={data.text} fs={data.fontSize} childImage={index===0?true:false} />
                  </div>))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className='Home-parent-container'>
      <Navbar />
      <Hero />
      <SearchIdea />
      <SaveIdea />
    </div>
  );
}

export default App;
