import digicert from "../_images/digicert.svg";
import sectigo from "../_images/sectigo.svg";
import geotrust from "../_images/geotrust.svg";
import thawte from "../_images/thawte.svg";
import rapidssl from "../_images/rapidssl.svg";
import gogetssl from "../_images/gogetssl.svg";

export default function Test() {
  return (
    <div className="flex w-full flex-col items-center bg-card">
      <div className="flex max-w-screen-lg flex-col justify-center gap-2 py-5 lg:flex-row">
        <img
          src={gogetssl.src}
          alt="rapidssl"
          width={150}
          className="w-full max-w-screen-sm lg:w-[150px]"
        />
        <img
          src={digicert.src}
          alt="digicert"
          width={150}
          className="w-full max-w-screen-sm lg:w-[150px]"
        />
        <img
          src={sectigo.src}
          alt="sectigo"
          width={150}
          className="w-full max-w-screen-sm lg:w-[150px]"
        />
        <img
          src={geotrust.src}
          alt="geotrust"
          width={150}
          className="w-full max-w-screen-sm lg:w-[150px]"
        />
        <img
          src={thawte.src}
          alt="thawte"
          width={150}
          className="w-full max-w-screen-sm lg:w-[150px]"
        />
        <img
          src={rapidssl.src}
          alt="rapidssl"
          width={150}
          className="w-full max-w-screen-sm lg:w-[150px]"
        />
      </div>
    </div>
  );
}
