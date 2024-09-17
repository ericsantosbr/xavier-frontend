import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import EditStudent from "../../pages/EditStudent/EditStudent";

const router = createBrowserRouter([
  {
    path: '/',
    element: <>Hello from the router</>
  }
]);
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/">
//       hello
//       <Route path='editStudent' element={EditStudent}></Route>
//     </Route>
//   )
// )

export default function MainPageContent () {
    return (
      <>
        Hello from MainPageContent
        <RouterProvider router={router} />
      </>
    );
}