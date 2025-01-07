
import { CategoryBox } from "@/components/shared/category/category";
import { Logo } from "@/components/shared/logo/logo";
import { Button } from "@/components/UI/button/button";
import { Header_input, Input, Price_input } from "@/components/UI/input/input";
import { Select } from "@/components/UI/select/select";
import { useCallback, useEffect, useRef } from "react";
import { Notifications } from "@/components/shared/notification/notification";
import { useNotification } from "@/context/notification";


export default function Home() {

  return (
    <>
<Logo/>
<Button variant='user' status={false} size="default"/>

<Notifications/>
    </>
  );
}
