export type NavbarItem = {
    id_Nav_It: number;         
    title_Nav: string;         
    urlNav: string;             
    order_Item_Nav: number;     
    isActive: boolean;         
    children: NavbarItem[];     
  };