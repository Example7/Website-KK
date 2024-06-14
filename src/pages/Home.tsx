import { CartSection } from "../components/CartSection";
import { HeroComponent } from "../components/HeroComponent.tsx/HeroComponent";

export function Home() {
  return (
    <>
      <HeroComponent
        src="/images/img-main-desktop.jpg"
        h1Text="Styl, który inspiruje"
        pText="Na co czekasz?"
        textColor="text-white"
      />
      <CartSection />
    </>
  );
}
