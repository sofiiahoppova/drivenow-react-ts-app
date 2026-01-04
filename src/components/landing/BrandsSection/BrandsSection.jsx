import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import { SampleNextArrow, SamplePrevArrow } from "./components/SliderArrows";
import { CustomSlide } from "./components/CustomSlide";

import { useDispatch } from "react-redux";
import { setFilter } from "/src/redux/filters/filtersSlice";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import css from "./BrandsSection.module.css";
import "./Slider.css";

const brands = [
  { id: 0, name: "Fiat" },
  { id: 1, name: "Lexus" },
  { id: 2, name: "Volkswagen" },
  { id: 3, name: "Nissan" },
  { id: 4, name: "Mercedes" },
  { id: 5, name: "Lamborghini" },
  { id: 6, name: "Toyota" },
  { id: 7, name: "BMW" },
  { id: 8, name: "Audi" },
];

const BrandsSection = () => {
  const dispatch = useDispatch();

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    speed: 500,
    centerPadding: "24px",
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 4,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    beforeChange: (current, next) => {
      const brand = brands[next].name;
      dispatch(setFilter({ brand: brand }));
    },
  };

  return (
    <section className={css.container}>
      <h2 className={css.title}>Btands We Offer</h2>
      <div className={css.wrapper}>
        <p className={css.description}>
          Select your favorite brand and discover available models.
        </p>
        <div className="slider-container">
          <Slider {...settings}>
            {brands.map((brand) => (
              <CustomSlide brand={brand.name} />
            ))}
          </Slider>
        </div>
        <Link to="/autopark" className={css.button}>
          Find a Car
        </Link>
      </div>
    </section>
  );
};

export default BrandsSection;
