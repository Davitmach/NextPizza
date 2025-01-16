"use client";
import { IButton } from "@/types/UI/button/button";
import { ButtonSizes } from "@/types/UI/button/buttonSizes";
import { ButtonVariants } from "@/types/UI/button/buttonVariants";
import { useRouter } from "next/navigation";
import { FiShoppingCart } from "react-icons/fi";
import { LuUser } from "react-icons/lu";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";
import { cartService } from "@/service/cartService";
import Cookie from "js-cookie";
import { useQuery } from "@tanstack/react-query";
import { useNotification } from "@/context/notification";
import { Loading } from "@/components/shared/loading/loading";
import { useEffect, useState } from "react";
import { useSession, signIn } from "next-auth/react";
import { userService } from "@/service/userService";
import { useQueryClient } from "@tanstack/react-query";
const ButtonConfig: Record<ButtonVariants, any> = {
  cart: {
    icon: {
      empty: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.33333 16.3332C7.06971 16.3332 7.66667 15.7362 7.66667 14.9998C7.66667 14.2635 7.06971 13.6665 6.33333 13.6665C5.59695 13.6665 5 14.2635 5 14.9998C5 15.7362 5.59695 16.3332 6.33333 16.3332Z"
            stroke="#FE5F00"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.3333 16.3332C15.0697 16.3332 15.6667 15.7362 15.6667 14.9998C15.6667 14.2635 15.0697 13.6665 14.3333 13.6665C13.597 13.6665 13 14.2635 13 14.9998C13 15.7362 13.597 16.3332 14.3333 16.3332Z"
            stroke="#FE5F00"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.77984 4.99984H16.3332L15.2132 10.5932C15.1522 10.9001 14.9852 11.1758 14.7415 11.372C14.4977 11.5683 14.1927 11.6725 13.8798 11.6665H6.83317C6.50763 11.6693 6.19232 11.5528 5.94671 11.3391C5.70109 11.1255 5.54215 10.8293 5.49984 10.5065L4.4865 2.8265C4.44448 2.50599 4.28745 2.21167 4.04464 1.99828C3.80182 1.7849 3.48976 1.66699 3.1665 1.6665H1.6665"
            stroke="#FE5F00"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      notEmpty: <FiShoppingCart />,
    },
    type: {
      empty: {
        default:
          "border border-orange text-orange flex items-center justify-center  text-[22px] text-red-500  rounded-[15px] h-[50px] w-[50px] text-white font-[700] duration-[.4s] ",
        full: "border border-orange text-orange flex items-center justify-center text-[22px] text-red-500  rounded-[15px] h-[50px] w-[100%] text-white font-[700] duration-[.4s] ",
        large:
          "border border-orange text-orange flex items-center justify-center text-[28px] text-red-500 rounded-[15px] h-[60px] w-[60px] text-white font-[700] duration-[.4s] ",
      },
      notEmpty: {
        default:
          "bg-orange rounded-[15px] h-[50px] px-[15px] text-white font-[700]",
        full: "bg-orange rounded-[15px] h-[50px] w-[100%] text-white font-[700]",
        large:
          "bg-orange rounded-[15px] h-[50px] px-[20px] text-white font-[700]",
      },
    },
  },
  collet: {
    default:
      "flex justify-center items-center gap-[4px] bg-orange-addBtnBg   rounded-[15px] h-[50px] px-[15px] text-orange font-[600] duration-[.4s] ",
    full: " flex items-center justify-center gap-[4px] bg-orange-addBtnBg  rounded-[15px] h-[50px] w-[100%] text-orange font-[600] duration-[.4s] ",
    large:
      " flex items-center justify-center gap-[4px] bg-orange-addBtnBg rounded-[15px] h-[50px] px-[20px] text-orange font-[600] duration-[.4s] ",
  },
  user: {
    icon: <LuUser style={{ fontSize: "20px" }} />,
    style: {
      default:
        "flex justify-center items-center gap-[4px] border border-orange  rounded-[15px] h-[50px] px-[15px] text-orange font-[700] duration-[.4s] hover:text-white hover:bg-orange",
      full: " flex items-center justify-center gap-[4px] border border-orange rounded-[15px] h-[50px] w-[100%] text-orange font-[700] duration-[.4s] hover:text-white hover:bg-orange",
      large:
        " flex items-center justify-center gap-[4px] border border-orange rounded-[15px] h-[50px] px-[20px] text-orange font-[700] duration-[.4s] hover:text-white hover:bg-orange",
    },
  },
  orange: {
    default:
      "bg-orange rounded-[15px] h-[50px] px-[15px] text-white font-[700]",
    full: "bg-orange rounded-[15px] h-[50px] w-[100%] text-white font-[700]",
    large: "bg-orange rounded-[15px] h-[50px] px-[20px] text-white font-[700]",
  },
  add: {
    default:
      "flex justify-center items-center gap-[4px] bg-orange-addBtnBg   rounded-[15px] h-[50px] px-[15px] text-orange font-[600] duration-[.4s] ",
    full: " flex items-center justify-center gap-[4px] bg-orange-addBtnBg  rounded-[15px] h-[50px] w-[100%] text-orange font-[600] duration-[.4s] ",
    large:
      " flex items-center justify-center gap-[4px] bg-orange-addBtnBg rounded-[15px] h-[50px] px-[20px] text-orange font-[600] duration-[.4s] ",
  },
  gray: {
    default:
      "bg-[#CECECE] rounded-[15px] h-[55px] px-[15px] text-white font-[700]",
    full: "bg-[#CECECE] rounded-[15px] h-[55px] w-[100%] text-white font-[700]",
    large:
      "bg-[#CECECE] rounded-[15px] h-[55px] px-[20px] text-white font-[700]",
  },
  back: {
    icon: <FaArrowLeftLong />,
    style: {
      default:
        " flex items-center gap-[5px] bg-orange rounded-[15px] h-[50px] px-[15px] text-white font-[700]",
      full: " flex items-center gap-[5px] bg-orange rounded-[15px] h-[50px] w-[100%] text-white font-[700]",
      large:
        " flex items-center gap-[5px] bg-orange rounded-[15px] h-[50px] px-[20px] text-white font-[700]",
    },
  },
  pay: {
    icon: <FaArrowRight />,
    style: {
      default:
        "flex justify-center items-center bg-orange rounded-[18px] h-[55px] px-[15px] text-white font-[700]",
      full: " flex justify-center items-center bg-orange rounded-[18px] h-[55px] w-[100%] text-white font-[700]",
      large:
        " flex justify-center items-center bg-orange rounded-[18px] h-[55px] px-[20px] text-white font-[700]",
    },
  },
  grayTransparent: {
    default:
      "flex justify-center items-center gap-[4px] border border-[#C7C7C7]  rounded-[15px] h-[50px] px-[15px] text-[#898989] font-[700] duration-[.4s] hover:text-white hover:bg-[#898989]",
    full: " flex items-center justify-center gap-[4px] border border-[#C7C7C7] rounded-[15px] h-[50px] w-[100%] text-[#898989] font-[700] duration-[.4s] hover:text-white hover:bg-[#898989]",
    large:
      " flex items-center justify-center gap-[4px] border border-[#C7C7C7] rounded-[15px] h-[50px] px-[20px] text-[#898989] font-[700] duration-[.4s] hover:text-white hover:bg-[#898989]",
  },
  orangeGoHome: {
    default:
      "flex justify-center items-center gap-[4px] border border-orange  rounded-[15px] h-[50px] px-[15px] text-orange font-[700] duration-[.4s] ",
    full: " flex items-center justify-center gap-[4px] border border-orange rounded-[15px] h-[50px] w-[100%] text-orange font-[700] duration-[.4s] ",
    large:
      " flex items-center justify-center gap-[4px] border border-orange rounded-[15px] h-[50px] px-[20px] text-orange font-[700] duration-[.4s] ",
  },
  orangeBorder: {
    default:
      "flex justify-center items-center gap-[4px] border border-orange  rounded-[10px]  h-[30px] px-[20px] py-[10px]  text-orange font-[700] duration-[.4s]  ",
    full: " flex items-center justify-center gap-[4px] border border-orange rounded-[15px] h-[50px] w-[100%] text-orange font-[700] duration-[.4s]  ",
    large:
      " flex items-center justify-center gap-[4px] border border-orange rounded-[15px] h-[50px] w-[38px]  text-orange font-[700] duration-[.4s]  ",
  },
};

