import VisaApplicationController from './VisaApplicationController'
import Admin from './Admin'

const Controllers = {
    VisaApplicationController: Object.assign(VisaApplicationController, VisaApplicationController),
    Admin: Object.assign(Admin, Admin),
}

export default Controllers