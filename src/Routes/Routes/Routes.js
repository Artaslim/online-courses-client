import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog/Blog";
import Courses from "../../Pages/Courses/Courses/Courses";
import Faq from "../../Pages/FAQ/FAQ/Faq";
import Item from "../../Pages/Shared/Item/Item";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/item",
        element: <Item></Item>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);
