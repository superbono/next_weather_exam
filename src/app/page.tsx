import Link from "next/link";
import style from "./style.module.css";
import { getCurrentWeather } from "@/utils/getCurrentWeather";
import { getTime } from "@/utils/getTime";
import RevalidateButton from "@/components/RevalidateButton";

const MainPage = async () => {
  const res = await getCurrentWeather("Seoul");
  const time = await getTime(res.location.tz_id);

  return (
    <div>
      <h2>오늘의 날씨 - ch</h2>
      <p>{time.dateTime}</p>
      <ul className={style.list}>
        <li>
          <Link href="/detail/Seoul">서울 </Link>
        </li>
        <li>
          <Link href="/detail/London">런던 </Link>
        </li>
        <li>
          <Link href="/detail/Beijing">베이징 </Link>
        </li>
      </ul>
      <button className="btn">테스트</button>
      <RevalidateButton tag={"time"} />
    </div>
  );
};

export default MainPage;
