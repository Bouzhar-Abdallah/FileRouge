import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "../AdminNews/adminNewsSlice";
import Loading from "../../components/Loading";
import { formatDate } from "../../utilities/functions";
import { filterArticles } from "../AdminNews/adminNewsSlice";

export default function UserNews() {
  const { clubs, isLoading: isLoadingClubs } = useSelector(
    (state) => state.clubs
  );
  const {
    isLoading: isArticlesLoading,
    filteredArticles: articles,
    isLoaded,
  } = useSelector((state) => state.articles);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getArticles());
  }, []);
  const path = "Actualites";

  console.log(articles);
  if (isLoadingClubs || isArticlesLoading) {
    return <Loading />;
  }
  return (
    <div className="">
      <div className="mt-4 h-32 flex bg-gradient-to-r from-lightGray to-gradient2">
        <div className="pt-5 flex justify-between items-center">
          <div className="md:px-10 px-3">
            <h1 className="font-bold text-2xl md:text-3xl text-darkBlue">
              {path}
            </h1>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="w-10">
          {clubs.map((club, index) => (
            <button
              onClick={() => {
                dispatch(filterArticles(club.id));
              }}
              key={index}
              className="flex border p-0.5 m-0.5 justify-center items-center"
            >
              <img className="w-6" src={club.icon_logo_url} alt="" />
            </button>
          ))}
        </div>
        <div className="m-5 flex flex-col gap-1 w-fit">
          {articles.map((article, index) => (
            <div className="grid grid-cols-6" key={index}>
              <div
                style={{
                  backgroundImage: `url(${article.cover_url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
                className={`h-40 col-span-1`}
              ></div>
              <div className=" col-span-5 p-3">
                <div className="flex flex-col ">
                  <h1 className="font-medium text-lg">{article.title}</h1>
                  <h3 className="text-sm font-thin">
                    Editor: {article.author}
                  </h3>
                  <p className="font-light mt-2">{article.content}</p>
                </div>
                <div className="flex mt-auto">
                  {article.clubs.map((club, index) => (
                    <span
                      style={{
                        backgroundColor: club.primary_color,
                        color: club.secondary_color,
                      }}
                      key={index}
                      className={` text-gray-400 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300`}
                    >
                      {club.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
