import React from 'react';
import { AuthContext } from '@/context/AuthProvider';
import { UserIcon } from './UserIcon'; // Assuming you have a component to display user icon/avatar

export const Profile = () => {
    const { token } = React.useContext(AuthContext);

    return (
        <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4">User Profile</h2>
            <UserIcon /> {/* Assuming you have a component to display user icon/avatar */}
            <div className="mt-4">
                <p className="font-bold">Username:</p>
                <p>{userData.username}</p>
            </div>
            <div className="mt-2">
                <p className="font-bold">Email:</p>
                <p>{userData.email}</p>
            </div>
            <div className="mt-4">
                <h3 className="text-xl font-bold">User Recipes</h3>
                {userRecipes.map(recipe => (
                    <div key={recipe.id} className="bg-gray-200 p-4 mt-2">
                        <p className="font-bold">{recipe.title}</p>
                        <p>{recipe.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