export const Button: React.FC<IButton> = (props) => {
  const query = useQueryClient();
  const [log, setLog] = useState<boolean>(false);
  const { push, back,refresh } = useRouter();
  const { showNotification } = useNotification();
  const Variant = props.variant; // вариант кнопки
  const Func = props.func; // фукнция кнопки
  const Link = props.link; // ссылка кнопки
  const Status = props.status; // статус ссылки
  const Text = props.children; // текст кнопки
  const Size = props.size; // размер кнопки
  const ClassName = props.className // стили кнопки
  switch (Variant) {
    case "orange":
      return (
        <button
          className={`${ButtonConfig[Variant][Size]} ${
            Status == true && "cursor-not-allowed"
          }`}
          onClick={() => {
            Func && Func();
            Link && push(Link);
          }}
        >
          {Text}
        </button>
      );
    case "cart":
      
      const {data:CheckData,error:CheckError,isLoading:CheckLoading}=useQuery({
        queryKey:['checkLogged'],
        queryFn:()=> userService.CheckLogged(),
        staleTime:Infinity,
        refetchOnWindowFocus: true,
      })
      
      const isUserLogged = log && !!CheckData;
      const {
        data: TotalData,
        error: TotalError,
        isLoading: TotalLoading,
      } = useQuery({
        queryKey: ["cartBtnTotal"],
        queryFn: () => cartService.getTotal(),
        enabled: isUserLogged,
        staleTime:Infinity,
        refetchOnWindowFocus: true,
        
      });
      const {
        data: CountData,
        error: CountError,
        isLoading: CountLoading,
      } = useQuery({
        queryKey: ["cartBtnCount"],
        queryFn: () => cartService.getCartItem(),
        enabled: isUserLogged,
        staleTime:Infinity,
        refetchOnWindowFocus: true,
      });

      useEffect(() => {        
     if(CheckData&& CheckData.status == true) {
    setLog(true)
     }
     if(CheckData && CheckData.status == false) {

 query.cancelQueries<any>(['cartBtnTotal','cartBtnCount'])

      setLog(false) 
     }
      }, [CheckData]);



      if (CountError || TotalError) {
        showNotification("Ошибка при получений данных", "error");
      }

      if (!log) {
        return (
          <button
            onClick={() => showNotification("Вы не вошли в аккаунт", "error")}
            className={`${
              ButtonConfig.cart.type.empty[Size]
            } group flex items-center justify-center gap-3 ${
              Status == true && "cursor-not-allowed"
            }`}
          >
            {ButtonConfig.cart.icon.empty}
          </button>
        );
      }

      if (!TotalData && !CountData) {
        return (
          <button
            onClick={() => {
              push("/cartBar");
            }}
            className={`${
              ButtonConfig.cart.type.empty[Size]
            } group flex items-center justify-center gap-3 ${
              Status == true && "cursor-not-allowed"
            }`}
          >
            <Loading type="orange" borderWidth={4} width={30} />
          </button>
        );
      }

      if (Array.isArray(CountData) && CountData.length > 0) {
        return (
          <button
            onClick={() => {
              push("/cartBar");
            }}
            className={`${
              ButtonConfig.cart.type.notEmpty[Size]
            } group flex items-center justify-center gap-3 ${
              Status == true && "cursor-not-allowed"
            }`}
          >
            <div>{TotalData?.full?.toFixed(2)} ₽</div>
            <span className=" h-[25px] bg-white w-[1px]"></span>
            <div className="Right_side flex relative">
              <div className="Counter flex items-center gap-2 group-hover:opacity-0 duration-150">
                <h1 className="text-[18px]">
                  {ButtonConfig.cart.icon.notEmpty}{" "}
                </h1>
                <h2>{CountData?.length}</h2>
              </div>
              <div className="Arrow absolute top-[5%] left-0 opacity-0 duration-100 group-hover:opacity-100 group-hover:left-3 text-[20px] ">
                <FaArrowRight />
              </div>
            </div>
          </button>
        );
      } else {
        return (
          <button
            onClick={() => {
              push("/cartBar");
            }}
            className={`${
              ButtonConfig.cart.type.empty[Size]
            } group flex items-center justify-center gap-3 ${
              Status == true && "cursor-not-allowed"
            }`}
          >
            {ButtonConfig.cart.icon.empty}
          </button>);}  
    case "user":
      const [logged, setLogged] = useState<boolean | null>(null);
     const  { data,isLoading ,refetch} = useQuery({
        queryKey: ["checkLogin"],
        queryFn: () => userService.CheckLogged(),
        staleTime:Infinity,
        refetchOnWindowFocus: false,
      });

     
      useEffect(() => {

        
        if (data === undefined && !isLoading) {
          refetch();
        }
        if (isLoading === false) {
          setLogged(data?.status); 
        }

      
      }, [data, isLoading, refetch]);

      const { status, data: SessionData } = useSession();

      useEffect(() => {
        if (logged == true) {
          cartService.checkCart().then((e) => {
            if (e.message) {
            } else {
              cartService.createCart();
            }
          });
        }
      }, [logged]);

      useEffect(() => {
        if (status == "authenticated") {
          userService.CheckLogged().then(async (e) => {
            if (e.status == false) {
              const Name = SessionData.user?.name;
              const Email = SessionData.user?.email;
              if (Name && Email) {
                userService.LoginProvider(Name, Email, query);
              }
            }
          });
        }
      }, [status]);
      return (
        <button
          onClick={() => {
           userService.SignIn()
          }}
          className={`${ButtonConfig[Variant].style[Size]} ${
            Status == true && "cursor-not-allowed"
          }`}
        >
          {ButtonConfig[Variant].icon}

          {logged == null ? (
            <Loading type="orange" borderWidth={4} width={20} />
          ) : logged == true ? (
            "Профиль"
          ) : (
            "Войти"
          )}
        </button>
      );
    case "back":
      return (
        <button
          onClick={() => {
            Func ? Func() : back();
            Link && push(Link);
          }}
          className={`${ButtonConfig[Variant].style[Size]} ${
            Status == true && "cursor-not-allowed"
          }`}
        >
          {ButtonConfig[Variant].icon}Вернуться назад
        </button>
      );
    case "pay":
      return (
        <button
          onClick={() => {
            Func && Func();
            Link && push(Link);
          }}
          className={`flex items-center gap-8 ${ButtonConfig[Variant].style[Size]}    Status == true && "cursor-not-allowed"`}
        >
          <h1>Оформить заказ</h1>
          {ButtonConfig[Variant].icon}
        </button>
      );
    case "gray":
      return (
        <button
          onClick={() => {
            Func && Func();
            Link && push(Link);
          }}
          className={`${ButtonConfig[Variant][Size]} ${
            Status == true && "cursor-not-allowed"
          }`}
        >
          {Text}
        </button>
      );
    case "grayTransparent":
      return (
        <button
          onClick={() => {
            Func && Func();
            Link && push(Link);
          }}
          className={`${ButtonConfig[Variant][Size]} ${
            Status == true && "cursor-not-allowed"
          }`}
        >
          {Text}
        </button>
      );
    case "orangeGoHome":
      return (
        <button
          onClick={() => {
            if (Func) {
              Func();
            } else {
              push("/");
            }
          }}
          className={`${ButtonConfig[Variant][Size]} ${
            Status == true && "cursor-not-allowed"
          }`}
        >
          {<FaArrowLeft />}На главную
        </button>
      );
    case "orangeBorder":
      return (
        <button
          onClick={() => {
            if (Func) {
              Func();
              Link && push(Link);
            } else {
              push("/");
              Link && push(Link);
            }
          }}
          className={` ${ClassName} ${ButtonConfig[Variant][Size]} ${
            Status == true && "cursor-not-allowed"
          }`}
        >
          {Text}
        </button>
      );
    case "add":
      return (
        <button
          onClick={() => {
            if (Func) {
              Func();
            } else {
              push("/");
            }
          }}
          className={`${ButtonConfig[Variant][Size]} ${
            Status == true && "cursor-not-allowed"
          }`}
        >
          <svg
            width="13"
            height="12"
            viewBox="0 0 13 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.0536 5.25H7.23214V0.75C7.23214 0.551088 7.14748 0.360322 6.99678 0.21967C6.84608 0.0790178 6.64169 0 6.42857 0C6.21545 0 6.01106 0.0790178 5.86036 0.21967C5.70966 0.360322 5.625 0.551088 5.625 0.75V5.25H0.803571C0.590451 5.25 0.38606 5.32902 0.235361 5.46967C0.0846619 5.61032 0 5.80109 0 6C0 6.19891 0.0846619 6.38968 0.235361 6.53033C0.38606 6.67098 0.590451 6.75 0.803571 6.75H5.625V11.25C5.625 11.4489 5.70966 11.6397 5.86036 11.7803C6.01106 11.921 6.21545 12 6.42857 12C6.64169 12 6.84608 11.921 6.99678 11.7803C7.14748 11.6397 7.23214 11.4489 7.23214 11.25V6.75H12.0536C12.2667 6.75 12.4711 6.67098 12.6218 6.53033C12.7725 6.38968 12.8571 6.19891 12.8571 6C12.8571 5.80109 12.7725 5.61032 12.6218 5.46967C12.4711 5.32902 12.2667 5.25 12.0536 5.25Z"
              fill="#FE5F00"
            />
          </svg>
          Добавить
        </button>
      );
    case "collet":
      return (
        <button
          onClick={() => {
            if (Func) {
              Func();
            } else {
              push("/");
            }
          }}
          className={`${ButtonConfig[Variant][Size]} ${
            Status == true && "cursor-not-allowed"
          }`}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 10.625L1 14.125C1 14.6082 1.39175 15 1.875 15L5.375 15C5.85825 15 6.25 14.6082 6.25 14.125L6.25 10.625C6.25 10.1418 5.85825 9.75 5.375 9.75L1.875 9.75C1.39175 9.75 1 10.1418 1 10.625Z"
              stroke="#FE5F00"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1 1.875L1 5.375C1 5.85825 1.39175 6.25 1.875 6.25L5.375 6.25C5.85825 6.25 6.25 5.85825 6.25 5.375L6.25 1.875C6.25 1.39175 5.85825 1 5.375 1L1.875 1C1.39175 1 1 1.39175 1 1.875Z"
              stroke="#FE5F00"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.75 10.625L9.75 14.125C9.75 14.6082 10.1418 15 10.625 15L14.125 15C14.6082 15 15 14.6082 15 14.125L15 10.625C15 10.1418 14.6082 9.75 14.125 9.75L10.625 9.75C10.1418 9.75 9.75 10.1418 9.75 10.625Z"
              stroke="#FE5F00"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.75 3.625L15 3.625M12.375 6.25L12.375 1L12.375 6.25Z"
              stroke="#FE5F00"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Собрать
        </button>
      );
  }
};
