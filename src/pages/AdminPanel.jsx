import React from 'react';
import { Link } from 'react-router-dom';

// Icons
import { FaClipboardList } from 'react-icons/fa';
import { RiBuildingFill, RiDashboardFill } from 'react-icons/ri';
import { IoMdPeople, IoMdPerson } from 'react-icons/io';

// Components
import TableComp from '../components/TableComp';
import AdminHeader from '../components/AdminHeader';
import { CardComp2, CardComp3, CardComp4 } from '../components/CardComp';

import { vendors, users } from '../components/list';


const AdminPanel = () => {
    const vendor = vendors.map((vendor, index) => {
        return (
            <CardComp4
                key={index}
                {...vendor}
            />

        )
    });

    const user = users.map((user, index) => {
        return (
            <CardComp3
                key={index}
                {...user}
            />
        )
    })
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse sticky-top">
                        <div className="position-sticky text-center">
                            <Link to="#" className="navbar-brand fs-1 fw-bold text-dark" href="#">PEX</Link>
                            <div className="d-flex align-items-start mt-3">
                                <div className="nav flex-column nav-pills mx-auto" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    <button className="nav-link rounded-pill text-start mb-2 active" id="v-pills-dashboard-tab" data-bs-toggle="pill" data-bs-target="#v-pills-dashboard" type="button" role="tab" aria-controls="v-pills-dashboard" aria-selected="true"> <RiDashboardFill /> Dashboard </button>
                                    <button className="nav-link rounded-pill text-start mb-2" id="v-pills-orders-tab" data-bs-toggle="pill" data-bs-target="#v-pills-orders" type="button" role="tab" aria-controls="v-pills-orders" aria-selected="false"> <FaClipboardList /> Orders </button>
                                    <button className="nav-link rounded-pill text-start mb-2" id="v-pills-customers-tab" data-bs-toggle="pill" data-bs-target="#v-pills-customers" type="button" role="tab" aria-controls="v-pills-customers" aria-selected="false"> <IoMdPeople /> Customers </button>
                                    <button className="nav-link rounded-pill text-start mb-2" id="v-pills-vendors-tab" data-bs-toggle="pill" data-bs-target="#v-pills-vendors" type="button" role="tab" aria-controls="v-pills-vendors" aria-selected="false"> <RiBuildingFill /> Vendors </button>
                                    <button className="nav-link rounded-pill text-start mb-2" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false"> <IoMdPerson /> Profile </button>
                                </div>
                            </div>
                        </div>
                    </nav>

                    <main className="col-md-9 ms-sm-auto col-lg-10 bg-light">

                        <div className="d-flex align-items-start">
                            <div className="tab-content" id="v-pills-tabContent">
                                <div className="tab-pane fade show active" id="v-pills-dashboard" role="tabpanel" aria-labelledby="v-pills-dashboard-tab">
                                    <div className="container-fluid">
                                        <AdminHeader />
                                        <div className="row">
                                            <div className="col-md-9">
                                                <div className="row">
                                                    <div className="col-4">
                                                        <CardComp2 />
                                                    </div>
                                                    <div className="col-4">
                                                        <CardComp2 />
                                                    </div>
                                                    <div className="col-4">
                                                        <CardComp2 />
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="h-100 p-3 bg-white border-0 shadow rounded">
                                                            <div className="row">
                                                                <div className="col"><h3>Recent Orders</h3></div>
                                                                <div className="col text-end"><button className="btn btn-warning rounded-pill px-4">View all</button></div>
                                                            </div>
                                                            <TableComp />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="col-12">
                                                    <div className="h-100 p-5 bg-white border-0 shadow rounded-3">
                                                        <h2>Add borders</h2>

                                                        <button className="btn btn-outline-secondary" type="button">Example button</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="v-pills-orders" role="tabpanel" aria-labelledby="v-pills-orders-tab">
                                    <AdminHeader />
                                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link rounded-pill active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Pending</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link rounded-pill" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Fulfilled</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link rounded-pill" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Cancelled</button>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="pills-tabContent">
                                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                            <div className="container">
                                                <div className="row g-4">
                                                    <div className="col-3">
                                                        <CardComp2 />
                                                    </div>
                                                    <div className="col-3">
                                                        <CardComp2 />
                                                    </div>
                                                    <div className="col-3">
                                                        <CardComp2 />
                                                    </div>
                                                    <div className="col-3">
                                                        <CardComp2 />
                                                    </div>
                                                    <div className="col-3">
                                                        <CardComp2 />
                                                    </div>
                                                    <div className="col-3">
                                                        <CardComp2 />
                                                    </div>
                                                    <div className="col-3">
                                                        <CardComp2 />
                                                    </div>
                                                    <div className="col-3">
                                                        <CardComp2 />
                                                    </div>
                                                    <div className="col-3">
                                                        <CardComp2 />
                                                    </div>
                                                    <div className="col-3">
                                                        <CardComp2 />
                                                    </div>
                                                    <div className="col-3">
                                                        <CardComp2 />
                                                    </div>
                                                    <div className="col-3">
                                                        <CardComp2 />
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                            <div className="container">
                                                <div className="row g-4">
                                                    <div className="col-3">
                                                        <CardComp2 />
                                                    </div>
                                                    <div className="col-3">
                                                        <CardComp2 />
                                                    </div>
                                                    <div className="col-3">
                                                        <CardComp2 />
                                                    </div>
                                                    <div className="col-3">
                                                        <CardComp2 />
                                                    </div>
                                                    <div className="col-3">
                                                        <CardComp2 />
                                                    </div>
                                                    <div className="col-3">
                                                        <CardComp2 />
                                                    </div>
                                                    <div className="col-3">
                                                        <CardComp2 />
                                                    </div>
                                                    <div className="col-3">
                                                        <CardComp2 />
                                                    </div>
                                                    <div className="col-3">
                                                        <CardComp2 />
                                                    </div>
                                                    <div className="col-3">
                                                        <CardComp2 />
                                                    </div>
                                                    <div className="col-3">
                                                        <CardComp2 />
                                                    </div>
                                                    <div className="col-3">
                                                        <CardComp2 />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                                            <div className="container">
                                                <div className="row g-4">
                                                    <div className="col-3">
                                                        <CardComp2 />
                                                    </div>
                                                    <div className="col-3">
                                                        <CardComp2 />
                                                    </div>
                                                    <div className="col-3">
                                                        <CardComp2 />
                                                    </div>
                                                    <div className="col-3">
                                                        <CardComp2 />
                                                    </div>
                                                    <div className="col-3">
                                                        <CardComp2 />
                                                    </div>
                                                    <div className="col-3">
                                                        <CardComp2 />
                                                    </div>
                                                    <div className="col-3">
                                                        <CardComp2 />
                                                    </div>
                                                    <div className="col-3">
                                                        <CardComp2 />
                                                    </div>
                                                    <div className="col-3">
                                                        <CardComp2 />
                                                    </div>
                                                    <div className="col-3">
                                                        <CardComp2 />
                                                    </div>
                                                    <div className="col-3">
                                                        <CardComp2 />
                                                    </div>
                                                    <div className="col-3">
                                                        <CardComp2 />
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="v-pills-customers" role="tabpanel" aria-labelledby="v-pills-customers-tab">
                                    <div className="container">
                                        <AdminHeader />
                                        <div className="row g-4">
                                            {user}
                                        </div>

                                    </div>
                                </div>
                                <div className="tab-pane fade" id="v-pills-vendors" role="tabpanel" aria-labelledby="v-pills-vendors-tab">
                                    <AdminHeader />
                                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link rounded-pill active" id="pills-verified-tab" data-bs-toggle="pill" data-bs-target="#pills-verified" type="button" role="tab" aria-controls="pills-verified" aria-selected="true">Verified</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link rounded-pill" id="pills-unverified-tab" data-bs-toggle="pill" data-bs-target="#pills-unverified" type="button" role="tab" aria-controls="pills-unverified" aria-selected="false">Unverified</button>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="pills-tabContent">
                                        <div className="tab-pane fade show active" id="pills-verified" role="tabpanel" aria-labelledby="pills-verified-tab">
                                            <div className="container">
                                                <div className="row">
                                                    {vendor}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="pills-unverified" role="tabpanel" aria-labelledby="pills-unverified-tab">
                                            <div className="container">
                                                <div className="row">
                                                    {vendor}
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                    <div className="container-fluid">
                                        <AdminHeader />

                                        <div class="container">
                                            <div className="h-100 px-4 py-2 bg-light shadow rounded-3">
                                                <div className="row">
                                                    <div className="col">
                                                        <h4>Admin Details</h4>
                                                    </div>
                                                   <div className="col text-end">
                                                        <Link to="#">Edit Details</Link>
                                                   </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <div>
                                                            <p className="text-muted m-0">Display Name</p>
                                                            <p>PEX Delivery Service</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div>
                                                            <p className="text-muted m-0">Business Email</p>
                                                            <p>Pexdelivery@admin.com</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div>
                                                            <p className="text-muted m-0">Business Phone</p>
                                                            <p>09023156478</p>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="col-6">
                                                        <div>
                                                            <p className="text-muted m-0">Business Address</p>
                                                            <p>no 2 Aknefa Drive Yenagoa</p>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default AdminPanel
