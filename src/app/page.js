import AllProductsHome from "@/components/AllProductHome/AllProductHome";
import Banner from "@/components/Banner/Banner";
import BlogHome from "@/components/BlogHome/BlogHome";
import ExploreProducts from "@/components/ExploreProducts/ExploreProducts";
import Gifting from "@/components/Gifting/Gifting";
import JustInSection from "@/components/JustInSection/JustInSection";
import OfferProducts from "@/components/OfferProducts/OfferProducts";
import SkinCareBasic from "@/components/SkinCareBasic/SkinCareBasic";
import Streaming from "@/components/Streaming/Streaming";
import SuperSaves from "@/components/SuperSaves/SuperSaves";
import TopOfTheWeek from "@/components/TopOfTheWeek/TopOfTheWeek";


export const metadata = {
  title: 'BD-Beauty Glamours',
  description: 'BD-Beauty Glamours',
}

export default function Home() {
  return (
    <main className="">
      <Banner></Banner>
      <AllProductsHome></AllProductsHome>
      <OfferProducts></OfferProducts>
      <JustInSection></JustInSection>
      <TopOfTheWeek></TopOfTheWeek>
      <Gifting></Gifting>
      <SuperSaves></SuperSaves>
      <Streaming></Streaming>
      <SkinCareBasic></SkinCareBasic>
      <ExploreProducts></ExploreProducts>
      <BlogHome></BlogHome>
    </main>
  )
}
 