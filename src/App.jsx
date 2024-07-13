import { useEffect, useState } from "react";
import LeftBox from "./components/LeftBox";
import MainBox from "./components/MainBox";
import RightBox from "./components/RightBox";

export default function App() {

  const [categories, setCategories] = useState([])
  const [news, setNews] = useState([])

  const fetchCategoryList = async () => {
    const api = await fetch('https://all-api.bitcode.az/api/news/category')
    const res = await api.json();
    setCategories(res);
  }

  const NewsApi = async () => {
    const api = await fetch('https://all-api.bitcode.az/api/news')
    const res = await api.json();
    setNews(res.data);
  }


  useEffect(() => {
    fetchCategoryList();
  }, [])

  useEffect(() => {
    NewsApi();
  }, [])

  return(
    <div className="font-rob flex gap-x-[45px] items-start bg-[rgba(244,249,248,1)]">
      <LeftBox
        categories = {categories}
      />
      <MainBox
        news={news}
      />
      <RightBox/>
    </div>
  )
}