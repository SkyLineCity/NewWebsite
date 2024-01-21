import { RouterProvider } from 'react-router-dom';
import 'react-tabs/style/react-tabs.css';
import 'swiper/css';
import 'swiper/css/autoplay';
import "swiper/css/effect-coverflow";
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './assets/css/style.css';
import ThemeSwitcher from './Components/common/ThemeSwitcher';
import { routes } from './Routes/Routes';

function App() {
  return (
    <div>
      {/* <Loader/> */}
      <ThemeSwitcher/>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
