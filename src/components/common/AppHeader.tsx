import { Separator } from "@/components/ui";
import { NavLink, useNavigate } from "react-router";

const AppHeader = () => {
  const navigate = useNavigate();
  return (
    <header className="fixed top-0 z-10 w-full flex item-center justify-center bg-[#121212]">
      <div className="w-full max-w-[1328px] flex items-center justify-between px-6 py-3">
        {/*로고 & 네비게이션 메뉴 UI*/}
        <div className="flex items-center gap-5">
          <img
            src="https://avatars.githubusercontent.com/u/81903004?s=400&u=c7fad6726c7d6b1d590b48b4647de74e9f7a136a&v=4"
            alt="@LOGO"
            className="w-6 h-6 cursor-pointer"
            onClick={() => navigate("/")}
          />
          <div className="flex items-center gap-5">
            <div className="font-semibold">토픽 인사이트</div>
            <Separator orientation="vertical" className="!h-4" />
            <div className="font-semibold">포트폴리오</div>
          </div>
        </div>
        {/*로그인 UI*/}
        <NavLink to={"/sign-in"}>로그인</NavLink>
      </div>
    </header>
  );
};

export { AppHeader };
