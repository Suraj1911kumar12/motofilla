import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home'
import Vendor from '../pages/Vendor';
import Users from '../pages/user/Users';
import UserDetails from '../pages/user/UserDetails';
import UserReport from '../pages/Report/UserReport';
import BookingReport from '../pages/Report/BookingReport';
import ParkingReport from '../pages/Report/ParkingReport';
import PaymentBookingReports from '../pages/payments/PaymentBookingReports';
import PaymentParkingReports from '../pages/payments/PaymentParkingReports';
import ParkingList from '../pages/parkingManagement/ParkingList';
import ParkingBookings from '../pages/parkingManagement/ParkingBookings';
import ParkingFacilities from '../pages/parkingManagement/ParkingFacilities';
import Brands from '../pages/parkingManagement/vehicleSettings/Brands';
import Modals from '../pages/parkingManagement/vehicleSettings/Modals';
import Authorities from '../pages/authorities/Authorities';
import Settings from '../pages/globalSettings/Settings';
import PaymentMethod from '../pages/globalSettings/PaymentMethod';
import HeaderTempate from '../pages/globalSettings/HeaderTempate';
import FooterTemplate from '../pages/globalSettings/FooterTemplate';
import PrivacyPolicy from '../pages/globalSettings/PrivacyPolicy';
import TermsAndConditions from '../pages/globalSettings/TermsAndConditions';
import LandingPageTemplate from '../pages/globalSettings/LandingPageTemplate';
import TransactionReport from '../pages/Report/TransactionReport';


import AdminCommission from '../pages/globalSettings/AdminCommission';
import NotFound from '../pages/NotFound';
import Profile from '../pages/Profile';
import ProtectedRoute from './ProtectedRoute';
import VendorsListForm from '../pages/VendorsListForm';
import AddBrand from '../pages/parkingManagement/vehicleSettings/AddBrand';
import EditBrand from '../pages/parkingManagement/vehicleSettings/EditBrand';
import AddModals from '../pages/parkingManagement/vehicleSettings/AddModals';

const PageRoutes = () => {

    const [isUser, SetIsUser] = useState(false)


    return (
        <Routes>
            <Route element={<ProtectedRoute />}>

                <Route path="/" element={<Home />} />
                <Route path="/vendor" element={<Vendor />} />
                <Route path="/vendorlistform" element={<VendorsListForm />} />
                <Route path="/user" element={<Users />} />
                <Route path='/profile' element={<Profile />} />
                <Route path="/user/userdetail" element={<UserDetails />} />
                <Route path="/report/userreport" element={<UserReport />} />
                <Route path="/report/bookingreport" element={<BookingReport />} />
                <Route path="/report/parkingreport" element={<ParkingReport />} />
                <Route path="/parkingList" element={<ParkingList />} />
                <Route path="/parkingBookings" element={<ParkingBookings />} />
                <Route path="/parkingFacilities" element={<ParkingFacilities />} />
                <Route path="/authorities" element={<Authorities />} />
                <Route path="/vehicleSettings/brand" element={<Brands />} />
                <Route path="/vehicleSettings/brand/:id" element={<EditBrand />} />
                <Route path="/vehicleSettings/brand/create" element={<AddBrand />} />

                <Route path="/vehicleSettings/modal" element={<Modals />} />
                <Route path="/vehicleSettings/modal/create" element={<AddModals />} />

                <Route path="/globalsetting/settings" element={<Settings />} />
                <Route
                    path="/globalsetting/paymentMethod"
                    element={<PaymentMethod />}
                />
                <Route
                    path="/globalsetting/headerTemplate"
                    element={<HeaderTempate />}
                />
                <Route
                    path="/globalsetting/footerTemplate"
                    element={<FooterTemplate />}
                />
                <Route
                    path="/globalsetting/privacyPolicy"
                    element={<PrivacyPolicy />}
                />
                <Route
                    path="/globalsetting/termsAndConditions"
                    element={<TermsAndConditions />}
                />
                <Route
                    path="/globalsetting/landingPageTemplate"
                    element={<LandingPageTemplate />}
                />
                <Route
                    path="/globalsetting/adminCommission"
                    element={<AdminCommission />}
                />
                <Route
                    path="/payment/bookingReport"
                    element={<PaymentBookingReports />}
                />
                <Route
                    path="/payment/ParkingReport"
                    element={<PaymentParkingReports />}
                />
                <Route
                    path="/report/transactionreport"
                    element={<TransactionReport />}
                />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    )
}

export default PageRoutes

