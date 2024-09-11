import { useRoutes } from "react-router-dom";
// useRoutes 的返回值要么是一个有效的 React 元素（可以使用它来渲染路由树），如果没有匹配项，则返回 null。
const routes = useRoutes([
  { path: "/", element: <Home /> },
  {
    path: "/invoices",
    element: <Invoices />,
    children: [
      { path: ":id", element: <Invoice /> },
      { path: "/pending", element: <Pending /> },
      { path: "/complete", element: <Complete /> },
    ],
  },
]);

export default function App() {
  return (
    <div>
      <Navbar />
      {routes}
    </div>
  );
}
