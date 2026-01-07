export type OnlineService = {
  id: number;
  name: string;
  online: string;
  logo: string; // path under /public
};

export const oneservices: OnlineService[] = [
  {
    id: 0,
    name: "UberEats",
    online: "https://www.order.store/store/el-faro/WzM9BLY9Xnugvft3qtEN7Q",
    logo: "/ubereats.png",
  },
];

export const twoservices: OnlineService[] = [
  {
    id: 2,
    name: "UberEats",
    online: "https://www.order.store/store/el-faro-%232/McE3SRgqQHuW8oRkODe6CQ",
    logo: "/ubereats.png",
  },
];
