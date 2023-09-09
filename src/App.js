import { createMedia } from "@artsy/fresnel";
import DesktopMenu from "./components/DesktopMenu";
import MobileMenu from "./components/MobileMenu";
import DesktopContent from "./components/DesktopContent";
import MobileHeading from "./components/MobileHeading";
import MobileContent from "./components/MobileContent";

function App() {
  const { MediaContextProvider, Media } = createMedia({
    // breakpoints values can be either strings or integers
    breakpoints: {
      xs: 0,
      sm: 768,
      md: 768,
      lg: 1024,
      xl: 1192,
    },
  });

  return (
    <MediaContextProvider>
      <Media at="xs">
        {/* Mobile app */}
        <MobileHeading />
        <MobileContent />
        <MobileMenu />
      </Media>
      <Media greaterThan="xs">
        {/* Desktop app, which is already built */}
        <DesktopMenu />
        <DesktopContent />
      </Media>
    </MediaContextProvider>
  );
}

export default App;
