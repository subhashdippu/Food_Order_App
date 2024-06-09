import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { FaFacebook, FaGoogle, FaMicrosoft } from "react-icons/fa";
const Signup = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)
    return (
        <div className="max-w-md bg-white shadow w-full mx-auto text-center justify-center my-20 rounded-2xl">
            <div className="modal-action flex flex-col justify-center ">
                <form className="card-body" method="dialog" onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="font-bold text-lg text-center">Create a account</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required {...register("email")} />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required {...register("password")} />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>

                    {/* Signup button */}
                    <div className="form-control mt-6">
                        <input type="submit" value="SignUp" className="btn bg-blue text-white" />
                    </div>
                    {/* close btn */}
                    <Link
                        to="/"
                        className="btn btn-sm btn-circle btn-ghost absolute "
                    >
                        ✕
                    </Link>
                    <p className="text-center my-2">Already have an account? {" "}
                        <button className="underline text-red ml-2" onClick={() => document.getElementById('my_modal_5').showModal()}>Login!</button>{" "}
                    </p>
                </form>
                {/* Social meadia signin */}
                <div className="text-center">
                    <button className="btn btn-circle hover:bg-blue text-black m-4">
                        <FaGoogle />
                    </button>
                    <button className="btn btn-circle hover:bg-blue text-black m-4">
                        <FaMicrosoft />
                    </button>
                    <button className="btn btn-circle hover:bg-blue text-black m-4">
                        <FaFacebook />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Signup