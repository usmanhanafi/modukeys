import ButtonPrimary from "@/components/ButtonPrimary";
import CardProduct from "@/components/CardProduct";
import Container from "@/components/layouts/Container";
import Navbar from "@/components/layouts/Navbar";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const dummy_products = require("@/public/json-dummy/product.json");
const category_dummy = require("@/public/json-dummy/category.json");
const banner_home = [
  {
    img: "/images/banner-home-01.webp",
    cta: "/shop",
    title: "Elevate Your Typing Experience with ModuKeys!",
    desc: "Experience the ultimate typing performance with ModuKeys mechanical keyboards. Unleash your creativity with customizable designs, ultra-responsive switches, and superior quality. Don't miss out-upgrade to ModuKeys today!",
    color: "white",
  },
  {
    img: "/images/banner-home-02.webp",
    cta: "/shop",
    title: "Elevate Your Typing Experience with ModuKeys!",
    desc: "Experience the ultimate typing performance with ModuKeys mechanical keyboards. Unleash your creativity with customizable designs, ultra-responsive switches, and superior quality. Don't miss out-upgrade to ModuKeys today!",
    color: "black",
  },
];

export default function Home() {
  var settings = {
    dots: true,
    arrows: false,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Elevate your typing experience with ModuKeys mechanical keyboards. Explore a wide range of high-performance keyboards, customizable designs, and cutting-edge technology. Upgrade your typing game with ModuKeys today."
        />
        <meta
          name="keywords"
          content="ModuKeys, mechanical keyboards, high-performance keyboards, customizable keyboards, typing experience"
        />
      </Head>
      <Navbar />
      <main>
        <section>
          <Slider {...settings}>
            {banner_home.map((item, index) => (
              <ImageBannerSlider
                key={index}
                img={item.img}
                cta={item.cta}
                title={item.title}
                desc={item.desc}
                color={item.color}
              />
            ))}
          </Slider>
        </section>
        <Container>
          <section className="mb-3 mt-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {category_dummy.map((item, index) => (
                <CardCategory
                  key={index}
                  title={item.name}
                  url={item.url}
                  href={`/shop#${item.name}`}
                />
              ))}
            </div>
          </section>
          <section
            className="my-5 text-center bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage: `url("/images/motiur-rahman-shakil-mpU7fYbH2-s-unsplash.webp")`,
            }}
          >
            <div className="backdrop-blur-sm w-full h-full p-4 md:p-24">
              <p className="text-white-700 text-sm md:text-md">Customize</p>
              <h2 className="text-white-900 text-2xl md:text-4xl font-semibold">
                Customize Your Typing Experience
              </h2>
              <p className="text-white-800 text-md md:text-lg mt-2 mb-6">
                Start Personalizing Your Keyboard Today
              </p>
              <Link href="/modukeys-by-you">
                <ButtonPrimary bg="orange-500">Get Started</ButtonPrimary>
              </Link>
            </div>
          </section>
          <section className="my-16">
            <h2 className="text-gray-800 text-center font-bold text-2xl">
              Most Popular
            </h2>
            <p className="text-gray-800 text-center">
              Discover our most popular and top-rated products that customers
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
              {dummy_products.map((item, index) =>
                index >= 4 ? null : (
                  <CardProduct key={index} data={item} index={index} />
                )
              )}
            </div>
            <div className="flex justify-center w-full mt-6">
              <Link href="/shop">
                <ButtonPrimary>Learn More</ButtonPrimary>
              </Link>
            </div>
          </section>
        </Container>
      </main>
    </>
  );
}
const CardCategory = (props) => (
  <Link href={props.href || "#"} className="relative w-full">
    <Image
      src={props.url}
      width={0}
      height={0}
      sizes="100%"
      style={{
        width: "100%",
        height: 100,
        objectFit: "cover",
      }}
      placeholder="blur"
      blurDataURL="data:..."
      alt="image"
    />
    <div className="absolute hover:backdrop-blur-sm bg-black bg-opacity-60 top-0 z-10 w-full h-full flex justify-center items-center p-4">
      <p className="md:font-medium text-sm md:text-xl">
        {props.title || "Title"}
      </p>
    </div>
  </Link>
);
const ImageBannerSlider = (props) => (
  <div className="relative w-full">
    <Image
      src={props.img}
      width={0}
      height={0}
      sizes="100%"
      style={{
        width: "100%",
        height: "100vh",
        objectFit: "cover",
      }}
      quality={80}
      placeholder="blur"
      blurDataURL="data:..."
      alt="image"
    />
    <div className="absolute top-0 w-full h-screen z-10 pt-16">
      <div className=" mx-auto max-w-7xl px-4 sm:px-6 pt-[30vh] lg:pt-40 flex flex-col justify-center items-start">
        <h1
          className={`leading-loose text-3xl md:text-4xl lg:text-5xl font-semibold uppercase sm:max-w-lg lg:max-w-xl text-${
            props.color || "white"
          }`}
          style={{ lineHeight: 1.4 }}
        >
          {props.title}
        </h1>
        <p
          className={`leading-loose text-sm lg:text-lg opacity-80 sm:max-w-lg lg:max-w-xl mt-4 mb-6 text-${
            props.color || "white"
          }`}
        >
          {props.desc}
        </p>
        <Link href={props.cta}>
          <ButtonPrimary>Get Started Now</ButtonPrimary>
        </Link>
      </div>
    </div>
  </div>
);
