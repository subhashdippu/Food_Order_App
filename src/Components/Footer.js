import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 xl;px-24 py-10 px-4 text-base-content">
                <aside>
                    <img src="https://cdni.iconscout.com/illustration/premium/thumb/food-delivery-boy-4047433-3351728.png" width={100} height={100} alt="" />
                    <p className="my-5 md:w-40">
                        FoodApp
                        <br />
                        Providing reliable tech and food since 1992
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <footer className="footer footer-center p-4 px-24 py-10  bg-base-300 text-base-content">
                <aside>
                    <p>Copyright © 2024 - All right reserved by FoodApp Ltd</p>
                </aside>
            </footer>
        </div>
    )
}

export default Footer