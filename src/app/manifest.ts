import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Abo Rent Car — Rental Mobil Bandung Raya",
    short_name: "Abo Rent Car",
    description:
      "Rental mobil di Bandung Raya & Padalarang. Praktis, ramah, dan jelas. Lepas kunci tanpa deposit tunai atau plus supir berpengalaman.",
    start_url: "/",
    display: "standalone",
    background_color: "#02162e",
    theme_color: "#033269",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/abo-rent-car-logo.png",
        sizes: "742x514",
        type: "image/png",
      },
    ],
  };
}
