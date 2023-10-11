import React from 'react'
import Card from '../components/Card';
export const Data = [
  {
    icon: "https://customneon.com/create-neon-sign/images/icondesign.png",
    title: "Customized Neon Signs",
    description:
      "All of our neon light signs are custom designed by us, and can be altered to your specifications, size and colors. We can make any neon sign you want, in any fonts and a wide selection of colors.",
  },
  {
    icon: "https://customneon.com/create-neon-sign/images/iconadapter.png",
    title: "Adapter Included",
    description:
      "Your new LED neon comes with a 4.9 ft transparent cord which plugs into a certified adapter (if you need an adapter for another country, ask when checking out). The adapter has an additional 3-6 ft of cable that plugs into the socket.",
  },
  {
    icon: "https://customneon.com/create-neon-sign/images/iconshipping.png",
    title: "Worldwide Shipping",
    description:
      "Standard orders take 3-5 weeks*, including production and shipping. 'Rush' orders are currently not available, but if your sign is urgent please let us know the date you need it.",
  },
  {
    icon: "https://customneon.com/create-neon-sign/images/iconinstall.png",
    title: "Easy to Install",
    description:
      "Our LED Neon signs are mounted on high quality, clear acrylic backboards, stands or boxes. Backboards feature pre-drilled holes for easy wall mounting, and are ready for mounting, right out of the box.",
  },
  {
    icon: "https://customneon.com/create-neon-sign/images/warranty.jpg",
    title: "2 Year Warranty",
    description:
      "We offer the latest LED neon flex technology which is both stronger & lighter than glass neon. All of our signs come with a two-year manufacturer warranty covering faulty items. Click here for more details",
  },
  {
    icon: "https://customneon.com/create-neon-sign/images/iconremote.png",
    title: "Remote Control Available",
    description:
      "Switch ON/OFF and pick from 10 brightness settings. The LED neon lights can be set to flash with adjustable speeds. (Optional/extra cost on some models)",
  },
  {
    icon: "https://customneon.com/create-neon-sign/images/iconpower.png",
    title: "Low Energy, High Brightness",
    description:
      "Our LED neon signs are both economical and ecologically friendly. They have low energy consumption and a 100,000+ hours lifespan",
  },
  {
    icon: "https://customneon.com/create-neon-sign/images/iconstrong.png",
    title: "Strong And Powerful",
    description:
      "Our LED neons signs come in a range of bright, eye-catching colors. The energy-efficient technology ensures a powerful light that lasts for years.",
  },
];


const CardData = () => {
  return (
    <div className="grid lg:grid-cols-4 grid-cols-1  bg-white gap-5  ">
          {Data.map((item) => {
              return <Card key={ item.title} item={item} />;
          })}
        </div>
  )
}

export default CardData

