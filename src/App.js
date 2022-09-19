import { Route, Switch } from "react-router-dom";
import About from "./components/About/About";
import HomePage from "./pages/HomePage";
import NavMain from "./components/navbar/NavMain";
import Footer from "./components/Footer/footer";
import Login from "./components/Register/Login";
import Signup from "./components/Register/SignUp";
import ForgotPassword from "./components/Register/ForgotPassword";
import Page404 from "./components/404_page/Page404.jsx";
import Contact from "./components/Contact/Contact.jsx";
import AddNewCategory from "./components/ProjectCategories/AddNewCategory";
import CategoryList from "./components/ProjectCategories/CategoryList";
import UpdateCategory from "./components/ProjectCategories/UpdateCateg";

import AdminRoute from "./components/navbar/ProtectedRoutes/AdminRoute";
import PrivateProtectRoute from "./components/navbar/ProtectedRoutes/PrivateProtectRoute";
import UploadProject from "./components/Posts/CreateProject";
import UploadPaper from "./components/Posts/CreatePublication";
import AllProjects from "./components/Posts/AllProjects";
import AllPaper from "./components/Posts/AllPaper";
import AddNewPaperCategory from "./components/PaperCategory/AddNewCategory";
import PaperCategoryList from "./components/PaperCategory/CategoryList";
import PaperUpdateCategory from "./components/PaperCategory/UpdateCateg";

import ProjectDetails from "./components/Posts/ProjectDetails";
import UpdateProject from "./components/Posts/UpdateProject";
import UserProfile from "./components/Profile/userProfile";
import UploadProfilePhoto from "./components/Profile/UploadProfilePhoto";

import AddNewCourseCategory from "./components/CourseCategory/AddNewCategory";
import CourseCategoryList from "./components/CourseCategory/CategoryList";
import CourseUpdateCategory from "./components/CourseCategory/UpdateCateg";

import UploadCourse from "./components/Posts/CreateCourse";
import AllCourses from "./components/Posts/AllCourse";

import UpdateProfile from "./components/Profile/UpdateProfile";

import PaperDetails from "./components/Posts/PaperDetails";
import CourseDetails from "./components/Posts/CourseDetails";
import SendMail from "./components/Profile/SendEmail";
import UsersList from './components/UsersList/UsersList'
import AccountVerified from './components/AccountVerification/AccountVerified'
import ResetPassword from './components/Register/ResetPassword'

function App() {
  return (
    <div>
      <NavMain />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/allcourses" component={AllCourses} />
        <Route exact path="/Signup" component={Signup} />
        <Route exact path="/ForgotPassword" component={ForgotPassword} />
        <AdminRoute exact path="/allusers" component={UsersList} />
        <AdminRoute
          exact
          path="/update-category/:id"
          component={UpdateCategory}
        />
        <PrivateProtectRoute
        exact
        path="/verify-account/:token"
        component={AccountVerified}
      />
      <Route exact path="/reset-password/:token" component={ResetPassword} />

        <AdminRoute
          exact
          path="/update-paper-category/:id"
          component={PaperUpdateCategory}
        />
        <AdminRoute exact path="/addNewCategory" component={AddNewCategory} />
        <AdminRoute exact path="/upload_course" component={UploadCourse} />
        <AdminRoute
          exact
          path="/addpaper_category"
          component={AddNewPaperCategory}
        />
        <AdminRoute exact path="/category-list" component={CategoryList} />
        <AdminRoute
          exact
          path="/papercategory-list"
          component={PaperCategoryList}
        />
        <PrivateProtectRoute
          exact
          path="/upload-project"
          component={UploadProject}
        />
        <PrivateProtectRoute
          exact
          path="/upload-paper"
          component={UploadPaper}
        />
        <PrivateProtectRoute exact path="/projects" component={AllProjects} />
        <PrivateProtectRoute exact path="/papers" component={AllPaper} />
        <Route exact path="/project/:id" component={ProjectDetails} />
        <Route exact path="/paper/:id" component={PaperDetails} />
        <Route exact path="/course/:id" component={CourseDetails} />
        <PrivateProtectRoute
          exact
          path="/update-project/:id"
          component={UpdateProject}
        />
        <PrivateProtectRoute
          exact
          path="/profile/:id"
          component={UserProfile}
        />
        <PrivateProtectRoute
          exact
          path="/upload-photo/:id"
          component={UploadProfilePhoto}
        />

        <AdminRoute
          exact
          path="/addCourse_category"
          component={AddNewCourseCategory}
        />
        <AdminRoute
          exact
          path="/Course_category-list"
          component={CourseCategoryList}
        />
        <AdminRoute
          exact
          path="/update-course-category/:id"
          component={CourseUpdateCategory}
        />
        <PrivateProtectRoute
          exact
          path="/profile-update"
          component={UpdateProfile}
        />
        <PrivateProtectRoute exact path="/send_mail" component={SendMail} />
        <Route component={Page404} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
