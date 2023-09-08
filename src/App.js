import './App.css';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';


function App() {
  return (
    <ParallaxProvider>
        <div className="App">
          <h1>Parallex effect on scroll</h1>

          <div className="content">
            <div className="text-section section">
              <p className="small-title">Visually improve your website by adding a parallax effect</p>
              <p>Praesent bibendum pretium lacus eget pharetra. Vivamus pulvinar 
                facilisis ipsum, quis ultrices metus aliquam a. Sed non justo 
                lacus. Praesent et mauris elementum, tempor arcu sed, euismod 
                lectus. Nunc tincidunt efficitur mauris, vitae placerat ligula 
                vestibulum quis. Nulla ex lacus, mollis condimentum ultrices vel, 
                volutpat id massa. Nullam consequat, nulla vitae euismod mattis, 
                ipsum ex sollicitudin lacus, tempus rhoncus tellus odio in urna. 
                Fusce interdum lobortis ultrices.</p>
            </div>

            <Parallax translateX={['500px', '-100px']}>
              <div className="image-section section">
                <img src="/vintage.png" alt="parallax"/>
              </div>
            </Parallax>
          </div>

          <div className="content">
            <Parallax translateX={['-100px', '500px']}>
              <div className="image-section section">
                <img src="/vintage.png" alt="parallax"/>
              </div>
            </Parallax>
            <div className="text-section section">
              <p className="small-title">Visually improve your website by adding a parallax effect</p>
              <p>Praesent bibendum pretium lacus eget pharetra. Vivamus pulvinar 
                facilisis ipsum, quis ultrices metus aliquam a. Sed non justo 
                lacus. Praesent et mauris elementum, tempor arcu sed, euismod 
                lectus. Nunc tincidunt efficitur mauris, vitae placerat ligula 
                vestibulum quis. Nulla ex lacus, mollis condimentum ultrices vel, 
                volutpat id massa. Nullam consequat, nulla vitae euismod mattis, 
                ipsum ex sollicitudin lacus, tempus rhoncus tellus odio in urna. 
                Fusce interdum lobortis ultrices.</p>
            </div>
          </div>

          <div className="content">
            <div className="text-section section">
              <p className="small-title">Visually improve your website by adding a parallax effect</p>
              <p>Praesent bibendum pretium lacus eget pharetra. Vivamus pulvinar 
                facilisis ipsum, quis ultrices metus aliquam a. Sed non justo 
                lacus. Praesent et mauris elementum, tempor arcu sed, euismod 
                lectus. Nunc tincidunt efficitur mauris, vitae placerat ligula 
                vestibulum quis. Nulla ex lacus, mollis condimentum ultrices vel, 
                volutpat id massa. Nullam consequat, nulla vitae euismod mattis, 
                ipsum ex sollicitudin lacus, tempus rhoncus tellus odio in urna. 
                Fusce interdum lobortis ultrices.</p>
            </div>

            <Parallax translateX={['500px', '-100px']}>
              <div className="image-section section">
                <img src="/vintage.png" alt="parallax"/>
              </div>
            </Parallax>
          </div>

          <div className="content">
            <Parallax translateX={['-100px', '500px']}>
              <div className="image-section section">
                <img src="/vintage.png" alt="parallax"/>
              </div>
            </Parallax>
            <div className="text-section section">
              <p className="small-title">Visually improve your website by adding a parallax effect</p>
              <p>Praesent bibendum pretium lacus eget pharetra. Vivamus pulvinar 
                facilisis ipsum, quis ultrices metus aliquam a. Sed non justo 
                lacus. Praesent et mauris elementum, tempor arcu sed, euismod 
                lectus. Nunc tincidunt efficitur mauris, vitae placerat ligula 
                vestibulum quis. Nulla ex lacus, mollis condimentum ultrices vel, 
                volutpat id massa. Nullam consequat, nulla vitae euismod mattis, 
                ipsum ex sollicitudin lacus, tempus rhoncus tellus odio in urna. 
                Fusce interdum lobortis ultrices.</p>
            </div>
          </div>

        </div>
    </ParallaxProvider>
      
  );
}

export default App;
