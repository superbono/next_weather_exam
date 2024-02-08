import HomeButton from "@/components/HomeButton";
import { getForecast } from "@/utils/getForecast";
import Link from "next/link";
import React from "react";

interface Props {
  params: {
    location: string;
  };
}

export function generateMetadata({ params }: Props) {
  const name =
    params.location == "Seoul"
      ? "서울"
      : params.location == "London"
      ? "런던"
      : params.location == "Beijing"
      ? "베이징"
      : "알 수 없습니다.";
  return {
    title: `${name}의 날씨 - 상세`,
    description: `${name}의 날씨를 알려드립니다.`,
  };
}

const DetailPage = async ({ params }: Props) => {
  const res = await getForecast(params.location);
  const name =
    params.location == "Seoul"
      ? "서울"
      : params.location == "London"
      ? "런던"
      : params.location == "Beijing"
      ? "베이징"
      : "알 수 없습니다.";

  return (
    <>
      <h2>{name} 2월 8일 예보</h2>
      <ul>
        {res.forecast.forecastday.map((day) => (
          <li key={day.date}>
            {day.date} / {day.day.avgtemp_c}
          </li>
        ))}
      </ul>
      <HomeButton />
      {/* <Link href="/">홈</Link> */}
    </>
  );
};

export default DetailPage;
