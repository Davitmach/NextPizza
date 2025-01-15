import { useNotification } from "@/context/notification";
import { userService } from "@/service/userService";
import { useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useRef, useState } from "react";
import { BigLoading } from "../loading/loading";
import { useRouter } from "next/navigation";

export const Code = () => {
  const query = useQueryClient();
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [allFilled, setAllFilled] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const { showNotification } = useNotification();
  const { back } = useRouter();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const target = e.target;

    // Allow only numeric input
    target.value = target.value.replace(/\D/, "");

    // Handle pasting
    if (target.value.length > 1) {
      const pastedValue = target.value.split("");
      pastedValue.forEach((char, i) => {
        if (inputRefs.current[index + i] && index + i < inputRefs.current.length) {
          inputRefs.current[index + i]!.value = char;
        }
      });

      // Focus on the next empty input
      const nextIndex = index + pastedValue.length;
      if (inputRefs.current[nextIndex]) {
        inputRefs.current[nextIndex]?.focus();
      }

      checkAllFilled();
      return;
    }

    // Handle single character input
    if (target.value && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1]?.focus();
    } else if (!target.value && inputRefs.current[index - 1]) {
      inputRefs.current[index - 1]?.focus();
    }

    checkAllFilled();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && inputRefs.current[index]?.value === "") {
      if (inputRefs.current[index - 1]) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const checkAllFilled = () => {
    const allInputsFilled = inputRefs.current.every(
      (input) => input?.value.trim() !== ""
    );
    setAllFilled(allInputsFilled);
  };

  useEffect(() => {
    if (allFilled) {
      const allValues = inputRefs.current.map((input) => input?.value || "").join("");
      userService.Verif(allValues, query).then((e) => {
        if (e.Token) {
          setLoading(false);
          back();
          showNotification("Вы успешно вошли в систему", "success");
          
        }
       
      }).catch((e)=> {
        inputRefs.current.map((e) => {
          if (e) {
            e.style.borderColor = 'red'
            setLoading(false)
            setTimeout(() => {
              e.style.borderColor ='rgba(237, 237, 237, 1)'
            }, 2000);
          }
        });
        
      });
      inputRefs.current.map((e) => {
        if (e) {
          e.style.borderColor = 'green'
        }
      });
      setLoading(true);
    }
  }, [allFilled]);

  return (
    <div className="flex w-full gap-[15px] justify-center">
      {loading === true && <BigLoading />}
      {Array(6)
        .fill("")
        .map((_, index) => (
          <input
            key={index}
            ref={(el:any) => (inputRefs.current[index] = el)}
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={6}
            type="text"
            className="text-center w-[45px] h-[45px] rounded-[10px] bg-transparent border border-gray-cartBorder outline-none flex items-center justify-center"
            onChange={(e) => handleInput(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        ))}
    </div>
  );
};
