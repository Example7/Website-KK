import { Advertisement } from "../../components/Advertisement";
import { CardsOutlet } from "../../components/CardsOutlet/CardsOutlet";
import { CardsOutletDiscount } from "../../components/CardsOutlet/CardsOutletDiscount";
import { HeroComponent } from "../../components/HeroComponent.tsx/HeroComponent";

export function Outlet() {
  return (
    <>
      <HeroComponent
        src="/images/img-outlet-desktop-3.jpg"
        h1Text="DO 50% ZNIŻKI W OUTLET"
        pText=""
        textColor="text-primary"
        showBrowseButton={false}
      />
      <Advertisement />
      <CardsOutlet />
      <CardsOutletDiscount />
    </>
  );
}
