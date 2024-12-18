export const MENU = {
   CreateMenu: () => `/menus`,
   GetMenus: () => '/menus/all',
   UpdateMenu: (menu_id: string) => `/menus/${menu_id}`,
   DeleteMenu: (menu_id: string) => `/menus/${menu_id}`,
   GetMenuById: (menu_id: string) => `/menus/${menu_id}`,
   GetMenuOutsideCategory: (category_id: string) => `/menus/outside-categories/${category_id}`,
   GetMenuByCategoryId: (category_id: string) => `/menus/categories/${category_id}`,
}