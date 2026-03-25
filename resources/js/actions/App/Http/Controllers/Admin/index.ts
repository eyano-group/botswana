import Auth from './Auth'
import DashboardController from './DashboardController'
import ApplicationController from './ApplicationController'
import UserController from './UserController'

const Admin = {
    Auth: Object.assign(Auth, Auth),
    DashboardController: Object.assign(DashboardController, DashboardController),
    ApplicationController: Object.assign(ApplicationController, ApplicationController),
    UserController: Object.assign(UserController, UserController),
}

export default Admin