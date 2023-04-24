import React from "react";
import AdminHeader from "../fantazy/AdminHeader";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getArticles } from "../../features/AdminNews/adminNewsSlice";
import { useEffect } from "react";
import Loading from "../Loading";
import { formatDate } from "../../utilities/functions";
import { useState } from "react";
import { filterArticles } from "../../features/AdminNews/adminNewsSlice";
import { setUpdateArticle } from "../../features/AdminNews/adminNewsSlice";
import ArticleModal from "../elements/ArticleModal";


export default function News() {
  const [showModal, setShowModal] = useState(false);
  const { clubs, isLoading } = useSelector((state) => state.clubs);
  const { isLoading: isArticlesLoading, filteredArticles: articles, isLoaded } = useSelector((state) => state.articles);
  const dispatch = useDispatch();
  

    useEffect(() => {
      
        dispatch(getArticles());
        
      
    }, []);
  if (isLoading || isArticlesLoading) {
    return <Loading />;
  }


  return (
    <div>
      <AdminHeader path="News" />
      <ArticleModal showModal={showModal}/>
      <div className="m-5 flex ">
        <div className="">
          {clubs.map((club, index) => (
            <button
              onClick={() => {dispatch(filterArticles(club.id));}}
              key={index}
              className="flex border p-0.5 m-0.5 justify-center items-center"
            >
              <img className="w-6" src={club.icon_logo_url} alt="" />
            </button>
          ))}
        </div>

        <div className="w-full">
          <section className="dark:bg-gray-800 dark:text-gray-100 w-full">
            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12 ">
 
              <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                
                {articles.map((article, index) => (

                <button
                onClick={() => {
                  dispatch(setUpdateArticle(article));
                  setShowModal(true);
                }}
                key={index}
                  className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900"
                >
                  <img
                    role="presentation"
                    className="object-cover w-full rounded h-44 dark:bg-gray-500"
                    src={article.cover_url}
                  />
                  <div className="p-2 space-y-2">
                    <h3 className="text-md font-normal group-hover:underline group-focus:underline">
                      {article.title}
                    </h3>
                    <span className="text-xs dark:text-gray-400">
                      {formatDate(article.created_at)}
                    </span>
                    <p className="hidden">
                      {article.content}
                    </p>
                  </div>
                </button>
                ))}
          
              </div>

            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
