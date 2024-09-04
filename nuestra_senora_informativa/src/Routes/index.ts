import React from 'react';

export const Main = React.lazy(() => import('../Pages/MainPage/MainPage'));
export const Donation = React.lazy(() => import('../Pages/DonationPage/DonationPage'));
export const Galery = React.lazy(() => import('../Pages/GaleryPage/GaleryPage'));
export const Volunteer = React.lazy(() => import('../Pages/VolunteerPage/VolunteerPage'));
export const Registration = React.lazy(() => import('../Pages/RegistrationPage/Registration'));