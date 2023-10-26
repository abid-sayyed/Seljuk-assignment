import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const UserRegistrationForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const [data, setData] = useState({});

    // Form submission handler
    const onSubmit = (data) => {
        setData(data);
        alert("Success");
    };

    // Validation rules
    const validationRules = {
        name: {
            required: 'Name is required',
        },
        email: {
            required: 'Email is required',
            pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Invalid email address',
            },
        },
        password: {
            required: 'Password is required',
            minLength: {
                value: 6,
                message: 'Password must be at least 6 characters',
            },
        },
        'confirm-password': {
            required: 'Confirm Password is required',
            validate: (val) => {
                if (watch('password') !== val) {
                    return "Your passwords do not match";
                }
            },
        },
    };

    return (
        <div className="container mx-auto py-8 ">
            <div className="w-96 max-w-sm mx-auto bg-white p-8 rounded-md shadow-md ">
                <h1 className="text-2xl font-bold mb-6 text-left">Registration Form</h1>
                <p className="pb-3">Register your account here</p>

                <div className="relative flex py-1 items-center">
                    <div className="flex-grow border-t border-gray-400"></div>
                    <span className="flex-shrink mx-4 text-gray-400">O</span>
                    <div className="flex-grow border-t border-gray-400"></div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                            Email
                        </label>
                        <input
                            {...register('email', validationRules.email)}
                            type="email"
                            id="email"
                            name="email"
                            placeholder="john@example.com"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                        />
                        {errors.email && (
                            <span className="text-red-500 text-xs">{errors.email.message}</span>
                        )}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                            Username
                        </label>
                        <input
                            {...register('name', validationRules.name)}
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Username"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                        />
                        {errors.name && (
                            <span className="text-red-500 text-xs">{errors.name.message}</span>
                        )}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                            Password
                        </label>
                        <input
                            {...register('password', validationRules.password)}
                            type="password"
                            id="password"
                            name="password"
                            placeholder="********"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                        />
                        {errors.password && (
                            <span className="text-red-500 text-xs">{errors.password.message}</span>
                        )}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="confirm-password" className="block text-gray-700 text-sm font-bold mb-2">
                            Confirm Password
                        </label>
                        <input
                            {...register('confirm-password', validationRules['confirm-password'])}
                            type="password"
                            id="confirm-password"
                            name="confirm-password"
                            placeholder="********"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                        />
                        {errors['confirm-password'] && (
                            <span className="text-red-500 text-xs">
                                {errors['confirm-password'].message}
                            </span>
                        )}
                    </div>
                    <button
                        className="w-full bg-red-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-red-500 transition duration-300"
                        type="submit"
                    >
                        Register
                    </button>
                    <div className="relative flex py-1 items-center">
                        <div className="flex-grow border-t border-gray-400"></div>
                        <span className="flex-shrink mx-4 text-gray-400">O</span>
                        <div className="flex-grow border-t border-gray-400"></div>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default UserRegistrationForm;
