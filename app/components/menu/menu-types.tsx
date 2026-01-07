export type MenuItem = {
  food: string;
  description?: string;
  price: string; // keep string because you have "11.99+" and "2.50, $4.50"
};

export type MenuCategory = {
  id: string;       // e.g. "Breakfast"
  title: string;    // display
  items: MenuItem[];
};

export type MenuConfig = {
  heading: string;        // "Check Out Our Menu"
  subheading: string;     // "El Faro 1" / "El Faro 2"
  categories: MenuCategory[];
};
