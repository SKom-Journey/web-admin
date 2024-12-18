export const CATEGORY = {
   GetCategories: () => '/categories',
   CreateCategories: () => '/categories',
   UpdateCategory: (category_id: string) => `/categories/${category_id}`,
   DeleteCategory: (category_id: string) => `/categories/${category_id}`,
}