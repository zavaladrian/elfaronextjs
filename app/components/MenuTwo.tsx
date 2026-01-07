import MenuClient from "@/app/components/menu/MenuClient";
import { menuTwo } from "@/app/data/menu-two";

import OrderOnline from "@/app/components/orderonline/OrderOnline";
import { twoservices } from "@/app/components/orderonline/onlineservices";

export default function MenuTwo() {
  return (
    <>
      <MenuClient config={menuTwo} />
      {/* <OrderOnline services={twoservices} /> */}
    </>
  );
}
