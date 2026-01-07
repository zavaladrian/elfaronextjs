import MenuClient from "@/app/components/menu/MenuClient";
import { menuOne } from "@/app/data/menu-one";
import OrderOnline from "@/app/components/orderonline/OrderOnline";
import { oneservices } from "@/app/components/orderonline/onlineservices";

export default function MenuOne() {
  return (
    <>
      <MenuClient config={menuOne} />
      {/* <OrderOnline services={oneservices} /> */}
    </>
  );
}
