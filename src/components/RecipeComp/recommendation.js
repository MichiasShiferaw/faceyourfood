// Map for 4 rows of recommended meal
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {trendingNow } from "../Data/TrendingNow";

export default function Recommended() {
    const {t } = useTranslation(["recipesPage"]);
  return (
    <section className="recommendationsect my-4 my-md-5">
      <h3 className="py-3 mb-0">{t("alsoLike")}</h3>
      <div className="row">
        {trendingNow.slice(0, 8).map((food, index) => (
        <div className="col-lg-3 col-md-4 col-6" key={index}>
          <figure className="my-3 my-md-4 fyf-card" aria-relevant={food.name}>
            <Link
                    to={`/categories/${(food.category).toLowerCase()}/${(food.name)}`} className="animation rounded-top-6">
                    <img
                      src={food.img}
                      className="fyf-animation rounded-6 w-100"
                      alt={food.name}
                    />
                    </Link>
            <figcaption className="mt-2">
              <Link
                    to={`/categories/${(food.category).toLowerCase()}/${(food.name)}`} href="#/" className="text-black d-block mt-1  big text-center">{food.name}</Link>
            </figcaption>
          </figure>
        </div>
        ))}
      </div>
    </section>)};